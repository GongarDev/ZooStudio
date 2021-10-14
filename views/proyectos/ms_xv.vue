<template>
	<div class="ms_xv">
    <div class="topbar">
			<topbar></topbar>
		</div>
      <div class="card_ms">
        <card_ms></card_ms>
      </div>
    <div class="footerbar">
        <footerbar></footerbar>
    </div>
	</div>
</template>

<script>
	module.exports = {
		name: 'ms_xv',
		data() {
			return {
				section: "ms_xv",
			};
		},
		components: {
      topbar: httpVueLoader("../../components/topbar.vue"),
      card_ms: httpVueLoader("../../components/proyectos/card_ms.vue"),
      footerbar: httpVueLoader("../../components/footerbar.vue"),           
		},
	};
</script>

<style scoped>

    .card_ms {
        margin-top: 200px;
        width: auto;
    }

</style>