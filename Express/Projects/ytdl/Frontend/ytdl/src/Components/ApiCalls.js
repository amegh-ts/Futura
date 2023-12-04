// ApiCalls.js
import axios from 'axios';
import { publicRequest } from '../RequestMethod';

export const musicDl = async (data) => {
    try {
        const response = await publicRequest.post('/api/download', data, {
            responseType: 'arraybuffer',
        });

        const contentDispositionHeader = response.headers['content-disposition'];
        const thumbnailUrl = response.headers['x-thumbnail-url'];

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
            thumbnailUrl: thumbnailUrl,
            // You can add more information here based on your requirements
            // For example, video duration, author, thumbnail, etc.
        };

        return videoInfo;
    } catch (error) {
        console.error('API Call Error:', error);
        throw error;
    }
};

// export const showDetails = async (data) => {
//     try {
//         const response = await axios.post('http://localhost:5000/api/videoInfo', data);

//         console.log('Axios Response:', response);

//         if (response.data && response.data.videoInfo) {
//             const videoInfo = response.data.videoInfo;
//             console.log('Video Information:', videoInfo);
//             return videoInfo;
//         } else {
//             console.error('Invalid response format. Check server response structure.');
//             // Handle the issue as needed
//         }

//     } catch (error) {
//         console.error('Error fetching video details:', error);
//         // Handle the error as needed
//     }
// }