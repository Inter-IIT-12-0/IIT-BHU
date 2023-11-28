// Import necessary modules and schemas
import connectDb from "../../../../../middlewares/mongoose";
import Project from "../../../../../models/Project";

export const GET = connectDb(async (req, res) => {
  const { userId } = req.query;

  if (!userId) {
    res.status(400).json({ error: 'User ID is required' });
    return;
  }

  try {
    const projects = await Project.find({ 'assignedTeam.users': userId }, '-_id -__v')
      .populate({
        path: 'assignedTeam',
        select: '-_id -__v',
        populate: {
          path: 'users',
          select: '-_id -__v'
        }
      });

    res.status(200).json(projects);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error retrieving projects for the user' });
  }
});

