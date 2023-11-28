import connectDb from "../../../../middlewares/mongoose"
import Project from "../../../../models/Project";

const handler = async (req, res) => {
    if (req.method === 'POST') {
        try {
            const project = new Project(req.body);
            const savedProject = await project.save();
            res.status(201).json(savedProject);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Error creating project' });
        }
    } else {
        res.status(405).json({ error: 'Method Not Allowed' });
    }
};

export default connectDb(handler);