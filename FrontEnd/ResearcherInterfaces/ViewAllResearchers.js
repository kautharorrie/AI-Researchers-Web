var select = document.getElementById("arr");
var spec=["All","Machine learning","Computer vision", "Deep learning", "Natural language processing", "Neural networks","Brayesian learning", "Monte Carlo Tree Search", "Reinforcement learning","Speech recognition", "Speech processing", "Pattern recognition"];
var selectIn = document.getElementById("arrIn");
var selectRating = document.getElementById("arrRating");
var rating=["All","A","B","C","P","Y"];
var selectField = document.getElementById("arrField");
var field=[];
field.push("All");
institution=[];
institution.push("All");
   

async function loadSpec(){//this function loads in the institution list from the Server
  await fetch('http://localhost:8080/api/v2/specialisationsCount', { mode: 'cors', headers: { 'Access-Control-Allow-Origin':'*' } }) 
  .then(response => response.json()) 
    .then(data => {
    var ins =  Array.from(Object.keys(data).sort());
    for(uni in ins){ 
      var st =ins[uni].toString();
      addObj(spec,st);//add each institution to the array
    }
  });
  for (var i = 0; i < spec.length; i++) {//then it loops through the institutions list and add each to the dropdown
    optni = spec[i];
    var iel = document.createElement("option");
    iel.textContent = optni;
    iel.value = i;
    select.appendChild(iel);
  }
}
//loads institutions
async function loadIns(){//this function loads in the institution list from the Server
  await fetch('http://localhost:8080/api/v2/institutionCount', { mode: 'cors', headers: { 'Access-Control-Allow-Origin':'*' } }) 
  .then(response => response.json()) 
    .then(data => {
    var ins =  Array.from(Object.keys(data).sort());
    for(uni in ins){ 
      var st =ins[uni].toString();
      addObj(institution,st);//add each institution to the array
    }
  });
  for (var i = 0; i < institution.length; i++) {//then it loops through the institutions list and add each to the dropdown
    optni = institution[i];
    var iel = document.createElement("option");
    iel.textContent = optni;
    iel.value = i;
    selectIn.appendChild(iel);
  }
}


//loads primary fields
async function loadField(){//this function loads in the primary fields list from the Server
  await fetch('http://localhost:8080/api/v2/primaryFieldCount', { mode: 'cors', headers: { 'Access-Control-Allow-Origin':'*' } }) 
  .then(response => response.json()) 
    .then(data => {
    var ins =  Array.from(Object.keys(data).sort());
    for(uni in ins){ 
      var st =ins[uni].toString();
      addObj(field,st);//add in each Researcher attribute into cells
    }
  });
  for (var i = 0; i < field.length; i++) {//then it loops through the primary fields list and add each to the dropdown
    var optnf = field[i];
    var fel = document.createElement("option");
    fel.textContent = optnf;
    fel.value = i;
    selectField.appendChild(fel);
  }
  
}

let button = document.querySelector("View_All");//the view all button from the html
let form = document.getElementById("searchForm");// the form that contains the search textbox and button

form.addEventListener("submit", (event)=>{ //searches for the surname
  DeleteRows()//clear filled roles from previous filter loaded
  let table = document.getElementById("personTable")
  var row = table.insertRow();
  event.preventDefault()
  let userInputName = form["inputName"].value       
  //url from the controller class created and  this is how we connect the database to the html file
  //take in user input and add it to the url
  fetch('http://localhost:8080/api/v2/name/'+userInputName, { mode: 'cors', headers: { 'Access-Control-Allow-Origin':'*' } }) 
  .then(response => response.json()) 
  .then(data => {   DeleteRows()//clear out old data loaded
  //get the table, use the table to insert rows and columns
  let table = document.getElementById("personTable")
  let researchers = data; //assign the data (list of researchers) to a variable
  if (researchers.length === 0 )
  {
    console.log("Error")
    var row = table.insertRow(); //insert a new row into the table
      row.insertCell().innerHTML = "";
      row.style.background = "#FF0000";
      row.insertCell().innerHTML = "Researcher \"" + userInputName + "\" doesn't exist, please try again. ";
      row.insertCell().innerHTML = '';
      row.insertCell().innerHTML = '';
      row.insertCell().innerHTML = '';
      row.insertCell().innerHTML = '';
      row.insertCell().innerHTML = '';
      row.insertCell().innerHTML = '';
      row.insertCell().innerHTML = '';
      
      row.insertCell().innerHTML = '';
      
      row.insertCell().innerHTML = '';
      
      row.insertCell().innerHTML = '';
     
  }
    researchers.forEach(researcher => { //loop through the list of Researcher Objects
      var row = table.insertRow(); //insert a new row into the table

       for (let key in researcher){ //loop through each Researcher object
        row.insertCell().innerHTML = researcher[key]; //add in each Researcher attribute into cells
      }

      
       
        for (const cell of row.cells)
        {
            cell.onclick = function() {                 
               
                window.location = "researcherInfo.html?greeting="+row.cells.item(1).innerHTML;
                window.location.href = "researcherInfo.html?greeting="+row.cells.item(1).innerHTML;
                window.open("researcherInfo.html?greeting="+row.cells.item(1).innerHTML);// prompt researcherInfo page to open up if the row is clicked on
            };
        }
        
    });
  });
}) ;  
//view all button functionality
document.getElementById("View_All").addEventListener('click', (event)=>{event.preventDefault() 
viewAll()}); 
function viewAll() {
  //the next lines until alert reset the dropdowns to all so that it matches the fact that all the researchers are displayed
  select.selectedIndex="0";//reset selected index to 0 which is the All item in the array
  selectIn.selectedIndex="0";
  selectRating.selectedIndex="0";
  selectField.selectedIndex="0";
 //below code load in the researchers data
  fetch('http://localhost:8080/api/v2/researchers', { mode: 'cors', headers: { 'Access-Control-Allow-Origin':'*' } }) 
  .then(response => response.json()) 
  .then(data => {
   DeleteRows()//clear out old data loaded
    //get the table, use the table to insert rows and columns
    let table = document.getElementById("personTable")
    let researchers = data; //assign the data (list of researchers) to a variable
      researchers.forEach(researcher => { //loop through the list of Researcher Objects
        var row = table.insertRow(); //insert a new row into the table

         for (let key in researcher){ //loop through each Researcher object
          row.insertCell().innerHTML = researcher[key]; //add in each Researcher attribute into cells
        }
       
        for (const cell of row.cells)
        {
            cell.onclick = function() {
                 
               
                window.location = "researcherInfo.html?greeting="+row.cells.item(1).innerHTML;
                window.location.href = "researcherInfo.html?greeting="+row.cells.item(1).innerHTML;
                window.open("researcherInfo.html?greeting="+row.cells.item(1).innerHTML);// prompt researcherInfo page to open up if the row is clicked on
            };
        }
             
      });
     });
    }

 function addObj(n,object){if(!n.includes(object)){
  n.push(object);}}//function to insert object into array
 
  
  function LoadAll() {
    loadSpec()
    loadIns()//calls function to load in the institutions data from server
    //calls function to load in the primary fields data from server
   
    for (var i = 0; i < rating.length; i++) {// it loops through the rating list and add each to the dropdown
      var optnr = rating[i];
      var rel = document.createElement("option");
      rel.textContent = optnr;
      rel.value = i;
      selectRating.appendChild(rel);
    }
    loadField()
viewAll()
   
  }

  function sendRequest()
  {
    var gettextT = select.options[select.selectedIndex].text; //fetches the text of the selected item
    var gettextI = selectIn.options[selectIn.selectedIndex].text;
    var gettextR = selectRating.options[selectRating.selectedIndex].text;
    var gettextF = selectField.options[selectField.selectedIndex].text; 
    
    var t ='filter/title/'+gettextT+'/institution/'+ gettextI+'/rating/'+gettextR+'/field/'+gettextF;//combines fetched text to the string that will be added to url
    if(t==='filter/title/All/institution/All/rating/All/field/All'){t='researchers'}//checks if all the selected texts are = to All and if so changes to researchers
    fetch('http://localhost:8080/api/v2/'+t, { mode: 'cors', headers: { 'Access-Control-Allow-Origin':'*' } }) //load the data 
      .then(response => response.json()) 
      .then(data => {
        DeleteRows()//clears all the old records on the table
        let table = document.getElementById("personTable")
        let researchers = data; //assign the data (list of researchers) to a variable
          researchers.forEach(researcher => { //loop through the list of Researcher Objects
          var row = table.insertRow(); //insert a new row into the table
          for (let key in researcher){ //loop through each Researcher object
            row.insertCell().innerHTML = researcher[key]; //add in each Researcher attribute into cells
          }


          var rowCount = table.rows.length;
       
        for (const cell of row.cells)
        {
            cell.onclick = function() {
                 
               
                window.location = "researcherInfo.html?greeting="+row.cells.item(1).innerHTML;
                window.location.href = "researcherInfo.html?greeting="+row.cells.item(1).innerHTML;
                window.open("researcherInfo.html?greeting="+row.cells.item(1).innerHTML);// prompt researcherInfo page to open up if the row is clicked on
            };
        }
         
        });
      });
  }
  function DeleteRows() {//clear all the old rows from the table that were previously displayed.
    let table = document.getElementById("personTable")
    var rowCount = table.rows.length;
    if (rowCount>1){
      for (var i = rowCount - 1; i > 0; i--) {
        table.deleteRow(i);
      }
    }
  }
