<template>
    <div class="container text-center">
        <b-card-group class="contenedor text-center">
            <b-card id="ap_l" class="container_foto rounded-circle" @mouseover="hover('ap_l')" @click="$router.push( {name:'ap_l'} )" img-src="./assets/imgs/proyectos/ap_l/cabecera.jpg" img-alt="Image" img-top>
                <article>
                    <img src="./assets/imgs/proyectos/ap_l/cabecera_titulo.png">
                    <div class="bg"></div>
                </article>
            </b-card>

            <b-card class="container_foto rounded-circle" @click="$router.push( {name:'ms_xv'} )" img-src="./assets/imgs/proyectos/merida/cabecera.jpg" img-alt="Image" img-top>
            </b-card>

            <b-card class="container_foto rounded-circle" img-src="https://placekitten.com/g/300/300" img-alt="Image" img-top>
                <article class="row">
                    <h2>Proyecto <br>Nº 3</h2>
                    <h4>Próximamente...</h4>
                </article>
            </b-card>
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

    .contenedor {
        display: flex;
        justify-content: space-between;
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

    .container_foto h2 {
        color: #fff;
        font-weight: 800;
        font-size: 25px;
        border-bottom: #fff solid 1px;
    }

    .container_foto h4 {
        font-weight: 300;
        color: #fff;
        font-size: 16px;
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
</style>