        
function checkout(){
    event.preventDefault()
    let name = document.getElementById("name").Value
    let num = document.getElementById("num").Value
    let add = document.getElementById("address").Value
    let flag;
    let myPromise = new Promise(function(resolve,reject){
        flag = false
        if(name != "" && num != "" && add != ""){
           flag = true
        }
        resolve()
        reject()
       
    })
    myPromise.then(function(res){
        alert(`Your order is accepted `)
        setTimeout(function(){
            alert(`Your order is being Packed `)
        },3000)
        setTimeout(function(){
            alert(`Your order is in transit`)
        },8000)
        setTimeout(function(){
            alert(`Your order is out for delivery`)
        },10000)
        setTimeout(function(){
            alert(`Order delivered `)
        },12000)
    })
    .catch(function(err){
        console.log(err);
    })
    console.log(myPromise);
}

// 0 seconds : Your order is accepted 
// 3 seconds : Your order is being Packed 
// 8 seconds : Your order is in transit  
// 10 seconds : Your order is out for delivery 
// 12 seconds : Order delivered