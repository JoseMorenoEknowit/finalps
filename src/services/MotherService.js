import axios from 'axios';
import base from '@/main';


class MotherService{
    getMother(){
        return axios.get(base.baseURL);
    }

    postMother(user){
        return axios.post(base.baseURL,{
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            age: user.age,
        });
    }

    putMother(id, user){
        return axios.put(base.baseURL + id, {
            email: user.email,
        });
    }

    deleteMother(id){
        return axios.delete(base.baseURL + id);

    }


}

export default new MotherService();