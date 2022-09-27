let Names = [];
let showNames = "";
var id = 0;
let Day = moment().format("YYYY-MM-DD");
let display = document.getElementById("display");
let countere = 1;

function addStudentName() {
  let studentAdd = document.getElementById("studentInput").value;
  Names.push(studentAdd);
  var list = "";
  for (let i = 0; i < Names.length; i++) {
    list += Names[i] + "</br>";
  }

  document.getElementById("results").innerHTML = list;
  document.getElementById("studentInput").value = null;
  console.log(list);
}
function getName() {
  if (Names.length === 0) {
    return;
  }
  var random = Names[Math.floor(Math.random() * Names.length, 1)];
  let day = skippingWekeend(Day, countere++);
  let template = `
  <li class="list-group-item m-5">
<div class="display"> student: ${random} ==========> date:${day}</div></li>
  `;
  display.innerHTML += template;

  const randomList = showNames.indexOf(display.innerHTML);
  Names.splice(randomList, 1);
  console.log(Names);
  for (let t = 0; t < Names.length; t++) {
    let studentAdd = document.getElementById("studentInput").value;
    var list = "";
    for (let i = 0; i < Names.length; i++) {
      list += Names[i] + "</br>";
    }
    document.getElementById("results").innerHTML = list;
  }
  if (Names.length === 0) {
    document.getElementById("results").innerHTML = "";
  }
}
function skippingWekeend(date, days) {
  let d = moment(new Date(date)).add(Math.floor(days / 5) * 7, "d");
  let remaining = days % 5;
  while (remaining) {
    d.add(1, "d");
    if (d.day() !== 0 && d.day() !== 6) remaining--;
  }
  return d.format("YYYY-MM-DD");
}
