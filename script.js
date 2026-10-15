const password=document.getElementById("password");
const toggelPassword=document.getElementById("toggelPassword");
toggelPassword.addEventListener("click",function(){
    if(password.type==="password"){
        password.type="text";
        toggelPassword.textContent="🙈"
    }
    else{
        password.type="password";
        toggelPassword.textContent="👁️";
    }
});