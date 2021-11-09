<template>
	<div class="prox">
    <div class="topbar">
			<topbar></topbar>
		</div>
      <div class="card_prox">
        <card_prox></card_prox>
      </div>
    <div class="footerbar">
        <footerbar></footerbar>
    </div>
	</div>
</template>

<script>
	module.exports = {
		name: 'prox',
		data() {
			return {
				section: "prox",
			};
		},
		components: {
      topbar: httpVueLoader("../../components/topbar.vue"),
      card_prox: httpVueLoader("../../components/proyectos/card_prox.vue"),
      footerbar: httpVueLoader("../../components/footerbar.vue"),           
		},
	};
</script>

<style scoped>

    .card_prox {
        margin-top: 150px;
        width: auto;
        margin-bottom: 0px;
        min-height: 90vh;
        }

    .footerbar {
        margin-bottom: 0;
        bottom: 0;
        position: relative;
        width: 100%;
    }

</style>