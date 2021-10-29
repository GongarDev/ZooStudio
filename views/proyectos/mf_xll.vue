<template>
	<div class="mf_xll">
    <div class="topbar">
			<topbar></topbar>
		</div>
      <div class="card_mf">
        <card_mf></card_mf>
      </div>
    <div class="footerbar">
        <footerbar></footerbar>
    </div>
	</div>
</template>

<script>
	module.exports = {
		name: 'mf_xll',
		data() {
			return {
				section: "mf_xll",
			};
		},
		components: {
      topbar: httpVueLoader("../../components/topbar.vue"),
      card_mf: httpVueLoader("../../components/proyectos/card_mf.vue"),
      footerbar: httpVueLoader("../../components/footerbar.vue"),           
		},
	};
</script>

<style scoped>

    .card_mf {
        margin-top: 200px;
        width: auto;
    }

</style>