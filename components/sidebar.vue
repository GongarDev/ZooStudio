<template>
  <div>
    <b-button v-b-toggle.sidebar-right class="btn"><i class="fas fa-bars fa-x3"></i></b-button>
    <b-sidebar id="sidebar-right"  width="180px" bg-variant="dark" title="" right shadow backdrop>
      <div class="px-3 py-2 w-100 h-100">
          <nav class="mb-1 w-100 h-100">
            <b-nav vertical class="navi w-100 h-100">

              <div>
                <router-link class="routerLink" to="/" @click.native="scrollToTop"><b-nav-item active href="home"><span class="items">Home</span></b-nav-item></router-link>
                <router-link class="routerLink" to="/nosotros" @click.native="scrollToTop"><b-nav-item href="nosotros"><span class="items">Nosotros</span></b-nav-item></router-link>
                <router-link class="routerLink" to="/servicios" @click.native="scrollToTop"><b-nav-item href="servicios"><span class="items">Servicios</span></b-nav-item></router-link> 
                <router-link class="routerLink" to="/proyectos" @click.native="scrollToTop"><b-nav-item href="proyectos"><span class="items">Proyectos</span></b-nav-item></router-link>
                <router-link class="routerLink" to="/contacto" @click.native="scrollToTop"><b-nav-item href="contacto"><span class="items">Contacto</span></b-nav-item></router-link>
              </div>

              <div class="d-flex bg-dark text-light follow">
                <b-nav-item target="_blank" href="https://www.facebook.com/ZO%C3%92-Estudio-103110098491424/?ref=py_c"><i class="fab fa-facebook-square icons"></i></b-nav-item>
                <b-nav-item target="_blank" href="https://www.instagram.com/holazooestudio/"><i class="fab fa-instagram-square icons"></i></b-nav-item>
                <b-nav-item target="_blank" href="https://www.linkedin.com/company/zoo-estudio/"><i class="fab fa-linkedin icons"></i></b-nav-item>
              </div>

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
        methods: { 
          scrollToTop() {
              window.scrollTo(0,0);
          }
        },
    };
</script>
<style scoped>

  .navi {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  
  .fa-bars {
    color: #009999;
    font-size: 35px;
    margin: 4px;
    padding: 1px;
  }

  .fa-bars:hover {
    color: #FFFFFF;
    font-size: 35px;
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
    font-size: 22px;
    margin: 5px 3px;
    transition: 0.3s;
    border-radius: 3px;
    text-decoration: none;
  }

  .icons {
    color: #009999;
    text-align: center;
    font-size: 30px;
    padding: 5px 5px;
    margin: 5px 3px;
    transition: 0.3s;
    border-radius: 3px;
    text-decoration: none;
  }

  .icons:hover {
    color: white;
		background-color: #009999;
    cursor: pointer;
  }

  .routerLink{
    text-decoration: none;
  }

  span {
    margin: 2px;
  }

  .follow {
    display: flex;
    align-items:center;
    flex-wrap: wrap;
    justify-content: space-around;
    flex-direction: column;
    color: #009999;
    margin: 2px;
    padding: 5px 5px;
    text-align: center;
    font-size: 16px;
    margin: 5px 3px;
    bottom: 0;
  }

  .titles, .titles:hover {
    text-decoration: none;
    color: #009999;
  }

</style>
