// Import necessary modules and schemas
import { getSession } from "next-auth/react";
import connectDb from "../../../middlewares/mongoose";
import Team from "../../../models/Team";

const handler = async (req, res) => {
    const session = await getSession({req})
    if (req.method === 'GET') {
        try {
            const teams = await Team.find({ 'teamUserMap.user':  session?.user._id, 'status': { $in: ['Pending', 'Reviewed'] }}, '-__v')
            .populate({
                path: 'project',
                select: '-__v',
                populate: [
                    {
                        path: 'assignedTeam',
                        select: '-__v',
                        populate: {
                            path: 'teamUserMap.user',
                            select: '-__v -role -fees -sectorName -companyName -aiTools -aiToolsLimit'
                        }
                    },
                    {
                        path: 'assignedBy',
                        select: '-email -role -fees -projects -aiTools -aiToolsLimit',
                    }
                ]
            });
            res.status(200).json(teams);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Error retrieving people' });
        }
    } else {
        res.status(405).json({ error: 'Method Not Allowed' });
    }
};

export default connectDb(handler);
