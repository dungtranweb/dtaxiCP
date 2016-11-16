// Trip Charts
// ==============

// Trip Status
var tripStatus = $("#trip-status");
var tripStatusData= {
    labels: [
        "Requesting",
        "On Trip",
        "On Way",
        "Complete",
        "Cancel"
    ],
    datasets: [
        {
            data: [241, 354, 204, 3021, 240],
            backgroundColor: [
                "#fcb040",
                "#00d2ff",
                "#e85324",
                "#76c044",
                "#666666"
            ]
        }
    ]
};
var tripStatusChart= new Chart(tripStatus, {
    type: 'pie',
    data: tripStatusData,
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

// Trip System Status
var tripSystemStatus = $("#trip-system-status");
var tripSystemStatusData= {
    labels: [
        "On Trip",
        "On Way"
    ],
    datasets: [
        {
            data: [330, 148],
            backgroundColor: [
                "#00d2ff",
                "#e85324"
            ]
        }
    ]
};
var tripSystemStatusChart= new Chart(tripSystemStatus, {
    type: 'doughnut',
    data: tripSystemStatusData,
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
        },
        cutoutPercentage: 80
    }
});

// Completed and Cancelled
var tripBarTrip = $("#trip-bar-trip");
var tripBarTripData= {
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
            label: "Complete",
            data: [75, 47, 63, 102, 32, 28, 45],
            backgroundColor: [
                '#76c044',
                '#76c044',
                '#76c044',
                '#76c044',
                '#76c044',
                '#76c044',
                '#76c044'
            ],
            borderColor: [
                '#c1e3ab',
                '#c1e3ab',
                '#c1e3ab',
                '#c1e3ab',
                '#c1e3ab',
                '#c1e3ab',
                '#c1e3ab'
            ],
            borderWidth: 3
        },
        {
            label: "Cancel",
            data: [34, 52, 92, 34, 64, 28, 72],
            backgroundColor: [
                '#666666',
                '#666666',
                '#666666',
                '#666666',
                '#666666',
                '#666666',
                '#666666'
            ],
            borderColor: [
                '#d2d2d2',
                '#d2d2d2',
                '#d2d2d2',
                '#d2d2d2',
                '#d2d2d2',
                '#d2d2d2',
                '#d2d2d2'
            ],
            borderWidth: 3
        }
    ]
};
var tripBarTripChart= new Chart(tripBarTrip, {
    type: 'bar',
    data: tripBarTripData,
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
