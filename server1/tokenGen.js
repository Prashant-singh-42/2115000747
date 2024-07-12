import axios from 'axios';

const obj = {
    "companyName": "GLA university",
    "clientID": "ce75c721-ae2e-4536-b991-b4e8b79604a7",
    "clientSecret": "xtEouvRhoFJInWpw",
    "ownerName": "prashant",
    "ownerEmail": "prashant.singh_cs21@gla.ac.in",
    "rollNo": "2115000747"
};

export const getToken = async () => {
    try {
        const response = await axios.post("http://20.244.56.144/test/auth", obj);
        console.log(response.data.access_token); 
        return response.data.access_token; 
    } catch (error) {
        console.error('Error fetching token:', error.message || error);
        throw error;
    }
};