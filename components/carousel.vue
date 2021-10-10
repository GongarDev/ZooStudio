<template>
  <div id="carousel">
    <b-carousel
      id="carousel-fade"
      :interval="3000"
      style="text-shadow: 0px 0px 2px #000"
      controls
      fade
      indicators
      img-width="auto"
      img-height="auto"
      no-hover-pause
    >		
      <div class="title">
		    <div class="logo">
			    <img src="./assets/imgs/logo.png" alt="" />
		    </div>
		    <div class="subtitle">
			    <p>ESTUDIO DE ARQUITECTURA</p>
		    </div>
	    </div>
      <b-carousel-slide
        caption=""
        img-src="./assets/imgs/carousel/bano_verde.jpg"
      ></b-carousel-slide>
      <b-carousel-slide
        caption=""
        img-src="./assets/imgs/carousel/dormitorio.jpg"
      ></b-carousel-slide>
      <b-carousel-slide
        caption=""
        img-src="./assets/imgs/carousel/salon1.jpg"
      ></b-carousel-slide>
      <b-carousel-slide
        caption=""
        img-src="./assets/imgs/carousel/salon2.jpg"
      ></b-carousel-slide>
      <b-carousel-slide
        caption=""
        img-src="./assets/imgs/carousel/salon3.jpg"
      ></b-carousel-slide>
            <b-carousel-slide
        caption=""
        img-src="./assets/imgs/carousel/bano_byn.jpg"
      ></b-carousel-slide>
    </b-carousel>
  </div>
</template>

<script>
module.exports = {
    name: "carousel",
    data() {
        return {};
    },
};
</script>

<style scoped>

  .logo {
    display: flex;
    justify-content: center;
    z-index: 2;
    position: absolute;
    height: 20%;
    width: 100%;
    padding-top: 10px;
  }

	.subtitle {
		display: flex;
		justify-content: center;
		z-index: 2;
		position: absolute;
		height: 20%;
		width: 100%;
		padding-top: 140px;
		font-family: 'Roboto';
		font-size:smaller;
		font-weight: bold;
	}

  .tales {
    width: 100%;
  }

  .carousel-inner {
    min-height: 100vh !important;
    max-height: 100vh !important;
  }
  
  .carousel {
    width: auto;
    min-height: 100vh !important;
    max-height: 100vh !important;
  }
</style>
