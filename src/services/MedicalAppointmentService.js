import axios from 'axios';
import base from '@/main';

class MedicalAppointmentService{
    getAllMedicalAppointments() {
        return axios.get(base.baseURL);
    }

    postMedicalAppointment(user){
        return axios.post(base.baseURL, {
            date: user.date,
        });
    }

    putMedicalAppointment(id, user){
        return axios.put(base.baseURL + id,{
            date: user.date,
        });
    }

    deleteMedicalAppointment(id){
        return axios.delete(base.baseURL + id);

    }

}