<template>
	<div class="contacto">
        <div class="topbar">
			<topbar></topbar>
		</div>
        <div class="form_email">
            <form_email></form_email>
        </div>
        <div class=" footerbar">
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
            form_email: httpVueLoader("../components/contacto/form_email.vue"), 
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

    .form_email {
        padding-top: 200px;
        width: auto;
        margin-bottom: 0px;
        min-height: 100vh;
    }
 
    .contacto {
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