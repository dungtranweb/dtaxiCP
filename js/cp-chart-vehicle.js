// Vehicle Charts
// ==============

// Vehicle Type
var vehicleType = $("#vehicle-type");
var vehicleTypeData= {
    labels: [
        "SUV",
        "Sedan",
        "Truck",
        "Motor",
        "Bus"

    ],
    datasets: [
        {
            data: [127, 53, 14, 10, 10],
            backgroundColor: [
                "#fcb040",
                "#76c044",
                "#ee1414",
                "#00d2ff",
                "#262262"
            ]
        }
    ]
};
var vehicleTypeChart= new Chart(vehicleType, {
    type: 'pie',
    data: vehicleTypeData,
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

// Vehicle System Type
var vehicleCondition = $("#vehicle-condition");
var vehicleConditionData= {
    labels: [
        "Normal",
        "Fixing",
        "Damage",
        "Inactive"
    ],
    datasets: [
        {
            data: [190, 14, 2, 8],
            backgroundColor: [
                "#00d2ff",
                "#fcb040",
                "#ee1414",
                "#666666"
            ]
        }
    ]
};
var vehicleConditionChart= new Chart(vehicleCondition, {
    type: 'pie',
    data: vehicleConditionData,
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


