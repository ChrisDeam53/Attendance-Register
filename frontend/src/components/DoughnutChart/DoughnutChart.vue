<template>
    <Doughnut></Doughnut>   
</template>

<style>
/* body */
/* {
    padding-top: 15%;
} */
</style>
  
<script>

    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    let vue = require("vue");
    let vueChart = require("vue-chartjs");
    let chartJs = require("chart.js");

    chartJs.Chart.register(chartJs.Title, chartJs.Tooltip, chartJs.Legend, chartJs.ArcElement, chartJs.CategoryScale);

    exports.default = (0, vue.defineComponent)({
    name: 'DoughnutChart',
    components: {
        Doughnut: vueChart.Doughnut
    },
    props: {
        chartId: {
            type: String,
            default: 'doughnut-chart'
        },
        width: {
            type: Number,
            default: 400
        },
        height: {
            type: Number,
            default: 400
        },
        cssClasses: {
            default: '',
            type: String
        },
        styles: {
            type: Object,
            default: function () { }
        },
        plugins: {
            type: Array,
            default: function () { return []; }
        }
    },
    setup: function (props) {
        var chartData = {
            labels: ['Attended', 'Not Attended', 'Gangnam Style', 'Certified_Memer'],
            datasets: [
                {
                    backgroundColor: ['#41B883', '#E46651', '#00D8FF', '#DD1B16'],
                    data: [40, 20, 80, 10]
                }
            ]
        };
        var chartOptions = {
            responsive: true,
            maintainAspectRatio: false
        };
        return function () {
            return (0, vue.h)(vueChart.Doughnut, {
                chartData: chartData,
                chartOptions: chartOptions,
                chartId: props.chartId,
                width: props.width,
                height: props.height,
                cssClasses: props.cssClasses,
                styles: props.styles,
                plugins: props.plugins
            });
        };
    }
});


</script>