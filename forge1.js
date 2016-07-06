function onLoad () {
  var ctx1 = document.getElementById("myChart1");
  var myChart1 = new Chart(ctx1, {
    type: 'bar',
    data: {
      labels: ["Deadlift", "Squats", "Bench", "Overhead Press", "Bent Over Row"],
      datasets: [{
        label: 'Weightlifting',
        data: [350, 250, 200, 95, 135],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
        ],
        borderColor: [
          'rgba(255,99,132,1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
        ],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero:true
          }
        }]
      }
    }
  });

  var ctx2 = document.getElementById("myChart2");
  var myChart2 = new Chart(ctx2, {
    type: 'polarArea',
    data: {
        datasets: [{
            data: [
                11,
                16,
                7,
                3,
                14
            ],
            backgroundColor: [
                "#FF6384",
                "#4BC0C0",
                "#FFCE56",
                "#E7E9ED",
                "#36A2EB"
            ],
            label: 'My dataset' // for legend
        }],
        labels: [
            "Meditate",
            "No Sugar",
            "No Spend",
            "Fresh Vegetables",
            "No Gluten"
        ]
    },
  });
}
