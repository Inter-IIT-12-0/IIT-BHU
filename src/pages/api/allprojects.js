import connectDb from "../../../middlewares/mongoose";
import Project from "../../../models/Project";

const handler = async (req, res) => {
  if (req.method === 'GET') {
    try {
        const projects = await Project.find({status: { $in: ['In Review', 'Open'] }}, 'title statement status domain clientRequirements location duration startDate endDate postedOn')
        .populate({
          path: 'assignedBy',
          select: 'name rating socialMedia domain comapnyName paymentsCompleted avatarUrl projectsPosted'
        })
        ;
  
        res.status(200).json(projects);
      // }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error retrieving projects' });
    }
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
};

export default connectDb(handler);
