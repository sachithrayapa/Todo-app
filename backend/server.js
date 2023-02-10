const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const Task = require('./models/task.model');
const taskRoutes = require("./routes/tasks")

const PORT = 4000;

const dbUrl = "mongodb+srv://sachithra:abc123456@cluster0.9mshrfg.mongodb.net/?retryWrites=true&w=majority";

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

