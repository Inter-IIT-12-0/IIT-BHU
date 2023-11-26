// models/project.js
import mongoose from 'mongoose';
import Team from './Team';

const subMilestoneSchema = new mongoose.Schema({
  heading: { type: String, required: true },
  isCompleted: { type: Boolean, default: false },
});

// Schema for Milestones
const milestoneSchema = new mongoose.Schema({
  dueDate: { type: Date, required: true },
  heading: { type: String, required: true },
  submissionLink: { type: String },
  feedbackLink: { type: String },
  subMilestones: [subMilestoneSchema],
  isCompleted: { type: Boolean, default: false },
  status: { type: String, enum: ['Not Started', 'In Progress', 'Completed'], default: 'Not Started' },
});

// Subschema for User Agreement
const userAgreementSchema = new mongoose.Schema({
  // Define user agreement fields as needed
});

// Main Schema for Project
const projectSchema = new mongoose.Schema({
  title: { type: String, required: true },
  statement: { type: String, required: true },
  milestones: [milestoneSchema],
  userAgreement: userAgreementSchema,
  assignedTeam: { type: mongoose.Schema.Types.ObjectId, ref: 'Team' },
});

// Create and export the model
const Project = mongoose.model('Project', projectSchema);

export default Project;
