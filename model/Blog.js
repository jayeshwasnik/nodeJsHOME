const mongoose=require("mongoose");

const Schema=mongoose.Schema;

let blogSchema=new Schema({
    blogId:{
        type:String,
        unique:true
    },
title:{
    type:String,
    default:"default title"
}

})

mongoose.model('Blog',blogSchema);