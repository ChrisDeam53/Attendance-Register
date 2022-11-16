<template>
    <html>
        <body>
            <ul class="sidebar-menu">
                <li></li>
                <li><a href="#">Home Page</a></li>
                <li><a href="#">Sign Out</a></li>
            </ul>
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

/*	
	Navbar CSS
	===================
    Author: Anton
	Repo: https://codepen.io/Denyer/embed/dEpdEr?height=316&theme-id=0&default-tab=result
*/

body {
  font-family: sans-serif;
  font-size: 16px;
  background-color:#1F2739;
}
ul.sidebar-menu {
    margin: 0;
    padding: 0;
    max-width: 10%;
    list-style: none;
    list-style-type: none;
}
.sidebar-menu li a span {
  margin-right: 20px;
  color: #fff;
}
.sidebar-menu li a  {
  background-color: #4d5158;
  padding: 20px 25px;
  display: block;
  text-decoration: none;
  color: #fff;
}
.sidebar-menu li a:hover  {
  background-color: #52565d;
  padding: 20px 25px;
  display: block;
  text-decoration: none;
  color: #fff;
}

.moduleOptions {
  margin: auto;
  width: 50%;
  height: 50vh;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

</style>

<script>

    import ModuleRect from "./RectangleBox/ModuleRectangle.vue"

    export default {
        data() {
            return {
                modules: []
            };
        },
        name: "TableView",
            components: {
                ModuleRect
            }
    }

</script>