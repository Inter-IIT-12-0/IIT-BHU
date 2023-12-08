const mongoose = require("mongoose");

const LanguageEnum = ['English', 'Spanish', 'French', 'German'];
const DomainEnum = ['UX/UI Designer', 'Developer', 'Product Management'];
const RoleEnum = ['Student', 'Client', 'Professor'];
const DaysEnum = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
const statusEnum = ['certified', 'Incomplete']
import Project from "./Project";

const EducationSchema = new mongoose.Schema({
    nameOfCollegeOrUniversity: { type: String },
    degree: { type: String }
});

const SocialMediaSchema = new mongoose.Schema({
    description: { type: String },
    url: { type: String }
});

const aiToolsSchema = new mongoose.Schema({
    name: { type: String, unique: true },
    image: { type: String }
})

const AchievementSchema = new mongoose.Schema({
    badgeImage:{ type: String },
    badgeName:{ type: String },
    status:{ type: String, enum:statusEnum }
})

const EarningStatsSchema = new mongoose.Schema({
    image:{ type: String },
    name:{ type: String },
    data:{ type: Number }
})

const UserSchema = new mongoose.Schema({
    name: { type: String },
    avatarUrl: { type: String },
    email: { type: String, unique: true, required: true },
    domain: { type: [String], enum: DomainEnum, default: [] },
    role: { type: String, enum: RoleEnum },
    companyName: { type: String },
    sectorName: { type: String },
    institute: { type: String },
    expertise: {
        tools: [{ type: String }],
        certificates: [{ type: String }],
        skills: [{ type: String }]
    },
    preferredTimeZone: { type: String },
    availableDays: { type: [{ type: String, enum: DaysEnum }] },
    startTime: { type: String },
    endTime: { type: String },
    fees: {
        preferredCurrency: { type: String },
        hourlyRate: { type: Number }
    },
    socialMedia: [SocialMediaSchema],
    projects: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Project'
    }],
    paymentsCompleted: { type: Number, default: 0 },
    projectsPosted: { type: Number, default: 0 },
    rating: { type: Number, default: 0 },
    skillRating: { type: Number, default: 0},
    collabRating: { type: Number, default: 0 },
    numberOfFeedbacks: { type: Number },
    aiTools: [aiToolsSchema],
    aiToolsLimit: { type: Number, default: 3 },
    achievements: [AchievementSchema],
    earningStats: [EarningStatsSchema]
}, { timestamps: true });

export default mongoose.models.User || mongoose.model("User", UserSchema);
