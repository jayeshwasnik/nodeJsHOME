const express=require("express");
const blogController=require('./../controller/controller')

let setRouter=(app) =>{
    // let helloWorldFunction = (req, res) => res.send('Hello World!');
    // let exampleFunction = (req, res) => res.send('example');

    

//    app.get('/hello',blogController.helloWorldFunct);
//    app.get('/example',blogController.exampleFunct); 


app.get('/route/:param1/:param2',blogController.routeParamFunction);
app.get('/test/query',blogController.queryParamFunction); 

}

module.exports={
setRouter:setRouter
}