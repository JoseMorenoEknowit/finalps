import axios from 'axios'

class obstetricianService{
    getAllObstetrician() {
        return axios.get();
    }

    postObstetrician(user){
        return axios.post({
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            age: user.age,
            degree: user.degree,
        });
    }

    putObstetrician(id,user){
        return axios.put(id, {
            email: user.email,
        });
    }

    deleteObstetrician(id){
        return axios.delete(id);

    }

}