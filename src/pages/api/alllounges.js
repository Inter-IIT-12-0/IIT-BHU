import connectDb from "../../../middlewares/mongoose";
import Lounge from "../../../models/Lounge";

const handler = async (req, res) => {
  if (req.method === 'GET') {
    try {
      const lounges = await Lounge.find()
        .populate({
          path: 'currentMembers',
          select: 'name avatarUrl',
        })
        .exec();

      res.status(200).json(lounges);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error retrieving lounges' });
    }
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
};

export default connectDb(handler);
