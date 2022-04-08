const express = require('express');
const taskRoutes = express.Router(); // TODO

let Task = require('./task.model'); // TODO

//add data to database
taskRoutes.route('/add').post(function (req, res) {
    let task = new Task(req.body);
    task.save().then(task => {
        res.status(200).json({ 'task': 'Task added succesfully' });
    }).catch(err => {
        res.status(400).send("unable to save to databse");
    });
});

//get data from database
taskRoutes.route('/').get(function (req, res) {
    Task.find(function (err, tasks) {
        if (err) {
            console.log(err)
        } else {
            res.json(tasks);
        }
    });
});

//edit data from database
taskRoutes.route('/edit/:id').get(function (req, res) {
    let id = req.params.id;
    Task.findById(id, function (err, task) {
        res.json(task);
    });
});

//update data to database
taskRoutes.route('/update/:id').post(function (req, res) {
    let id = req.params.id;
    Task.findById(id, function (err, task) {
        if (!task) {
            res.status(404).send("Data not found");
        } else {
            task.Date = req.body.Date;
            task.body = req.body.body;

            task.save().then(task => {
                res.json('Update complete');
            }).catch(err => {
                res.status(400).send("Unable to update");
            });
        }
    });
});

//delete record
taskRoutes.route('/delete/:id').get(function (req, res) {
    Task.findByIdAndRemove({ _id: req.params.id }, function (err, task) {
        if (err) {
            res.json(err);
        } else {
            res.json('Succesfully deleted');
        }
    });
})

module.exports = taskRoutes;