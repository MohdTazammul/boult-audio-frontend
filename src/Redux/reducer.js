import { LOGIN,LOGOUT } from "./actionType";
const init={
    isAuth:localStorage.getItem("token")?true:false,
    token:localStorage.getItem("token")
}
const reducer=(store=init,{type,payload})=>{
    switch (type){
        case LOGIN:
            localStorage.setItem("token",payload);
            return {...store,isAuth:true,token:payload}
        case LOGOUT:
            return {...store,isAuth:false,token:null}
        default: 
            return store
    }
}

export default reducer;