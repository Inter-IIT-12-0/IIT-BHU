import connectDb from "../../../middlewares/mongoose";
import Lounge from "../../../models/Lounge";

const handler = async (req, res) => {
  await connectDb();

  switch (req.method) {
    case 'GET':
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
      break;

    case 'POST':
      try {
        const { title, domains, slotsLeft, expiryDate, currentMembers } = req.body;
        const newLounge = new Lounge({ title, domains, slotsLeft, expiryDate, currentMembers });
        const savedLounge = await newLounge.save();

        res.status(201).json(savedLounge);
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error creating lounge' });
      }
      break;

    default:
      res.status(405).json({ error: 'Method Not Allowed' });
  }
};

export default connectDb(handler);
