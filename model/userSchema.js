import mongoose from 'mongoose'

const userSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,

    },
    email:{
        type:String,
        required:true,
    },
    password:{
        required:true,
    }
})

 export const USER=mongoose.model('USER',userSchema)
