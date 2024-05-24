
import express from "express"
import dotenv from "dotenv"
const app = express();

import authRoutes from "./routes/auth.routes.js"
import connectToMongoDB from "./db/connectToMongoDB.js";
dotenv.config();
const PORT = process.env.PORT || 5000;

app.use(express.json()); // to parse the incoming request with JSON payloads (from req.body)
app.use("/api/auth", authRoutes);

// app.get("/",(req, res) =>{
//     //root route http://localhost:5000/
//     res.send("Hello World!!")
// })



app.listen(PORT, () => {
    connectToMongoDB();
    console.log(`Server is Running on port ${PORT}`);
})