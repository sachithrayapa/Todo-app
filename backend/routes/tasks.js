const express = require('express');
const router = express.Router();

const Task = require('../models/task.model');

router.get('/all-tasks', (req,res) =>{
    Task.find({}, (err, task) =>{
        if(err){
            return res.status(400).send(err);
        }
        res.send(task);
    })
})

router.post('/post', (req, res) =>{
    const task = new Task(req.body);
        task.save((err, savedTask) =>{
            if(err){
                return res.status(400).send(err);
            }
            res.send(savedTask);

        })
})

// PUT request
router.put('/update/:id', (req,res) => {
    Task.findByIdAndUpdate(req.params.id, req.body)
    .then(task => res.json('Updated successfully'))
    .catch(err =>
      res.status(400).json({ error: err })
    );
})  


//Delete
router.delete('/dlt/:id', (req,res) =>{
    Task.findOneAndDelete((req.params.id), (err, docs) =>{
        res.send(docs);
    })
})

module.exports =router;