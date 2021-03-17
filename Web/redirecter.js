 
   
window.onresize = ()=>{
    if(window.innerWidth < 500){
        console.log("alo");
        window.location.href = "http://localhost:3002/index.html"
    }else if(window.innerWidth > 500){
        window.location.href = "http://localhost:3000/index.html"
    }
}



const auth = window.localStorage.getItem('id')
if(!auth && window.innerWidth > 500  ){
    console.log(auth);
    window.location.pathname == "/login.html"?null:window.location.pathname = "/login.html"
}