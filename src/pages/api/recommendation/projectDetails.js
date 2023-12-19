// API to collect keywords related to all projects
import connectDb from "../../../../middlewares/mongoose";
import Project from "../../../../models/Project";

const handler = async (req, res) => {
    switch (req.method) {
        case "GET":
            try {
                const uniqueDomains = await Project.distinct("domain");
                const uniqueTools = await Project.distinct(
                    "clientRequirements.requiredTools"
                );

                const allUniqueKeywords = [...uniqueDomains, ...uniqueTools];

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