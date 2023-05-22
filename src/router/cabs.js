const express = require('express');
const router = express.Router();

const Cab = require('../models/cabs');

router.post('/', async (req, res) =>{
   const cab = new Cab(req.body);
   await cab.save();
   res.json({
       status: 'TCabs uploada'
   });
});


module.exports = router;