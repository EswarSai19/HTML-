var displayItems = JSON.parse(localStorage.getItem("data"));
// console.log(displayItems)
displayItems.map(function(el,i){
    let box = document.createElement("div")
    box.id = "box"
    let img_div = document.createElement("div")
    img_div.id = "img_div"
    let image = document.createElement("img")
    image.src = el.image;
    image.style.width = "100%"
    image.style.height = "100%"
    
    img_div.append(image)
    let brand = document.createElement("h1")
    brand.innerText = el.brand;
    let name = document.createElement("h2")
    name.innerText = el.name;
    let price = document.createElement("p")
    price.innerText = el.price;
    let rem_btn = document.createElement("button")
    rem_btn.id = "remove_product"
    rem_btn.innerText = "Remove"
    rem_btn.addEventListener("click", function(){
        removeFun(el,i)
    })
    box.append(img_div,brand,name,price,rem_btn)
    console.log(box);
    document.querySelector("#products_data").append(box)


})

function removeFun(el,i){
    displayItems.splice(i,1)
    localStorage.setItem("data",JSON.stringify(displayItems))
    window.location.reload()
}