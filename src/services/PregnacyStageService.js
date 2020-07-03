import axios from 'axios';
import base from '@/main';

class pregnacyStageService{
    getAllpregnacyStage() {
        return axios.get(base.baseURL);
    }

    postpregnacyStage(user){
        return axios.post(base.baseURL,{
            range: user.range,
            description: user.description,
            name: user.name,
        });
    }

    putpregnacyStage(id,user){
        return axios.put(base.baseURL + id, {
            name: user.name,
        });
    }

    deletepregnacyStage(id){
        return axios.delete(base.baseURL + id);

    }

}