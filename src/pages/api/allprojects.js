// Import necessary modules and schemas
import connectDb from "../../../middlewares/mongoose";
import Project from "../../../models/Project";

const handler = async (req, res) => {
  if (req.method === 'GET') {
    try {
      const projects = await Project.find({}, '-__v').populate({
        path: 'assignedTeam',
        select: '-_id -__v',
        populate: {
          path: 'teamUserMap.user',
          select: '-_id -__v'
        }
      });

      res.status(200).json(projects);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error retrieving projects' });
    }
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
};

export default connectDb(handler);
