import { getSession } from "next-auth/react";
import connectDb from "../../../middlewares/mongoose";
import User from "../../../models/User";

const handler = async (req, res) => {
    if (req.method === 'GET') {
        // const { userId } = req.query;
        const session = await getSession({ req });

        if (!session) {
            return res.status(403).json({ error: 'Login First' });
        }

        const userId = session.user._id;

        try {
            const user = await User.findOne({ _id: userId })
                .populate({
                    path: 'projects',
                    select: '-__v',
                    populate: [
                        {
                            path: 'assignedTeam',
                            select: '-__v',
                            populate: {
                                path: 'teamUserMap.user',
                                select: '-__v'
                            }
                        },
                        {
                            path: 'assignedBy',
                            select: '-__v',
                        }
                    ]
                });
            
            if (!user) {
                res.status(404).json({ error: 'User not found' });
                return;
            }
            res.status(200).json(user.projects);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Error retrieving user projects' });
        }
    } else {
        res.status(405).json({ error: 'Method Not Allowed' });
    }
};

export default connectDb(handler);
