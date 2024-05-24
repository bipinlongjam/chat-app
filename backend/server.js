
import express from "express"
import dotenv from "dotenv"
import cookieParser from "cookie-parser";
const app = express();

import authRoutes from "./routes/auth.routes.js";
import messageRoutes from "./routes/message.routes.js";
import userRoutes from "./routes/user.routes.js"

import connectToMongoDB from "./db/connectToMongoDB.js";
dotenv.config();
const PORT = process.env.PORT || 5000;

app.use(express.json()); // to parse the incoming request with JSON payloads (from req.body)
app.use(cookieParser())
app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes)
app.use("/api/users", userRoutes);

// app.get("/",(req, res) =>{
//     //root route http://localhost:5000/
//     res.send("Hello World!!")
// })



app.listen(PORT, () => {
    connectToMongoDB();
    console.log(`Server is Running on port ${PORT}`);
})