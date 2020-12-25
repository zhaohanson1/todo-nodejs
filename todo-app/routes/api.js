var TaskModel = require("../model/task_model");
var express = require("express");
const e = require("express");
var apiRouter = express.Router();
TaskModel.schema.path("isCompleted").validate(function(val) {
    return val == true || val == false;
});

/* GET API. */
apiRouter.get("/test", (req, res) => {
    res.json("Chomama");
});

/* Get all tasks */
apiRouter.get("/", (req, res) => {
    TaskModel.find((err, tasks) => {
        if (err) {
            console.log(err);
        } else {
            res.json(tasks);
        }
    });
});

apiRouter.post("/add", (req, res) => {
    let task = new TaskModel({
        description: req.body.description,
    });
    task
        .save()
        .then((task) => {
            res.status(200).json({
                task: "Task add success.",
            });
        })
        .catch((err) => {
            console.log(err);
            res.status(400).send("Task add failed.");
        });
});

apiRouter.patch("/update/:id", (req, res) => {
    if (!req.body.description ||
        !(req.body.isCompleted == true || req.body.isCompleted == false)
    ) {
        res.status(400).json({ success: false, msg: "Missing field." });
        return;
    }

    const update = {
        description: req.body.description,
        isCompleted: req.body.isCompleted,
    };
    const opts = { runValidators: true };
    TaskModel.findByIdAndUpdate(req.params.id, update, opts, (err, task) => {
        if (err) {
            console.log(err);
            res.status(400).json({ success: false, msg: "An error has occured." });
        } else if (!task) {
            console.log(err);
            res.status(400).json({ success: false, msg: "Task does not exist." });
        } else {
            res.status(200).json({ success: true });
        }
    });
});

apiRouter.delete("/delete_all", (req, res) => {
    TaskModel.deleteMany({}, (err) => {
        if (err) {
            console.log(err);
            res.status(400).json({ success: false, msg: "An error has occured." });
        } else {
            res.status(200).json({ success: true });
        }
    });
});

apiRouter.delete("/delete/:id", (req, res) => {
    TaskModel.findByIdAndRemove(req.params.id, (err, task) => {
        if (err) {
            console.log(err);
            res.status(400).json({ success: false, msg: "An error has occured." });
        } else if (!task) {
            console.log(err);
            res.status(400).json({ success: false, msg: "Task does not exist." });
        } else {
            res.status(200).json({ success: true });
        }
    });
});

module.exports = apiRouter;