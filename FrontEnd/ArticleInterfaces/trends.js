
  /////////////////////////////////////////////////////////////////////////////////////////////////
  // rating per secondary field

  fetch('http://localhost:8080/api/v2/ratingsPerSpecialisations', { mode: 'cors', headers: { 'Access-Control-Allow-Origin':'*' } }) 
  .then(response => response.json()) 
  .then(uniCount => {
    var values = Object.values(uniCount);
    var aArray = [];
    var bArray = [];
    var cArray = [];
    var yArray = [];
    var pArray = [];
    for (var key in uniCount)
    {
      var ratingMap = uniCount[key];

      // check for A rating
      if("A" in ratingMap)
      {
          aArray.push(ratingMap.A);
      }
      else
      {
        aArray.push(0);
      }
      //check for B rating
      if("B" in ratingMap)
      {
        bArray.push(ratingMap.B);
      }
      else
      {
        bArray.push(0);
          
      }
      // check for C rating
      if("C" in ratingMap)
      {
        cArray.push(ratingMap.C);
      }
      else
      {
        cArray.push(0);
      }
      //check for Y rating
      if("Y" in ratingMap)
      {
        yArray.push(ratingMap.Y);      }
      else
      {
        yArray.push(0);
      }
      if("P" in ratingMap)
      {
        pArray.push(ratingMap.P);      }
      else
      {
        pArray.push(0);
      }

      
    }
    console.log(aArray);
    console.log(bArray);
    console.log(cArray);
    console.log(yArray);
    console.log(pArray);
      const data = {
          labels: Object.keys(uniCount),
          label: "Ratings vs Institution",
          datasets: [
  
          {
              label: "A",
              backgroundColor:'rgba(9, 17, 128, 0.849)',
              borderColor:'rgba(9, 17, 128, 0.849)',
              data: aArray
          },
          {
              label: "B",
              backgroundColor:'rgba(11, 78, 26)',
              borderColor:'rgba(11, 78, 26)',
              data: bArray
          },
          {
              label: "C",
              backgroundColor:'rgba(225, 13, 240, 0.87)',
              borderColor:'rgba(225, 13, 240, 0.87)',
              data: cArray          
          },
          {
            label: "Y",
            backgroundColor:'rgba(136, 15, 15, 0.918)',
            borderColor:'rgba(136, 15, 15, 0.918)',
            data: yArray
        },
        {
            label: "P",
            backgroundColor: 'rgba(212, 19, 19)',
            borderColor: 'rgba(212, 19, 19)',
            data: pArray          
        }

              
         ]
          };
          const config = {
            type: 'bar',
            data: data,
            options: 
            {
              //indexAxis: 'y',
              scales: {
                y: {
                  beginAtZero: true
                }
              }
            },
          };

            const institutionCount = new Chart(
              document.getElementById('specialisationRatingCount'),
              config
            );

          

  })


  
  /////////////////////////////////////////////////////////////////////////////////////////////////
  // rating per secondary field

  fetch('http://localhost:8080/api/v2/ratingsPerYear', { mode: 'cors', headers: { 'Access-Control-Allow-Origin':'*' } }) 
  .then(response => response.json()) 
  .then(uniCount => {
    var values = Object.values(uniCount);
    var aArray = [];
    var bArray = [];
    var cArray = [];
    var yArray = [];
    var pArray = [];
    for (var key in uniCount)
    {
      var ratingMap = uniCount[key];

      // check for A rating
      if("A" in ratingMap)
      {
          aArray.push(ratingMap.A);
      }
      else
      {
        aArray.push(0);
      }
      //check for B rating
      if("B" in ratingMap)
      {
        bArray.push(ratingMap.B);
      }
      else
      {
        bArray.push(0);
          
      }
      // check for C rating
      if("C" in ratingMap)
      {
        cArray.push(ratingMap.C);
      }
      else
      {
        cArray.push(0);
      }
      //check for Y rating
      if("Y" in ratingMap)
      {
        yArray.push(ratingMap.Y);      }
      else
      {
        yArray.push(0);
      }
      if("P" in ratingMap)
      {
        pArray.push(ratingMap.P);      }
      else
      {
        pArray.push(0);
      }

      
    }
    console.log(aArray);
    console.log(bArray);
    console.log(cArray);
    console.log(yArray);
    console.log(pArray);
      const data = {
          labels: Object.keys(uniCount),
          label: "Ratings vs Institution",
          datasets: [
  
          {
              label: "A",
              backgroundColor:'rgba(9, 17, 128, 0.849)',
              borderColor:'rgba(9, 17, 128, 0.849)',
              data: aArray
          },
          {
              label: "B",
              backgroundColor:'rgba(11, 78, 26)',
              borderColor:'rgba(11, 78, 26)',
              data: bArray
          },
          {
              label: "C",
              backgroundColor:'rgba(225, 13, 240, 0.87)',
              borderColor:'rgba(225, 13, 240, 0.87)',
              data: cArray          
          },
          {
            label: "Y",
            backgroundColor:'rgba(136, 15, 15, 0.918)',
            borderColor:'rgba(136, 15, 15, 0.918)',
            data: yArray
        },
        {
            label: "P",
            backgroundColor: 'rgba(212, 19, 19)',
            borderColor: 'rgba(212, 19, 19)',
            data: pArray          
        }

              
         ]
          };
          const config = {
            type: 'bar',
            data: data,
            options: 
            {
              //indexAxis: 'y',
              scales: {
                y: {
                  beginAtZero: true
                }
              }
            },
          };

            const institutionCount = new Chart(
              document.getElementById('ratingPerYear'),
              config
            );

          

  })

  fetch('http://localhost:8080/api/v2/totalResearchersPerYear', { mode: 'cors', headers: { 'Access-Control-Allow-Origin':'*' } }) 
  .then(response => response.json()) 
  .then(primaryFieldCount => {
    var values = Object.values(primaryFieldCount);
      const data = {
          labels: Object.keys(primaryFieldCount),

          datasets: [{
              label: 'Total Researchers per Year',
              data: values,
              backgroundColor: [
               'rgba(153, 102, 255)',
              ],
              borderColor: [
               'rgb(153, 102, 255)',
              ],
              borderWidth: 1
          }]
          };

          const config = {
              type: 'line',
              data: data,
              options: {
                //indexAxis: 'y',
                
                scales: {
                  y: {
                    beginAtZero: true
                  }
                }
              },
            };

            const primaryFieldCounts = new Chart(
              document.getElementById('publicationsVsTime'),
              config
            );
  })
/////////////////////////////////////////////////////////
  fetch('http://localhost:8080/api/v1/articles/totalPublicationsPerYear', { mode: 'cors', headers: { 'Access-Control-Allow-Origin':'*' } }) 
  .then(response => response.json()) 
  .then(primaryFieldCount => {
    var values = Object.values(primaryFieldCount);
      const data = {
          labels: Object.keys(primaryFieldCount),

          datasets: [{
              label: 'Total Publications per Year',
              data: values,
              backgroundColor: [
               'rgba(153, 102, 255)',
              ],
              borderColor: [
               'rgb(153, 102, 255)',
              ],
              borderWidth: 1
          }]
          };

          const config = {
              type: 'line',
              data: data,
              options: {
                //indexAxis: 'y',
                
                scales: {
                  y: {
                    beginAtZero: true
                  }
                }
              },
            };

            const primaryFieldCounts = new Chart(
              document.getElementById('publicationsPerYear'),
              config
            );
  })
  fetch('http://localhost:8080/api/v1/sourceTitleVsCited', { mode: 'cors', headers: { 'Access-Control-Allow-Origin':'*' } }) 
.then(response => response.json()) 
.then(uniCount => {
  var keys = Object.keys(uniCount);
  var values = Object.values(uniCount);
    const data = {
        labels: keys, //keys.sort(function(a, b){return a-b}).reverse(),

        datasets: [{
            label: 'Research Title vs Times Cited',
            data: values, //values.sort(function(a, b){return a-b}).reverse(),
            backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            ],
            
            borderColor: [
            'rgb(255, 99, 132)',
            ],
            borderWidth: 1
        }]
        };

        const config = {
            type: 'bar',
            data: data,
            options: {
              indexAxis: 'y',

              scales: {
                y: {
                  beginAtZero: true
                }
              }
            },
          };

          const institutionCount = new Chart(
            document.getElementById('sourceTitleVsCited'),
            config
          );

        

})

fetch('http://localhost:8080/api/v1/mostPopularResearchTitles', { mode: 'cors', headers: { 'Access-Control-Allow-Origin':'*' } }) 
.then(response => response.json()) 
.then(uniCount => {
  var keys = Object.keys(uniCount);
  var values = Object.values(uniCount);
    const data = {
        labels: keys, //keys.sort(function(a, b){return a-b}).reverse(),

        datasets: [{
            label: 'Most Popular Research Titles',
            data: values, //values.sort(function(a, b){return a-b}).reverse(),
            backgroundColor:'rgba(9, 17, 128, 0.849)',
            borderColor:'rgba(9, 17, 128, 0.849)',
            borderWidth: 1
        }]
        };

        const config = {
            type: 'line',
            data: data,
            options: {
              //indexAxis: 'y',
              
              scales: {
                y: {
                  beginAtZero: true
                }
              }
            },
          };

          const institutionCount = new Chart(
            document.getElementById('mostPopularResearchTitles'),
            config
          );

        

})

    ////// pie chart for rating count  //////

  
    fetch('http://localhost:8080/api/v1/mostUsedArticlesPerYear', { mode: 'cors', headers: { 'Access-Control-Allow-Origin':'*' } }) 
    .then(response => response.json()) 
    .then(ratingCount => {
        const data = {
            labels: Object.keys(ratingCount),

            datasets: [{
                label: 'Researchers by Ratings',
                data: Object.values(ratingCount),
                backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(255, 205, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(201, 203, 207, 0.2)', 
                'rgba(11, 78, 26)'
                ],
                borderColor: [
                'rgb(255, 99, 132)',
                'rgb(255, 159, 64)',
                'rgb(255, 205, 86)',
                'rgb(75, 192, 192)',
                'rgb(54, 162, 235)',
                'rgb(153, 102, 255)',
                'rgb(201, 203, 207)', 
                'rgba(11, 78, 26)'
                ],
                borderWidth: 1
            }]
            };

            const config = {
                type: 'line',
                data: data,
                options: 
                {
                  scales: {
                    y: {
                      beginAtZero: true
                    }
                  }
                },
              };

              const ratingCountp = new Chart(
                document.getElementById('mostCitedPerYear'),
                config
              );

          

    })
    
  function changeScreen() {
    // set screen items to hidden and two items to show
    var myClock = document.getElementById('current_column');
    var myClock2 = document.getElementById('coming_soon_column');
    var myClock3 = document.getElementById('current_column2');
    var myClock4 = document.getElementById('coming_soon_column2');
    var myClock5 = document.getElementById('current_column3');
    var myClock6 = document.getElementById('coming_soon_column3');
    var myClock7 = document.getElementById('backContainer');
    // get the current value of the clock's display property


    // also get the clock button, so we can change what it says
    var clockButton = document.getElementById('page');

 // clock is hidden. show it
      myClock.style.display = 'block';
      myClock2.style.display = 'block';
      myClock3.style.display = 'none';
      myClock4.style.display = 'none';
      myClock5.style.display = 'none';
      myClock6.style.display = 'none';
      myClock7.style.display = 'none';
      // change button text
      clockButton.innerHTML = '  page 1/4 ';

  

    
  }
  function rightswap() {
    // change view to the next set of graphs
    var myClock = document.getElementById('current_column');
    var myClock2 = document.getElementById('coming_soon_column');
    var myClock3 = document.getElementById('current_column2');
    var myClock4 = document.getElementById('coming_soon_column2');
    var myClock5 = document.getElementById('current_column3');
    var myClock6 = document.getElementById('coming_soon_column3');
    var myClock7 = document.getElementById('backContainer');
    
    var displaySetting = myClock.style.display;
    var displaySetting2 = myClock2.style.display;
    var displaySetting3 = myClock3.style.display;
    var displaySetting4 = myClock4.style.display;
    var displaySetting5 = myClock5.style.display;
    var displaySetting6 = myClock6.style.display;
    var displaySetting7 = myClock7.style.display;
    
    var clockButton = document.getElementById('page');

    
    if (displaySetting == 'block'&& displaySetting2 == 'block') {
      // change visible graphs to the the second set of two and change the first set to hidden
      myClock.style.display = 'none';
      myClock2.style.display = 'none';
      myClock3.style.display = 'block';
      myClock4.style.display = 'block';
      myClock5.style.display = 'none';
      myClock6.style.display = 'none';
      myClock7.style.display = 'none';
      // change button text to match the set of graphs showing
      clockButton.innerHTML = 'page 2/4';
      
    }
    else if(displaySetting3 == 'block'&& displaySetting4 == 'block'){
      // change visible graphs to the the third set of two and change the second set to hidden
      myClock.style.display = 'none';
      myClock2.style.display = 'none';
      myClock3.style.display = 'none';
      myClock4.style.display = 'none';
      myClock5.style.display = 'block';
      myClock6.style.display = 'block';
      myClock7.style.display = 'none';
      // change button text to match the set of graphs showing
      clockButton.innerHTML = 'page 3/4';

    }
    
    else if(displaySetting5 == 'block'&& displaySetting6 == 'block'){
      // change visible graphs to the the fourth set of two and change the third set to hidden
      myClock.style.display = 'none';
      myClock2.style.display = 'none';
      myClock3.style.display = 'none';
      myClock4.style.display = 'none';
      myClock5.style.display = 'none';
      myClock6.style.display = 'none';
      myClock7.style.display = 'block';
      // change button text to match the set of graphs showing
      clockButton.innerHTML = 'page 4/4';
    }
    else if(displaySetting7 == 'block'){
      // change visible graphs to the the first set of two and change the fourth set to hidden
      myClock.style.display = 'block';
      myClock2.style.display = 'block';
      myClock3.style.display = 'none';
      myClock4.style.display = 'none';
      myClock5.style.display = 'none';
      myClock6.style.display = 'none';
      myClock7.style.display = 'none';
      // change button text to match the set of graphs showing
      clockButton.innerHTML = 'page 1/4';
    }

    
  }
  function leftswap() {
    // change view to the previous set of graphs
    var myClock = document.getElementById('current_column');
     var myClock2 = document.getElementById('coming_soon_column');
     var myClock3 = document.getElementById('current_column2');
     var myClock4 = document.getElementById('coming_soon_column2');
     var myClock5 = document.getElementById('current_column3');
     var myClock6 = document.getElementById('coming_soon_column3');
     var myClock7 = document.getElementById('backContainer');
     // get the current value of the graphs's display property
     var displaySetting = myClock.style.display;
     var displaySetting2 = myClock2.style.display;
     var displaySetting3 = myClock3.style.display;
     var displaySetting4 = myClock4.style.display;
     var displaySetting5 = myClock5.style.display;
     var displaySetting6 = myClock6.style.display;
     var displaySetting7 = myClock7.style.display;
     var clockButton = document.getElementById('page');
       // change visible graphs to the the previous set of two and change the current set to hidden

     if (displaySetting == 'block'&& displaySetting2 == 'block') {
      myClock.style.display = 'none';
       myClock2.style.display = 'none';
       myClock3.style.display = 'none';
       myClock4.style.display = 'none';
       myClock5.style.display = 'none';
       myClock6.style.display = 'none';
       myClock7.style.display = 'block';
      // change button text to match the set of graphs showing
      clockButton.innerHTML = 'page 4/4';
       
     }
     

     else if(displaySetting3 == 'block'&& displaySetting4 == 'block'){
       myClock.style.display = 'block';
       myClock2.style.display = 'block';
       myClock3.style.display = 'none';
       myClock4.style.display = 'none';
       myClock5.style.display = 'none';
       myClock6.style.display = 'none';
       myClock7.style.display = 'none';
      // change button text to match the set of graphs showing
      clockButton.innerHTML = 'page 1/4';
 
     }
     else if(displaySetting5 == 'block'&& displaySetting6 == 'block'){
       myClock.style.display = 'none';
       myClock2.style.display = 'none';
       myClock3.style.display = 'block';
       myClock4.style.display = 'block';
       myClock5.style.display = 'none';
       myClock6.style.display = 'none';
       myClock7.style.display = 'none';
      // change button text to match the set of graphs showing
      clockButton.innerHTML = 'page 2/4';
     }
     else if(displaySetting7 == 'block'){
      myClock.style.display = 'none';
      myClock2.style.display = 'none';
      myClock3.style.display = 'none';
      myClock4.style.display = 'none';
      myClock5.style.display = 'block';
      myClock6.style.display = 'block';
      myClock7.style.display = 'none';
      // change button text to match the set of graphs showing
      clockButton.innerHTML = 'page 3/4';
    }
  }