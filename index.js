const express = require('express')
const app = express()
const port = 3000
const appConfig=require('./config/appConfig')
const fs=require("fs");
const setRouter=require("./routes/blog");
const mongoose=require("mongoose");

// app.get('/hello', (req, res) => res.send('Hello World!'))


//bootstrap model
let routesPath='./routes';
let routeFinder=fs.readdirSync(routesPath).forEach((file)=>{
if(~file.indexOf('.js')){
    console.log("including the rotes from the following files")
    console.log(routesPath + '/' + file)
    let route=require(routesPath+'/'+file)


route.setRouter(app);
}

})


app.listen(appConfig.port, () => {console.log(`Example app listening on port ${port}!`)
let db=mongoose.connect(appConfig.db.uri,{useMongoClient:true});

})


///handling mongodb connection error
mongoose.connection.on('error',function(err){
    console.log("error in connecting to db")
    console.log(err);
})


mongoose.connection.on('open',function(err){

    if(err){
        console.log("database error");
        console.log(err);
            }
else{console.log("db connection open succesful")
    }
})

//bootstrap model
let modelsPath='./routes';
let routeFinder=fs.readdirSync(modelsPath).forEach((file)=>{
if(~file.indexOf('.js')){
    console.log("including the models from the following files")
    console.log(routesPath + '/' + file)
    equire(routesPath+'/'+file);



}

})