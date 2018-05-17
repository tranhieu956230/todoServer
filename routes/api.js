const express = require('express');
const router = express.Router();
const todoModel = require('../models/todo');


router.post('/todo', function (req, res) {
    todoModel.create(req.body).then(function (response) {
        res.send(response);
    })
})


router.get('/todo', function (req, res) {
    todoModel.find(function (err, todos) {
        res.send(todos)
    })
})

router.delete('/todo/:_id', function (req, res) {
    todoModel.findOneAndRemove({ _id: req.params._id }, function (err, todo) {
        res.send(todo);
    })
})

router.put('/todo/:_id', function (req, res) {
    todoModel.findOneAndUpdate({ _id: req.params._id }, { todo: req.body.todo }, function (err, todo) {
        res.send(todo);
    })
})

router.put('/todo/:_id/toggle', function (req, res) {
    todoModel.findById({ _id: req.params._id }, function (err, todo) {
        todoModel.findOneAndUpdate({ _id: req.params._id }, { completed: !todo.completed }, function (req, obj) {
            res.send(obj);
        })
    })
})

module.exports = router;