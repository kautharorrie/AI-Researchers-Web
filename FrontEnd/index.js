
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

