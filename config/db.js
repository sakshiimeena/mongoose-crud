import mongoose from "mongoose"

 const db = ()=>{
    mongoose.connect('mongodb://localhost:27017/users-demo')
    .then(()=>{
        console.log("db connected")
    })
    .catch((err)=>{
        console.log(err.message)
    })

}
export default db
    





