// write code here, dont change anything in HTML and css files 
// refer to id's mentioned in html files carefully
// Follow the exact column order for tables,for eg: name should be filled under "name" column 
// we are using form here, make sure you are using "submit" eventListener , or else you will get 0 marks


document.querySelector("form").addEventListener("submit",studentRankCard);
function studentRankCard(){
    event.preventDefault();
    var studenetImage = document.querySelector("#image").value;
    var studentName = document.querySelector("#name").value;
    var batch = document.querySelector("#batch").value;
    var dsa = +document.querySelector("#dsa").value;
    var cs =  +document.querySelector("#cs").value;
    var coding = +document.querySelector("#coding").value;

    var tr = document.createElement("tr");
    var td1 = document.createElement("td");
   var image = document.createElement("img")
   image.src = studenetImage;
   td1.append(image);
    var td2 = document.createElement("td");
    td2.innerText =  studentName;
    var td3 = document.createElement("td");
    td3.innerText =  batch;
    var td4 = document.createElement("td");
    td4.innerText =  dsa;
    var td5 = document.createElement("td");
    td5.innerText =  cs;
    var td6 = document.createElement("td");
    td6.innerText =  coding;
    var td7 = document.createElement("td");
    var obtained_score = eval(dsa+cs+coding);
    var total_score = 30;
    td7.innerText = (obtained_score/total_score)*100;
     var td8 = document.createElement("td");
     if(td7.innerText<=50){
          td8.innerText = "Async";
          td8.style.backgroundColor = "red";
     }else if(td7.innerText>50){
        td8.innerText = "Regular";
        td8.style.backgroundColor = "green";
     }
     tr.append(td1,td2,td3,td4,td5,td6,td7,td8);
     document.querySelector("tbody").append(tr);
}

