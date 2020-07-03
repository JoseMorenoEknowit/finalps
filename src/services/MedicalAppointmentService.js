import axios from 'axios'

class MedicalAppointmentService{
    getAllMedicalAppointments() {
        return axios.get();
    }

    postMedicalAppointment(user){
        return axios.post({
            date: user.date,
        });
    }

    putMedicalAppointment(id,user){
        return axios.put(id,{
            date: user.date,
        });
    }

    deleteMedicalAppointment(id){
        return axios.delete(id);

    }

}