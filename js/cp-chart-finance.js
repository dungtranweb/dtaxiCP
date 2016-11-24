// Finance Charts
// ==============

// Total Transaction
var totalTransaction = $("#total-transaction");
var totalTransactionData= {
    labels: [
        "Deposit",
        "Withdraw",
        "Service Fee",
        "Trip Income",
        "Bonus",
        "Pay Fines",
        "Commission",
        "Voucher Redeem"
    ],
    datasets: [
        {
            data: [753, 512, 1279, 964, 1236, 854, 2556, 212],
            backgroundColor: [
                "#262262",
                "#fcb040",
                "#00d2ff",
                "#3b3957",
                "#76c044",
                "#e85324",
                "#666666",
                "#ee1414"
            ]
        }
    ]
};
var totalTransactionChart= new Chart(totalTransaction, {
    type: 'pie',
    data: totalTransactionData,
    options: {
        legend: {
            display: true,
            position: 'right',
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

// Finance Status
var financeStatus = $("#finance-status");
var financeStatusData= {
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
            label: "Total Driver Income",
            data: [75000000, 47000000, 63000000, 102000000, 32000000, 28000000, 45000000],
            backgroundColor: [
                '#3b3957',
                '#3b3957',
                '#3b3957',
                '#3b3957',
                '#3b3957',
                '#3b3957',
                '#3b3957'
            ]
        },
        {
            label: "Total Service Fee",
            data: [34000000, 12000000, 22000000, 34000000, 23000000, 28000000, 35000000],
            backgroundColor: [
                '#fcb040',
                '#fcb040',
                '#fcb040',
                '#fcb040',
                '#fcb040',
                '#fcb040',
                '#fcb040'
            ]
        },
        {
            label: "Total Driver Bonus",
            data: [18000000, 12000000, 14000000, 25000000, 17000000, 21000000, 19000000],
            backgroundColor: [
                '#76c044',
                '#76c044',
                '#76c044',
                '#76c044',
                '#76c044',
                '#76c044',
                '#76c044'
            ]
        }
    ]
};
var financeStatusChart= new Chart(financeStatus, {
    type: 'bar',
    data: financeStatusData,
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

