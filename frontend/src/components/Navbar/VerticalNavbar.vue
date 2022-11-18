<template>
    <ul class="sidebar-menu">
                <li></li>
                <li @click="homePageClick"><a href="#">Home Page</a></li>
                <li @click="logout"><a href="#">Sign Out</a></li>
            </ul>
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
export default {
    name: 'VerticalNavbar',
    props: {
        buttonName: {
            type: String
        }
    },
    methods: {
            logout() {
              this.$router.push({name: 'loginScreen'})
            },
            homePageClick() {
              this.$router.push({name: 'home'})
            }
        }
}
</script>