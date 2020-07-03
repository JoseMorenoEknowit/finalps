import axios from 'axios';
import base from '@/main';

class obstetricianService{
    getAllObstetrician() {
        return axios.get(base.baseURL);
    }

    postObstetrician(user){
        return axios.post(base.baseURL, {
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            age: user.age,
            degree: user.degree,
        });
    }

    putObstetrician(id,user){
        return axios.put(base.baseURL + id, {
            email: user.email,
        });
    }

    deleteObstetrician(id){
        return axios.delete(base.baseURL + id);

    }

}