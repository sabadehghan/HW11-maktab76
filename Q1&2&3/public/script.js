// question 1

document.getElementById("primary").style.backgroundColor = "#93c5fd";
document.getElementById("secondary").style.backgroundColor = "#9ca3af";
document.getElementById("success").style.backgroundColor = "#99f6e4";
document.getElementById("danger").style.backgroundColor = "#fca5a5";
document.getElementById("warning").style.backgroundColor = "#fde68a";
document.getElementById("info").style.backgroundColor = "#67e8f9";
document.getElementById("light").style.backgroundColor = "#fffbeb";
document.getElementById("dark").style.backgroundColor = "#171717";
document.getElementById("dark").style.color = "#fafafa";

// question 2

let button = document.createElement("button");
button.innerHTML = "Remove";
button.style.backgroundColor = "pink";
button.style.padding = "15px 30px";
let table = document.getElementById("table");
let parentDiv = table.parentNode;
parentDiv.insertBefore(button, table);
button.setAttribute("onclick", "deleteRow()");

function deleteRow() {
  let tr = document.querySelectorAll("tr");
  for (let i = 1; i <= 5; i++) {
    tr[i].parentElement.removeChild(tr[i]);
  }
}

// another solution

// button.onclick = function (){
//   const element1 = document.getElementById('default');
//   element1.parentNode.removeChild(element1);
//   const element2 = document.getElementById('primary');
//   element2.parentNode.removeChild(element2);
//   const element3 = document.getElementById('secondary');
//   element3.parentNode.removeChild(element3);
//   const element4 = document.getElementById('success');
//   element4.parentNode.removeChild(element4);
//   const element5 = document.getElementById('danger');
//   element5.parentNode.removeChild(element5);
// }

// // question 3

let table2 = document.getElementById("table");
let btn = document.createElement("button");
btn.innerHTML = "Add";
btn.style.backgroundColor = "pink";
btn.style.padding = "15px 40px";
btn.setAttribute("onclick", "addRow()");
table.after(btn);

function addRow() {
  let firstRow = document.getElementById("table").insertRow(10);
  let secondRow = document.getElementById("table").insertRow(11);
  let thirdRow = document.getElementById("table").insertRow(12);

  let tr1Td1 = firstRow.insertCell(0);
  let tr1Td2 = firstRow.insertCell(1);
  let tr1Td3 = firstRow.insertCell(2);
  tr1Td1.innerHTML = "Pink";
  tr1Td2.innerHTML = "Cell";
  tr1Td3.innerHTML = "Cell";
  firstRow.style.backgroundColor = "#db2777";

  let tr2Td1 = secondRow.insertCell(0);
  let tr2Td2 = secondRow.insertCell(1);
  let tr2Td3 = secondRow.insertCell(2);
  tr2Td1.innerHTML = "Orange";
  tr2Td2.innerHTML = "Cell";
  tr2Td3.innerHTML = "Cell";
  secondRow.style.backgroundColor = "#fb923c";

  let tr3Td1 = thirdRow.insertCell(0);
  let tr3Td2 = thirdRow.insertCell(1);
  let tr3Td3 = thirdRow.insertCell(2);
  tr3Td1.innerHTML = "Purpule";
  tr3Td2.innerHTML = "Cell";
  tr3Td3.innerHTML = "Cell";
  thirdRow.style.backgroundColor = "#9333ea";
}
