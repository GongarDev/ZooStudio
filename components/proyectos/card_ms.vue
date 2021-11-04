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
          img-src="./assets/imgs/proyectos/MS_XV/bano1.jpg"
        ></b-carousel-slide>
        <b-carousel-slide
          caption=""
          img-src="./assets/imgs/proyectos/MS_XV/bano2.jpg"
        ></b-carousel-slide>
        <b-carousel-slide
          caption=""
          img-src="./assets/imgs/proyectos/MS_XV/salon1.jpg"
        ></b-carousel-slide>
      </b-carousel>
    </div>
    <!-- Text and imgs -->
    <b-container>
      <div>
          <b-div fluid="sm">
              <p><b>Año:</b> 2021</p>
              <p><b>Ubicación:</b> Mérida</p>
              <p><b>Estado:</b> Terminado</p>
              <p><b>Superficie:</b> 90 m2</p>
              <p><b>Descripción:<br/></b>En este proyecto de vivienda se encuentran lo tradicional y lo moderno. 
              La secuencia fluida de los espacios comunes, salón-comedor-cocina, responde a una estrategia contemporánea 
              mientras que el diseño de interiores evoca a las casas tradicionales.  
              El uso de carpinterías, contraventanas y mobiliario de madera hacen acogedora a la vivienda mientras la plantas 
              y la decoración propuesta aportan pequeñas pinceladas de color al conjunto.</p>
          </b-div>
      </div>

      <h4>Imágenes</h4>
      <div class="card-columns">
        <div class="card">
          <img v-b-modal.modal-center1 src="./assets/imgs/proyectos/MS_XV/bano2_vertical.jpg" class="card-img" alt="">
          <b-modal size="xl" hide-footer=true hide-header=true id="modal-center1">
            <img src="./assets/imgs/proyectos/MS_XV/bano2_vertical.jpg" class="card-img" alt="">
          </b-modal>
        </div>
        <div class="card">
          <img v-b-modal.modal-center2 src="./assets/imgs/proyectos/MS_XV/bano1.jpg" class="card-img" alt="">
          <b-modal  size="xl" hide-footer=true hide-header=true id="modal-center2">
            <img src="./assets/imgs/proyectos/MS_XV/bano1.jpg" class="card-img" alt="">
          </b-modal>
        </div>
        <div class="card">
          <img v-b-modal.modal-center3 src="./assets/imgs/proyectos/MS_XV/bano2.jpg" class="card-img" alt="">
          <b-modal  size="xl" hide-footer=true hide-header=true id="modal-center3">
            <img src="./assets/imgs/proyectos/MS_XV/bano2.jpg" class="card-img" alt="">
          </b-modal>
        </div>
        <div class="card">
          <img v-b-modal.modal-center4 src="./assets/imgs/proyectos/MS_XV/salon1.jpg" class="card-img" alt="">
          <b-modal  size="xl" hide-footer=true hide-header=true id="modal-center4">
            <img src="./assets/imgs/proyectos/MS_XV/salon1.jpg" class="card-img" alt="">
          </b-modal>
        </div>
        <div class="card">
          <img v-b-modal.modal-center5 src="./assets/imgs/proyectos/MS_XV/salon_vertical.jpg" class="card-img" alt="">
          <b-modal  size="xl" hide-footer=true hide-header=true id="modal-center5">
            <img src="./assets/imgs/proyectos/MS_XV/salon2.jpg" class="card-img" alt="">
          </b-modal>
        </div>
      </div>

      <h4>Planos</h4>
      <div class="card-columns">
        <div class="card">
          <img v-b-modal.modal-center9 src="./assets/imgs/proyectos/MS_XV/plano_er.jpg" class="card-img" alt="">
          <b-modal size="xl" hide-footer=true hide-header=true id="modal-center9">
            <img src="./assets/imgs/proyectos/MS_XV/ap_l_plano.jpg" class="card-img" alt="">
          </b-modal>
        </div>
        <div class="card">
          <img v-b-modal.modal-center10 src="./assets/imgs/proyectos/MS_XV/plano_ea.jpg" class="card-img" alt="">
          <b-modal size="xl" hide-footer=true hide-header=true id="modal-center10">
            <img src="./assets/imgs/proyectos/MS_XV/ap_l_plano.jpg" class="card-img" alt="">
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
