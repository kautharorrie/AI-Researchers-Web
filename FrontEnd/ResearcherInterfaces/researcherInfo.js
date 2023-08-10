    ///// new section for graph code //////

    const urlParams = new URLSearchParams(window.location.search);
  const greetingValue = urlParams.get('greeting');

     // search for the article via author  and load data
     fetch('http://localhost:8080/api/v1/articles/search/Author/'+greetingValue, { mode: 'cors', headers: { 'Access-Control-Allow-Origin':'*' } }) 
     .then(response => response.json()) 
     .then(data => { 
     let article = data; //assign the data (list of articles info) to a variable
     console.log(article);
     let table = document.getElementById("personTable")
     article.forEach(articles => { //loop through the list of Article Objects
        var row = table.insertRow(); //insert a new row into the table
        var rowCount = table.rows.length;
          row.insertCell().innerHTML = articles.id;
          row.insertCell().innerHTML = articles.articleTitle;
           row.insertCell().innerHTML = articles.authors;
           row.insertCell().innerHTML = articles.publication;
           row.insertCell().innerHTML = articles.sourceTitle;
           row.insertCell().innerHTML = articles.keywords;
          row.insertCell().innerHTML = articles.year;
           row.insertCell().innerHTML =  articles.doiLink;
           var element = document.getElementById("articleDOILink");
        element.style.textDecoration = "underline";
        
        
       
        for (const cell of row.cells)//make each row clickable
        {
            cell.onclick = function() {
               if(cell.innerHTML!=="" && cell.innerHTML===articles.doiLink){ 
                  window.open(articles.doiLink);}//prompt doilink to open if its clicked on
               else{
                window.location = "../ArticleInterfaces/ArticleInfo.html?greeting="+row.cells.item(0).innerHTML;
                window.location.href = "../ArticleInterfaces/ArticleInfo.html?greeting="+row.cells.item(0).innerHTML;
                window.open("../ArticleInterfaces/ArticleInfo.html?greeting="+row.cells.item(0).innerHTML);}// prompt articleInfo page to open up if the row is clicked on
               
            };
        }


    });
});
    
     function addObj(n,object){n.push(object);}//function to insert object into array
