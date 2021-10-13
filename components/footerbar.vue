<template>
<div class="">
    <footer class="bg-light text-center text-lg-start">
        <!-- Copyright -->
        <div class="copyright text-center p-3" style="background-color: rgba(0, 0, 0, 1);">
            © 2020 Copyright:
            <router-link class="routerLink" to="/"><span class="copyright">ZooStudio</span></router-link>
        </div>
        <!-- Copyright -->
    </footer>
    </div>
</template>

<script>

module.exports = {
    name: "footerbar",
    data() {
        return {};
    },
};
</script>

<style scoped>

    .copyright{
        color: #009999;
    }
    .routerLink{
        text-decoration: none;
    }
</style>