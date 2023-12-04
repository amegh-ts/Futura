// server.js
const express = require('express');
const app = express();
const router = express.Router();
const ytdl = require('ytdl-core');
const path = require('path');

app.use(express.json());

router.post('/api/download', async (req, res) => {
  const videoUrl = req.body.videoUrl;

  try {
    const videoInfo = await ytdl.getInfo(videoUrl);
    const videoTitle = videoInfo.videoDetails.title;

    const downloadOptions = {
      format: 'audioonly',
      quality: 'highestaudio',
      filter: 'audioonly',
      highWaterMark: 1 << 25,
      requestOptions: {},
    };

    if (req.headers.cookie) {
      downloadOptions.requestOptions.headers = {
        cookie: req.headers.cookie,
      };
    }

    const audioStream = ytdl(videoUrl, downloadOptions);

    // Set response headers
    res.header('Content-Disposition', `attachment; filename="${videoTitle}.mp3"`);
    res.header('Content-Type', 'audio/mpeg');

    // Pipe the stream to the response
    audioStream.pipe(res);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error downloading video');
  }
});

app.use('/', router);

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
