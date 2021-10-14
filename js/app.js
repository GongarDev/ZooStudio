let app;

function initVue() {
    const Home = httpVueLoader("views/home.vue");
    const Nosotros = httpVueLoader("views/nosotros.vue");
    const Proyectos = httpVueLoader("views/proyectos.vue");
    const Contacto = httpVueLoader("views/contacto.vue");

    //Proyectos
    const Ap_l = httpVueLoader("views/proyectos/ap_l.vue");
    const Ms_xv = httpVueLoader("views/proyectos/ms_xv.vue");

    const router = new VueRouter({
        routes: [
            {path: "/", name: "home", component: Home},
            {path: "/nosotros", name: "nosotros", component: Nosotros},
            {path: "/proyectos", name: "proyectos", component: Proyectos},
            {path: "/contacto", name: "contacto", component: Contacto},

            //Proyectos
            {path: "/ap_l", name: "ap_l", component: Ap_l},
            {path: "/ms_xv", name: "ms_xv", component: Ms_xv},

            
        ],
    });

    app = new Vue({
        el: "#app",
        router,
        mixins: [],
        data() {
            return {
                theme: "",
                section: "home", //current view showed
            };
        },
        components: {
            sidebar: httpVueLoader("./components/sidebar.vue"),
            topbar: httpVueLoader("./components/topbar.vue"),
        }
    })
}