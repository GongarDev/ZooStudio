<template>
	<div class="proyectos">
        <div class="topbar">
			<topbar></topbar>
		</div>
        <div class="proyectos_card">
            <proyectos_card></proyectos_card>
        </div>
        <div class="footerbar">
            <footerbar></footerbar>
        </div>
	</div>
</template>
<script>
	module.exports = {
		name: 'proyectos',
		data() {
			return {
				section: "proyectos",
			};
		},
		components: {
            topbar: httpVueLoader("../components/topbar.vue"),
            proyectos_card: httpVueLoader("../components/proyectos/proyectos_card.vue"),    
            footerbar: httpVueLoader("../components/footerbar.vue"),           
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

    .proyectos_card {
        padding-top: 200px;
        width: auto;
    }
    
</style>