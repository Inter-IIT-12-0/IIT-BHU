// Import necessary modules and schemas
import connectDb from "../../../../middlewares/mongoose";
import Project from "../../../../models/Project";

export const POST = connectDb(async (req, res) => {
  try {
    const project = new Project(req.body);
    const savedProject = await project.save();
    res.status(201).json(savedProject);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error creating project' });
  }
});

export const GET = connectDb(async (req, res) => {
  try {
    const projects = await Project.find({}, '-_id -__v')
      .populate({
        path: 'assignedTeam',
        select: '-_id -__v',
        populate: {
          path: 'users',
          select: '-_id -__v'
        }
      })
      .populate('assignedBy', '-_id -__v');
    res.status(200).json(projects);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error retrieving projects' });
  }
});