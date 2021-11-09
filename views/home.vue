<template>
	<div>
		<div class="sidebarHome">
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

	.carousel {
		z-index: 0;
	}    
	
	@media only screen and (max-width: 379px) {
        .sidebarHome {
			position: absolute;
			top: 30px;
			z-index: 1;
			right: 35px;
        } 
    }

    @media only screen and (min-width: 379px) and (max-width: 479px) {
        .sidebarHome {
			position: absolute;
			top: 40px;
			z-index: 1;
			right: 50px;
        } 
    }

    @media only screen and (min-width: 479px) and (max-width: 576px) {
        .sidebarHome {
			position: absolute;
			top: 50px;
			z-index: 1;
			right: 35px;
        }        
    }

    @media only screen and (min-width: 577px) and (max-width: 700px) {
        .sidebarHome {
			position: absolute;
			top: 50px;
			z-index: 1;
			right: 50px;
        }        
    }

    @media only screen and (min-width: 701px) {
        .sidebarHome {
			position: absolute;
			top: 50px;
			z-index: 1;
			right: 75px;
        }        
    }
</style>