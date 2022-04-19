// Store cart items in local storage with key: "items"
const url = `https://grocery-masai.herokuapp.com/items`

fetch(url)
.then(function(res){
    return res.json()
})
.then(function(res){
    window.addEventListener("load",function(){
        let c = JSON.parse(localStorage.getItem("items"))
    let count = document.getElementById("item_count")
    count.append(c.length)
        appendData(res.data)
    })
    // console.log(res);
    appendData(res.data)
})
.catch(function(err){
    console.log(err);
})



function appendData(data){
    data.map(function(el){
        let items = document.getElementById("items")
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
        let add = document.createElement("button")
        add.innerText = "Add to Cart"
        add.id = "add_to_cart"
        add.addEventListener("click",function(){
            addToCart(el)
        })
        box.append(img,name,price,add)
        items.append(box)
    })
   

}
let itemsArr = []
let c = JSON.parse(localStorage.getItem("items"))
let count = document.getElementById("item_count")
count.append(c.length)


function addToCart(el){
    console.log(el)
    itemsArr.push(el)
    localStorage.setItem("items",JSON.stringify(itemsArr))
    // document.getElementById("item_count").append(itemsArr.length)
    // window.location.reload()
}
