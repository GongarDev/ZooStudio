<template>
    <div class="container text-center">
        <b-card-group class="contenedor text-center">
            <b-card class="container_foto rounded-circle" img-src="./assets/imgs/proyectos/antonio_pantion/cabecera.jpg" img-alt="Image" img-top>
            </b-card>

            <b-card class="container_foto rounded-circle" img-src="./assets/imgs/proyectos/merida/cabecera.jpg" img-alt="Image" img-top>
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
        background-color: #009999;
        padding: 0;
        overflow: hidden;
        max-width: 300px;
        max-height: 300px;
        margin: 5px;
    }

    .container_foto article {
        padding: 5%;
        position: absolute;
        bottom: 0;
        z-index: 0;
        -webkit-transition: all 0.5s ease;
        -moz-transition: all 0.5s ease;
        -o-transition: all 0.5s ease;
        -ms-transition: all 0.5s ease;
        transition: all 0.5s ease;
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

    .container_foto img {
        width: 100%;
        top: 0;
        left: 0;
        opacity: 1;
        -webkit-transition: all 4s ease;
        -moz-transition: all 4s ease;
        -o-transition: all 4s ease;
        -ms-transition: all 4s ease;
        transition: all 4s ease;
    }

    .ver_mas span {
        font-size: 40px;
        color: #fff;
        position: relative;
        margin: 0 auto;
        width: 100%;
        top: 13px;
    }

    /*hovers*/

    .container_foto:hover {
        cursor: pointer;
    }

    .container_foto:hover img {
        opacity: 0.4;
        transform: scale(1.5);
    }

    .container_foto:hover article {
        transform: translate(2px, -69px);
        -webkit-transform: translate(2px, -69px);
        -moz-transform: translate(2px, -69px);
        -o-transform: translate(2px, -69px);
        -ms-transform: translate(2px, -69px);
    }

    .container_foto:hover .ver_mas {
        transform: translate(0px, 0px);
        -webkit-transform: translate(0px, 0px);
        -moz-transform: translate(0px, 0px);
        -o-transform: translate(0px, 0px);
        -ms-transform: translate(0px, 0px);
        opacity: 1;
    }
</style>