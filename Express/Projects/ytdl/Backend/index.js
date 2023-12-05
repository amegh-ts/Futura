// server.js
const express = require('express');
const app = express();
const router = express.Router();
const ytdl = require('ytdl-core');
const cors = require('cors')
app.use(cors({
    exposedHeaders: ['Content-Disposition','x-thumbnail-url'],
}))


app.use(express.json());


router.post('/api/download', async (req, res) => {
    const videoUrl = req.body.videoUrl;

    try {
        const video = await ytdl.getInfo(videoUrl);
        const videoTitle = video.videoDetails.title;
        const videoInfo = video.videoDetails;

        const thumbnailUrl = video.videoDetails.thumbnails && video.videoDetails.thumbnails.length > 0
        ? video.videoDetails.thumbnails[0].url
        : 'default-thumbnail-url.jpg';

        // console.log('Video title and info:', videoInfo);
        console.log('thumpnaillll:', thumbnailUrl);

        const downloadOptions = {
            format:'videoonly',
            quality: 'lowestvideo',
            filter: 'videoonly',
            highWaterMark: 1 << 25,
            requestOptions: {},
        };

        if (req.headers.cookie) {
            downloadOptions.requestOptions.headers = {
                cookie: req.headers.cookie,
            };
        }

        const audioStream = ytdl(videoUrl, downloadOptions);

        // Set response headers for downloading the audio file
        res.header('Content-Disposition', `attachment; filename="${videoTitle}"`);
        // res.header('Content-Type', 'audio/mpeg');
        res.header('Content-Type', 'video/mp4');
        res.header('x-thumbnail-url', thumbnailUrl);


        // console.log('Response Headers:', res.getHeaders());



        // Pipe the stream to the response
        audioStream.pipe(res);

    } catch (error) {
        console.error('Error downloading video:', error);
        res.status(500).send('Error downloading video');
    }
});

router.post('/api/videoInfo', async (req, res) => {
    const videoUrl = req.body.videoUrl;

    try {
        const video = await ytdl.getInfo(videoUrl);
        const videoInfo = video.videoDetails;

        console.log('Video info:', videoInfo);

        // Send video information as JSON response
        res.json({
            videoInfo: videoInfo,
        });

    } catch (error) {
        console.error('Error fetching video information:', error);
        res.status(500).json({ error: 'Error fetching video information' });
    }
});

app.use('/', router);

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
