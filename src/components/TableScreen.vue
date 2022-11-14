<template>
    <html> 
        <table class="container">
        <thead>
            <tr>
                <th><h1>Sites</h1></th>
                <th><h1>Views</h1></th>
                <th><h1>Clicks</h1></th>
                <th><h1>Average</h1></th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Google</td>
                <td>9518</td>
                <td>6369</td>
                <td>01:32:50</td>
            </tr>
            <tr>
                <td>Twitter</td>
                <td>7326</td>
                <td>10437</td>
                <td>00:51:22</td>
            </tr>
            <tr>
                <td>Amazon</td>
                <td>4162</td>
                <td>5327</td>
                <td>00:24:34</td>
            </tr>
        <tr>
                <td>LinkedIn</td>
                <td>3654</td>
                <td>2961</td>
                <td>00:12:10</td>
            </tr>
        <tr>
                <td>CodePen</td>
                <td>2002</td>
                <td>4135</td>
                <td>00:46:19</td>
            </tr>
        <tr>
                <td>GitHub</td>
                <td>4623</td>
                <td>3486</td>
                <td>00:31:52</td>
            </tr>
        </tbody>
    </table>

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
  // import LessonTableRow from "./AttendanceTable/LessonTableRow.vue"

  export default {
    data() {
        return {
            animals: []
        };
    },
    name: "TableView",
        components: {
            // LessonTableRow
        }
}

</script>