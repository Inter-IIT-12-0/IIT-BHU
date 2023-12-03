// Import necessary modules and schemas
import connectDb from "../../../middlewares/mongoose";
import User from "../../../models/User";

const handler = async (req, res) => {
    if (req.method === 'GET') {
        try {
            const users = await User.find({}, '_id name email avatarUrl institute')
            res.status(200).json(users);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Error retrieving Users' });
        }
    } else {
        res.status(405).json({ error: 'Method Not Allowed' });
    }
};

export default connectDb(handler);
