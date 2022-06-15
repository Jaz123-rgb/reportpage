//line
var ctxL = document.getElementById("lineChart").getContext('2d');
var myLineChart = new Chart(ctxL, {
  type: 'line',
  data: {
    labels: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "junio", "Julio"],
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
    labels: ["En Progreso", "En prueba", "Echo", "Rezagados"],
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

var chartColors = {
  red: 'rgb(255, 99, 132)',
  orange: 'rgb(255, 159, 64)',
  yellow: 'rgb(255, 205, 86)',
  green: 'rgb(75, 192, 192)',
  blue: 'rgb(54, 162, 235)',
  purple: 'rgb(153, 102, 255)',
  grey: 'rgb(231,233,237)'
};

var ctx = document.getElementById("myChart");
var myChart = new Chart(ctx, {
  type: 'line',
  data: {
    datasets: [{
      label: 'Enero',
      data: [
        {x: 0, y: 2},
        {x: 1, y: 3}, 
        {x: 2, y: 2},
        {x: 1.02, y: 0.4},
        {x: 0, y: -1}
      ],
      backgroundColor: 'rgba(123, 83, 252, 0.8)',
      borderColor: 'rgba(33, 232, 234, 1)',
      borderWidth: 1,
      fill: false,
    }],
  },
  options: {
    title: {
      display: true,
    },
    scales: {
      xAxes: [{
        type: 'linear',
        position: 'bottom',
        ticks: {
          min: -1,
          max: 8,
          stepSize: 1,
          fixedStepSize: 1,
        },
        gridLines: {
          color: 'rgba(171,171,171,1)',
          lineWidth: 1
        }
      }],
      yAxes: [{
        ticks: {
          min: -2,
          max: 4,
          stepSize: 1,
          fixedStepSize: 1,
        },
        gridLines: {
          color: 'rgba(171,171,171,1)',
          lineWidth: 0.5
        }
      }]
    },
    annotation: {
      annotations: [{
        type: 'box',
        yScaleID: 'y-axis-0',
        yMin:  1,
        yMax: 4,
        borderColor: 'rgba(255, 51, 51, 0.25)',
        borderWidth: 2,
        backgroundColor: 'rgba(255, 51, 51, 0.25)',
      }, {
        type: 'box',
        yScaleID: 'y-axis-0',
        yMin:  -1,
        yMax: 1,
        borderColor: 'rgba(255, 255, 0, 0.25)',
        borderWidth: 1,
        backgroundColor: 'rgba(255, 255, 0, 0.25)',
      }, {
        type: 'box',
        yScaleID: 'y-axis-0',
        yMin:  -2,
        yMax: -1,
        borderColor: 'rgba(0, 204, 0, 0.25)',
        borderWidth: 1,
        backgroundColor: 'rgba(0, 204, 0, 0.25)',
      }],
    }
  }
});

//? ultima grafica
var chartColors = {
  red: 'rgb(255, 99, 132)',
  orange: 'rgb(255, 159, 64)',
  yellow: 'rgb(255, 205, 86)',
  green: 'rgb(75, 192, 192)',
  blue: 'rgb(54, 162, 235)',
  purple: 'rgb(153, 102, 255)',
  grey: 'rgb(231,233,237)'
};

// returns a random integer between 0 and 10 inclusive
var getRandomValue = function() {
  min = Math.ceil(0);
  max = Math.floor(50);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

// generates a value for each hour in a week
var generateHourlyAvgData = function() {
  var data = [];
  for (var i = 0; i < 168; i++) {
    data.push({
      x: i,
      y: getRandomValue()
    });
  }
  return data;
};

// generates daily avg data by calculating the hourly
// avg for each day
var generateDailyAvgData = function(hourlyAvgData) {
  var chunkSize = 24;
  var data = [null];
  
  for (var i = 0; i < hourlyAvgData.length / chunkSize; i++) {
    var startIndex = i * chunkSize;
    var slicedData = hourlyAvgData.slice(startIndex, startIndex + chunkSize);
    var sum = slicedData.reduce(function(acc, val, index) {
      return acc + slicedData[index].y;
    }, slicedData[0].y);
    
    data.push(sum / chunkSize);
  }
  
  return data;
};

var hourlyAvgData = generateHourlyAvgData();
var dailyAvgData = generateDailyAvgData(hourlyAvgData);

var ctx = document.getElementById("canvas").getContext("2d");
var myChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: ['', "Dom", "Lun", "Mar", "Mier", "Jue", "Vier", "Sab"],
    datasets: [{
      type: 'line',
      label: 'Redes',
      data: dailyAvgData,
      borderColor: chartColors.red,
      backgroundColor: chartColors.red,
      borderWidth: 5,
      fill: false,
    }, {
      type: 'line',
      label: 'Contabilidad',
      borderColor: chartColors.green,
      backgroundColor: chartColors.green,
      borderWidth: 1,
      fill: false,
      pointRadius: 0,
      xAxisID: 'x-axis-2',
      data: hourlyAvgData
    }]
  },
  options: {
    responsive: true,
    title: {
      display: true,
      
    },
    tooltips: {
      mode: 'nearest',
      intersect: true,
    },
    scales: {
      xAxes: [{
        gridLines: {
          offsetGridLines: false,
        }
      }, {
        id: 'x-axis-2',
        type: 'linear',
        position: 'bottom',
        display: false,
        ticks: {
          min: 0,
          max: 168,
          stepSize: 24
        }
      }],
      yAxes: [{
        ticks: {
          min: 0,
          max: 50
        }
      }]
    }
  }
}); 
