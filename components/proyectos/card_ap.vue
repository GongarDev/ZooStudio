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
          img-src="./assets/imgs/proyectos/AP_I/ap_l_foto_4.jpg"
        ></b-carousel-slide>
        <b-carousel-slide
          caption=""
          img-src="./assets/imgs/proyectos/AP_I/dormitorio_landscape.jpg"
        ></b-carousel-slide>
        <b-carousel-slide
          caption=""
          img-src="./assets/imgs/proyectos/AP_I/salon_landscape.jpg"
        ></b-carousel-slide>
        <b-carousel-slide
          caption=""
          img-src="./assets/imgs/proyectos/AP_I/salon2_landscape.jpg"
        ></b-carousel-slide>
      </b-carousel>
    </div>
    <!-- Text and imgs -->
    <b-container>
      <div>
          <div fluid="sm">
              <p><b>Año:</b> 2020</p>
              <p><b>Ubicación:</b> Sevilla</p>
              <p><b>Estado:</b> Terminado</p>
              <p><b>Superficie:</b> 37 m2</p>
              <p><b>Descripción:<br/></b> Este proyecto de pequñas dimesiones liberamos superficie del resto de habitaciones de la casa
                 para cedérselos al salón y crear un recibidor en la entrada. El mobiliario y los muebles de cocina 
                 quedan integrados con la arquitectura para un mejor aprovechamiento del espacio. 
                 La iluminación de la vivienda y la amplitud de las ventanas nos brindó la oportunidad de emplear 
                 mobiliario colorido y papeles pintados en las paredes interiores.</p>
          </div>
      </div>

      <h4>Imágenes</h4>
      <div class="card-columns">
        <div class="card">
          <img v-b-modal.modal-center6 src="./assets/imgs/proyectos/AP_I/dormitorio.jpg" class="card-img" alt="">
          <b-modal size="xl" hide-footer hide-header id="modal-center6">
            <img src="./assets/imgs/proyectos/AP_I/dormitorio.jpg" class="card-img" alt="">
          </b-modal>
        </div>
        <div class="card">
          <img v-b-modal.modal-center7 src="./assets/imgs/proyectos/AP_I/dormitorio_bn_landscape.jpg" class="card-img" alt="">
          <b-modal  size="xl" hide-footer hide-header id="modal-center7">
            <img src="./assets/imgs/proyectos/AP_I/dormitorio_bn_landscape.jpg" class="card-img" alt="">
          </b-modal>
        </div>
        <div class="card">
          <img v-b-modal.modal-center8 src="./assets/imgs/proyectos/AP_I/dormitorio_landscape.jpg" class="card-img" alt="">
          <b-modal  size="xl" hide-footer hide-header id="modal-center8">
            <img src="./assets/imgs/proyectos/AP_I/dormitorio_landscape.jpg" class="card-img" alt="">
          </b-modal>
        </div>
        <div class="card">
          <img v-b-modal.modal-center9 src="./assets/imgs/proyectos/AP_I/salon_landscape.jpg" class="card-img" alt="">
          <b-modal  size="xl" hide-footer hide-header id="modal-center9">
            <img src="./assets/imgs/proyectos/AP_I/salon_landscape.jpg" class="card-img" alt="">
          </b-modal>
        </div>
        <div class="card">
          <img v-b-modal.modal-center10 src="./assets/imgs/proyectos/AP_I/salon2.jpg" class="card-img" alt="">
          <b-modal  size="xl" hide-footer hide-header id="modal-center10">
            <img src="./assets/imgs/proyectos/AP_I/salon2.jpg" class="card-img" alt="">
          </b-modal>
        </div>
      </div>

      <div class="card-columns">
        <div class="card">
          <img v-b-modal.modal-center1 src="./assets/imgs/proyectos/AP_I/ap_l_foto_5.jpg" class="card-img" alt="">
          <b-modal size="md" centered hide-footer hide-header id="modal-center1">
            <img src="./assets/imgs/proyectos/AP_I/ap_l_foto_5.jpg" class="card-img" alt="">
          </b-modal>
        </div>
                <div class="card">
          <img v-b-modal.modal-center5 src="./assets/imgs/proyectos/AP_I/ap_l_foto_4.jpg" class="card-img" alt="">
          <b-modal  size="xl" hide-footer hide-header id="modal-center5">
            <img src="./assets/imgs/proyectos/AP_I/ap_l_foto_4.jpg" class="card-img" alt="">
          </b-modal>
        </div>
        <div class="card">
          <img v-b-modal.modal-center4 src="./assets/imgs/proyectos/AP_I/ap_l_foto_1.jpg" class="card-img" alt="">
          <b-modal size="xl" hide-footer hide-header id="modal-center4">
            <img src="./assets/imgs/proyectos/AP_I/ap_l_foto_1.jpg" class="card-img" alt="">
          </b-modal>
        </div>
        <div class="card">
          <img v-b-modal.modal-center3 src="./assets/imgs/proyectos/AP_I/ap_l_foto_3.jpg" class="card-img" alt="">
          <b-modal size="md" hide-footer hide-header id="modal-center3">
            <img src="./assets/imgs/proyectos/AP_I/ap_l_foto_3.jpg" class="card-img" alt="">
          </b-modal>
        </div>
      </div>

      <h4>Planos</h4>
      <div class="card-columns">
        <div class="card">
          <img v-b-modal.modal-center12 src="./assets/imgs/proyectos/AP_I/ap_l_plano.jpg" class="card-img" alt="">
          <b-modal size="xl" hide-footer hide-header id="modal-center12">
            <img src="./assets/imgs/proyectos/AP_I/ap_l_plano.jpg" class="card-img" alt="">
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
</style>