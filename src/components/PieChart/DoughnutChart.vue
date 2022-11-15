<template>
    <Doughnut></Doughnut>   
</template>
  
<script>

    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    let vue_1 = require("vue");
    let vue_chartjs_1 = require("vue-chartjs");
    let chart_js_1 = require("chart.js");
    chart_js_1.Chart.register(chart_js_1.Title, chart_js_1.Tooltip, chart_js_1.Legend, chart_js_1.ArcElement, chart_js_1.CategoryScale);

    exports.default = (0, vue_1.defineComponent)({
    name: 'DoughnutChart',
    components: {
        Doughnut: vue_chartjs_1.Doughnut
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
            return (0, vue_1.h)(vue_chartjs_1.Doughnut, {
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