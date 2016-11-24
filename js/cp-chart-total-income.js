// Total Income
// ==============
var totalIncome = $("#total-income");
var totalIncomeData= {
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
            label: "Driver Income",
            data: [750000, 470000, 630000, 1020000, 320000, 280000, 450000],
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
var totalIncomeChart= new Chart(totalIncome, {
    type: 'line',
    data: totalIncomeData,
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