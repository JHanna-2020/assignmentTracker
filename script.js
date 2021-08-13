var arr = new Array();
function addBook() {
  getBook();
  arr.push({
    bookTitleInput: document.getElementById("assignment").value,
    authorInput: document.getElementById("classes").value,
    genreSelect: document.getElementById("grade").value,
    completion: document.getElementById("completion").value
  });
  localStorage.setItem("Task", JSON.stringify(arr));
}
function getBook() {
    var str = localStorage.getItem("Task");
    if (str != null) {
      arr = JSON.parse(str);
    }
  }

function updateTable(){
    getBook();
    var table = document.getElementById("myAssignments");
    var x = table.rows.length;
    while(--x){
        table.deleteRow(x);
    }
    for(i=0; i<arr.length; i++){
        var assignment = document.getElementById("assignments");
        var classes = document.getElementById("classes");
        var grade = document.getElementById("grade");
        var row =1; 
        var newRow = table.insertRow(row);
        var cell1 = newRow.insertCell(0);
        var cell2 = newRow.insertCell(1);
        var cell3 = newRow.insertCell(2);
        var cell4 = newRow.insertCell(3);
        cell1.innerHTML = arr[i].bookTitleInput;
        cell2.innerHTML = arr[i].authorInput;
        cell3.innerHTML = arr[i].genreSelect;
        cell4.innerHTML = arr[i].completion;    

    }
}
function clearLocalStorage(){
    localStorage.clear();
}