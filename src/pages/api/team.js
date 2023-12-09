// Import necessary modules and schemas
import connectDb from "../../../middlewares/mongoose";
import Team from "../../../models/Team";

const handler = async (req, res) => {
  if (req.method === 'POST') {
    try {
      const team = new Team(req.body);
      const savedTeam = await team.save();
      res.status(201).json(savedTeam);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: `Error creating team` + error });
    }
  } else if (req.method === 'GET') {
    try {
      const teams = await Team.find({"_id":req.query.id}, '-__v')
        .populate('proposal', '-__v')
        .populate({
            path: 'teamUserMap.user',
            model: 'User',
            select: '-__v -role -fees -sectorName -companyName -aiTools -aiToolsLimit'
        });

      res.status(200).json(teams);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error retrieving teams' });
    }
  } else if (req.method === 'PATCH') {
    const { teamId } = req.query;

    if (!teamId) {
      res.status(400).json({ error: 'Team ID is required for update' });
      return;
    }

    try {
      const updatedTeam = await Team.findByIdAndUpdate(
        teamId,
        { $set: req.body },
        { new: true }
      )
      .populate('teamUserMap.user', '-role -fees -projects -aiTools -aiToolsLimit');

      if (!updatedTeam) {
        res.status(404).json({ error: 'Team not found' });
        return;
      }

      res.status(200).json(updatedTeam);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error updating team' });
    }
  } else if (req.method === 'DELETE') {
    const { teamId } = req.query;

    if (!teamId) {
      res.status(400).json({ error: 'Team ID is required for deletion' });
      return;
    }

    try {
      const deletedTeam = await Team.findByIdAndDelete(teamId);

      if (!deletedTeam) {
        res.status(404).json({ error: 'Team not found' });
        return;
      }

      res.status(200).json({ message: 'Team deleted successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error deleting team' });
    }
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
};

export default connectDb(handler);
