import mongoose from 'mongoose';

const statusEnum = ['In Progress', 'Completed','Not Started'];
const appsEnum = [('Figma', 'http://figma.com')];
const toolsEnum = ['Engineering', 'Design'];

const workSchema = new mongoose.Schema({
  fileType: {
    type: String,
    enum: ['file', 'link']
  },
  link: {
    type: String,
    required: function () {
      return this.fileType == 'link';
    }
  },
  file: {
    type: Buffer,
    required: function () {
      return this.fileType == 'file';
    }
  }
});

const clientRequirementsSchema = new mongoose.Schema({
  paymentType: {
    type: String,
    enum: ['Fixed', 'Installment']
  },
  payment: {
    type: Number
  },
  workDays: { type: [String] },
  requiredTools: { type: [String] },
  files: { type: [(String, Buffer)] }
});
const subMilestoneSchema = new mongoose.Schema({
  title: { type: String, required: true },
  isCompleted: { type: Boolean, default: false },
  status: { type: String, enum: statusEnum },
  dueDate: { type: Date, required: true },
  assignedTo: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  description: { type: String, required: true },
  startDate: { type: Date },
  endDate: { type: Date },
  Aitools: [toolsEnum],
  connectedApps: { type: [appsEnum] },
  work: { type: workSchema },
  stickyNotes: { type: [String] }
});

const activitySchema = new mongoose.Schema({
  submilestone:{ type: subMilestoneSchema},
  type: { type: String, enum: ['CREATE', 'EDIT', 'DELETE', 'Message'], required: true },
  timestamp: { type: Date, required: true },
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  message: { type: String }
});



const milestoneSchema = new mongoose.Schema({
  dueDate: { type: Date, required: true },
  heading: { type: String, required: true },
  description: { type: String },
  submissionLink: { type: String },
  feedbackLink: { type: String },
  subMilestones: [subMilestoneSchema],
  isCompleted: { type: Boolean, default: false },
  status: { type: String, enum: statusEnum, default: 'Not Started' },
  payment: { type: Number, required: true }
});

const userAgreementSchema = new mongoose.Schema({
  // Define user agreement fields as needed
});

const healthSchema = new mongoose.Schema({
  progress: {
    type: Number,
    default: 0
  }
});

const projectSchema = new mongoose.Schema({
  title: { type: String, required: true },
  statement: { type: String, required: true },
  milestones: [milestoneSchema],
  userAgreement: userAgreementSchema,
  assignedTeam: { type: mongoose.Schema.Types.ObjectId, ref: 'Team' },
  assignedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  logo: { type: String },
  health: healthSchema,
  startDate: { type: Date },
  endDate: { type: Date },
  activity: [activitySchema],
  clientRequirements: clientRequirementsSchema,
  work: workSchema,
  duration: { type: Number, required: true },
  domain: { type: String, required: true},
  postedOn: {type: Date, default: Date.now},
  status: {type: String, enum: ['Open', 'In Review'], default: 'In Review'},
  location: { type: String, required: true}
});

const Project = mongoose.models.Project || mongoose.model('Project', projectSchema);

export default Project;
