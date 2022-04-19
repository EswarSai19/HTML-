


let  cartItems = JSON.parse(localStorage.getItem("items"))
console.log(cartItems);

window.addEventListener("load",function(){
    displayItems(cartItems)
})


function displayItems(cartItems){
    let cart = document.getElementById("cart")
    cart.innerText = ""
    
    cartItems.map(function(el,i){
    
        let box = document.createElement("div")
        box.id = "box"
        let img = document.createElement("img")
        img.src = el.image
        img.style.width = "100%"
        img.style.height = "300px"
        let name = document.createElement("h3")
        name.innerText = `Name : ${el.name}`
        name.style.textAlign = "center"
        let price = document.createElement("p")
        price.innerText = `Price : ${el.price}`
        price.style.textAlign = "center"
        let remove = document.createElement("button")
            remove.innerText = "Remove"
            remove.id = "remove"
            remove.addEventListener("click",function(){
                removeItem(el,i)
            })
        
        box.append(img,name,price,remove)
        cart.append(box)
        
    })
}

 
function removeItem(el,i){
    cartItems.splice(i,1)
    localStorage.setItem("items",JSON.stringify(cartItems))
    cartItems = JSON.parse(localStorage.getItem("items"))
    window.location.reload()
    displayItems(cartItems)
}
let sum = 0
for(let i=0; i<cartItems.length; i++){
    sum += cartItems[i].price
    
}
let totalPrice = document.getElementById("cart_total")
totalPrice.innerText = `${sum}`