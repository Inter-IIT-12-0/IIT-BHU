// API to collect keywords of all the users
import connectDb from "../../../../middlewares/mongoose";
import User from "../../../../models/User";

const handler = async (req, res) => {
  switch (req.method) {
    case "GET":
      try {
        const uniqueDomains = await User.distinct("domain");

        const allUniqueKeywords = [
          ...uniqueDomains
        ];

        // Remove any null or undefined values
        const filteredUniqueKeywords = allUniqueKeywords.filter(
          (value) => value
        );

        res.status(200).json(filteredUniqueKeywords);
      } catch (error) {
        console.error("Error fetching unique keywords:", error);
        throw error;
      }
      break;
  }
};

export default connectDb(handler);
