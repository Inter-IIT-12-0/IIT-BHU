// Import necessary modules and schemas
import connectDb from "../../../middlewares/mongoose";
import University from "../../../models/University";

const handler = async (req, res) => {
  switch (req.method) {
    case 'POST':
      try {
        const university = new University(req.body);
        const savedUniversity = await university.save();
        
        res.status(201).json(savedUniversity);
      } catch (error) {
        console.error(error); 
        res.status(500).json({ error: 'Error creating university' });
      }
      break;

      case 'GET':
        try {
          if (req.query.id) {
            const university = await University.find({ "_id": req.query.id }, '-_id -__v').populate('members', '-__v').populate('professors', '-__v').populate('projects', '-__v').populate('alumni','-__v').populate('student','-__v').populate({
              path:'labs',
              populate: {
                path: 'projects',
                model: 'Project'
              }
            })
            .populate({
              path: 'labs',
              populate: {
                path: 'projects',
                populate: {
                  path: 'assignedBy',
                  model: 'User'
                }
              }
            })
            res.status(200).json(university);
          }
        } catch (error) {
          console.error(error);
          res.status(500).json({ error: 'Error retrieving university' });
        }
        break;

    case 'PUT':
      try {
        const { universityId } = req.query;

        if (!universityId) {
          res.status(400).json({ error: 'University ID is required for update' });
          return;
        }

        const updatedUniversity = await University.findByIdAndUpdate(
          universityId,
          { $set: req.body },
          { new: true }
        );

        if (!updatedUniversity) {
          res.status(404).json({ error: 'University not found' });
          return;
        }

        res.status(200).json(updatedUniversity);
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error updating university' });
      }
      break;

    default:
      res.status(405).json({ error: 'Method Not Allowed' });
  }
};

export default connectDb(handler);
