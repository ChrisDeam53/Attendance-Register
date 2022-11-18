<template>
    <div class="navBar-container">
        <Navbar></Navbar>
    </div>
        <DoughnutChart></DoughnutChart>
</template>

<style>

body
{
    background-color:#1F2739;
}

.navBar-container
{
    top: 5%;
}

</style>

<script>

    import DoughnutChart from "./DoughnutChart/DoughnutChart.vue"
    import Navbar from "./Navbar/VerticalNavbar.vue"

    export default {
        name: "DonughtChart",
        components: {
            DoughnutChart,
            Navbar
        },
    }

</script>