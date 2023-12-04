// ApiCalls.js
import axios from 'axios';

export const musicDl = async (data) => {
    try {
        const response = await axios.post('http://localhost:5000/api/download', data, {
            responseType: 'arraybuffer',
        });

        const contentDispositionHeader = response.headers['content-disposition'];
        const thumbnailUrl = response.headers['x-thumnail-url'];

        console.log('Content-Disposition Header:', contentDispositionHeader);
        console.log('Thumbnail URL:', thumbnailUrl);

        const defaultFileName = 'download.mp3'; // Default filename if not found in header

        // Extract filename from Content-Disposition header
        const fileNameMatch = contentDispositionHeader ? contentDispositionHeader.match(/filename="(.+?)"/) : null;
        const videoTitle = fileNameMatch ? fileNameMatch[1] : defaultFileName;

        console.log('Content-Disposition Header:', contentDispositionHeader);
        console.log('Response Headers:', response.headers);

        const videoInfo = {
            data: response.data,
            videoTitle: videoTitle,
            // You can add more information here based on your requirements
            // For example, video duration, author, thumbnail, etc.
        };

        return videoInfo;
    } catch (error) {
        console.error('API Call Error:', error);
        throw error;
    }
};
