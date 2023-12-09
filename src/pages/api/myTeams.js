import { getSession } from "next-auth/react";
import connectDb from "../../../middlewares/mongoose";
import Team from "../../../models/Team";

const handler = async (req, res) => {
    if (req.method === 'GET') {
        const session = await getSession({ req });
        if (!session) {
            return res.status(403).json({ error: 'Login First' });
        }
        const userId = session.user._id;
        const teams = await Team.find({'teamUserMap.user': userId});
        return res.status(200).json(teams);
    } else {
        res.status(405).json({ error: 'Method Not Allowed' });
    }
};

export default connectDb(handler);
