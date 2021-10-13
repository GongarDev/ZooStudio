let app;

function initVue() {
    const Home = httpVueLoader("views/home.vue");
    const Nosotros = httpVueLoader("views/nosotros.vue");
    const Proyectos = httpVueLoader("views/proyectos.vue");
    const Contacto = httpVueLoader("views/contacto.vue");

    const router = new VueRouter({
        routes: [
            {path: "/", name: "home", component: Home},
            {path: "/nosotros", name: "nosotros", component: Nosotros},
            {path: "/proyectos", name: "proyectos", component: Proyectos},
            {path: "/contacto", name: "contacto", component: Contacto},
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