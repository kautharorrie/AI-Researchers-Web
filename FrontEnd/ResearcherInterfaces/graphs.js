  // institution count graph 

  fetch('http://localhost:8080/api/v2/institutionCount', { mode: 'cors', headers: { 'Access-Control-Allow-Origin':'*' } }) 
  .then(response => response.json()) 
  .then(uniCount => {
    var keys = Object.keys(uniCount);
    var values = Object.values(uniCount);
      const data = {
          labels: keys, //keys.sort(function(a, b){return a-b}).reverse(),

          datasets: [{
              label: 'Researchers by Institutions',
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
              document.getElementById('institutionCount'),
              config
            );

          

  })



  ///////////////////////////////////////////////////////////////////////////////
  
  ////// pie chart for rating count  //////

  
  fetch('http://localhost:8080/api/v2/ratingCount', { mode: 'cors', headers: { 'Access-Control-Allow-Origin':'*' } }) 
  .then(response => response.json()) 
  .then(ratingCount => {
      const data = {
          labels: Object.keys(ratingCount),

          datasets: [{
              label: 'Researchers by Ratings',
              data: Object.values(ratingCount),
              backgroundColor: [
              'rgba(255, 99, 132, 0.5)',
              'rgba(255, 159, 64, 0.5)',
              'rgba(255, 205, 86, 0.5)',
              'rgba(75, 192, 192, 0.5)',
              'rgba(54, 162, 235, 0.5)',
              'rgba(153, 102, 255, 0.5)',
              'rgba(201, 203, 207, 1.5)'
              ],
              borderColor: [
              'rgb(255, 99, 132)',
              'rgb(255, 159, 64)',
              'rgb(255, 205, 86)',
              'rgb(75, 192, 192)',
              'rgb(54, 162, 235)',
              'rgb(153, 102, 255)',
              'rgb(201, 203, 207)'
              ],
              borderWidth: 1
          }]
          };

          const config = {
              type: 'pie',
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

            const ratingCountc = new Chart(
              document.getElementById('ratingCount'),
              config
            );

        

  })

  
  ///////////////////////////////////////////////////////////////////////////////
  
  // bar graph for primary field count
  
  fetch('http://localhost:8080/api/v2/primaryFieldCount', { mode: 'cors', headers: { 'Access-Control-Allow-Origin':'*' } }) 
  .then(response => response.json()) 
  .then(primaryFieldCount => {
    var values = Object.values(primaryFieldCount);
      const data = {
          labels: Object.keys(primaryFieldCount),

          datasets: [{
              label: 'Researchers by Primary Field',
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

            const primaryFieldCounts = new Chart(
              document.getElementById('primaryFieldCount'),
              config
            );
  })
  
 ///////////////////////////////////////////////////////////////////////////////
  
  // bar graph for primary field count
  
  fetch('http://localhost:8080/api/v2/secondaryFieldCount', { mode: 'cors', headers: { 'Access-Control-Allow-Origin':'*' } }) 
  .then(response => response.json()) 
  .then(secondaryFieldCount => {
    var values = Object.values(secondaryFieldCount);
      const data = {
          labels: Object.keys(secondaryFieldCount),

          datasets: [{
              label: 'Researchers by Secondary Field',
              data: values,
              backgroundColor: 'rgba(29, 150, 35)',  
              borderColor:  'rgb(29, 150, 35)',
              borderWidth: 1
          }]
          };

          const config = {
              type: 'bar',
              data: data,
              options: 
              {
                indexAxis: 'y',
                scales: {
                  y: {
                    beginAtZero: true
                  }
                }
              },
            };

            const secondaryFieldCounts = new Chart(
              document.getElementById('secondaryFieldCount'),
              config
            );
  })

  //the table for the institution count with graph next to it
  fetch('http://localhost:8080/api/v2/ratingForInstitution', { mode: 'cors', headers: { 'Access-Control-Allow-Origin':'*' } }) 
  .then(response => response.json())
  .then(data => {
    let table = document.getElementById("ratingInstitutionTable")
    console.log(data);
    //var row = insertRow().innerText
      var total = 0;
      var count = 1;
    for (var key in data)
    {
      var row = table.insertRow()
      row.insertCell().innerHTML = count;
      count++;
      row.insertCell().innerHTML = key;
      var ratingMap = data[key];

      // check for A rating
      if("A" in ratingMap)
      {
          row.insertCell().innerHTML = ratingMap.A;
          total = total + ratingMap.A;
      }
      else
      {
        
          row.insertCell().innerHTML = 0;
          
      }
      //check for B rating
      if("B" in ratingMap)
      {
          row.insertCell().innerHTML = ratingMap.B;
          total = total + ratingMap.B;
      }
      else
      {
          row.insertCell().innerHTML = 0;
      }
      // check for C rating
      if("C" in ratingMap)
      {
          row.insertCell().innerHTML = ratingMap.C;
          total = total + ratingMap.C;
      }
      else
      {
          row.insertCell().innerHTML = 0;
      }
      //check for Y rating
      if("Y" in ratingMap)
      {
          row.insertCell().innerHTML = ratingMap.Y;
          total = total + ratingMap.Y;
      }
      else
      {
          row.insertCell().innerHTML = 0;
      }

      if("P" in ratingMap)
      {
        row.insertCell().innerHTML = ratingMap.P;
        total = total + ratingMap.P;
      }
      else
      {
          row.insertCell().innerHTML = 0;
      }

      row.insertCell().innerHTML = total;
      total = 0;
    }


  })

  ////////////////////////////////////////////////////////////////////////////////////////////

  //the table for the primary field count with graph next to it
  fetch('http://localhost:8080/api/v2/ratingForPrimaryFields', { mode: 'cors', headers: { 'Access-Control-Allow-Origin':'*' } }) 
  .then(response => response.json())
  .then(data => {
    let table = document.getElementById("ratingPrimaryFieldTable")
    
    //var row = insertRow().innerText
      var total = 0;
      var count = 1;
    for (var key in data)
    {
      var row = table.insertRow()
      row.insertCell().innerHTML = count;
      count++;
      row.insertCell().innerHTML = key;
      var ratingMap = data[key];

      // check for A rating
      if("A" in ratingMap)
      {
          row.insertCell().innerHTML = ratingMap.A;
          total = total + ratingMap.A;
      }
      else
      {
          row.insertCell().innerHTML = 0;
      }
      //check for B rating
      if("B" in ratingMap)
      {
          row.insertCell().innerHTML = ratingMap.B;
          total = total + ratingMap.B;
      }
      else
      {
          row.insertCell().innerHTML = 0;
      }
      // check for C rating
      if("C" in ratingMap)
      {
          row.insertCell().innerHTML = ratingMap.C;
          total = total + ratingMap.C;
      }
      else
      {
          row.insertCell().innerHTML = 0;
      }
      //check for Y rating
      if("Y" in ratingMap)
      {
          row.insertCell().innerHTML = ratingMap.Y;
          total = total + ratingMap.Y;
      }
      else
      {
          row.insertCell().innerHTML = 0;
      }

      if("P" in ratingMap)
      {
          row.insertCell().innerHTML = ratingMap.P;
          total = total + ratingMap.P;
      }
      else
      {
          row.insertCell().innerHTML = 0;
      }

      row.insertCell().innerHTML = total;
      total = 0;
    }


  })

////////////////////////////////////////////////secondary 

//the table for the secondary field count with graph next to it
fetch('http://localhost:8080/api/v2/ratingForSecondaryFields', { mode: 'cors', headers: { 'Access-Control-Allow-Origin':'*' } }) 
  .then(response => response.json())
  .then(data => {
    let table = document.getElementById("ratingSecondaryFieldTable")
    
    //var row = insertRow().innerText
    console.log(data)
      var total = 0;
      var count = 1;
    for (var key in data)
    {
      var row = table.insertRow()
      row.insertCell().innerHTML = count;
      count++;
      row.insertCell().innerHTML = key;
      var ratingMap = data[key];

      // check for A rating
      if("A" in ratingMap)
      {
          row.insertCell().innerHTML = ratingMap.A;
          total = total + ratingMap.A;
      }
      else
      {
          row.insertCell().innerHTML = 0;
      }
      //check for B rating
      if("B" in ratingMap)
      {
          row.insertCell().innerHTML = ratingMap.B;
          total = total + ratingMap.B;
      }
      else
      {
          row.insertCell().innerHTML = 0;
          
      }
      // check for C rating
      if("C" in ratingMap)
      {
          row.insertCell().innerHTML = ratingMap.C;
          total = total + ratingMap.C;
      }
      else
      {
          row.insertCell().innerHTML = 0;
      }
      //check for Y rating
      if("Y" in ratingMap)
      {
          row.insertCell().innerHTML = ratingMap.Y;
          total = total + ratingMap.Y;
      }
      else
      {
          row.insertCell().innerHTML = 0;
      }
      if("P" in ratingMap)
      {
          row.insertCell().innerHTML = ratingMap.P;
          total = total + ratingMap.P;
      }
      else
      {
          row.insertCell().innerHTML = 0;
      }
      row.insertCell().innerHTML = total;
      total = 0;
    }


  })
  
fetch('http://localhost:8080/api/v2/ratingForInstitution', { mode: 'cors', headers: { 'Access-Control-Allow-Origin':'*' } }) 
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
              document.getElementById('institutionRatingCount'),
              config
            );

          

  })      

  /////////////////////////////////////////////////////////////////////////////////////////////////
  // rating per primary field

  fetch('http://localhost:8080/api/v2/ratingForPrimaryFields', { mode: 'cors', headers: { 'Access-Control-Allow-Origin':'*' } }) 
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
              indexAxis: 'y',
              scales: {
                y: {
                  beginAtZero: true
                }
              }
            },
          };

            const institutionCount = new Chart(
              document.getElementById('primaryFieldsRatingCount'),
              config
            );

          

  })      

  /////////////////////////////////////////////////////////////////////////////////////////////////
  // rating per secondary field

  fetch('http://localhost:8080/api/v2/ratingForSecondaryFields', { mode: 'cors', headers: { 'Access-Control-Allow-Origin':'*' } }) 
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
              indexAxis: 'y',
              scales: {
                y: {
                  beginAtZero: true
                }
              }
            },
          };

            const institutionCount = new Chart(
              document.getElementById('secondaryFieldsRatingCount'),
              config
            );

          

  })

  function changeScreen() {
    // get the graphs displayed
    var graph1 = document.getElementById('current_column');
    var graph2 = document.getElementById('coming_soon_column');
    // get the current value of the graphs's display property
    var displaySetting = graph1.style.display;
    var displaySetting2 = graph2.style.display;

    // also get the graph button, so we can change what it says
    var graphbtn = document.getElementById('changebtn');

    // now toggle the graph and the button text, depending on current state
    if (displaySetting == 'block'&& displaySetting2 == 'block') {
      // clock is visible. hide it
      graph1.style.display = 'none';
      graph2.style.display = 'none';
      // change button text
      graphbtn.innerHTML = 'show table';
      
    }
    else {
      // graphs are hidden. show it
      graph1.style.display = 'block';
      graph2.style.display = 'block';
      // change button text
      graphbtn.innerHTML = 'Show table';

    }

    var graph3 = document.getElementById('backContainer');

    // get the current value of the graph's display property
    var displaySetting3 = graph1.style.display;


    // now toggle the graphs and the button text, depending on current state
    if (displaySetting3 == 'block') {
      // graphs are visible. hide it
      graph3.style.display = 'none';
      // change button text
      graphbtn.innerHTML = 'Show table';
    }
    else {
      // table is hidden. show it
      graph3.style.display = 'block';
      // change button text
      graphbtn.innerHTML = 'show graphs';
    }
  }