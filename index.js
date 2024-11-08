import express from "express";
import videosRoutes from "./routes/videosRoutes.js";
import cors from "cors";
import "dotenv/config";

const app = express();
const PORT = process.env.PORT;


//Middleware
app.use(cors());
app.use(express.static("public"));
app.use(express.json());

app.use("/videos", videosRoutes);


app.listen(PORT, () =>
  console.log(`The server is running on http://localhost:${PORT}`)
);
