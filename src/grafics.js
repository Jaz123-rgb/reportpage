//line
var ctxL = document.getElementById("lineChart").getContext('2d');
var myLineChart = new Chart(ctxL, {
  type: 'line',
  data: {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [{
      label: "Contabilidad",
      data: [65, 59, 80, 81, 56, 55, 40],
      backgroundColor: [
        'rgba(105, 0, 132, .2)',
      ],
      borderColor: [
        'rgba(200, 99, 132, .7)',
      ],
      borderWidth: 2
    },
    {
      label: "Cocina",
      data: [28, 48, 40, 19, 86, 27, 90],
      backgroundColor: [
        'rgba(0, 137, 132, .2)',
      ],
      borderColor: [
        'rgba(0, 10, 130, .7)',
      ],
      borderWidth: 2
    }, 
    {
      label: "Administracion",
      data: [23,42,23,4,3,12,23,45,56],
      backgroundColor: [
        'rgb(60, 179, 113, 0.4)',
      ],
      borderColor: [
        'rgb(255, 165, 0)',
      ],
      borderWidth: 2
    }
    ]
  },
  options: {
    responsive: true
  }
});
//radar
var ctxR = document.getElementById("radarChart").getContext('2d');
var myRadarChart = new Chart(ctxR, {
  type: 'radar',
  data: {
    labels: ["Conabilidad", "Sanitarios", "Redes", "Diseño", "Front-end", "Back-end", "Archivos"],
    datasets: [{
      label: "Junio",
      data: [65, 59, 90, 81, 56, 55, 40],
      backgroundColor: [
        'rgba(105, 0, 132, .2)',
      ],
      borderColor: [
        'rgba(200, 99, 132, .7)',
      ],
      borderWidth: 2
    },
    {
      label: "May",
      data: [28, 48, 40, 19, 96, 27, 100],
      backgroundColor: [
        'rgba(0, 250, 220, .2)',
      ],
      borderColor: [
        'rgba(0, 213, 132, .7)',
      ],
      borderWidth: 2
    },
    {
      label: "April",
      data: [100, 68, 30, 40, 70, 100, 30],
      backgroundColor: [
        'rgba(16, 16, 220, 0.1)',
      ],
      borderColor: [
        'rgba(0, 213, 132, .7)',
      ],
      borderWidth: 2
    }
    ]
  },
  options: {
    responsive: true
  }
});

new Chart(document.getElementById("horizontalBar"), {
  "type": "horizontalBar",
  "data": {
    "labels": ["Contabilidad", "Sanitarios", "Redes", "Diseño", "Front-end", "Back-end", "Archivos"],
    "datasets": [{
      "label": "May",
      "data": [22, 33, 55, 12, 86, 23, 14],
      "fill": false,
      "backgroundColor": ["rgba(255, 99, 132, 0.2)", "rgba(255, 159, 64, 0.2)",
        "rgba(255, 205, 86, 0.2)", "rgba(75, 192, 192, 0.2)", "rgba(54, 162, 235, 0.2)",
        "rgba(153, 102, 255, 0.2)", "rgba(201, 203, 207, 0.2)"
      ],
      "borderColor": ["rgb(255, 99, 132)", "rgb(255, 159, 64)", "rgb(255, 205, 86)",
        "rgb(75, 192, 192)", "rgb(54, 162, 235)", "rgb(153, 102, 255)", "rgb(201, 203, 207)"
      ],
      "borderWidth": 1
    }]
  },
  "options": {
    "scales": {
      "xAxes": [{
        "ticks": {
          "beginAtZero": true
        }
      }]
    }
  }
});

//pie
var ctxP = document.getElementById("pieChart").getContext('2d');
var myPieChart = new Chart(ctxP, {
  type: 'pie',
  data: {
    labels: ["In Progress", "In Test", "Done", "Blacklog"],
    datasets: [{
      data: [300, 50, 100, 40],
      backgroundColor: ["#F12E04","#F1D804", "#04EEF1", "#0704F1 " ],
      hoverBackgroundColor: ["#FF5A5E", "#5AD3D1", "#FFC870", "#A8B3C5"]
    }]
  },
  options: {
    responsive: true
  }
});
