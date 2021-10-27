<template>

<div>
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
        img-src="./assets/imgs/proyectos/ap_l/ap_l_foto_4.jpg"
      ></b-carousel-slide>
      <b-carousel-slide
        caption=""
        img-src="./assets/imgs/proyectos/ap_l/dormitorio_landscape.jpg"
      ></b-carousel-slide>
      <b-carousel-slide
        caption=""
        img-src="./assets/imgs/proyectos/ap_l/salon_landscape.jpg"
      ></b-carousel-slide>
      <b-carousel-slide
        caption=""
        img-src="./assets/imgs/proyectos/ap_l/salon2_landscape.jpg"
      ></b-carousel-slide>
    </b-carousel>
  </div>
  <div class="container">
    <div>
        <b-container fluid="sm">
            <h5><b>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</b></h5>
            <p><b>ZOÒ</b> Aenean eu risus aliquam, pulvinar arcu non, consectetur leo. Integer eget orci quis neque cursus fringilla.

            <p>Proin nunc tortor, sodales eu purus vitae, sollicitudin commodo eros. Vestibulum ullamcorper ornare quam ut tempor.
                Sed sodales, dui non fermentum facilisis, mi massa mattis erat, vel rhoncus lorem ligula a tortor.</p>

            <p>Vestibulum consequat, nisi blandit ullamcorper fringilla, 
                lorem tortor porttitor eros, lacinia consequat enim leo non ex. Nulla vel ipsum eu eros posuere cursus.</p>

            <p>Ergo <b>ZOÒ</b>et etiam pulvinar odio sed elementum dapibus.</p>
        </b-container>
    </div>

    <h4>Imágenes</h4>

        <div class="card-columns">
      <div class="card">
        <img v-b-modal.modal-center6 src="./assets/imgs/proyectos/ap_l/dormitorio.jpg" class="card-img" alt="">
        <b-modal size="xl" hide-footer=true hide-header=true id="modal-center6">
          <img src="./assets/imgs/proyectos/ap_l/dormitorio.jpg" class="card-img" alt="">
        </b-modal>
      </div>
      <div class="card">
        <img v-b-modal.modal-center7 src="./assets/imgs/proyectos/ap_l/dormitorio_bn_landscape.jpg" class="card-img" alt="">
        <b-modal  size="xl" hide-footer=true hide-header=true id="modal-center7">
          <img src="./assets/imgs/proyectos/ap_l/dormitorio_bn_landscape.jpg" class="card-img" alt="">
        </b-modal>
      </div>
      <div class="card">
        <img v-b-modal.modal-center8 src="./assets/imgs/proyectos/ap_l/dormitorio_landscape.jpg" class="card-img" alt="">
        <b-modal  size="xl" hide-footer=true hide-header=true id="modal-center8">
          <img src="./assets/imgs/proyectos/ap_l/dormitorio_landscape.jpg" class="card-img" alt="">
        </b-modal>
      </div>
      <div class="card">
        <img v-b-modal.modal-center9 src="./assets/imgs/proyectos/ap_l/salon_landscape.jpg" class="card-img" alt="">
        <b-modal  size="xl" hide-footer=true hide-header=true id="modal-center9">
          <img src="./assets/imgs/proyectos/ap_l/salon_landscape.jpg" class="card-img" alt="">
        </b-modal>
      </div>
      <div class="card">
        <img v-b-modal.modal-center10 src="./assets/imgs/proyectos/ap_l/salon2.jpg" class="card-img" alt="">
        <b-modal  size="xl" hide-footer=true hide-header=true id="modal-center10">
          <img src="./assets/imgs/proyectos/ap_l/salon2.jpg" class="card-img" alt="">
        </b-modal>
      </div>
    </div>

    <div class="card-columns">
      <div class="card">
        <img v-b-modal.modal-center1 src="./assets/imgs/proyectos/ap_l/ap_l_foto_5.jpg" class="card-img" alt="">
        <b-modal size="md" centered hide-footer=true hide-header=true id="modal-center1">
          <img src="./assets/imgs/proyectos/ap_l/ap_l_foto_5.jpg" class="card-img" alt="">
        </b-modal>
      </div>
      <div class="card">
        <img v-b-modal.modal-center2 src="./assets/imgs/proyectos/ap_l/ap_l_foto_2.jpg" class="card-img" alt="">
        <b-modal size="md" hide-footer=true hide-header=true id="modal-center2">
          <img src="./assets/imgs/proyectos/ap_l/ap_l_foto_2.jpg" class="card-img" alt="">
        </b-modal>
      </div>
      <div class="card">
        <img v-b-modal.modal-center3 src="./assets/imgs/proyectos/ap_l/ap_l_foto_3.jpg" class="card-img" alt="">
        <b-modal size="md" hide-footer=true hide-header=true id="modal-center3">
          <img src="./assets/imgs/proyectos/ap_l/ap_l_foto_3.jpg" class="card-img" alt="">
        </b-modal>
      </div>
    </div>

    <div class="card-columns">
      <div class="card">
        <img v-b-modal.modal-center4 src="./assets/imgs/proyectos/ap_l/ap_l_foto_1.jpg" class="card-img" alt="">
        <b-modal size="xl" hide-footer=true hide-header=true id="modal-center4">
          <img src="./assets/imgs/proyectos/ap_l/ap_l_foto_1.jpg" class="card-img" alt="">
        </b-modal>
      </div>
      <div class="card">
        <img v-b-modal.modal-center5 src="./assets/imgs/proyectos/ap_l/ap_l_foto_4.jpg" class="card-img" alt="">
        <b-modal  size="xl" hide-footer=true hide-header=true id="modal-center5">
          <img src="./assets/imgs/proyectos/ap_l/ap_l_foto_4.jpg" class="card-img" alt="">
        </b-modal>
      </div>
    </div>


    <h4>Planos</h4>
    <div class="card-columns">
      <div class="card">
        <img v-b-modal.modal-center9 src="./assets/imgs/proyectos/ap_l/ap_l_plano.jpg" class="card-img" alt="">
        <b-modal size="xl" hide-footer=true hide-header=true id="modal-center9">
          <img src="./assets/imgs/proyectos/ap_l/ap_l_plano.jpg" class="card-img" alt="">
        </b-modal>
      </div>
    </div>

  </div>  
  </div>
</template>
<style scoped>

  .container {
    margin-top: 30px;
    text-align: center;
  }

  h4 {
    margin-top: 30px;
  }

  .card img {
    max-height: 627px;
  }
</style>