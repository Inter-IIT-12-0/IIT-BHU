import connectDb from "../../../middlewares/mongoose";
import User from "../../../models/User";

connectDb();

const handler = async (req, res) => {
  if (req.method === 'PUT' || req.method === 'PATCH') {

    const { userId, teamId, teamName } = req.body;
    try {
      const user = await User.findById(userId);

      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }
      let existingInvite
      if (user.invites) {
        existingInvite = user.invites.filter(invite => String(invite.id) === teamId);
        if (existingInvite.length !== 0) {
          return res.status(400).json({ error: 'Project already in invites' });
        }
      }
      user.invites = []
      user.invites.push({ id: teamId, name: teamName });
      await user.save();

      return res.status(200).json({ message: 'Invite added successfully' });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Internal Server Error' });
    }
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
};

export default connectDb(handler);
