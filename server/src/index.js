import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import bodyParser from "body-parser";


import { connectDB } from "./lib/db.js";
import authRoutes from "./routes/auth.route.js";
import messageRoutes from "./routes/message.route.js";
import { app, server } from "./lib/socket.js";

dotenv.config();

const port = process.env.PORT || 10000;

app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: "https://chatify-6nb9.onrender.com",
    credentials: true,
  })
);
app.use(bodyParser.urlencoded({extended:true, parameterLimit:100000,limit:"10mb"}))

app.use("/auth", authRoutes);
app.use("/messages", messageRoutes);

server.listen(port, () => {
  console.log("server is running on port:" + port);
  connectDB();
});
