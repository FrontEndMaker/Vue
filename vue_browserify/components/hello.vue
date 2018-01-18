<template>
	<h1>{{ greeting }}</h1>
</template>

<script>
	var hello = {
		data: function () {
			return {
				greeting: "Привет World!"
			}
		}
	}

	module.exports = hello
</script>

<style>
	h1 {
		color: red;
	}
</style>