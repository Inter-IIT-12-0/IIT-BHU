// Import necessary modules and schemas
import { getSession } from "next-auth/react";
import connectDb from "../../../middlewares/mongoose";
import Project from "../../../models/Project";

const handler = async (req, res) => {
  const session = await getSession({req})
  if (req.method === 'GET') {
    try {
      if (session) {
        const projects = await Project.find({status: { $in: ['In Review', 'Open'] }, assignedBy: {$ne: session.user?._id}}, '-__v').populate({
          path: 'assignedTeam',
          select: '-__v',
          populate: {
            path: 'teamUserMap.user',
            select: '-__v -role -fees -sectorName -companyName -aiTools -aiToolsLimit -earningStats -achievements'
          }
        })
        .populate({
          path: 'assignedBy',
          select: '-__v -email -role -fees -projects -aiTools -aiToolsLimit'
        })
        ;
  
        res.status(200).json(projects);
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error retrieving projects' });
    }
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
};

export default connectDb(handler);
