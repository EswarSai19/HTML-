document.querySelector("#form").addEventListener("submit",homeFunction);

var todoArr = JSON.parse(localStorage.getItem("todoData")) || [];

// if(localStorage.getItem("todoData")==null){
//     todoArr = [];
// }else{
//     todoArr = localStorage.getItem("todoData");
// }
function homeFunction(){
    event.preventDefault();
    var name = document.querySelector("#name").value;
    var quantity = document.querySelector("#qty").value;
    var prior = document.querySelector("#priority").value;
    
    var todoObj = {
        itemName : name,
        itemQty : quantity,
        itemPrior : prior,
    };
    todoArr.push(todoObj);
    console.log(todoArr);
    localStorage.setItem("todoData",JSON.stringify(todoArr))
    
}