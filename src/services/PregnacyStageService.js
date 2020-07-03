import axios from 'axios'

class pregnacyStageService{
    getAllpregnacyStage() {
        return axios.get();
    }

    postpregnacyStage(user){
        return axios.post({
            range: user.range,
            description: user.description,
            name: user.name,
        });
    }

    putpregnacyStage(id,user){
        return axios.put(id, {
            name: user.name,
        });
    }

    deletepregnacyStage(id){
        return axios.delete(id);

    }

}