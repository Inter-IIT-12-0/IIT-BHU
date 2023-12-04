const mongoose = require("mongoose");
import User from "./User";
import Project from "./Project";
const TypeEnum =['Engineering','Medical','Agriculture'];
const UniversitySchema = new mongoose.Schema({
    name: { type: String },
    type:{type:String,enum:TypeEnum},
    members:[{type: mongoose.Schema.Types.ObjectId,
        ref: 'User'}],
    professors:[{type: mongoose.Schema.Types.ObjectId,
            ref: 'User'}],
    labcount:{type:Number},
    address:{type:String},
    description:{type:String},
    domains:{type:String},
    sector:{type:String},
    followers:{type:Number},
    projects:[{type: mongoose.Schema.Types.ObjectId,
        ref: 'Project'}],
    about:{type:String},
    profileUrl:{type:String},
    backgroundUrl:{type:String}
}, { timestamps: true });

export default mongoose.models.University || mongoose.model("University", UniversitySchema);
