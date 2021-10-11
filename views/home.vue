<template>
	<div class="">
		<div class="sidebar">
			<sidebar></sidebar>
		</div>
		<div class="carousel">
			<carousel></carousel>
		</div>
	</div>
</template>
<script>
	module.exports = {
		name: 'home',
		data() {
			return {
				section: "initial",
			};
		},
		components: {
			carousel: httpVueLoader("../components/home/carousel.vue"),
			sidebar: httpVueLoader("../components/sidebar.vue"),
		},
	};
</script>
<style scoped>
	.sidebar {
		position:absolute;
		right: 55px;
		top: 35px;
		z-index: 1;
	}
	.carousel {
		z-index: 0;
	}
</style>