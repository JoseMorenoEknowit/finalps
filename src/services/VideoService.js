import axios from 'axios'

class videoService{
    getAllvideo() {
        return axios.get();
    }

    postvideo(user){
        return axios.post({
            url: user.url,
            date: user.date,
            title: user.title,
        });
    }

    putvideo(id,user){
        return axios.put(id, {
            url: user.url,
        });
    }

    deletevideo(id){
        return axios.delete(id);

    }

}