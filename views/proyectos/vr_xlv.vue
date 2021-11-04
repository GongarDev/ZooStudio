<template>
	<div class="vr_xlv">
    <div class="topbar">
			<topbar></topbar>
		</div>
      <div class="card_vr">
        <card_vr></card_vr>
      </div>
    <div class="footerbar">
        <footerbar></footerbar>
    </div>
	</div>
</template>

<script>
	module.exports = {
		name: 'vr_xlv',
		data() {
			return {
				section: "vr_xlv",
			};
		},
		components: {
      topbar: httpVueLoader("../../components/topbar.vue"),
      card_vr: httpVueLoader("../../components/proyectos/card_vr.vue"),
      footerbar: httpVueLoader("../../components/footerbar.vue"),           
		},
	};
</script>

<style scoped>

    .card_vr {
        margin-top: 200px;
        width: auto;
    }
</style>