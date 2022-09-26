



let Names = [];
function addStudentName() {
  let studentAdd = document.getElementById("studentInput").value;
  if (studentAdd != "") {
    Names.push(studentAdd);
    showStudents();
  }
  //  console.log(Names);
}
function showStudents() {
  let showNames = "";
  let counter = 0;

  Names.forEach(
    (name) =>
      (showNames += `
          <li class="list-group-item m-1">
        <p class="display">${name}<span class="float-right">
        <button value="${counter++}" onClick="removeName(this)" class="btn btn-danger">X</button></span></p></li>
          `)
  );
  document.getElementById("display").innerHTML = showNames;
  document.getElementById("studentInput").value = null;
}
function removeName(btnValue) {
  Names.splice(parseInt(btnValue.value), 1);
  showStudents();
}
//  ************************************
function getName() {
  let randomList = "";
  let counter = 0;
  if (Names.length === 0) {
    return;
  }
  var random = Names[Math.floor(Math.random() * Names.length, 1)];
  console.log(random);
  Names.forEach(
    (student) =>
      (randomList += `
        <li class="list-group-item m-5">
      <div class="display">${student}<span class="float-right">
      <button value="${counter++}" onClick="removeName(this)" class="btn btn-warning">X</button></span></div></li>
        `)
  );
}

RandomList();
// ******************************Affecter la date a chaque apprenant*********************************
async function RandomList() {

  try {
    const response = await fetch("DateOff.json");
    console.log(response.json())
    return response.json();
  } 
  catch (err) {
    console.log(err);
  }

}

//*****************************Load and Print JSON*************************//


// let data = 'saida';

// console.log(JSON.stringify(data, null, 2));