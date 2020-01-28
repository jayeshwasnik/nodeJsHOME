const express=require('express');

let helloWorldFunction = (req, res) => res.send('Hello World!');
let exampleFunction = (req, res) => res.send('Hello Example!');

let routeParamFunction=(req,res)=>{
    console.log(req.params)
    res.send(req.params)
}

let queryParamFunction=(req,res)=>{
console.log(req.query)
console.log(req.query.name)
res.send(req.query)
}

module.exports={
    helloWorldFunct:helloWorldFunction,
    exampleFunct:exampleFunction,
    routeParamFunction:routeParamFunction,
    queryParamFunction:queryParamFunction
}