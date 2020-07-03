import axios from 'axios'
import base from '@/main'

class chatService{
    getAllChat() {
        return axios.get(base.baseURL);
    }

    postChat(user){
        return axios.post(base.baseURL,{
            range: user.range,
            description: user.description,
            name: user.name,
        });
    }

    putChat(id,user){
        return axios.put(base.baseURL + id, {
            name: user.name,
        });
    }

    deleteChat(id){
        return axios.delete(base.baseURL + id);

    }

}