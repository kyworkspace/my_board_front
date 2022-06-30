import axios from "axios"
class UserService {
    static Login(body) {
        return new Promise((resolve, reject) => {
            axios.post("http://localhost:8080/user/login", body)
                .then(res => {
                    resolve(res.data);
                })
                .catch(err => {
                    reject(err)
                })
        })

    }
}

export default UserService;