import axios from "axios";




const instance = axios.create({
    baseURL: 'https://ipo-cp.ru/api/v1/bootcamps/605c5f71bc557b46b4f42a56/',
})



export const APIcourses = {
    getCourses() {
        return instance.get('courses').then(res => res.data)
    }
}