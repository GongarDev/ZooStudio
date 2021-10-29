<template>

    <div class="container text-center">

        <!-- Row 1  -->
        <b-card-group class="contenedor text-center">
            <b-card id="ap_l" class="container_foto rounded-circle" @click="$router.push( {name:'ap_l'} )" img-src="./assets/imgs/proyectos/ap_l/cabecera.jpg" img-alt="Image" img-top>
                <article>
                    <img src="./assets/imgs/proyectos/ap_l/cabecera_titulo.png">
                    <div class="bg"></div>
                </article>
            </b-card>

            <b-card id="ms_xv" class="container_foto rounded-circle" @click="$router.push( {name:'ms_xv'} )" img-src="./assets/imgs/proyectos/ms_xv/cabecera.jpg" img-alt="Image" img-top>
                <article>
                    <img src="./assets/imgs/proyectos/ms_xv/cabecera_titulo.png">
                    <div class="bg"></div>
                </article>            
            </b-card>

            <b-card id="ln_xlll" class="container_foto rounded-circle" @click="$router.push( {name:'ln_xlll'} )" img-src="./assets/imgs/proyectos/ln_xlll/cabecera.jpg" img-alt="Image" img-top>
                <article>
                    <img src="./assets/imgs/proyectos/ln_xlll/cabecera_titulo.png">
                    <div class="bg"></div>
                </article>            
            </b-card>            
        </b-card-group>

        <!-- Row 2 -->
        <b-card-group class="contenedor text-center">         
            <b-card id="mf_xll" class="container_foto rounded-circle" @click="$router.push( {name:'mf_xll'} )" img-src="./assets/imgs/proyectos/mf_xll/cabecera.jpg" img-alt="Image" img-top>
                <article>
                    <img src="./assets/imgs/proyectos/mf_xll/cabecera_titulo.png">
                    <div class="bg"></div>
                </article>            
            </b-card>

            <b-card id="pr_vlll" class="container_foto rounded-circle" @click="$router.push( {name:'pr_vlll'} )" img-src="./assets/imgs/proyectos/pr_vlll/cabecera.jpg" img-alt="Image" img-top>
                <article>
                    <img src="./assets/imgs/proyectos/pr_vlll/cabecera_titulo.png">
                    <div class="bg"></div>
                </article>            
            </b-card>
            <b-card id="proximamente" class="container_foto rounded-circle" @click="$router.push( {name:'prox'} )" img-src="https://placekitten.com/g/300/300" img-alt="Image" img-top>
                <article class="prox">
                    <h2>Próximamente...</h2>
                </article>
            </b-card>

        </b-card-group>

        <!-- Row 3 -->
        <b-card-group class="contenedor text-center">
            <!-- <b-card id="vr_xlv" class="container_foto rounded-circle" @click="$router.push( {name:'vr_xlv'} )" img-src="./assets/imgs/proyectos/vr_xlv/cabecera.jpg" img-alt="Image" img-top>
                <article>
                    <img src="./assets/imgs/proyectos/vr_xlv/cabecera_titulo.png">
                    <div class="bg"></div>
                </article>            
            </b-card> -->
        </b-card-group>
     </div>

</template>

<script>
    module.exports = {
        name: "proyectos_card",
        data() {
            return {
            };
        },
    };
</script>

<style scoped>

    .card-body {
        padding: 0;
    }
    
    .contenedor {
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap;
        margin-bottom: 30px;
    }

    h1 {
        color: #FCFBFA;
    }

    .container_foto {
        background-color: transparent;
        padding: 0;
        overflow: hidden;
        max-width: 300px;
        max-height: 300px;
        margin-right: 30px;
        margin-left: 30px;
    }

    .container_foto article {
        position: absolute;
        top: 0;
        left: 0;
        z-index: 0;
    }

    .container_foto article img {
        width: 100%;
        top: 0;
        left: 0;
        opacity: 0;
        -webkit-transition: all 2s ease;
        -moz-transition: all 2s ease;
        -o-transition: all 2s ease;
        -ms-transition: all 2s ease;
        transition: all 2s ease;
    }

    .container_foto article h2{
        display: flex;
        align-items: center;
        color: #fff;
        font-weight: 800;
        font-size: 25px;
        border-bottom: #fff solid 1px;
        top: 0;
        bottom: 0;
        right: 0;
        text-align: center;
        width: 100%;
        opacity: 0;
        -webkit-transition: all 2s ease;
        -moz-transition: all 2s ease;
        -o-transition: all 2s ease;
        -ms-transition: all 2s ease;
        transition: all 2s ease;
    }

    .prox{
        width: 100%;
        top: 0;
        bottom: 0;

        right: 0;  
        display: flex;
        align-items: center;
        text-align: center;
    }

    /*hovers*/

    .container_foto:hover {
        cursor: pointer;
    }

    .container_foto:hover img {
        opacity: 1;
        z-index: -2;
    }
    .container_foto:hover .bg {
        opacity: 1;
        z-index: -1;
    }
    .container_foto:hover h2 {
        opacity: 1;
        z-index: -2;
    }
</style>