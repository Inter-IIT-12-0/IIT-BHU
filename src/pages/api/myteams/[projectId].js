import { getSession } from "next-auth/react";
import connectDb from "../../../../middlewares/mongoose";
import Team from "../../../../models/Team";

const handler = async (req, res) => {
    if (req.method === 'GET') {
        const session = await getSession({ req });
        if (!session) {
            return res.status(403).json({ error: 'Login First' });
        }
        const userId = session.user._id;
        const {projectId} = req.query 
        const teams = await Team.findOne({'teamUserMap.user': userId, 'project': projectId})
        .populate({
            path: 'project',
            select: '-__v',
            populate: {
                path: 'assignedBy',
                select: '-__v'
            }
        })
        .populate('teamUserMap.user', '-__v');
        return res.status(200).json(teams);
    } else {
        res.status(405).json({ error: 'Method Not Allowed' });
    }
};

export default connectDb(handler);
