// models/project.js
import mongoose from 'mongoose';
import Team from './Team';

const statusEnum = ['Todo', 'In Progress', 'Completed']
const appsEnum = [('Figma', 'http://figma.com'),]
const toolsEnum = ["Engineering", "Design"]

const workSchema = new mongoose.Schema({
  fileType: {
    type: String,
    enum: ['file', 'link']
  },
  link: {
    type: String,
    required: () => {
      return this.fileType == 'link'
    }
  },
  file: {
    type: Buffer,
    required: () => {
      return this.fileType == 'file'
    }
  }
})


const clientRequirementsSchema = new mongoose.Schema({
  paymentType: {
    type: String,
    enum: ['Fixed', 'Installment']
  },
  workDays: { type: [String] },
  requiredTools: { type: [String] },
  files: { type: [Buffer] }
})

const activitySchema = new mongoose.Schema({
  submilestone : { type: mongoose.Schema.Types.ObjectId, ref: 'SubMilestone' },
  type: {type: ["CREATE", "EDIT", "DELETE", "Message"], required: true},
  timestamp: { type: Date, required: true},
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  message: {type: String}
})

const subMilestoneSchema = new mongoose.Schema({
  title: { type: String, required: true },
  isCompleted: { type: Boolean, default: false },
  status: {type: String, enum: statusEnum},
  dueDate: {type: Date, required: true},
  assignedTo: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  description: { type: String, required: true},
  startDate: { type: Date},
  endDate: { type: Date },
  Aitools: [toolsEnum],
  connectedApps: {type: [appsEnum]},
  work: {type: workSchema},
  stickyNotes: {type: [String]}
});

// Schema for Milestones
const milestoneSchema = new mongoose.Schema({
  dueDate: { type: Date, required: true },
  heading: { type: String, required: true },
  submissionLink: { type: String },
  feedbackLink: { type: String },
  subMilestones: [subMilestoneSchema],
  isCompleted: { type: Boolean, default: false },
  status: { type: String, enum: statusEnum, default: 'Not Started' },
});

// Subschema for User Agreement
const userAgreementSchema = new mongoose.Schema({
  // Define user agreement fields as needed
});

//TODO: Health
const healthSchema = new mongoose.Schema({
  progress: {
    type: Int,
    default: 0
  }
});

// Main Schema for Project
const projectSchema = new mongoose.Schema({
  title: { type: String, required: true },
  statement: { type: String, required: true },
  milestones: [milestoneSchema],
  userAgreement: userAgreementSchema,
  assignedTeam: { type: mongoose.Schema.Types.ObjectId, ref: 'Team' },
  assignedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User'},
  logo: {type: String},
  health: healthSchema,
  startDate: { type: Date},
  endDate: { type: Date },
  activity: [activitySchema],
  clientRequirements: clientRequirementsSchema
});

// Create and export the model
const Project = mongoose.model('Project', projectSchema);

export default Project;
