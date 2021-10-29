<template>
	<div class="proyectos">
        <div class="topbar">
			<topbar></topbar>
		</div>
        <div class="proyectos_card">
            <proyectos_card></proyectos_card>
        </div>
        <footer class="footerbar">
            <footerbar></footerbar>
        </footer>
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
        margin-bottom: 0px;
        min-height: 95vh;
    }

    .footerbar {
        margin-bottom: 0;
    }
    
</style>