<template>
    <html>
         <body>
              <VerticalNavbar></VerticalNavbar>
              <td><SmallButtonVue @click="addStudentData()" buttonName="Add Attendance"></SmallButtonVue></td>
             <table class="container">
                <thead>
                    <tr>
                        <th><h1>First Name</h1></th>
                        <th><h1>Second Name</h1></th>
                        <th><h1>Attendance Status</h1></th>
                        <th><h1>Select Student</h1></th>
                    </tr>
                    </thead>
            <tbody>
                <tr v-for="module in modules" v-bind:key="module.id">
                    <td>{{ module.id }}</td>
                    <td>{{ module.name }}</td>
                    <td>{{ module.handle }}</td>
                    <td><SmallButtonVue @click="editStudentData(module.id)" buttonName="Edit Attendance"></SmallButtonVue></td>
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

    import VerticalNavbar from "../Navbar/VerticalNavbar.vue"
    import SmallButtonVue from "../PageButton/SmallButton.vue"

    export default {
        data() {
            return {
                modules: [
                { id: 'Harry', name: 'Styles', handle: '1' },
                { id: 'Eric', name: 'Kay', handle: '1' },
                { id: 'John', name: 'Smith', handle: '0' },
                { id: 'The', name: 'Devil', handle: '0' },
                { id: 'FryFrom', name: 'Futurama', handle: '1' },
                { id: 'Homer', name: 'Simpson', handle: '0' }
                ]
            };
        },
        methods: {
            addStudentData() {
                console.log("PRESSED!");
            },
            editStudentData(studentID) {
                console.log("Student First Name: " + studentID);
            },
            // async getLessons() {
            //     this.modules = await axios.get('/api/lessons')
            // }

        },
        components: {
            VerticalNavbar,
            SmallButtonVue
        },
        name: 'TableView',
        props: {
            firstName: {
                type: String
            },
            secondName: {
                type: String
            },
            attendanceStatus: {
                type: Boolean
            }
        },
    }
</script>