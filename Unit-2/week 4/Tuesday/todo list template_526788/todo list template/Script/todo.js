var todoList = JSON.parse(localStorage.getItem("todoData"));
var completed = JSON.parse(localStorage.getItem("completedList")) || [];
var todoList = todoList.forEach(function (el) {
    var tr = document.createElement("tr");
    var td1 = document.createElement("td");
    td1.innerText = el.itemName;
    var td2 = document.createElement("td");
    td2.innerText = el.itemQty;
    var td3 = document.createElement("td");
    td3.innerText = el.itemPrior;
    var td4 = document.createElement("td");
    td4.textContent = "Completed";
    td4.style.color = "red";
    td4.style.cursor = "pointer"
    td4.addEventListener("click",function(){
        markCompletedFun(el);
    })
    tr.append(td1,td2,td3,td4);

    document.querySelector("tbody").append(tr);
});

function markCompletedFun(el){
    completed.push(el);
    console.log(completed);
    localStorage.setItem("completedList",JSON.stringify(completed));
}
