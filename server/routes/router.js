const express = require('express');
const router = express.Router();
const users = require('../models/userSchema');

// Create or register-

router.post("/register", async (req, res) => {
    // console.log(req.body);

    res.set({
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
    });

    const { name, email, age, mobile, work, add, desc } = req.body;

    if (!name || !email || !age || !mobile || !work || !add || !desc) {
        res.status(404).send("Plz fill all the fields");
    }

    try {
        
        // function = promise wait for async mongoDb function({database email: email sent by user});
        const preuser = await users.findOne({ email: email });
        console.log(preuser);

        if (preuser) {
        res.status(404).send("User already exists");
        }
        else {
            const adduser = new users({
                name, email, age, mobile, work, add, desc
            });

            await adduser.save();
            res.status(201).json(adduser);
            console.log(adduser);
        }

    } catch (error) {
        res.status(404).send(error)
    }


})


// Read - fetch all the data -

router.get('/getdata', async (req, res) => {
    
    try {
        const userdata = await users.find();
        res.status(201).json(userdata);
        console.log(userdata);
    } catch (error) {
        res.status(404).json(error);
    }
})


// Read by id - fetch by id - 
router.get("/getuser/:id",async(req,res)=>{
    try {
        console.log(req.params);
        const {id} = req.params;

        const userindividual = await users.findById({_id:id});
        console.log(userindividual);
        res.status(201).json(userindividual)

    } catch (error) {
        res.status(404).json(error);
    }
})


// Update - Edit page - 
router.patch("/updateuser/:id", async(req,res)=>{
    try {
        console.log(req.params);
        const {id} = req.params;

        const updateuser = await users.findByIdAndUpdate(id, req.body, {
            new: true
        });
        console.log(updateuser);
        res.status(201).json(updateuser)

    } catch (error) {
        res.status(404).json(error);
    }
})

// Delete - 
router.delete("/deleteuser/:id", async(req,res)=>{
    try {
        console.log(req.params);
        const {id} = req.params;

        const deleteuser = await users.findByIdAndDelete({_id:id});
        console.log(deleteuser);
        res.status(201).json(deleteuser)

    } catch (error) {
        res.status(404).json(error);
    }
})


module.exports = router;