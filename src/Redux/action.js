import { LOGIN, LOGOUT} from "./actionType";

const login =(token)=>{
    return {
        type:LOGIN,
        paylode:token
    }
}
const logout =()=>{
    return {
        type:LOGOUT,
    }
}

export {login,logout}