const express = require('express');
const router = express.Router();

const Tarea = require('../models/task');

router.post('/', async (req, res) =>{
   const tarea = new Tarea(req.body);
   await tarea.save();
   res.json({
       status: 'Tarea creada'
   });
});


module.exports = router;