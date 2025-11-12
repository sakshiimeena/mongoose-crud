import express from "express";
import  db  from "./config/db.js";   // named export
import userModel from "./models/user.js"; // default export
import router from "./routes/user.route.js";

const app = express();
db(); // connect to DB

app.use(express.json());

app.use("/users", router)

app.get('/', (req, res) => {
    res.send('hello');
});


app.listen(3000, () => {
    console.log("Server running on port 3000");
});



// app.get('/create', async (req, res) => {
//     try {
//         const createdUser = await userModel.create({
//             name: "sakshi",
//             email: "sakshi@gmail.com",
//             password: "123asd"
//         });
//         res.send(createdUser);
//     } catch (error) {
//         res.send(error.message);
//     }
// });
// app.get('/update' , async(req,res)=>{
    
//         const updatedUser = await userModel.findOneAndUpdate({name : "sakshi"} , {name : "sakshiiii"},{new : true})
//        res.send(updatedUser)
// })
// app.get('/read',async(req,res)=>{
//     let users =await userModel.find()
//     res.send(users)
// })
// app.get('/delete',async (req,res)=>{
//     let users = await userModel.findOneAndDelete({name : "sakshiiii"})
//     res.send(users)
// })