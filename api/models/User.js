import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
    first_name : {
        type : String,
        required : true,
        trim : true
    },
    sur_name:{
        type : String,
        required : true,
        trim : true
    },
    username:{
        type : String
    },
    secondary_name:{
        type : String,
        trim : true
    },
    email:{
        type : String,
        trim: true,
    },
    mobile:{
        type : String,
        trim: true
    },
    password:{
        type : String,
        required: true,
        trim: true
    },
    gender:{
        type : String,
        enum: ["Male", "Female", "Custom"],
        required: true
    },
    birth_date:{
        type : String,
        required: true
    },
    birth_month:{
        type : String,
        required: true
    },
    birth_year:{
        type : String,
        required: true
    },
    profile_photo:{
        type : String,
        default: null
    },
    cover_photo:{
        type : String,
        default: null
    },
    bio:{
        type : String,
        default : null
    },
    hobbies:{
        type : String,
        default : null
    },
    category:{
        type : String,
        default : null
    },
    school:{
        type : String,
        default : null
    },
    university:{
        type : String,
        default : null
    },
    work:{
        type : Array,
        default : []
    },
    living:{
        type : String,
        default : null
    },
    home_town:{
        type : String,
        default : null
    },
    relationShipStatus: {
        type: String,
        enum: ["Married","Single","In a relationship"]
    },
    joined : {
        type: Date
    },
    social : {
        type : Array,
        default : []
    },
    friends : {
        type : Array,
        default : []
    },
    followers: {
        type : Array,
        default : []
    },
    following: {
        type : Array,
        default : []
    },
    request: {
        type : Array,
        default : []
    },
    block: {
        type : Array,
        default : []
    },
    posts: {
        type : Array,
        default : []
    },
    featured: {
        type : Array,
        default : []
    },
    access_token : {
        type : String,
        default: null
    },
    isActivate : {
        type : Boolean,
        default: false
    },
    isAdmin : {
        type : Boolean,
        default: false
    },
    status : {
        type : Boolean,
        default: false
    },
    trash : {
        type : Boolean,
        default: false
    }

},{
    timestamps:true
})


export default mongoose.model('User',userSchema);