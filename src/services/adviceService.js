import axios from 'axios'
import base from '@/main'

class adviceService{
    getAlladvice() {
        return axios.get(base.baseURL);
    }

    postadvice(user){
        return axios.post(base.baseURL,{
            id: user.id,
            title: user.title,
            text: user.text,
            date: user.date,
        });
    }

    putadvice(id,user){
        return axios.put(base.baseURL + id, {
            id: user.id,
        });
    }

    deleteadvice(id){
        return axios.delete(base.baseURL + id);

    }

}