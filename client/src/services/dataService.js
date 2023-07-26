import axios from 'axios';

const fetchData = async () => {
    try {
        const response = await axios.get('http://localhost:3001/data');  // Replace with your server URL
        return response.data;
    } catch (err) {
        console.error(err);
        throw err;
    }
};

export default fetchData;
