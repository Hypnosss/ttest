<template>
  	<div id="app">
		<router-view name = "mainRT"/>
  	</div>
</template>

<script>
export default {
  	name: 'App'
}
</script>

<style>
* {
	margin: 0;
	padding: 0;
}
#app {
	min-height: 100vh;
}
</style>
