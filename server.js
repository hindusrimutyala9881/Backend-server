let express = require("express");
let app = express();

app.get("/home",(req,res)=>{
    res.send("Welcome to the home page")
})

app.get("/about",(req,res)=>{
    res.send("this is about page")
})


app.get("/log",(req,res)=>{
    res.send("you've logged into the server successfully")
})

//route param
app.get("/student/:id",(req,res)=>{

     const id = req.params.id

    res.json({
        "message":"Data fetched successfully",
        "id":id
    })

})


app.get("/student",(req,res)=>{
    res.json({
        "name":"hindu",
        "age":18
    })
})
app.use(express.json())
app.post("/student",(req,res)=>{
    req.statusCode(201).json(req.body)
})




app.listen(4000,()=>{
    console.log("server is started http://localhost:4000")
})