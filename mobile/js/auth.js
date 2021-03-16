const email = document.querySelector('#email')
const password = document.querySelector('#password')
const login = document.querySelector('#login')


function loginButton(){

   
    
    if(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(email.value) && password.value !=""){
        const  loginInfo = {
            email : email.value,
            password : password.value
        }
        
        fetch('http://localhost/backend/api/Login.php',{
            method: 'POST',
            headers : {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(loginInfo)
        }).then(response => response.json()).catch(err=>console.log(err)).then(data=>{
            window.localStorage.setItem('id' , data.result.user_id)
            window.location.href = "index.html"
        })
    }else{
        console.log("error");
    }
}