import axios from 'axios';
import base from '@/main';

class MedicalExamService{
    getAllMedicalExam() {
        return axios.get(base.baseURL);
    }

    postMedicalExam(user){
        return axios.post(base.baseURL, {
            examType: user.examType,
            description: user.description,
            result: user.result,
            date: user.date,
        });
    }

    putMedicalExam(id,user){
        return axios.put(base.baseURL + id, {
            date: user.date,
        });
    }

    deleteMedicalExam(id){
        return axios.delete(base.baseURL + id);

    }

}