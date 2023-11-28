import connectDb from "../../../middlewares/mongoose";
import User from "../../../models/User";

const handler = async (req, res) => {
  if (req.method === 'GET') {
    const { userId } = req.query;

    if (!userId) {
      res.status(400).json({ error: 'User ID is required' });
      return;
    }

    try {
      const user = await User.findOne({ _id: userId }).populate({
        path: 'projects',
        select: '-_id -__v',
        populate: {
          path: 'assignedTeam',
          select: '-_id -__v',
          populate: {
            path: 'teamUserMap.user',
            select: '-_id -__v'
          }
        },
        populate:{
          path:'assignedBy',
          select:'-_id -__v',
        }

      });

      if (!user) {
        res.status(404).json({ error: 'User not found' });
        return;
      }

      res.status(200).json(user.projects);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error retrieving user projects' });
    }
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
};

export default connectDb(handler);
