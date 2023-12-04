const youtubeDlExec = require('youtube-dl-exec');
const router = require('express').Router();
const express = require('express');

router.use(express.json()); 

router.post('/api/download', async (req, res) => {
    const videoUrl = req.body.videoUrl;  // Use req.body.videoUrl instead of req.params.videoUrl
    console.log('videourl==', videoUrl);

    try {
        const videoInfo = await youtubeDlExec.getBasicInfo(videoUrl);
        const videoTitle = videoInfo.title;
        const videoFormat = 'mp3';

        const downloadOptions = {
            format: videoFormat,
            output: `${videoTitle}.${videoFormat}`,
        };

        const result = await youtubeDlExec.exec(videoUrl, downloadOptions);
        const downloadLink = result.output;

        res.json({ downloadLink });
    } catch (error) {
        console.error(error);
        res.status(500).send('Error downloading video');
    }
});

module.exports = router;
