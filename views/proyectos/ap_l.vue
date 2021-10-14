<template>
  <div>
    <div>
      <topbar></topbar>
    </div>
  <div class="container">
    <div class="card-columns">
      <div class="card">
        <img src="./assets/imgs/proyectos/antonio_pantion/dormitorio_vertical.jpg" class="card-img" alt="">
      </div>
      <div class="card">
          <img src="./assets/imgs/proyectos/antonio_pantion/salon_vertical.jpg" class="card-img" alt="">
      </div>
      <div class="card">
          <img src="./assets/imgs/proyectos/antonio_pantion/salon_vertical1.jpg" class="card-img" alt="">
      </div>
    </div>
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
            topbar: httpVueLoader("../components/topbar.vue"),
            footerbar: httpVueLoader("../components/footerbar.vue"),           
		},
	};
</script>

<style scoped>

</style>
