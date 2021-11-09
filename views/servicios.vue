<template class="bg">
	<div class="servicios">
        <div class="topbar">
			<topbar></topbar>
		</div>
        <!-- <div class="description">
            <description></description>
        </div> -->
        <div class="workflow">
            <workflow></workflow>
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
            workflow: httpVueLoader("../components/servicios/workflow.vue"), 
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
        margin-top: 150px;
        width: auto;  
        margin-bottom: 25px;

    }

    .workflow{
        margin-top: 150px;
        width: auto;  
        margin-bottom: 25px;
    }

    .servicios {
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