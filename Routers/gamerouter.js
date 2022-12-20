const { Router } = require("express");
const { Gamemodel } = require("../Models/game.Model");
const gamerouter = Router();


gamerouter.post("/create",(req,res)=>{
    const {
        name,level,score
    } =req.body

    const newgame = new Gamemodel({
      name,
      level,
      score,
    });
    try{
        newgame.save()
        res.send({msg:"new"})
    }
    catch{
        res.send({ msg: "error" });
    }
})

gamerouter.get("/get", async(req,res)=>{
    const games = await Gamemodel.find();
    try{
        res.send({ msg: "success", players: games });
    }
    catch{
   res.send({ msg: "err"});
    }
})

module.exports = { gamerouter };