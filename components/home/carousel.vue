<template>
  <div id="carousel">
    <b-carousel
      id="carousel-fade"
      :interval="2500"
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
	    </div>

      <b-carousel-slide
        caption=""
        img-src="./assets/imgs/carousel/Animal_1.jpg"
      ></b-carousel-slide>
      <b-carousel-slide
        caption=""
        img-src="./assets/imgs/carousel/AP_I_dormitorio_flamenco.jpg"
      ></b-carousel-slide>
      <b-carousel-slide
        caption=""
        img-src="./assets/imgs/carousel/AP_I_salon_iguana.jpg"
      ></b-carousel-slide>
      <b-carousel-slide
        caption=""
        img-src="./assets/imgs/carousel/MS_XV_salon_pelicanos.jpg"
      ></b-carousel-slide>
      <b-carousel-slide
        caption=""
        img-src="./assets/imgs/carousel/PR_VIII_cocina_ardilla.jpg"
      ></b-carousel-slide>
    </b-carousel>
  </div>
</template>

<script>
module.exports = {
    name: "carousel",
    mixins: [zoo],
    data() {
        return {};
    },
};
</script>

<style scoped>



  /* .titleMobile{
    display: flex;
    justify-content: left;
    align-items:flex-start;
    margin-left:100px;

  }

  .logoMoible {
    display: flex;
    justify-content:left;
    z-index: 2;
    position: absolute;
    height: 10%;
    max-width: 10%;
    padding-top: 30px;
  } */

	.subtitle {
		display: none;
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

  .carousel-inner {
    min-height: 100vh !important;
    max-height: 100vh !important;
  }
  
  .carousel-item img {
    object-fit: cover;
    min-height: 100vh !important;
    max-height: 100vh !important;   
  }

  .carousel {
    width: auto;
    min-height: 100vh !important;
    max-height: 100vh !important;
  }

  /* bigger than standard 960 (devices and browsers) */
  @media only screen and (min-width: 959px) {
    .title{
      display: flex;
      justify-content: center;
    }

    .logo {
      display: flex;
      justify-content: center;
      z-index: 2;
      position: absolute;
      height: 20%;
      max-width: 30%;
      padding-top: 10px;
    }
  }

  /* Smaller than standard 960 (devices and browsers) */
  @media only screen and (max-width: 959px) {
    .title{
      display: flex;
      justify-content: center;
    }

    .logo {
      display: flex;
      justify-content: center;
      z-index: 2;
      position: absolute;
      height: 20%;
      max-width: 30%;
      padding-top: 10px;
    }
  }

  /* Tablet Portrait size to standard 960 (devices and browsers) */
  @media only screen and (min-width: 768px) and (max-width: 959px) {}

  /* All Mobile Sizes (devices and browser) */
  @media only screen and (max-width: 767px) { }

  /* Mobile Landscape Size to Tablet Portrait (devices and browsers) */
  @media only screen and (min-width: 480px) and (max-width: 767px) {}

  /* Mobile Portrait Size to Mobile Landscape Size (devices and browsers) */
  @media only screen and (max-width: 479px) {
    .title{
      display: flex;
      justify-content: left;
      align-items:flex-start;
      margin-left:110px;
    }

    .logo {
      display: flex;
      justify-content: center;
      z-index: 2;
      position: absolute;
      height: 12%;
            padding-top:20px;
    }
    
  }

  @media only screen and (max-width: 379px) {
      .title {
          left: 35px;
      } 
  }

  @media only screen and (min-width: 379px) and (max-width: 479px) {
      .title {
          left: 45px;
      } 
  }

  @media only screen and (min-width: 479px) {
      .title {
          left: 55px;
      }        
  }
</style>
