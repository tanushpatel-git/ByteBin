import mongoose from "mongoose";


const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required : true
    },
    email:{
        type:String,
        required : true,
        unique : true
    },
    password:{
        type:String,
    },
    navyCode:{
        type:String,
        default:""
    },
    role:{
        type:String,
        enum:["merchant","navy","coastguard"],
        default:"coastguard"
    },
    merchantCode:{
        type:String,
        required : true,
        unique : true
    }
}, {timestamps : true});

export const User = mongoose.models.User || mongoose.model("User", userSchema)

