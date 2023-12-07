import { getSession } from "next-auth/react";
import connectDb from "../../../middlewares/mongoose";
import User from "../../../models/User";

const handler = async (req, res) => {
    if (req.method === 'GET') {
        const session = await getSession({ req });
        if (!session) {
            return res.status(403).json({ error: 'Login First' });
        }
        const id = session.user._id;

        try {
            const user = await User.findOne({ _id: id })
                .populate({
                    path: 'projects',
                    select: '_id title startDate endDate',
                    populate: [
                        {
                            path: 'assignedTeam',
                            select: "-_id -teamName -teamTagline -teamIntroduction -service -languagesSupported -tools -skills -availability -teamUrl -proposal ",
                            populate: {
                                path: 'teamUserMap.user',
                                select: '_id avatarUrl',
                            },
                        },]
                    //     {
                    //         path: 'assignedBy',
                    //         select: 'name',
                    //     },
                    //     {
                    //         path: 'milestones',
                    //         match: {
                    //             status: { $ne: 'Completed' },
                    //         },
                    //         options: {
                    //             sort: { dueDate: 1 },
                    //             limit: 1,
                    //         },
                    //     }
                    // ],
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
