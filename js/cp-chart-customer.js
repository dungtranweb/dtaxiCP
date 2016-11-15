// Customer Charts
// ==============

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
            data: [1118, 102, 204],
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

// Customer System Status
var customerSystemStatus = $("#customer-system-status");
var customerSystemStatusData= {
    labels: [
        "Active",
        "Deactive",
        "Block"
    ],
    datasets: [
        {
            data: [987, 330, 148],
            backgroundColor: [
                "#262262",
                "#666666",
                "#ee1414"
            ]
        }
    ]
};
var customerSystemStatusChart= new Chart(customerSystemStatus, {
    type: 'doughnut',
    data: customerSystemStatusData,
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

// New Customer
var customerNewCustomer = $("#customer-new-customer");
var customerNewCustomerData= {
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
            data: [75, 47, 63, 102, 32, 28, 15],
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
        }
    ]
};
var customerNewCustomerChart= new Chart(customerNewCustomer, {
    type: 'line',
    data: customerNewCustomerData,
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

