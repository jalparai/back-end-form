function login_S(){
    var email=document.getElementById("loginemail")
    var password=document.getElementById("loginpass")
  
   if(email.value===""){
    document.getElementById("error_sec").style.display="inline-block"
   }
  
   else if(password.value===""){
     document.getElementById("error_sec")
   }
    else{  
      firebase.database().ref('Login/').push({
        username: email.value,
        password:password.value,
    
      
  
      });
      alert("login successfully")
  }
         
  document.getElementById("loginemail").value=''
  document.getElementById("loginpass").value=""

  }