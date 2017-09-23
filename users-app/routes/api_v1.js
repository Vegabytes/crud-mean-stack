const express = require('express');
const router = express.Router();
const user = require('../models/user');


router.get('/users', (req,res) => {
    user.find({},(err,users) => {
        res.json(users); 
    })
});

router.post('/users', (req,res) => {
    delete req.body._id;
   user.create(req.body, (err, user) => {
       if(err) {
           res.json(err);
       }
       else {
           res.json(user);
       }
   })
});

router.put('/users/:id', (req,res) => {
    console.log(req.body);
   delete req.body._id;
   user.update({_id: req.params.id},req.body,(err,user) => {
    if(err) {
        res.json(err);
    }
    else {
        res.json(user);
    }
   })
});

router.delete('/users/:id', (req,res) => {
   user.deleteOne({_id: req.params.id},(err,user) => {
    if(err) {
        res.json(err);
    }
    else {
        res.json(user);
    }
   })
});
module.exports = router;