import { LOGIN,LOGOUT } from "./actionType";
const init={
    isAuth:false,
    token:null
}
const reducer=(store=init,{action,paylode})=>{
    switch (action){
        case LOGIN:
            return {...store,isAuth:true,token:paylode}
        case LOGOUT:
            return {...store,isAuth:false,token:null}
        default: 
            return store
    }
}

export default reducer;