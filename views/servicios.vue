<template>
	<div class="servicios">
        <div class="topbar">
			<topbar></topbar>
		</div>
        <div class="description">
            <description></description>
        </div>
        <div class="footerbar">
            <footerbar></footerbar>
        </div>
	</div>
</template>
<script>
	module.exports = {
		name: 'servicios',
		data() {
			return {
				section: "servicios",
			};
		},
		components: {
            topbar: httpVueLoader("../components/topbar.vue"),
            description: httpVueLoader("../components/servicios/description.vue"), 
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

    .servicios {
        background-color: #ffffff;
    }

    .description {
        margin-top: 250px;
        width: auto;  
    
    }
    .footerbar {
        position: absolute;
        bottom: 0;
        width: 100%;
        z-index: -2;
    }
</style>