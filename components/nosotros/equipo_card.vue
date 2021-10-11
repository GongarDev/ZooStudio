<template>  
<div class="container">
  <h4 class="title">Equipo</h4>
  <b-card-group deck>
    <b-card class="card" img-src="https://picsum.photos/200/300" img-alt="Image" img-top>
      <b-card-text class="card_title">
        Carlos Delgado
      </b-card-text>
      <b-card-text class="card_subtitle">
        Arquitecto
      </b-card-text>
    </b-card>

    <b-card img-src="https://picsum.photos/200/300" img-alt="Image" img-top>
      <b-card-text class="card_title">
        Mario del Valle
      </b-card-text>
      <b-card-text class="card_subtitle">
        Arquitecto
      </b-card-text>
    </b-card>

    <b-card img-src="https://picsum.photos/200/300" img-alt="Image" img-top>
      <b-card-text class="card_title">
        Nacho Sánchez-Escobero
      </b-card-text>
      <b-card-text class="card_subtitle">
        Arquitecto
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

*{
    text-align: center;
    font-family: 'Roboto';
}
  .title {
    font-weight: bold;
    margin-bottom: 50px;
  }
  .card {
    border: 0px;
    border-radius: 0px;
  }
  .card_title {
    font-size: 1.0em;
    font-weight: bold;
    margin-top: -18px;
  }
  .card_subtitle {
    font-size: 0.8em;
    margin-top: -20px;
    font-style: italic;
  }
</style>

<!--  
<template #footer>
  <small class="text-muted">Arquitecto</small>
</template> 
-->