import { NextApiHandler, NextApiRequest, NextApiResponse } from "next";
import mongoose from "mongoose";

const connectDb = (handler: NextApiHandler<unknown>) => async (
    req: NextApiRequest,
    res: NextApiResponse
): Promise<unknown> => {
    try {
        if (mongoose.connections[0].readyState) {
            return handler(req, res);
        }

        await mongoose.connect(process.env.MONGO_URI as string);

        console.log("Connected to Db");
        return handler(req, res);
    } catch (error) {
        console.error("Error connecting to the database:", error);
        res.status(500).json({ error: "An error occurred while connecting to the database" });
    }
};

export default connectDb;
