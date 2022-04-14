

function loginFun(){
    // e.preventDefault();
    
    let loginData = JSON.parse(localStorage.getItem("userData"))
    var flag = false
    event.preventDefault()
        let email = document.querySelector("#email").value
        let pass = document.querySelector("#password").value
        console.log(loginData)
        for(let i=0; i<loginData.length; i++){
            if(email == loginData[i].email && pass == loginData[i].password){
               flag = true
               break;
            }
        }
        if(flag){
            
            window.location.href = "file:///C:/Node%20projects/html/Unit-3/week-2/day-1/IW-Assignments/Async-Prog-Assignment-Template/index.html"
            
         }else{
            alert('Invalid Credentials')
             
         }
       
    
   
}
