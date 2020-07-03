import axios from 'axios';



class MotherService{
    getMother(){
        return axios.get();
    }

    postMother(user){
        return axios.post({
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            age: user.age,
        });
    }

    putMother(id, user){
        return axios.put(id, {
            email: user.email,
        });
    }

    deleteMother(id){
        return axios.delete(id);

    }


}

export default new MotherService();