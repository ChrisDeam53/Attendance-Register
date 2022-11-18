<template>
    <html>
        <body>
            <VerticalNavbar></VerticalNavbar>
            <table class="container">
                <thead>
                    <tr>
                        <th><h1>Module Name</h1></th>
                        <th><h1>Module Code</h1></th>
                        <th><h1>Module Leader</h1></th>
                        <th><h1>Select Module</h1></th>
                    </tr>
                </thead>
        <tbody>
            <tr v-for="module in modules" v-bind:key="module.id">
                <td>{{ module.id }}</td>
                <td>{{ module.name }}</td>
                <td>{{ module.handle }}</td>
                <td><SmallButtonVue @click="selectModule(module.id)" buttonName="SELECT"></SmallButtonVue></td>
            </tr>
        </tbody>
    </table>
        </body>
    </html>
</template>

<style>
/*	
	Table Responsive
	===================
	Author: https://github.com/pablorgarcia
 */

@charset "UTF-8";
@import url(https://fonts.googleapis.com/css?family=Open+Sans:300,400,700);

body {
  font-family: 'Open Sans', sans-serif;
  font-weight: 300;
  line-height: 1.42em;
  color:#A7A1AE;
  background-color:#1F2739;
}

h1 {
  font-size:3em; 
  font-weight: 300;
  line-height:1em;
  text-align: center;
  color: #4DC3FA;
}

h2 {
  font-size:1em; 
  font-weight: 300;
  text-align: center;
  display: block;
  line-height:1em;
  padding-bottom: 2em;
  color: #FB667A;
}

h2 a {
  font-weight: 700;
  text-transform: uppercase;
  color: #FB667A;
  text-decoration: none;
}

.blue { color: #185875; }
.yellow { color: #FFF842; }

.container th h1 {
	font-weight: bold;
	font-size: 1em;
    text-align: left;
    color: #185875;
}

.container td {
	font-weight: normal;
	font-size: 1em;
    -webkit-box-shadow: 0 2px 2px -2px #0E1119;
	-moz-box-shadow: 0 2px 2px -2px #0E1119;
	box-shadow: 0 2px 2px -2px #0E1119;
}

.container {
	text-align: left;
	overflow: hidden;
	width: 80%;
	margin: 0 auto;
  display: table;
  padding: 0 0 8em 0;
}

.container td, .container th {
	padding-bottom: 2%;
	padding-top: 2%;
  padding-left:2%;  
}

/* Background-color of the odd rows */
.container tr:nth-child(odd) {
	background-color: #323C50;
}

/* Background-color of the even rows */
.container tr:nth-child(even) {
	background-color: #2C3446;
}

.container th {
	background-color: #1F2739;
}

.container td:first-child { color: #FB667A; }

.container tr:hover {
   background-color: #464A52;
-webkit-box-shadow: 0 6px 6px -6px #0E1119;
	-moz-box-shadow: 0 6px 6px -6px #0E1119;
    box-shadow: 0 6px 6px -6px #0E1119;
}


@media (max-width: 800px) {
.container td:nth-child(4),
.container th:nth-child(4) { display: none; }
}

</style>

<script>

    import VerticalNavbar from "./Navbar/VerticalNavbar.vue"
    import SmallButtonVue from "./PageButton/SmallButton.vue";

    export default {
        data() {
            return {
                // TEMPORARY DATA
                modules: [
                { id: 'Module 1', name: '123', handle: 'Drew Durnill' },
                { id: 'Module 2', name: '456', handle: 'Tommy Kay' },
                { id: 'Module 3', name: '789', handle: 'John Smith' },
                { id: 'Module 4', name: '666', handle: 'The Devil' },
                { id: 'Module 5', name: '4634', handle: 'FryFrom Futurama' },
                { id: 'Module 6', name: '423', handle: 'Homer Simpson' }
                ]
            };
        },
        methods: {
            selectModule(moduleID) {
                if (moduleID > -1) {
                    console.log("ID IS: " + moduleID);
                }
                else {
                    console.log("ID IS: " + moduleID);
                }
            },
            // async getPosts() {
            //     this.modules = await axios.get('/api/modules')
            // }
        },
        name: "TableView",
            components: {
                VerticalNavbar,
                SmallButtonVue
            }
    }

</script>