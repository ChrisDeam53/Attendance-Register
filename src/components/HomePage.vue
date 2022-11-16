<template>
    <html>
        <body>
            <VerticalNavbar></VerticalNavbar>
            <div class="moduleOptions">          
                <ModuleRect moduleName="Module 1"></ModuleRect>
                <ModuleRect moduleName="Module 2"></ModuleRect>
                <ModuleRect moduleName="Module 3"></ModuleRect>
                <ModuleRect moduleName="Module 4"></ModuleRect>
                <ModuleRect moduleName="Module 5"></ModuleRect>
                <ModuleRect moduleName="Module 6"></ModuleRect>
                <ModuleRect moduleName="Module 7"></ModuleRect>
                <ModuleRect moduleName="Module 8"></ModuleRect>
                <ModuleRect moduleName="Module 9"></ModuleRect>
                <ModuleRect moduleName="Module 10"></ModuleRect>
                <ModuleRect moduleName="Module 11"></ModuleRect>
                <ModuleRect moduleName="Module 12"></ModuleRect>
            </div>
        </body>
    </html>

</template>

<style>


</style>

<script>

    import ModuleRect from "./RectangleBox/ModuleRectangle.vue"
    import VerticalNavbar from "./Navbar/VerticalNavbar.vue"

    export default {
        data() {
            return {
                modules: []
            };
        },
        name: "TableView",
            components: {
                ModuleRect,
                VerticalNavbar
            }
    }

</script>