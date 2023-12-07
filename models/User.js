const mongoose = require("mongoose");

const LanguageEnum = ['English', 'Spanish', 'French', 'German'];
const DomainEnum = ['UX/UI Designer', 'Developer', 'Product Management'];
const RoleEnum = ['Student', 'Client'];
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
    mobileNumber: { type: String },
    email: { type: String, unique: true, required: true },
    tagline: { type: String },
    workExperienceYears: { type: Number },
    workExperienceMonths: { type: Number },
    professionalIntroduction: { type: String },
    domain: { type: String, enum: DomainEnum },
    role: { type: String, enum: RoleEnum },
    languages: [{ type: String, enum: LanguageEnum }],
    companyName: { type: String },
    sectorName: { type: String },
    institute: { type: String },
    occupation: { type: String },
    currentAddress: {
        streetAddress: { type: String },
        houseNumber: { type: String },
        zipCode: { type: String },
        country: { type: String },
        state: { type: String },
        city: { type: String }
    },
    educationDetails: [EducationSchema],
    expertise: {
        tools: [{ type: String }],
        certificates: [{ type: String }],
        skills: [{ type: String }]
    },
    preferredTimeZone: { type: String },
    daysAvailable: { type: String, enum: ['Weekdays', 'Weekends'] },
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
    lastLogin: { type: Date },
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
