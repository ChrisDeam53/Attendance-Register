<template>
    <div class="rectangle">{{moduleName}}</div>
</template>

<style>

.rectangle {
  height: 50px;
  width: 100px;
  font-family:Arial;
  font-size:15px;
  font-weight:bold;
  color: white;
  border: 3px solid green;
  width: 50%;
  padding-left: 200px;
  padding-right: 200px;
  padding-top: 15px;
  text-align: center;
}

</style>

<script>
export default {
		name: 'ModuleRectangle',
		props: {
			moduleName: {
				type: String
			}
		}
	}
</script>

