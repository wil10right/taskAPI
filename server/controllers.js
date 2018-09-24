// import {Tasks} from "./models";
const Tasks = require('./models');

function readAll(req,res){
    Tasks.find({})
        .then(data=>res.json(data))
        .catch(errs=>res.json(errs));
    // Tasks.find({}, function(errs,data){
    //     if(errs){
    //         res.json(errs)
    //     }else{
    //         res.json(data)
    //     }
    // });
};

function readOne(req,res){
    Tasks.findById(req.params.id)
        .then(data=>res.json(data))
        .catch(errs=>res.json(errs));
};

function deleteOne(req,res){
    Tasks.findByIdAndRemove(req.params.id)
        .then(data=>res.json(data))
        .catch(errs=>res.json(errs));
};

function updateOne(req,res){
    Tasks.findByIdAndUpdate(req.params.id, req.body)
        .then(data=>res.json(data))
        .catch(errs=>res.json(errs));
};

function createOne(req,res){
    Tasks.create(req.body)
        .then(data=>res.json(data))
        .catch(errs=>res.json(errs));
};

module.exports = {
    readAll: readAll,
    readOne: readOne,
    deleteOne: deleteOne,
    updateOne: updateOne,
    createOne: createOne
};