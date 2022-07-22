function submitS(){
    var email=document.getElementById("email")
    var password=document.getElementById("password")
  
  
 if(email.value===""){
    alert("Enter your Password")
  }
  else if(password.value===""){
    alert("Enter your Password")
  }
  
  else{
    firebase.auth().createUserWithEmailAndPassword(email.value,password.value)
      .then((userCredential) => {
        userCredential.user.sendEmailVerification()
        // Signed in 
        var user = userCredential.user;   
    
  
      })
      .catch((error) => {
        alert(error)
      });
               
  alert("signup successesfully")
    }
       
    document.getElementById("email").value=''
    document.getElementById("password").value=""
  
    }
  
  const login = () => window.location.href="./pages/login.html"          
  const sign = () => window.location.href="./index.html"     
 