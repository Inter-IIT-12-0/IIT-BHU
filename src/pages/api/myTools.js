// import { getSession } from "next-auth/react";
import connectDb from "../../../middlewares/mongoose";
import User from "../../../models/User";
import { authOptions } from "../../app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";

const handler = async (req, res) => {
    const session = await getServerSession(req, res, authOptions);
    if (!session) {
        return res.status(403).json({ error: 'Login First' });
    }
    const userId = session.user._id;
    if (req.method === "POST") {
        const {name, image} = req.body;
        let user = await User.findOne({_id: userId})
        .select('aiTools aiToolsLimit')
        let presentAiTools = user.aiTools
        if (presentAiTools.length >= user.aiToolsLimit) {
            return res.status(400).json({ error: "AiTools exceeded. Go to Arcade to unlock more!" });
        }
        const toolsExist = presentAiTools.filter(tool => tool.name === name)
        if(toolsExist.length !== 0) {
            return res.status(400).json({
                error: "Tool already exists"
            })
        }
        presentAiTools.push({
            name,
            image
        })
        user.aiTools = presentAiTools
        await user.save()
        res.status(201).json(user)
    }
};

export default connectDb(handler);
