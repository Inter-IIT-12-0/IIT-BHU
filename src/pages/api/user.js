// Import necessary modules and schemas
import connectDb from "../../../middlewares/mongoose";
import User from "../../../models/User";

const handler = async (req, res) => {
  switch (req.method) {
    case 'POST':
      try {
        const user = new User(req.body);
        const savedUser = await user.save();
        res.status(201).json(savedUser);
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error creating user' });
      }
      break;

      case 'GET':
        try {
          // Check if a specific user ID is provided in the query
          if (req.query.id) {
            console.log("hello");
            const users = await User.find({ "_id": req.query.id }, '-_id -__v');
            res.status(200).json(users);
          } else {
            // If no specific user ID, fetch all users
            
            const allUsers = await User.find({}, '-__v');
            res.status(200).json(allUsers);
          }
        } catch (error) {
          console.error(error);
          res.status(500).json({ error: 'Error retrieving users' });
        }
        break;

    case 'PUT':
      try {
        const { userId } = req.query;

        if (!userId) {
          res.status(400).json({ error: 'User ID is required for update' });
          return;
        }

        const updatedUser = await User.findByIdAndUpdate(
          userId,
          { $set: req.body },
          { new: true }
        );

        if (!updatedUser) {
          res.status(404).json({ error: 'User not found' });
          return;
        }

        res.status(200).json(updatedUser);
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error updating user' });
      }
      break;

    default:
      res.status(405).json({ error: 'Method Not Allowed' });
  }
};

export default connectDb(handler);
