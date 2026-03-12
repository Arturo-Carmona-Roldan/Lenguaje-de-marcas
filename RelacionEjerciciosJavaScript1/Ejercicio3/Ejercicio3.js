function tabla(){

const datos = [
{ alumno: "Ana", n1: 7, n2: 9 },
{ alumno: "Luis", n1: 8, n2: 6 },
{ alumno: "Marta", n1: 10, n2: 9 }
];

let table = document.createElement("table");
table.border = "1";

for(let i=0;i<datos.length;i++){

let tr = document.createElement("tr");

let td1 = document.createElement("td");
let t1 = document.createTextNode(datos[i].alumno);
td1.appendChild(t1);

let td2 = document.createElement("td");
let t2 = document.createTextNode(datos[i].n1);
td2.appendChild(t2);

let td3 = document.createElement("td");
let t3 = document.createTextNode(datos[i].n2);
td3.appendChild(t3);

tr.appendChild(td1);
tr.appendChild(td2);
tr.appendChild(td3);

table.appendChild(tr);

}

document.body.appendChild(table);

}