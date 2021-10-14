<template>
	<div class="nosotros">
        <div class="topbar">
			<topbar></topbar>
		</div>
        <div class="intro">
            <intro></intro>
        </div>
        <div class="equipo_card">
            <equipo_card></equipo_card>
        </div>
        <div class="servicios">
            <servicios></servicios>
        </div>
        <div class="footerbar">
            <footerbar></footerbar>
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
            intro: httpVueLoader("../components/nosotros/intro.vue"), 
			equipo_card: httpVueLoader("../components/nosotros/equipo_card.vue"),  
            servicios: httpVueLoader("../components/nosotros/servicios.vue"),  
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

    .intro {
        margin-top: 250px;
        width: auto;
    }

    .nosotros {
        background-color: #ffffff;
    }

    .servicios {
        margin-top: 50px;
        margin-bottom: 50px;
    }
</style>