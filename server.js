import express from 'express'
import mongoose from 'mongoose'
import Cards from './Models/CardsDb.js'
import Cors from 'cors'

//App Congif
const app = express();
const port = process.env.PORT || 8080
const connectionString =''
//Middleware
app.use(express.json());
app.use(Cors());
//DB config
mongoose.connect(connectionString,{
    useNewUrlParser:true,
    useCreateIndex:true,
    useUnifiedTopology:true,
})
//API endpoints
app.get("/",(req,res)=> res.status(200).send(port));
app.get("/cards", (req,res)=>{
    const dbCard = req.body;
    Cards.find((err,data)=>{
        if(err){
            res.status(500).send(err);
        }
        else{
            res.status(200).send(data);
        }
    })
});
app.post("/cards", (req,res)=>{
    const dbCard = req.body;
    Cards.create(dbCard,(err,data)=>{
        if(err){
            res.status(500).send(err);
        }
        else{
            res.status(201).send(data);
        }
    })
});

//Listener
app.listen(port,()=> console.log(`listening on port :${port}`))
