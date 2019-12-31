import axios from "axios"
axios.defaults.baseURL = "http://192.168.31.205:8080";
export function handleLogin(account,password) {
    return axios.post('/user/login',{
        account,password
    }).then(result=>{
        if (parseInt(result.code)===0){
            return result.power;
        }
        return Promise.reject(result.codeText)
    })
}
