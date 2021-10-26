<template>
	<div class="ap_l">
        <div class="topbar">
			<topbar></topbar>
		</div>
        <div class="card_ap">
            <card_ap></card_ap>
        </div>
        <div class="footerbar">
            <footerbar></footerbar>
        </div>
	</div>
</template>

<script>
	module.exports = {
		name: 'ap_l',
		data() {
			return {
				section: "ap_l",
			};
		},
		components: {
      topbar: httpVueLoader("../../components/topbar.vue"),
      card_ap: httpVueLoader("../../components/proyectos/card_ap.vue"),
      footerbar: httpVueLoader("../../components/footerbar.vue"),           
		},
	};
</script>

<style scoped>

    .card_ap {
        margin-top: 150px;
        width: 100%;
    }

</style>
