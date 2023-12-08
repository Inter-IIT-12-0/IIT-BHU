// Import necessary modules and schemas
import connectDb from "../../../middlewares/mongoose";
import User from "../../../models/User";


const handler = async (req, res) => {
  switch (req.method) {
    case 'POST':
      try {
        const user = new User(req.body);
        const savedUser = await user.save();
        res.status(201).json(savedUser);
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error creating user' });
      }
      break;

      case 'GET':
        try {
          // Check if a specific user ID is provided in the query
          if (req.query.id) {
            const userWithProjects = await User.findById(req.query.id)
                                                .populate({
                                                  path: 'projects',
                                                  populate: {
                                                    path: 'assignedBy',
                                                    model: 'User'
                                                  }
                                                })
                                                .populate({
                                                  path: 'projects',
                                                  populate: {
                                                    path: 'assignedTeam',
                                                    model: 'Team'
                                                  }
                                                })
                                                .populate({
                                                  path: 'projects',
                                                  populate: {
                                                    path: 'assignedTeam',
                                                    populate: {
                                                      path: 'teamUserMap.user',
                                                      model: 'User'
                                                    }
                                                  }
                                                })
                                                .select('-_id -__v -projectsPosted -paymentsCompleted -lastLogin  -socialMedia -fees -daysAvailable -preferredTimezone -educationDetails -currentAddress -workExperienceYears -workExperienceMonths');

          res.status(200).json(userWithProjects);
          } else {
            // If no specific user ID, fetch all users
            
            const allUsers = await User.find({}, '-__v');
            res.status(200).json(allUsers);
          }
        } catch (error) {
          console.error(error);
          res.status(500).json({ error: 'Error retrieving users' });
        }
        break;

    case 'PATCH':
      try {
        const { userId } = req.query;
        const { user_id, collabRating, skillRating } = req.body;

        if ((collabRating !== undefined || skillRating !== undefined) && (user_id !== undefined)) {
          // Case: Someone is giving feedback, update ratings
          console.log('collabRating:', collabRating);
          console.log('skillRating:', skillRating);
          
          const user = await User.findById(user_id);

          if (user.collabRating === undefined) {
            user.collabRating = 0; // Set a default value or handle as needed
          }
          
          if (user.skillRating === undefined) {
            user.skillRating = 0; // Set a default value or handle as needed
          }

          if (user.numberOfFeedbacks === undefined) {
            user.numberOfFeedbacks = 0; // Set a default value or handle as needed
          }
    
          if (!user) {
            res.status(404).json({ error: 'User not found' });
            return;
          }
    
          if (collabRating !== undefined && user.collabRating !== undefined) {
            user.collabRating = (user.collabRating * user.numberOfFeedbacks + collabRating) / (user.numberOfFeedbacks + 1);
          }
    
          if (skillRating !== undefined && user.skillRating !== undefined) {
            user.skillRating = (user.skillRating * user.numberOfFeedbacks + skillRating) / (user.numberOfFeedbacks + 1);
          }
          
          if(user.numberOfFeedbacks !== undefined){
            user.numberOfFeedbacks += 1;
          } else {
            user.numberOfFeedbacks = 1;
          }
    
          // Calculate average of collabRating and skillRating and update rating
          const totalRating = (user.collabRating + user.skillRating) / 4;
          user.rating = totalRating;
    
          // Save the changes
          await user.save();
    
          res.status(200).json(user);
        }

        if (!userId) {
          res.status(400).json({ error: 'User ID is required for update' });
          return;
        }

        const updatedUser = await User.findByIdAndUpdate(
          userId,
          { $set: req.body },
          { new: true }
        );

        if (!updatedUser) {
          res.status(404).json({ error: 'User not found' });
          return;
        }

        res.status(200).json(updatedUser);
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error updating user' });
      }
      break;

    default:
      res.status(405).json({ error: 'Method Not Allowed' });
  }
};

export default connectDb(handler);
