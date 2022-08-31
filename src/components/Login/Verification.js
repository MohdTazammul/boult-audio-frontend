function Verification(){
    console.log("cheking")
    const tok=JSON.parse(localStorage.getItem("token"))
    if(tok&&tok.isAuth){
        const{isAuth,token}=tok;
        fetch(`https://boult.herokuapp.com/account/verify/${tok.token}`,{
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
         body: JSON.stringify({})
        }).then(res=>res.json()).then(data=>{
            console.log("res",data)
            if(data.error){
                return false;
            }else{
                console.log("req",data.email,tok.data.email)
               if(tok.data.email==data.email){
                return true;
               }else{
                return false;
               }
            }
        })
        .catch(err=>{
            console.log("error",err)
            return false;
        })
    }else
        return false;
}

export default Verification;