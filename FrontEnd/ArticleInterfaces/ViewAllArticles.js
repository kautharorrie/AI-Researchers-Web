
var selectCol = document.getElementById("col");
var col=["Title","Author","Keyword", "ISSN"];


let button = document.querySelector("View_All");//the view all button from the html
let form = document.getElementById("searchForm");// the form that contains the search textbox and button

form.addEventListener("submit", (event)=>{ //searches for the surname
  DeleteRows()//clear filled roles from previous filter loaded
  let table = document.getElementById("personTable")
  var row = table.insertRow();
  var gettextC = selectCol.options[selectCol.selectedIndex].text;
  
  event.preventDefault()
  let userInputName = form["inputName"].value       
  //url from the controller class created and  this is how we connect the database to the html file
  //take in user input and add it to the url
  fetch('http://localhost:8080/api/v1/articles/search/'+gettextC+'/'+userInputName, { mode: 'cors', headers: { 'Access-Control-Allow-Origin':'*' } }) 
  .then(response => response.json()) 
  .then(data => { DeleteRows()//clear out old data loaded
  //get the table, use the table to insert rows and columns
  let table = document.getElementById("personTable")
  let articles = data; //assign the data (list of researchers) to a variable
  console.log(articles)
  console.log(articles.length);
  if (articles.length === 0 )
  {
    console.log("Error")
    var row = table.insertRow(); //insert a new row into the table\
    row.style.background = "#FF0000";
      row.insertCell().innerHTML = gettextC + " \"" + userInputName + "\" doesn't exist, please try again. ";
      row.insertCell().innerHTML = '';
      row.insertCell().innerHTML = '';
      row.insertCell().innerHTML = '';
      row.insertCell().innerHTML = '';
      row.insertCell().innerHTML = '';
      row.insertCell().innerHTML = '';
      row.insertCell().innerHTML = '';
    }
    articles.forEach(article => { //loop through the list of Researcher Objects
      var row = table.insertRow(); //insert a new row into the table
      row.insertCell().innerHTML = article.id;
      row.insertCell().innerHTML = article.articleTitle;
       row.insertCell().innerHTML = article.authors;
       row.insertCell().innerHTML = article.publication;
       row.insertCell().innerHTML = article.sourceTitle;
       row.insertCell().innerHTML = article.keywords;
      row.insertCell().innerHTML = article.year;
       row.insertCell().innerHTML = article.doiLink;

var rowCount = table.rows.length;
       
for (const cell of row.cells)
{
    cell.onclick = function() {
       if(cell.innerHTML!=="" && cell.innerHTML===articles.doiLink){ 
          window.open(articles.doiLink);}
       else{
        window.location = "articleInfo.html?greeting="+row.cells.item(0).innerHTML;
          window.location.href = "articleInfo.html?greeting="+row.cells.item(0).innerHTML;
         window.open("articleInfo.html?greeting="+row.cells.item(0).innerHTML);}
    };
} 
    });
  });
}) ;  
//view all button functionality
document.getElementById("View_All").addEventListener('click', (event)=>{ 
  event.preventDefault()
viewAll()});
  function viewAll() {
  //the next lines until alert reset the dropdowns to all so that it matches the fact that all the researchers are displayed
  
  //below code load in the researchers data
  fetch('http://localhost:8080/api/v1/researchArticles', { mode: 'cors', headers: { 'Access-Control-Allow-Origin':'*' } })
  .then(response => response.json()) 
  .then(data => {
   DeleteRows()//clear out old data loaded
    //get the table, use the table to insert rows and columns
    let table = document.getElementById("personTable")
    let articles = data; //assign the data (list of researchers) to a variable
      articles.forEach(articles => { //loop through the list of Researcher Objects
        var row = table.insertRow(); 
          row.insertCell().innerHTML = articles.id;
          row.insertCell().innerHTML = articles.articleTitle;
           row.insertCell().innerHTML = articles.authors;
           row.insertCell().innerHTML = articles.publication;
           row.insertCell().innerHTML = articles.sourceTitle;
           row.insertCell().innerHTML = articles.keywords;
          row.insertCell().innerHTML = articles.year;
           row.insertCell().innerHTML = articles.doiLink;
         
        var rowCount = table.rows.length;
       
        for (const cell of row.cells)
        {
            cell.onclick = function() {
               if(cell.innerHTML!=="" && cell.innerHTML===articles.doiLink){ 
                 // window.location = articles.doiLink;
                 // window.location.href = articles.doiLink;
                  window.open(articles.doiLink);}
               else{
                window.location = "articleInfo.html?greeting="+row.cells.item(0).innerHTML;
                  window.location.href = "articleInfo.html?greeting="+row.cells.item(0).innerHTML;
                 window.open("articleInfo.html?greeting="+row.cells.item(0).innerHTML);}
            };
        }
        }); });
      }

 function addObj(n,object){n.push(object);}//function to insert object into array
 
  
  function LoadAll() {
    for (var i = 0; i < col.length; i++) {// it loops through the rating list and add each to the dropdown
      var optnr = col[i];
      var rel = document.createElement("option");
      rel.textContent = optnr;
      rel.value = i;
      selectCol.appendChild(rel);
    }

  viewAll()
  }

  function DeleteRows() {//clear all the old rows from the table that were previously displayed.
    let table = document.getElementById("personTable")
    var rowCount = table.rows.length;
    if (rowCount>1){
      for (var i = rowCount - 1; i > 0; i--) {
        table.deleteRow(i);
      }
    }}