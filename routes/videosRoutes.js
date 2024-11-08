import express from "express";
import fs from "fs";
import { v4 as uuidv4 } from "uuid";
const router = express.Router();

//get all videos
router.get("/", (req, res) => {
  const videos = fs.readFileSync("./data/videos.json", "utf8");
  res.json(JSON.parse(videos));
});

//get a video by ID
//req.params.id extracts the ID from the URL
router.get("/:id", (req, res) => {
  const videoIds = fs.readFileSync("./data/videos.json", "utf8");
  const parsedVideos = JSON.parse(videoIds);
  const foundVideo = parsedVideos.find((video) => video.id == req.params.id);

  if (foundVideo) {
    res.json(foundVideo);
  } else {
    res.status(404).json({ message: "The video was not found." });
  }
});

router.post("/", (req, res) => {
  const { title, description } = req.body;

  const videos = fs.readFileSync("./data/videos.json", "utf8");
  const parsedVideos = JSON.parse(videos);

  const newVideo = {
    id: uuidv4(),
    title,
    description,
    channel: "New Author",
    image: "/images/image8.jpg",
    views: "0",
    likes: "0",
    duration: "3:30",
    video: "/stream.mp4",
    timestamp: Date.now(),
    comments: [],
  };

  parsedVideos.push(newVideo);

  fs.writeFileSync("./data/videos.json", JSON.stringify(parsedVideos));

  res.status(201).json(parsedVideos);
});

export default router;
