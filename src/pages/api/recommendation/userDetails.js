import connectDb from "../../../../middlewares/mongoose";
import User from "../../../../models/User";

const handler = async (req, res) => {
  switch (req.method) {
    case "GET":
      try {
        const uniqueDomains = await User.distinct("domain");
        const uniqueRoles = await User.distinct("role");
        const uniqueTools = await User.distinct("expertise.tools");
        const uniqueCertificates = await User.distinct(
          "expertise.certificates"
        );
        const uniqueSkills = await User.distinct("expertise.skills");

        const allUniqueKeywords = [
          ...uniqueDomains,
          ...uniqueRoles,
          ...uniqueTools,
          ...uniqueCertificates,
          ...uniqueSkills,
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
