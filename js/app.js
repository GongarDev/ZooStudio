let app;

function initVue() {
    const Home = httpVueLoader("views/home.vue");

    const router = new VueRouter({
        routes: [
            {path: "/", name: "home", component: Home},
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
        }
    })
}