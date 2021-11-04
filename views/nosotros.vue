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
        <div class="footerbar">
            <footerbar></footerbar>
        </div>
        <!-- <div class="background">
            <background></background>
        </div> -->
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
            footerbar: httpVueLoader("../components/footerbar.vue"), 
            background: httpVueLoader("../components/background.vue"),           
		},
	};
</script>
<style scoped>

    .topbar {
        position: fixed;
        top: 0px;
        width: 100%;
        z-index: 1;
        max-height: fit-content;
    }

    .intro {
        margin-top: 150px;
        width: auto;
    }

    .nosotros {
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