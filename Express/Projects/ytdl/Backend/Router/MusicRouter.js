const express = require('express');
const router = express.Router();
const ytdl = require('ytdl-core');

router.use(express.json());

router.post('/api/download', async (req, res) => {
  const videoUrl = req.body.videoUrl;

  try {
    // Get video info
    const videoInfo = await ytdl.getInfo(videoUrl);
    const videoTitle = videoInfo.videoDetails.title;

    // Download options
    const downloadOptions = {
      format: 'audioonly',
      quality: 'highestaudio',
      filter: 'audioonly',
      highWaterMark: 1 << 25, // Set a high watermark to prevent issues with large downloads
      requestOptions: {},
    };

    // Check if the cookie header exists in the client's request
    if (req.headers.cookie) {
      downloadOptions.requestOptions.headers = {
        cookie: req.headers.cookie,
      };
    }

    // Create a readable stream
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

module.exports = router;
