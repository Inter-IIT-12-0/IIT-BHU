import mongoose from 'mongoose';

const serviceEnum = ['Service1', 'Service2', 'Service3', 'Service4', 'Service5'];
const skillsEnum = ['Skill1', 'Skill2', 'Skill3', 'Skill4', 'Skill5'];
const toolsEnum = ['Tool1', 'Tool2', 'Tool3', 'Tool4', 'Tool5'];
const languagesEnum = ['English', 'French', 'Spanish', 'German', 'Other'];

const milestoneSchema = new mongoose.Schema({
  name: { type: String, required: true },
  deliverableDetails: { type: String, required: true },
  description: { type: String }
});

const proposalSchema = new mongoose.Schema({
  proposalScore: { type: Number },
  acceptanceProbability: { type: Number },
  bidAmount: { type: Number },
  startDate: { type: Date },
  milestones: [milestoneSchema],
  files: {
    type: [Buffer]
  }
});

const teamUserMap = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  role: {
    type: String,
    enum: ['Leader', 'Member']
  },
  status: {
    type: String,
    enum: ['Approved', 'Not Approved','Pending']
  }
});

const teamSchema = new mongoose.Schema({
  teamName: {
    type: String,
    // required: true
  },
  teamTagline: {
    type: String,
    maxlength: 60,
    // required: true
  },
  teamIntroduction: {
    type: String,
    maxlength: 500,
    // required: true
  },
  service: {
    type: [String],
    enum: serviceEnum,
    // required: true
  },
  languagesSupported: {
    type: [String],
    enum: languagesEnum,
    // required: true
  },
  tools: {
    type: [String],
    enum: toolsEnum,
    // required: true
  },
  skills: {
    type: [String],
    enum: skillsEnum,
    // required: true
  },
  availability: {
    preferredTimeZone: {
      type: String,
      // required: true
    },
    daysAvailable: {
      type: [String],
      enum: ['Weekdays', 'Weekends'],
      // required: true
    },
    startTime: {
      type: String,
      // required: true
    },
    endTime: {
      type: String,
      // required: true
    },
    whichDays: {
      type: [String],
      enum: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
      // required: true
    }
  },
  teamUrl: {
    type: String,
    // required: true
  },
  proposal: proposalSchema,
  teamUserMap: [teamUserMap],
  project: { type: mongoose.Schema.Types.ObjectId, ref: 'Project', required: true },
  status: { type: String, enum: ['In Proposal', 'Pending', 'Accepted', 'Reviewed'], default: 'In Proposal' },
  rating: {type: Number}
});

const Team =  mongoose.models.Team || mongoose.model('Team', teamSchema);

export default Team;
