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
        display: flex;
        position: fixed;
        top: 0px;
        width: 100%;
        z-index: 1;
        justify-content: center;
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

    .proyectos {
        background-color: transparent;
        background-image: linear-gradient(rgba(255, 255, 255, 0.90), rgba(255, 255, 255, 0.90)), url("../assets/imgs/background.png");
        background-repeat:no-repeat;
        background-position:center center;
        background-attachment:fixed;
        -o-background-size: 100% 100%, auto;
        -moz-background-size: 100% 100%, auto;
        -webkit-background-size: 100% 100%, auto;
        background-size: 100% 100%, auto;
    }
    
</style>