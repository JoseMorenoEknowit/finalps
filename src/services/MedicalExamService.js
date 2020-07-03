import axios from 'axios'

class MedicalExamService{
    getAllMedicalExam() {
        return axios.get();
    }

    postMedicalExam(user){
        return axios.post({
            examType: user.examType,
            description: user.description,
            result: user.result,
            date: user.date,
        });
    }

    putMedicalExam(id,user){
        return axios.put(id, {
            date: user.date,
        });
    }

    deleteMedicalExam(id){
        return axios.delete(id);

    }

}