import express from "express"
import cors from "cors"
import { connectDB } from "./config/db.js"
import foodRouter from "./routes/foodRoutes.js"

const app = express()
const PORT = 3000

app.use(express.json())
app.use(cors())

connectDB();

app.use("/api/food",foodRouter)
app.use("/images",express.static('uploads'))

app.get("/",(req,res)=>{
    res.send("API working")
})

app.listen(PORT,()=>{
    console.log(`App is running at ${PORT}`)
})