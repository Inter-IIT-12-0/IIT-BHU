// Import necessary modules and schemas
import connectDb from "../../../middlewares/mongoose";
import Team from "../../../models/Team";

const handler = async (req, res) => {
  if (req.method === 'GET') {
    try {
      const teams = await Team.find({}, '-__v').
      populate('proposal', '-id -_v')
      .populate('teamUserMap.user', '-__v -email -role -fees -sectorName -companyName -aiTools -aiToolsLimit');
        console.log(teams);
      res.status(200).json(teams);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error retrieving people' });
    }
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
};

export default connectDb(handler);
