const express = require('express');
const router = express.Router();
const todoModel = require('../models/todo');


router.post('/todo', function (req, res, next) {
    todoModel.create(req.body).then(function (response) {
        res.send({ status: "success", data: todo });
    }).catch(next);
})

router.get('/todo', function (req, res, next) {
    todoModel.find().then(todos => {
        res.send({ status: "success", data: todos });
    }).catch(next);
})

router.delete('/todo/:_id', function (req, res, next) {
    todoModel.findOneAndDelete({ _id: req.params._id }).then(todo => {
        res.send({ status: "success", data: todo });
    }).catch(next);
})

router.put('/todo/:_id', function (req, res, next) {
    todoModel.findOneAndUpdate({ _id: req.params._id }, { todo: req.body.todo }, { new: true }).then(todo => {
        res.send({ status: "success", data: todo });
    }).catch(next);
})

router.put('/todo/:_id/toggle', function (req, res, next) {
    todoModel.findById({ _id: req.params._id }).then(todo => {
        todoModel.findOneAndUpdate({ _id: req.params._id }, { completed: !todo.completed }, { new: true }).then(() => {
            res.send({ status: "success", data: todo });
        })
    }).catch(next);
})


module.exports = router;