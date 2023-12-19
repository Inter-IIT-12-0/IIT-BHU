import { getSession } from "next-auth/react";
import connectDb from "../../../middlewares/mongoose";
import User from "../../../models/User";
import Team from "../../../models/Team";

const handler = async (req, res) => {
    if (req.method === 'GET') {
        const session = await getSession({ req });
        if (!session) {
            return res.status(403).json({ error: 'Login First' });
        }
        const id = session.user._id;
        const role = session.user.role;


        try {
            if (role === 'Client') {
                const user = await User.findOne({ _id: id })
                    .populate({
                        path: 'projects',
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
                res.status(200).json(user.projects);
            } else {
                const teams = await Team.find({ 'status': 'Accepted', 'teamUserMap.user': id })
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
                    res.status(200).json(teams.map(team => team.project));
            }
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Error retrieving user projects' });
        }
    } else {
        res.status(405).json({ error: 'Method Not Allowed' });
    }
};

export default connectDb(handler);
