import { getSession } from "next-auth/react";
import connectDb from "../../../middlewares/mongoose";
import User from "../../../models/User";

const handler = async (req, res) => {
    const session = await getSession({ req });
    console.log(session)
    if (!session) {
        return res.status(403).json({ error: 'Login First' });
    }
    const userId = session.user._id;
    if (req.method === "POST") {
        const {name, image} = req.body;
        const user = await User.findOne({_id: userId})
        .select('aiTools aiToolsLimit')
        let presentAiTools = user.aiTools
        if (presentAiTools.length >= user.aiToolsLimit) {
            return res.status(403).json({ error: "AiTools exceeded. Go to Arcade to unlock more!" });
        }
        const toolExists = presentAiTools.filter(tool => tool.name === name)
        if(toolExists) {
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
        res.status(200).json(user)
    }
};

export default connectDb(handler);
