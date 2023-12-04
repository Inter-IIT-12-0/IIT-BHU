// Import necessary modules and schemas
import connectDb from "../../../middlewares/mongoose";
import University from "../../../models/University";

const handler = async (req, res) => {
  if (req.method === 'GET') {
    try {
      const university = await University.find({}, '-__v')
      res.status(200).json(university);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error retrieving universities' });
    }
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
};

export default connectDb(handler);
