import connectDb from "../../../middlewares/mongoose";
import User from "../../../models/User";

const handler = async (req, res) => {
  if (req.method === 'PUT') {
    try {
      const { userId, lastLogin } = req.body;

      
      const updatedUser = await User.findByIdAndUpdate(
        userId,
        { lastLogin: lastLogin },
        { new: true }
      );

      if (updatedUser) {
        console.log("User's last login updated:", updatedUser);
        res.status(200).json({ success: "User's last login updated" });
      } else {
        res.status(404).json({ error: "User not found" });
      }
    } catch (error) {
      console.error("Error updating last login:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  } else {
    res.status(400).json({ error: "This method is not allowed" });
  }
};

export default connectDb(handler);
