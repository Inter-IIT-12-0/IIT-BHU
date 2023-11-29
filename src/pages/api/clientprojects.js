// Import necessary modules and schemas
import connectDb from "../../../middlewares/mongoose";
import Project from "../../../models/Project";

const handler = async (req, res) => {
    if (req.method === 'GET') {
        const { clientId } = req.query;

        if (!clientId) {
            res.status(400).json({ error: 'User ID is required' });
            return;
        }

        try {
            const projects = await Project.find({ 'assignedBy': clientId }, '-__v')
                .populate({
                    path: 'assignedTeam',
                    select: '-_id -__v',
                    populate: {
                        path: 'teamUserMap',
                        select: '-_id -__v'
                    }
                })
                .populate({
                    path: 'assignedBy'
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
