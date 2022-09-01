import { LOGIN,LOGOUT } from "./actionType";
var LS = JSON.parse(localStorage.getItem("token"));
const init={
    isAuth:LS?true:false,
    token:LS,
    data:(LS && LS.data)?LS.data:{}
}
const reducer=(store=init,{type,payload})=>{
    console.log("reducer",type,store)
    switch (type){
        case LOGIN:
            return {...store,isAuth:true,token:payload.token, data:payload.data}
        case LOGOUT:
            return {...store,isAuth:false,token:null, data:{}}
        default: 
            return store
    }
}

export default reducer;