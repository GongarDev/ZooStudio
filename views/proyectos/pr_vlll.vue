<template>
	<div class="pr_vlll">
    <div class="topbar">
			<topbar></topbar>
		</div>
      <div class="card_pr">
        <card_pr></card_pr>
      </div>
    <div class="footerbar">
        <footerbar></footerbar>
    </div>
	</div>
</template>

<script>
	module.exports = {
		name: 'pr_vlll',
		data() {
			return {
				section: "pr_vlll",
			};
		},
		components: {
      topbar: httpVueLoader("../../components/topbar.vue"),
      card_pr: httpVueLoader("../../components/proyectos/card_pr.vue"),
      footerbar: httpVueLoader("../../components/footerbar.vue"),           
		},
	};
</script>

<style scoped>

    .card_pr {
        margin-top: 200px;
        width: auto;
    }
</style>