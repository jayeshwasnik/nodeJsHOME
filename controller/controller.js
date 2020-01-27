const express=require('express');

let helloWorldFunction = (req, res) => res.send('Hello World!');
let exampleFunction = (req, res) => res.send('Hello Example!');

module.exports={
    helloWorldFunct:helloWorldFunction,
    exampleFunct:exampleFunction
}