<template>

  <div>
    <!-- Carousel -->
    <div id="carousel">
      <b-carousel
        id="carousel-fade"
        :interval="2500"
        style="text-shadow: 0px 0px 2px #000"
        fade
        img-width="auto"
        img-height="auto"
        no-hover-pause
      >		
        <b-carousel-slide
          caption=""
          img-src="./assets/imgs/proyectos/ln_xlll/cocina_render.jpeg"
        ></b-carousel-slide>
        <b-carousel-slide
          caption=""
          img-src="./assets/imgs/proyectos/ln_xlll/salon_estudio_render.jpg"
        ></b-carousel-slide>
        <b-carousel-slide
          caption=""
          img-src="./assets/imgs/proyectos/ln_xlll/salon_render.jpeg"
        ></b-carousel-slide>
      </b-carousel>
    </div>
    <!-- Text and imgs -->
    <b-container>
      <div>
          <b-div fluid="sm">
              <h5><b>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</b></h5>
              <p><b>ZOÒ</b> Aenean eu risus aliquam, pulvinar arcu non, consectetur leo. Integer eget orci quis neque cursus fringilla.

              <p>Proin nunc tortor, sodales eu purus vitae, sollicitudin commodo eros. Vestibulum ullamcorper ornare quam ut tempor.
                  Sed sodales, dui non fermentum facilisis, mi massa mattis erat, vel rhoncus lorem ligula a tortor.</p>

              <p>Vestibulum consequat, nisi blandit ullamcorper fringilla, 
                  lorem tortor porttitor eros, lacinia consequat enim leo non ex. Nulla vel ipsum eu eros posuere cursus.</p>

              <p>Ergo <b>ZOÒ</b>et etiam pulvinar odio sed elementum dapibus.</p>
          </b-div>
      </div>

      <h4>Imágenes</h4>
      <div class="card-columns">
        <div class="card">
          <img v-b-modal.modal-center1 src="./assets/imgs/proyectos/ln_xlll/cocina_obra.jpeg" class="card-img" alt="">
          <b-modal size="xl" hide-footer=true hide-header=true id="modal-center1">
            <img src="./assets/imgs/proyectos/ln_xlll/cocina_obra.jpeg" class="card-img" alt="">
          </b-modal>
        </div>
        <div class="card">
          <img v-b-modal.modal-center2 src="./assets/imgs/proyectos/ln_xlll/salon_obra.jpeg" class="card-img" alt="">
          <b-modal  size="xl" hide-footer=true hide-header=true id="modal-center2">
            <img src="./assets/imgs/proyectos/ln_xlll/salon_obra.jpeg" class="card-img" alt="">
          </b-modal>
        </div>
      </div>
      
      <div class="card-columns">
        <div class="card">
          <img v-b-modal.modal-center3 src="./assets/imgs/proyectos/ln_xlll/salon_er.jpg" class="card-img" alt="">
          <b-modal  size="xl" hide-footer=true hide-header=true id="modal-center3">
            <img src="./assets/imgs/proyectos/ln_xlll/salon_er.jpg" class="card-img" alt="">
          </b-modal>
        </div>
        <div class="card">
          <img v-b-modal.modal-center4 src="./assets/imgs/proyectos/ln_xlll/cocina_render.jpeg" class="card-img" alt="">
          <b-modal  size="xl" hide-footer=true hide-header=true id="modal-center4">
            <img src="./assets/imgs/proyectos/ln_xlll/cocina_render.jpeg" class="card-img" alt="">
          </b-modal>
        </div>
      </div>

      <h4>Planos</h4>
      <div class="card-columns">
        <div class="card">
          <img v-b-modal.modal-center9 src="./assets/imgs/proyectos/ln_xlll/LN_XIII_plano_ea.jpg" class="card-img" alt="">
          <b-modal size="xl" hide-footer=true hide-header=true id="modal-center9">
            <img src="./assets/imgs/proyectos/ms_xv/LN_XIII_plano_ea.jpg" class="card-img" alt="">
          </b-modal>
        </div>
        <div class="card">
          <img v-b-modal.modal-center10 src="./assets/imgs/proyectos/ln_xlll/LN_XIII_plano_er.jpg" class="card-img" alt="">
          <b-modal size="xl" hide-footer=true hide-header=true id="modal-center10">
            <img src="./assets/imgs/proyectos/ms_xv/LN_XIII_plano_er.jpg" class="card-img" alt="">
          </b-modal>
        </div>
      </div>
    </b-container>  
  </div>
</template>
<style scoped>

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
  
  .container {
    margin-top: 30px;
  }

  h4 {
    margin-top: 30px;
    text-align: center;
  }

  .card img {
    max-height: 627px;
  }
  .card-columns {
      display:inline-flex;
  }
</style>
