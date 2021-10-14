<template>  
  <div class="container">
    <h4 class="title"></h4>
    <b-card-group deck>
      
      <b-card class="card" img-src="https://picsum.photos/200/300" img-alt="Image" img-top>
        <b-card-text class="card_title">
          Carlos Delgado
        </b-card-text>
        <b-card-text class="card_subtitle">
          <div>Arquitecto</div>
          <a class="linkedin" target="_blank" href="https://www.linkedin.com"><i class="fab fa-linkedin items"></i></a>
        </b-card-text>
      </b-card>

      <b-card img-src="https://picsum.photos/200/300" img-alt="Image" img-top>
        <b-card-text class="card_title">
          Mario del Valle
        </b-card-text>
        <b-card-text class="card_subtitle">
          <div>Arquitecto</div>
          <a class="linkedin" target="_blank" href="https://www.linkedin.com"><i class="fab fa-linkedin items"></i></a>
        </b-card-text>
      </b-card>

      <b-card img-src="https://picsum.photos/200/300" img-alt="Image" img-top>
        <b-card-text class="card_title">
          Nacho Sánchez-Escobero
        </b-card-text>
        <b-card-text class=" card_subtitle">
          <div>Arquitecto</div>
          <a class="linkedin" target="_blank" href="https://www.linkedin.com"><i class="fab fa-linkedin items"></i></a>
        </b-card-text>
      </b-card>

    </b-card-group>
  </div>
</template>

<script>
    module.exports = {
        name: "equipo_card",
        data() {
            return {
            };
        },
    };
</script>

<style scoped>

  .title {
    font-weight: bold;
    margin-bottom: 50px;
  }
  
  .card {
    border: 0px;
    border-radius: 0px;
    text-align: center;
    font-family: 'Roboto';
  }

  .card_title {
    font-size: 1.0em;
    font-weight: bold;
    text-align: center;
    margin-top: -18px;
  }

  .card_subtitle {
    font-size: 0.8em;
    margin-top: -20px;
    font-style: italic;
  }

  .items {
    color: #000000;
    text-align: center;
    font-size: 20px;
    transition: 0.3s;
    border-radius: 3px;
    text-decoration: none; 
    padding-top: -10px;
  }

  .items:hover {
    color: #009999;
    background-color: #ffffff;
    cursor: pointer;
  }
</style>
