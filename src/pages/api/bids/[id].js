// Import necessary modules and schemas
import { getSession } from "next-auth/react";
import connectDb from "../../../../middlewares/mongoose";
import Team from "../../../../models/Team";
import Project from "../../../../models/Project";
import mongoose from "mongoose";

const handler = async (req, res) => {
    const session = await getSession({ req });

    if (!session) {
        return res.status(403).json({ error: 'Login First' });
    }

    const clientId = session.user._id;
    if(req.method === 'GET') {
        const {id} = req.query
        console.log(id)
        const project = await Project.findById(id)
        console.log(project)
        const teams = await Team.find({project: id, 
            status: { $in: ['Pending', 'Reviewed'] }
        })
        .populate('proposal', '-__v')
        .populate('teamUserMap.user', '-fees -projects -aiTools -aiToolsLimit');
        return res.status(200).json({
            teams,
            projectTitle: project.title
        })

    }
};

export default connectDb(handler);
