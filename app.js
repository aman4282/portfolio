const express = require('express')
const app = express()
const ip = "127.0.0.1"
const port = 5600
app.use(express.json());       
app.use(express.urlencoded({extended: true})); 

app.get("/form", (req, res) => {

  });

app.post('/form',(req,res)=>{
    console.log("in post", req.body)
    res.status(200).send(req.body)
})

app.listen(port,ip,()=>{
    console.log(`app is listening to${ip}:${port}`)

})