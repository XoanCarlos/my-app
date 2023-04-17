const express = require('express');
//we need exprres for use json files
const router = express.Router();

const task = require ('../models/task');

router.get('/', async (req, res) => {
    const tasks = await task.find();
    res.json(tasks);
});


router.post('/', async(req, res) =>{
    const Task = new task(req.body);
    await Task.save();
    res.json({
        status: 'Task upload'
    });
});


router.put('/:id', async(req, res) =>{
    await task.findByIdAndUpdate(req.params.id, req.body);
    res.json({
        status: 'Task modified'
    });
});


router.delete('/:id', async (req, res) => {
    await  task.findByIdAndRemove(req.params.id);
    res.json({
        status: 'Task removed'
    });
});


module.exports = router;

