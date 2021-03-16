 
   
window.onresize = ()=>{
    if(window.innerWidth < 500){
        console.log("alo");
        window.location.href = "../mobile/index.html"
    }else if(window.innerWidth > 500){
        window.location.href = "../Web/index.html"
    }
}


const auth = window.localStorage.getItem('id')
if(!auth && window.innerWidth < 500  ){
    console.log(auth);
    window.location.href == "http://127.0.0.1:5500/frontend/mobile/moblog.html"?null:window.location.href = "http://127.0.0.1:5500/frontend/mobile/moblog.html"
}