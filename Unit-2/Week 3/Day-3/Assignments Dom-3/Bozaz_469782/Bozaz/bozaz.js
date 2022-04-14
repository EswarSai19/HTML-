
document.querySelector("form").addEventListener("submit",productDetails);
function productDetails(){
    event.preventDefault();
    var category = document.querySelector("#category").value;
    var productName = document.querySelector("#name").value;
    var Price = document.querySelector("#price").value;

    var tr = document.createElement("tr")
    var td1 = document.createElement("td");
    td1.innerText = category;
    var td2 = document.createElement("td");
    td2.innerText = productName;
    var td3 = document.createElement("td");
    td3.innerText = Price;
   
    tr.append(td1,td2,td3);
    document.querySelector("tbody").append(tr);

}
