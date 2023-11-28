import connectDb from "../../../../middlewares/mongoose"
// import Project from "../../../../models/Project";

const handler = (req, res) => {
    res.json({user: req.user})
};

export const GET = connectDb(handler);