<template>
	<div class="contacto">
        <div class="topbar">
			<topbar></topbar>
		</div>
        <div class="form_email">
            <form_email></form_email>
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
    }

    .footerbar {
        position: fixed;
        bottom: 0;
        width: 100%;
    }
    
</style>