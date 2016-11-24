// Home Charts
// ==============

// Driver Status
var driverStatus = $("#driver-status");
var driverStatusData= {
    labels: [
        "Offline",
        "Available",
        "On Trip",
        "On Way",
        "On Hold"
    ],
    datasets: [
        {
            data: [20, 450, 105, 94, 162],
            backgroundColor: [
                "#666666",
                "#76c044",
                "#00d2ff",
                "#e85324",
                "#fcb040"
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

// Customer Status
var customerStatus = $("#customer-status");
var customerStatusData= {
    labels: [
        "Available",
        "On Trip",
        "Waiting for Pickup"
    ],
    datasets: [
        {
            data: [92618, 4642, 1754],
            backgroundColor: [
                "#76c044",
                "#00d2ff",
                "#e85324"
            ]
        }
    ]
};
var customerStatusChart= new Chart(customerStatus, {
    type: 'pie',
    data: customerStatusData,
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

// New Member
var newMember = $("#new-member");
var newMemberData= {
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
            data: [715, 417, 613, 1012, 312, 218, 115],
            label: "New Customer",
            fill: false,
            lineTension: 0.1,
            borderWidth: 3,
            borderColor: "#fcb040",
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: "#fee0b4",
            pointBackgroundColor: "#fcb040",
            pointBorderWidth: 2,
            pointBorderRadius: 2,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "#fc8140",
            pointHoverBorderColor: "#fdc067",
            pointHoverBorderWidth: 3,
            pointHitRadius: 10,
            spanGaps: false
        },
        {
            data: [51, 71, 112, 21, 31, 81, 51],
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
var newMemberChart= new Chart(newMember, {
    type: 'line',
    data: newMemberData,
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