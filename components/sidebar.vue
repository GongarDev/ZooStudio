<template>
  <div>
    <b-button v-b-toggle.sidebar-right class="btn"><i class="fas fa-bars"></i></b-button>
    <b-sidebar id="sidebar-right" bg-variant="dark" title="" right shadow backdrop>
      <div class="px-3 py-2">
          <nav class="mb-3 w-100">
            <b-nav vertical class="w-100">
              <router-link class="routerLink" to="/"><b-nav-item active href="home"><span class="items">Home</span></b-nav-item></router-link>
              <router-link class="routerLink" to="/nosotros"><b-nav-item href="nosotros"><span class="items">Nosotros</span></b-nav-item></router-link>
              <router-link class="routerLink" to="/proyectos"><b-nav-item href="proyectos"><span class="items">Proyectos</span></b-nav-item></router-link>
              <router-link class="routerLink" to="/contacto"><b-nav-item href="contacto"><span class="items">Contacto</span></b-nav-item></router-link>
              <b-nav-item target="_blank" href="https://www.facebook.com/ZO%C3%92-Estudio-103110098491424/?ref=py_c"><i class="fab fa-facebook-square items"></i></b-nav-item>
              <b-nav-item target="_blank" href="https://www.instagram.com/holazooestudio/"><i class="fab fa-instagram-square items"></i></b-nav-item>
              <b-nav-item target="_blank" href="https://twitter.com/holazooestudio"><i class="fab fa-twitter-square items"></i></b-nav-item>
            </b-nav>
          </nav>
      </div>
    </b-sidebar>
  </div>
</template>
<script>
    module.exports = {
        name: "sidebar",
        data() {
            return {
            };
        },
    };
</script>
<style scoped>

  .fa-bars {
    color: #009999;
    font-size: 25px;
    margin: 4px;
    padding: 1px;
  }

  .fa-bars:hover {
    color: #FFFFFF;
    font-size: 25px;
    margin: 4px;
    padding: 1px;
  }

  .btn {
    background: transparent;
    border: none;
    outline:0;
    padding: 2px 4px;
    text-align: center;
    font-size: 16px;
    margin: 2px 1px;
    transition: 0.3s;
  }

  .btn:focus {
    outline: none;
    box-shadow: none;
  }

  .btn:hover{
    color: white;
		background-color: #009999;
    opacity: 0.3;
  }

  .items:hover {
    color: white;
		background-color: #009999;
    cursor: pointer;

  }

  .items {
    color: #009999;
    margin: 2px;
    padding: 5px 5px;
    text-align: center;
    font-size: 16px;
    margin: 5px 3px;
    transition: 0.3s;
    border-radius: 3px;
    text-decoration: none;
  }

  .routerLink{
      text-decoration: none;
  }

  span {
        margin: 2px;
  }

</style>
