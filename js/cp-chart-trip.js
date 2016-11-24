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
            data: [715, 417, 623, 1032, 322, 218, 435],
            backgroundColor: [
                '#76c044',
                '#76c044',
                '#76c044',
                '#76c044',
                '#76c044',
                '#76c044',
                '#76c044'
            ]
        },
        {
            label: "Cancel",
            data: [344, 542, 952, 334, 641, 528, 712],
            backgroundColor: [
                '#666666',
                '#666666',
                '#666666',
                '#666666',
                '#666666',
                '#666666',
                '#666666'
            ]
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

