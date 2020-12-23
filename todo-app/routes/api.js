var TaskModel = require('../task_model');
var express = require('express');
const e = require('express');
var apiRouter = express.Router();

/* GET API. */

apiRouter.get('/test', (req, res) => {
    res.json('Chomama');
});

/* Get all tasks */
apiRouter.get('/', (req, res) => {
    TaskModel.find((err, tasks) => {
        if (err) {
            console.log(err);
        } else {
            res.json(tasks);
        }
    })
});

apiRouter.get('/add', (req, res) => {
    let task = new TaskModel(req.body);
    task.save().then(task => {
        res.status(200).json({ 'task': 'Task add success.' });
    }).catch(err => {
        res.status(400).send('Task add failed.');
    })
})

apiRouter.get('/update/:id', (req, res) => {
    TaskModel.findByIdAndUpdate(req.params.id, { description: req.body }, (err, task) => {
        if (!task) {
            res.status(404).send('Task does not exist.');
        } else if (err) {
            res.status(400).send('Task update failed.');
        } else {
            res.status(200).json({ 'task': 'Task update success.' });
        }
    })
})

apiRouter.get('/delete/:id', (req, res) => {
    TaskModel.findByIdAndRemove(req.params.id, (err, task) => {
        if (!task) {
            res.status(404).send('Task does not exist.');
        } else if (err) {
            res.status(400).send('Task update failed.');
        } else {
            res.status(200).json({ 'task': 'Task update success.' });
        }
    })
})

module.exports = apiRouter;