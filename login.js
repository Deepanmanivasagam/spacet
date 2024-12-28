const ex = require("express");
const mongoose = require("mongoose");
const path = require("path");

const app =ex();
app.use(ex.static(__dirname));
app.use(ex.urlencoded({extended:true}))

mongoose.connect('mongodb://localhost:27017/details')
const db = mongoose.connection
db.once('open',()=>{
    console.log("Mongodb connected successfully");
    
})

const userSchema = new mongoose.Schema({
    name:String,
    email:String,
})

const Users = mongoose.model("info",userSchema);

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'createaccount.html'))
})

app.post('/post',async (req,res)=>{
    const  {name,email}= req.body
    const user = new Users({
        name,
        email
    })
    await  user.save()
    console.log(user);
    res.sendFile(path.join(__dirname,"index.html"))
})


app.listen(5612,()=>{
    console.log("http://localhost:5612");
    
})