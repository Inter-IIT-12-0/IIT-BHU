// import { getSession } from "next-auth/react";
import connectDb from "../../../../middlewares/mongoose";
import User from "../../../../models/User";
import { authOptions } from "../../../app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";

const handler = async (req, res) => {
    const session = await getServerSession(req, res, authOptions);
    if (!session) {
        return res.status(403).json({ error: 'Login First' });
    }
    const userId = session.user._id;
    if (req.method === "DELETE") {
        const {name} = req.query
        let user = await User.findOne({_id: userId})
        .select('aiTools aiToolsLimit')
        let presentAiTools = user.aiTools
        const toolsExist = presentAiTools.filter(tool => tool.name === name)
        if(toolsExist.length === 0) {
            return res.status(400).json({
                error: "Tool does not exist"
            })
        }
        const toolAfterDeletion = presentAiTools.filter(tool => tool.name !== name)
        user.aiTools = toolAfterDeletion
        await user.save()
        res.status(200).json(user)
    }
};

export default connectDb(handler);
