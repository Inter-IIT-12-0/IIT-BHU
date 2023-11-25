import connectDb from "../../../../middlewares/mongoose";
import Team from "../../../../../models/Team";
const handler = async (req, res) => {
  if (req.method === 'POST') {
    try {
      const {
        firstName,
        lastName,
        avatarUrl,
        mobileNumber,
        emailAddress,
        tagline,
        workExperienceYears,
        workExperienceMonths,
        professionalIntroduction,
        role,
        languages,
        currentAddress,
        educationDetails,
        expertise,
        preferredTimeZone,
        daysAvailable,
        availableDays,
        startTime,
        endTime,
        fees,
        socialMedia,
        lastLogin
      } = req.body;

      const newUser = new User({
        firstName,
        lastName,
        avatarUrl,
        mobileNumber,
        emailAddress,
        tagline,
        workExperienceYears,
        workExperienceMonths,
        professionalIntroduction,
        role,
        languages,
        currentAddress,
        educationDetails,
        expertise,
        preferredTimeZone,
        daysAvailable,
        availableDays,
        startTime,
        endTime,
        fees,
        socialMedia,
        lastLogin
      });

      await newUser.save();
      console.log("User successfully added");
      res.status(200).json({ success: "User successfully added" });
    } catch (error) {
      console.error("Error adding user:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  } else {
    res.status(400).json({ error: "This method is not allowed" });
  }
};

export default connectDb(handler);