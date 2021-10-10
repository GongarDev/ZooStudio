let app;

function initVue() {
    const Home = httpVueLoader("views/home.vue");
    const About = httpVueLoader('views/about.vue');
    const Projects = httpVueLoader('views/projects.vue');

    const router = new VueRouter({
        routes: [
            {path: "/", name: "home", component: Home},
            {path: '/about', name: 'about', component: About},
            {path: '/projects', name: 'projects', component: Projects},
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
            topbar: httpVueLoader("./components/topbar.vue"),
            sidebar: httpVueLoader("./components/sidebar.vue"),
        }
    })
}