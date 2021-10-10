<template>
    <div id="carousel">
        <b-carousel
            id="carousel-fade"
            :interval="2000"
            style="text-shadow: 0px 0px 2px #000"
            controls
            fade
            indicators
            img-width="auto"
            img-height="auto"
            no-hover-pause
        >
            <b-carousel-slide
            caption=""
            img-src="../assets/imgs/carousel/bano_verde.jpg"
            ></b-carousel-slide>
            <b-carousel-slide
            caption=""
            img-src="../assets/imgs/carousel/dormitorio.jpg"
            ></b-carousel-slide>
            <b-carousel-slide
            caption=""
            img-src="../assets/imgs/carousel/salon1.jpg"
            ></b-carousel-slide>
        </b-carousel>
    </div>
</template>

<script>
    module.exports = {
        name: "carousel",
        data() {
            return {
            };
        },
        methods: { 
        },
    };
</script>

<style scoped>
.tales {
  width: 100%;
}
.carousel-inner{

  min-height: 100vh !important;
  max-height: 100vh !important;
}
.carousel{
  width:auto;
  min-height: 100vh !important;
  max-height: 100vh !important;  
}
</style>