import { LOGIN,LOGOUT } from "./actionType";
const init={
    isAuth:localStorage.getItem("token")?true:false,
    token:localStorage.getItem("token")
}
const reducer=(store=init,{type,payload})=>{
    console.log("reducer",type,store)
    switch (type){
        case LOGIN:
            return {...store,isAuth:true,token:payload}
        case LOGOUT:
            return {...store,isAuth:false,token:null}
        default: 
            return store
    }
}

export default reducer;