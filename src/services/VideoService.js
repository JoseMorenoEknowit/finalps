import axios from 'axios';
import base from '@/main';

class videoService{
    getAllvideo() {
        return axios.get(base.baseURL);
    }

    postvideo(user){
        return axios.post(base.baseURL,{
            url: user.url,
            date: user.date,
            title: user.title,
        });
    }

    putvideo(id,user){
        return axios.put(base.baseURL + id, {
            url: user.url,
        });
    }

    deletevideo(id){
        return axios.delete(base.baseURL + id);

    }

}