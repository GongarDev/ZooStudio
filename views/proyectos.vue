<template>
	<div class="proyectos">
        <div class="topbar">
			<topbar></topbar>
		</div>
        <div class="proyectos_card">
            <proyectos_card></proyectos_card>
        </div>
        <div class=" fixed-bottom">
            <footerbar></footerbar>
        </div>
	</div>
</template>
<script>
	module.exports = {
		name: 'contacto',
		data() {
			return {
				section: "contacto",
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

    .footerbar {
        position: fixed;
        bottom: 0;
        width: 100%;
    }
    
</style>