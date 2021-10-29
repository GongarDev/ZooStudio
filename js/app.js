let app;

function initVue() {
    const Home = httpVueLoader("views/home.vue");
    const Nosotros = httpVueLoader("views/nosotros.vue");
    const Proyectos = httpVueLoader("views/proyectos.vue");
    const Servicios = httpVueLoader("views/servicios.vue");
    const Contacto = httpVueLoader("views/contacto.vue");

    //Proyectos
    const Ap_l = httpVueLoader("views/proyectos/ap_l.vue");
    const Ms_xv = httpVueLoader("views/proyectos/ms_xv.vue");
    const Ln_xlll = httpVueLoader("views/proyectos/ln_xlll.vue");
    const Mf_xll = httpVueLoader("views/proyectos/mf_xll.vue");
    const Pr_vlll = httpVueLoader("views/proyectos/pr_vlll.vue");

    const Prox = httpVueLoader("views/proyectos/prox.vue");

    const router = new VueRouter({
        routes: [
            {path: "/", name: "home", component: Home},
            {path: "/nosotros", name: "nosotros", component: Nosotros},
            {path: "/proyectos", name: "proyectos", component: Proyectos},
            {path: "/servicios", name: "servicios", component: Servicios},
            {path: "/contacto", name: "contacto", component: Contacto},

            //Proyectos
            {path: "/ap_l", name: "ap_l", component: Ap_l},
            {path: "/ms_xv", name: "ms_xv", component: Ms_xv},
            {path: "/ln_xlll", name: "ln_xlll", component: Ln_xlll},
            {path: "/mf_xll", name: "mf_xll", component: Mf_xll},
            {path: "/pr_vlll", name: "pr_vlll", component: Pr_vlll},

            {path: "/prox", name: "prox", component: Prox},        
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