<template>
	<div class="ln_xlll">
    <div class="topbar">
			<topbar></topbar>
		</div>
      <div class="card_ln">
        <card_ln></card_ln>
      </div>
    <div class="footerbar">
        <footerbar></footerbar>
    </div>
	</div>
</template>

<script>
	module.exports = {
		name: 'ln_xlll',
		data() {
			return {
				section: "ln_xlll",
			};
		},
		components: {
      topbar: httpVueLoader("../../components/topbar.vue"),
      card_ln: httpVueLoader("../../components/proyectos/card_ln.vue"),
      footerbar: httpVueLoader("../../components/footerbar.vue"),           
		},
	};
</script>

<style scoped>

    .card_ln {
        margin-top: 200px;
        width: auto;
    }

</style>