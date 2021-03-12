 
   
window.onresize = ()=>{
    if(window.innerWidth < 500){
        console.log("alo");
        window.location.href = "../mobile/index.html"
    }else if(window.innerWidth > 500){
        window.location.href = "../Web/index.html"
    }
}