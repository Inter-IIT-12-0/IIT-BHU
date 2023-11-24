import connectDb from "../../../middlewares/mongoose.js";

const handler = (req, res) => {
    console.log("Hello");
    res.status(200).json({ message: "Hello, Next.js API!" });
};

export default connectDb(handler);