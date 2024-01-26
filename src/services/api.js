import axios from 'axios';

const API_URL = 'http://localhost:8000';

const API_GMAIL = async (urlObject, payload, type) => {
    try {
        const response = await axios({
            method: urlObject.method,
            url: `${API_URL}/${urlObject.endpoint}/${type}`,
            data: payload
        });

        
        return response.data;
    } catch (error) {
        
        console.error('Error:', error);
        throw error;  
    }
};

export default API_GMAIL;
