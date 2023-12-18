import connectDb from "../../../middlewares/mongoose";
import User from "../../../models/User";
import Team from "../../../models/Team";
import { getSession } from "next-auth/react";

const handler = async (req, res) => {
    const session = await getSession({req});
    if (req.method === "PUT" || req.method === "PATCH") {
        const {teamId} = req.query
        let user = await User.findById(session.user._id)
        let invite = session?.user.invites.filter(inv => inv.id === teamId)[0]
        if (invite === undefined) {
            return res.status(404).json({error: 'Invite Not found'})
        }

        let team = await Team.findById(teamId)
        let teamUserMapNew = team.teamUserMap.map(map => {
            if (String(map.user) === session.user._id) {
                let newMap = map
                newMap.status = 'Approved'
                return newMap
            } 
            return map
        })
        team.teamUserMap = teamUserMapNew
        await team.save()

        let newInvites = user.invites
        newInvites = newInvites.filter(inv => invite.id !== teamId)
        user.invites = newInvites
        await user.save()
        return res.status(200).json(team)

    } else if (req.method === 'DELETE') {

        const {teamId} = req.query
        let user = await User.findById(session.user._id)
        let invite = session?.user.invites.filter(inv => inv.id === teamId)[0]
        if (invite === undefined) {
            return res.status(404).json({error: 'Invite Not found'})
        }
        let team = await Team.findById(teamId)
        let teamUserMapNew = team.teamUserMap.filter(map => String(map.user) !== session.user._id)
        team.teamUserMap = teamUserMapNew
        await team.save()

        let newInvites = user.invites
        newInvites = newInvites.filter(inv => String(inv.id) !== teamId )
        user.invites = newInvites
        await user.save()

        return res.status(200).json(team)
    } else {
        res.status(405).json({ error: 'Method Not Allowed' });
    }
};

export default connectDb(handler);
