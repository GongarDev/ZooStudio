<template>  
  <div class="container">
    <h4 class="title"></h4>
    <b-card-group deck>
      <b-card class="card" img-src="https://picsum.photos/200/300" img-alt="Image" img-top>
        <article class="row">
            <h5>Descripción</h5>
            <h5>currículum</h5>
        </article>
        <b-card-text class="card_title">
          Carlos Delgado
        </b-card-text>
        <b-card-text class="card_subtitle">
          <div>Arquitecto</div>
          <a class="linkedin" target="_blank" href="https://www.linkedin.com/in/carlos-delgado-gallego-39aa7011b/"><i class="fab fa-linkedin items"></i></a>
          <a class="spotify" target="_blank" href="https://www.spotify.com"><i class="fab fa-spotify items"></i></a>
        </b-card-text>
      </b-card>

      <b-card img-src="https://picsum.photos/200/300" img-alt="Image" img-top>
        <article class="row">
          <h5>Descripción</h5>
          <h5>currículum</h5>
        </article>
        <b-card-text class="card_title">
          Mario del Valle
        </b-card-text>
        <b-card-text class="card_subtitle">
          <div>Arquitecto</div>
          <a class="linkedin" target="_blank" href="https://www.linkedin.com/in/mario-valle-montero/"><i class="fab fa-linkedin items"></i></a>
          <a class="spotify" target="_blank" href="https://www.spotify.com"><i class="fab fa-spotify items"></i></a>
        </b-card-text>
      </b-card>

      <b-card img-src="https://picsum.photos/200/300" img-alt="Image" img-top>
        <article class="row">
            <h5>Descripción</h5>
            <h5>currículum</h5>
        </article>
        <b-card-text class="card_title">
          Nacho Figueroa
        </b-card-text>
        <b-card-text class=" card_subtitle">
          <div>Arquitecto</div>
          <a class="linkedin" target="_blank" href="https://www.linkedin.com/in/ignaciosánchezfigueroa"><i class="fab fa-linkedin items"></i></a>
          <a class="spotify" target="_blank" href="https://www.spotify.com"><i class="fab fa-spotify items"></i></a>
        </b-card-text>
      </b-card>

      <b-card img-src="https://picsum.photos/200/300" img-alt="Image" img-top>
        <article class="row">
            <h5>Descripción</h5>
            <h5>currículum</h5>
        </article>
        <b-card-text class="card_title">
          César Hidalgo
          </b-card-text>
        <b-card-text class=" card_subtitle">
          <div>Arquitecto</div>
          <a class="linkedin" target="_blank" href="https://www.linkedin.com/in/c%C3%A9sar-hidalgo-guijo-a51589157/"><i class="fab fa-linkedin items"></i></a>
          <a class="spotify" target="_blank" href="https://www.spotify.com"><i class="fab fa-spotify items"></i></a>
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

  .card-deck {
    display: flex;
    justify-content: space-between;
  }

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

  .card img {
    width: 100%;
    top: 0;
    left: 0;
    opacity: 1;
    -webkit-transition: all 0.2s ease;
    -moz-transition: all 0.2s ease;
    -o-transition: all 0.2s ease;
    -ms-transition: all 0.2s ease;
    transition: all 0.2s ease;
  }

  .card article {
    width: 100%;
    padding: 5%;
    position: absolute;
    top: 0;
    display: none;
    -webkit-transition: all 0.5s ease;
    -moz-transition: all 0.5s ease;
    -o-transition: all 0.5s ease;
    -ms-transition: all 0.5s ease;
    transition: all 0.5s ease;
  }

  h5 {
    color: #000;
    font-weight: 80;
    font-size: 25px;
    border-bottom: #009999 solid 1px;
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
    padding-right: 5px;
  }

  .items:hover {
    color: #009999;
    background-color: #ffffff;
    cursor: pointer;
  }

  .card:hover img {
    opacity: 0.1;
  }

  .card:hover article {
    display: flex;
    opacity: 1;
  }
</style>
