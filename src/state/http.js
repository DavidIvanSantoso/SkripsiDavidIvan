import axios from "axios";


const baseServiceUrl = "https://64591b604eb3f674df86dafb.mockapi.io/skripsi/"


const http = axios.create({
    baseURL: `${baseServiceUrl}`,
    headers: {
        "Content-type": "application/json"
    },
    timeout: 30000 //timeout 30s
});

http.interceptors.response.use(
    config => config,
    (error) => {
      
        // console.log(error.code)
        if (error.code === 'ECONNABORTED') {
            
            console.error('Request Timeout', error.config.url)
        } else {
            
            console.error('Request Error', error.config.url)
        }
        return Promise.reject(error);
    },
);

export default http 