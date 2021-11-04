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
          img-src="./assets/imgs/proyectos/VR_XLV/C1_Post.jpg"
        ></b-carousel-slide>
      </b-carousel>
    </div>
    <!-- Text and imgs -->
    <b-container>
      <div>
          <b-div fluid="sm">
              <p><b>Año:</b> 2021</p>
              <p><b>Ubicación:</b> Huelva</p>
              <p><b>Estado:</b> Anteproyecto</p>
              <p><b>Superficie:</b> 180 m2</p>
              <p><b>Descripción:<br/></b> La vivienda se diseña a partir de la revisión contemporánea de la vivienda tradicional andaluza. 
                Se incluyen elementos como el zaguán, el patio cubierto y el ‘soberao’, así como materiales naturales como baldosas hidráulicas 
                y de barro cocido sin que ello haga renunciar a espacios diáfanos más contemporáneos.
                El proyecto responde a la necesidad de la familia de componer unos espacios amplios, 
                abiertos y que a su vez tengan cada uno su propia independencia. 
                Para ello se construye la siguiente secuencia: zaguán-vestíbulo-patio cubierto-estar-comedor-cocina-patio-soberao. 
                En ellos la luz natural va apreciendo de forma gradual a la vez que se introducen elementos como plantas, texturas 
                y colores que complementan la experiencia doméstica.</p>
          </b-div>
      </div>

      <h4>Imágenes</h4>
      <div class="card-columns">
        <div class="card">
          <img v-b-modal.modal-center6 src="./assets/imgs/proyectos/VR_XLV/C1_Post.jpg" class="card-img" alt="">
          <b-modal size="xl" hide-footer=true hide-header=true id="modal-center6">
            <img src="./assets/imgs/proyectos/VR_XLV/C1_Post.jpg" class="card-img" alt="">
          </b-modal>
        </div>
      </div>

      <!-- <div class="card-columns">
        <div class="card">
          <img v-b-modal.modal-center1 src="./assets/imgs/proyectos/ap_l/ap_l_foto_5.jpg" class="card-img" alt="">
          <b-modal size="md" centered hide-footer=true hide-header=true id="modal-center1">
            <img src="./assets/imgs/proyectos/ap_l/ap_l_foto_5.jpg" class="card-img" alt="">
          </b-modal>
        </div>
      </div> -->

      <h4>Planos</h4>
      <div class="card-columns">
        <div class="card">
          <img v-b-modal.modal-center9 src="./assets/imgs/proyectos/VR_XLV/VR_XLV_croquis.jpg" class="card-img" alt="">
          <b-modal size="xl" hide-footer=true hide-header=true id="modal-center9">
            <img src="./assets/imgs/proyectos/VR_XLV/VR_XLV_croquis.jpg" class="card-img" alt="">
          </b-modal>
        </div>
        <div class="card">
          <img v-b-modal.modal-center10 src="./assets/imgs/proyectos/VR_XLV/VR_XLV_er.jpg" class="card-img" alt="">
          <b-modal size="xl" hide-footer=true hide-header=true id="modal-center10">
            <img src="./assets/imgs/proyectos/VR_XLV/VR_XLV_er.jpg" class="card-img" alt="">
          </b-modal>
        </div>
        <div class="card">
          <img v-b-modal.modal-center11 src="./assets/imgs/proyectos/VR_XLV/VR_XLV_esquema.jpg" class="card-img" alt="">
          <b-modal size="xl" hide-footer=true hide-header=true id="modal-center11">
            <img src="./assets/imgs/proyectos/VR_XLV/VR_XLV_esquema.jpg" class="card-img" alt="">
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