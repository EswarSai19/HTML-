
var userDetails = JSON.parse(localStorage.getItem("userData")) || []
function signupFun(){
    
    event.preventDefault()
   let form =  document.querySelector("form");
   let name = form.name.value
   let num = form.contact.value
   let email = form.email.value
   let pass = form.password.value
   if(name == "" || num == "" || email == "" || pass == ""){
       alert('Entered details should not be null')
   }else{
        let c1 = new Details(name,num,email,pass)
        userDetails.push(c1)
        localStorage.setItem("userData",JSON.stringify(userDetails))
        document.querySelector("#name").value = null
        document.querySelector("#contact").value = null
        document.querySelector("#email").value = null
        document.querySelector("#password").value = null
   }
   
}
function Details(n,nu,e,p){
    this.name = n;
    this.number = nu;
    this.email = e;
    this.password = p;
}