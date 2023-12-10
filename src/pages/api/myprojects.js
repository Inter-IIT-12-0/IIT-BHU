import { getSession } from "next-auth/react";
import connectDb from "../../../middlewares/mongoose";
import User from "../../../models/User";
import Team from "../../../models/Team";

const handler = async (req, res) => {
    if (req.method === 'GET') {
        const session = await getSession({ req });
        if (!session) {
            return res.status(403).json({ error: 'Login First' });
        }
        const id = session.user._id;
        const role = session.user.role;

        console.log("the data that I wanted is:",id,role);

        try {
            // const user = await User.findOne({ _id: id })
            //     .populate({
            //         path: 'projects',
            //         select: '_id title startDate endDate domain postedOn',
            //         populate: [
            //             {
            //                 path: 'assignedTeam',
            //                 select: "-_id -teamName -teamTagline -teamIntroduction -service -languagesSupported -tools -skills -availability -teamUrl -proposal ",
            //                 populate: {
            //                     path: 'teamUserMap.user',
            //                     select: 'avatarUrl',
            //                 },
            //             },
            //             {
            //                 path: 'assignedBy',
            //                 select: 'name',
            //             },
            //             {
            //                 path: 'milestones.heading milestones.dueDate',
            //             }
            //         ],
            //     });
            if (role === 'Client') {
                const user = await User.findOne({ _id: id })
                    .populate({
                        path: 'projects',
                        select: '-__v',
                        populate: [
                            {
                                path: 'assignedTeam',
                                select: '-__v',
                                populate: {
                                    path: 'teamUserMap.user',
                                    select: '-__v -role -fees -sectorName -companyName -aiTools -aiToolsLimit'
                                }
                            },
                            {
                                path: 'assignedBy',
                                select: '-email -role -fees -projects -aiTools -aiToolsLimit',
                            }
                        ]
                    });
                res.status(200).json(user.projects);
            } else {
                console.log(id)
                const teams = await Team.find({ 'status': 'Accepted', 'teamUserMap.user': id })
                .populate({
                    path: 'project',
                    select: '-__v',
                    populate: [
                        {
                            path: 'assignedTeam',
                            select: '-__v',
                            populate: {
                                path: 'teamUserMap.user',
                                select: '-__v -role -fees -sectorName -companyName -aiTools -aiToolsLimit'
                            }
                        },
                        {
                            path: 'assignedBy',
                            select: '-email -role -fees -projects -aiTools -aiToolsLimit',
                        }
                    ]
                });
                    console.log("teams are:",teams)
                    res.status(200).json(teams.map((team => team.project)));
            }
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Error retrieving user projects' });
        }
    } else {
        res.status(405).json({ error: 'Method Not Allowed' });
    }
};

export default connectDb(handler);
