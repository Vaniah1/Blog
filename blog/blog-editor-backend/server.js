/* eslint-disable no-undef */
const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs");
const cors = require("cors");
const app = express();
const port = 5000;

app.use(cors());
app.use(bodyParser.json());

// Endpoint to get blog data
app.get("/api/blogs", (req, res) => {
  const filePath = "./blogsData.json";
  fs.readFile(filePath, (err, data) => {
    if (err) {
      return res.status(500).send("Error reading file");
    }
    const blogs = JSON.parse(data);
    if (!Array.isArray(blogs)) {
      return res.status(500).send("Invalid data format");
    }
    res.json(blogs);
  });
});

// Endpoint to save new blog data
app.post("/api/blogs", (req, res) => {
  const blogData = req.body;
  const filePath = "./blogsData.json";

  fs.readFile(filePath, (err, data) => {
    if (err) {
      if (err.code === "ENOENT") {
        // File doesn't exist, create a new one with the new blog data
        fs.writeFile(filePath, JSON.stringify([blogData], null, 2), (err) => {
          if (err) {
            return res.status(500).send("Error writing file");
          }
          res.status(200).send("Blog data saved successfully");
        });
      } else {
        return res.status(500).send("Error reading file");
      }
    } else {
      const existingData = JSON.parse(data);
      existingData.push(blogData);

      fs.writeFile(filePath, JSON.stringify(existingData, null, 2), (err) => {
        if (err) {
          return res.status(500).send("Error writing file");
        }
        res.status(200).send("Blog data saved successfully");
      });
    }
  });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
