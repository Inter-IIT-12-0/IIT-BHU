import connectDb from "../../../middlewares/mongoose";
import { getSession } from "next-auth/react";
import User from "../../../models/User";

connectDb();

const handler = async (req, res) => {
  if (req.method === 'DELETE') {
    const { teamId, userId } = req.query;
    try {
      const user = await User.findById(userId);

      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }
      const existingInviteIndex = user.invites.findIndex(invite => invite.id.toString() === teamId);

      if (existingInviteIndex === -1) {
        return res.status(400).json({ error: 'Project not found in invites' });
      }
      user.invites.splice(existingInviteIndex, 1);
      await user.save();

      return res.status(200).json({ message: 'Invite removed successfully' });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Internal Server Error' });
    }
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
};

export default connectDb(handler);
