<template>
	<div class="nosotros">
        <div class="topbar">
			<topbar></topbar>
		</div>
        <div class="equipocard">
            <equipocard></equipocard>
        </div>
	</div>
</template>
<script>
	module.exports = {
		name: 'nosotros',
		data() {
			return {
				section: "nosotros",
			};
		},
		components: {
            topbar: httpVueLoader("../components/topbar.vue"),
			equipocard: httpVueLoader("../components/nosotros/equipo_card.vue"),            
		},
	};
</script>
<style scoped>

    .topbar {
        position: fixed;
        top: 0px;
        width: 100%;
        z-index: 1;
    }

    .nosotros {
        background-color: #ffffff;

    }

    .equipocard {
        margin-top: 500px;
        width: auto;
    }
</style>