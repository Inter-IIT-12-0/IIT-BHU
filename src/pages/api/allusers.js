// Import necessary modules and schemas
import connectDb from "../../../middlewares/mongoose";
import User from "../../../models/User";

const handler = async (req, res) => {
  if (req.method === 'GET') {
    try {
      const people = await User.find({}, '-__v')
        console.log(people);
      res.status(200).json(people);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error retrieving people' });
    }
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
};

export default connectDb(handler);
