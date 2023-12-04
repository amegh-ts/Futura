import axios from 'axios';

export const musicDl = async (data) => {
    try {
        const res = await axios.post('http://localhost:5000/api/download', data);
        console.log('Response Status:', res.status);
        console.log('Response Data:', res.data);

        // Return the response data if needed
        return res.data;
    } catch (error) {
        console.error('Error:', error);

        // Handle specific error scenarios if needed
        if (error.response) {
            console.error('Response Status:', error.response.status);
            console.error('Response Data:', error.response.data);
        } else if (error.request) {
            console.error('No response received:', error.request);
        } else {
            console.error('Error setting up the request:', error.message);
        }

        // Rethrow the error or handle it as appropriate for your use case
        throw error;
    }
};
