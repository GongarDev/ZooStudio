<template>
  <div>
    <b-button v-b-toggle.sidebar-right class="btn" size="lg"><i class="fas fa-bars" color=""></i></b-button>
    <b-sidebar id="sidebar-right" bg-variant="dark" title="" right shadow backdrop>
      <div class="px-3 py-2">
          <nav class="mb-3 w-100">
            <b-nav vertical class="w-100">
              <b-nav-item class="w-100" active @click="hide"><span class="items">Home</span></b-nav-item>
              <b-nav-item href="#link-1" @click="hide"><span class="items">Nosotros</span></b-nav-item>
              <b-nav-item href="#link-2" @click="hide"><span class="items">Proyectos</span></b-nav-item>
              <b-nav-item href="#link-2" @click="hide"><span class="items">Contacto</span></b-nav-item>
              <b-nav-item href="#link-2" @click="hide"><i class="fab fa-facebook-square items"></i></b-nav-item>
              <b-nav-item href="#link-2" @click="hide"><i class="fab fa-instagram-square items"></i></b-nav-item>
              <b-nav-item href="#link-2" @click="hide"><i class="fab fa-twitter-square items"></i></b-nav-item>
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
  }
  
  .btn {
    background: transparent;
    border: 0px;
    outline:0;
    
  }

  .btn:focus {
    outline: none;
    box-shadow: none;
  }

  .items {
    color: #009999;
  }
</style>
