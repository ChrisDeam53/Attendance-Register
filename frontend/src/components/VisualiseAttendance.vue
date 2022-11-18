<template>
    <DoughnutChart></DoughnutChart>
</template>

<style>

body
{
    background-color:#1F2739;
}

</style>

<script>

    import DoughnutChart from "./PieChart/DoughnutChart.vue"

    export default {
        name: "LoginScreen",
        components: {
            DoughnutChart
        },
    }

</script>