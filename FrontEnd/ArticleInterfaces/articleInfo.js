    ///// new section for graph code //////

    const urlParams = new URLSearchParams(window.location.search);
  const greetingValue = urlParams.get('greeting');

     // search for the article id and load data
     fetch('http://localhost:8080/api/v1/articles/fetchbyid/'+greetingValue, { mode: 'cors', headers: { 'Access-Control-Allow-Origin':'*' } }) 
     .then(response => response.json()) 
     .then(data => { 
     let article = data; //assign the data (list of articles info) to a variable
     document.getElementById("title_item1").innerHTML=article.articleTitle;
     
     document.getElementById("source_title").innerHTML=article.sourceTitle;
     document.getElementById("Article_abb").innerHTML=article.abbreviation;
     
     document.getElementById("author").innerHTML=article.authors;
     document.getElementById("author_full").innerHTML=article.fullNames;

     document.getElementById("pub_title").innerHTML=article.publication;
     document.getElementById("pub_date").innerHTML=article.year;
     
     document.getElementById("language").innerHTML=article.language;
     document.getElementById("citedcount").innerHTML=article.citedCount;
     document.getElementById("dayusage").innerHTML=article.dayUsageCount;
     document.getElementById("sinceusage").innerHTML=article.sinceUsageCount;
    
    
     

     document.getElementById("conf_title").innerHTML=article.conferenceTitle;
     document.getElementById("conf_location").innerHTML=article.conferenceLocation;
     document.getElementById("conf_date").innerHTML=article.conferenceDate;
     document.getElementById("DOI_number").innerHTML=article.doi;
     document.getElementById("DOI").innerHTML=article.doiLink;
     document.getElementById("ISBN/ISSN").innerHTML=article.issn;
     document.getElementById("doc_type").innerHTML=article.documentType;
     document.getElementById("Author_Keyword").innerHTML=article.keywords+"; "+article.keywordPlus;     
     
     document.getElementById("Abstract").innerHTML=article.articleAbstract;
     document.getElementById("DOI").onclick =function(){  window.open(article.doiLink);}
       });
    
     function addObj(n,object){n.push(object);}//function to insert object into array
