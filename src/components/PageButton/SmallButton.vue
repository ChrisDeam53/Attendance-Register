<template>
    <button class="smallButton">{{buttonName}}</button>
</template>


<style>
@import '../../../globals.css';

.smallButton {
    box-shadow:inset 0px 1px 0px 0px #dcecfb;
	background:linear-gradient(to bottom, #bddbfa 5%, #80b5ea 100%);
	background-color:#bddbfa;
	border-radius:6px;
	border:1px solid #84bbf3;
	display:inline-block;
	cursor:pointer;
	color:#ffffff;
	font-family:Arial;
	font-size:15px;
	font-weight:bold;
	padding:6px 24px;
	text-decoration:none;
	text-shadow:0px 1px 0px #528ecc;
}
</style>

<script>
export default {
    name: 'SmallButton',
    props: {
        buttonName: {
            type: String
        }
    }
}
</script>