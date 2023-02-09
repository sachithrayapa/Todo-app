const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const Task = require('./models/task.model');
const taskRoutes = require("./routes/tasks")

const PORT = 4000;

const dbUrl = "mongodb://localhost/todo";

const app = express();
app.use(bodyParser.json());
app.use(cors());
app.use("/api/v1",taskRoutes);


mongoose.connect(dbUrl, {useNewUrlParser: true, useUnifiedTopology: true}, (err) =>{
    if(err){
        console.log(err);
    }else{
        console.log('Connected to DB');
    }
})
app.listen(PORT, () =>{
    console.log("API server is running on PORT ${PORT}");
});

// app.get('/all-tasks', (req,res) =>{
//     Task.find({}, (err, task) =>{
//         if(err){
//             return res.status(400).send(err);
//         }
//         res.send(task);
//     })
// })

// app.post('/create-task', (req, res) =>{
//     const task = new Task(req.body);
//         task.save((err, savedTask) =>{
//             if(err){
//                 return res.status(400).send(err);
//             }
//             res.send(savedTask);

//         })
// })

// // PUT request
// app.put('/update/:id', (req,res) => {
//     Task.findByIdAndUpdate(req.params.id, req.body)
//     .then(task1 => res.json('Updated successfully'))
//     .catch(err =>
//       res.status(400).json({ error: err })
//     );
// })  


// //Delete
// app.delete('/dlt/:id', (req,res) =>{
//     Task.findOneAndDelete((req.params.id), (err, docs) =>{
//         res.send(docs);
//     })
// })