const express = require("express");
const router = express.Router();

const Packagesres = require('../models/packs');


router.get("/getallpackages",async(req,res)=>{

try {
    const packs = await Packagesres.find({})
   res.send(packs)
    
} catch (error) {
    return res.status(400).json({ message : error });
}


});

router.post("/packagebyid",async(req,res)=>{

    const packid = req.body.packid
    try {
        const packs = await Packagesres.findOne({_id:packid})
       res.send(packs)
        
    } catch (error) {
        return res.status(400).json({ message : error });
    }
    
    
    });

module.exports = router;