// Driver Charts
// ==============

    // Driver Status
var driverStatus = $("#driver-status");
var driverStatusData= {
    labels: [
        "Offline",
        "Available",
        "On Trip",
        "On Way",
        "On Hold",
        "Blocked"
    ],
    datasets: [
        {
            data: [20, 450, 105, 94, 162, 15],
            backgroundColor: [
                "#666666",
                "#76c044",
                "#00d2ff",
                "#e85324",
                "#fcb040",
                "#ee1414"
            ]
        }
    ]
};
var driverStatusChart= new Chart(driverStatus, {
    type: 'pie',
    data: driverStatusData,
    options: {
        legend: {
            display: true,
            position: 'bottom',
            labels: {
                boxWidth: 16,
                padding: 20
            }
        },
        tooltips: {
            bodyFontSize: 12,
            bodyFontStyle: 400,
            yPadding: 12
        }
    }
});

    // Driver System Status
var driverSystemStatus = $("#driver-system-status");
var driverSystemStatusData= {
    labels: [
        "Active",
        "Deactive",
        "Block"
    ],
    datasets: [
        {
            data: [70, 50, 20],
            backgroundColor: [
                "#262262",
                "#666666",
                "#ee1414"
            ]
        }
    ]
};
var driverSystemStatusChart= new Chart(driverSystemStatus, {
    type: 'doughnut',
    data: driverSystemStatusData,
    options: {
        legend: {
            display: false
        },
        tooltips: {
            bodyFontSize: 12,
            bodyFontStyle: 400,
            yPadding: 12
        },
        cutoutPercentage: 80
    }
});

    // New Driver
var driverNewDriver = $("#driver-new-driver");
var driverNewDriverData= {
    labels: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
    ],
    datasets: [
        {
            data: [5, 7, 12, 2, 3, 8, 5],
            label: "New Driver",
            fill: false,
            lineTension: 0.1,
            borderWidth: 3,
            borderColor: "#262262",
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: "#e6e6e6",
            pointBackgroundColor: "#333471",
            pointBorderWidth: 2,
            pointBorderRadius: 2,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "#3b3957",
            pointHoverBorderColor: "#e6e6e6",
            pointHoverBorderWidth: 3,
            pointHitRadius: 10,
            spanGaps: false
        }
    ]
};
var driverNewDriverChart= new Chart(driverNewDriver, {
    type: 'line',
    data: driverNewDriverData,
    options: {
        legend: {
            display: false
        },
        tooltips: {
            bodyFontSize: 12,
            bodyFontStyle: 400,
            yPadding: 12
        }
    }
});

