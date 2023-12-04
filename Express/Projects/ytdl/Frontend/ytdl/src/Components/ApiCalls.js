// ApiCalls.js
import axios from 'axios';

export const musicDl = async (data) => {
  try {
    const response = await axios.post('http://localhost:5000/api/download', data, {
      responseType: 'arraybuffer',
    });

    console.log('Content-Disposition Header:', response.headers['content-disposition']);

    console.log('Response Headers:', response.headers);

    const videoInfo = {
      data: response.data,
      videoTitle: response.headers['content-disposition']
        ? response.headers['content-disposition'].match(/filename="(.+?)"/)[1]
        : 'download',
      // You can add more information here based on your requirements
      // For example, video duration, author, thumbnail, etc.
    };
    return videoInfo;
  } catch (error) {
    console.error('API Call Error:', error);
    throw error;
  }
};
