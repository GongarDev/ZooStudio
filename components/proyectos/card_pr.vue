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
          img-src="./assets/imgs/proyectos/pr_vlll/C1PostV1.jpg"
        ></b-carousel-slide>
        <b-carousel-slide
          caption=""
          img-src="./assets/imgs/proyectos/pr_vlll/OP3_POST.jpg"
        ></b-carousel-slide>
      </b-carousel>
    </div>
    <!-- Text and imgs -->
    <b-container>
      <div>
          <b-div fluid="sm">
              <p><b>Año:</b> 2021</p>
              <p><b>Ubicación:</b> Sevilla</p>
              <p><b>Estado:</b> En ejecución</p>
              <p><b>Superficie:</b> 9 m2</p>
              <p><b>Descripción:<br/></b> Se presentaron varios proyectos de diseño para la clienta cada uno con una paleta de color 
              y texturas diferentes. La posibilidad de visualizar el resultado final fue determinante para la elección de la posición 
              y materiales del mobiliario.</p>
          </b-div>
      </div>

      <h4>Imágenes</h4>
      <div class="card-columns">
        <div class="card">
          <img v-b-modal.modal-center1 src="./assets/imgs/proyectos/PR_VIII/C1PostV1.jpg" class="card-img" alt="">
          <b-modal size="xl" hide-footer=true hide-header=true id="modal-center1">
            <img src="./assets/imgs/proyectos/PR_VIII/C1PostV1.jpg" class="card-img" alt="">
          </b-modal>
        </div>
        <div class="card">
          <img v-b-modal.modal-center2 src="./assets/imgs/proyectos/PR_VIII/OP3_POST.jpg" class="card-img" alt="">
          <b-modal  size="xl" hide-footer=true hide-header=true id="modal-center2">
            <img src="./assets/imgs/proyectos/PR_VIII/OP3_POST.jpg" class="card-img" alt="">
          </b-modal>
        </div>
        <div class="card">
          <img v-b-modal.modal-center3 src="./assets/imgs/proyectos/PR_VIII/foto1.jpg" class="card-img" alt="">
          <b-modal  size="xl" hide-footer=true hide-header=true id="modal-center3">
            <img src="./assets/imgs/proyectos/PR_VIII/foto1.jpg" class="card-img" alt="">
          </b-modal>
        </div>
      </div>

      <!-- <h4>Planos</h4>
      <div class="card-columns">
        <div class="card">
          <img v-b-modal.modal-center9 src="./assets/imgs/proyectos/pr_vlll/MF_XII_plano_ea.jpg" class="card-img" alt="">
          <b-modal size="xl" hide-footer=true hide-header=true id="modal-center9">
            <img src="./assets/imgs/proyectos/pr_vlll/MF_XII_plano_ea.jpg" class="card-img" alt="">
          </b-modal>
        </div>
        <div class="card">
          <img v-b-modal.modal-center10 src="./assets/imgs/proyectos/pr_vlll/MF_XII_plano_er.jpg" class="card-img" alt="">
          <b-modal size="xl" hide-footer=true hide-header=true id="modal-center10">
            <img src="./assets/imgs/proyectos/pr_vlll/MF_XII_plano_er.jpg" class="card-img" alt="">
          </b-modal>
        </div>
      </div> -->
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