import express from "express";
import fs from "fs";
import cors from "cors";
import "dotenv/config";

const app = express();
const PORT = process.env.PORT;

const videoData = "./data/videos.json";

app.listen(PORT, () =>
  console.log(`The server is running on http://localhost:${PORT}`)
);

// app.use(cors());

// app.use(express.json());

// app.use("/videos.js");
