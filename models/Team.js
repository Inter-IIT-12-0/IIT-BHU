import mongoose from 'mongoose';
import { subMilestoneSchema } from './Project';

const serviceEnum = ['Service1', 'Service2', 'Service3', 'Service4', 'Service5'];
const skillsEnum = ['Skill1', 'Skill2', 'Skill3', 'Skill4', 'Skill5'];
const toolsEnum = ['Tool1', 'Tool2', 'Tool3', 'Tool4', 'Tool5'];
const languagesEnum = ['English', 'French', 'Spanish', 'German', 'Other'];

const milestoneSchema = new mongoose.Schema({
  cost: {type: Number},
  duration: {type: Number},
  files: {type: String},
  title: { type: String },
  description: { type: String },
  deliverables: { type: String },
  submilestones: [subMilestoneSchema]
});

const proposalSchema = new mongoose.Schema({
  proposalScore: { type: Number },
  acceptanceProbability: { type: Number },
  bidAmount: { type: Number },
  startDate: { type: Date },
  milestones: [milestoneSchema]
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
    enum: ['Approved','Pending']
  }
});

const teamSchema = new mongoose.Schema({
  teamName: {
    type: String,
  },
  proposal: proposalSchema,
  teamUserMap: [teamUserMap],
  project: { type: mongoose.Schema.Types.ObjectId, ref: 'Project', required: true },
  status: { type: String, enum: ['In Proposal', 'Pending', 'Accepted', 'Reviewed'], default: 'In Proposal' },
  rating: {type: Number}
});

const Team =  mongoose.models.Team || mongoose.model("Team", teamSchema);

export default Team;
