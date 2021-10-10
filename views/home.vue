<template>
	<div class="carousel">
		<carousel></carousel>
	</div>
</template>

<script>
	module.exports = {
		name: 'home',
		mixins: [],
		data() {
			return {
				section: "initial",
			};
		},
		components: {
			carousel: httpVueLoader("../components/carousel.vue"),
		},
	};
</script>

<style scoped>
</style>