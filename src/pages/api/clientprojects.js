// Import necessary modules and schemas
import { getSession } from "next-auth/react";
import connectDb from "../../../middlewares/mongoose";
import Project from "../../../models/Project";

const handler = async (req, res) => {
    if (req.method === 'GET') {
        const session = await getSession({ req });

        if (!session) {
            return res.status(403).json({ error: 'Login First' });
        }

        const clientId = session.user._id;

        try {
            const projects = await Project.find({ 'assignedBy': clientId }, '-__v')
                .populate({
                    path: 'assignedTeam',
                    select: '-__v',
                    populate: {
                        path: 'teamUserMap',
                        select: '-__v -email -role -fees -sectorName -companyName -aiTools -aiToolsLimit'
                    }
                })
                .populate({
                    path: 'assignedBy',
                    select: '-__v -email -role -fees -projects -aiTools -aiToolsLimit'
                })

            res.status(200).json(projects);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Error retrieving projects for the user' });
        }
    } else {
        res.status(405).json({ error: 'Method Not Allowed' });
    }
};

export default connectDb(handler);
