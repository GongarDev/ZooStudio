<template>
    <div class="container">
        <div class="row">
            <div class="col">
                <div class="d-block">
                    <!-- <div class="mb-5 title">¡Síguenos!</div> -->
                    <div class="title mb-4">Ponte en contacto</div>
                    <div class="d-flex justify-content-between w-25 mb-5">
                        <a target="_blank" href="https://www.facebook.com/ZO%C3%92-Estudio-103110098491424/?ref=py_c"><i class="fab fa-2x fa-facebook items"></i></a>
                        <a target="_blank" href="https://www.instagram.com/holazooestudio/"><i class="fab fa-2x fa-instagram items"></i></a>
                        <a target="_blank" href="https://www.linkedin.com/company/zoo-estudio/"><i class="fab fa-2x fa-linkedin items"></i></a>
                    </div>
                    <div class="d-block mb-4">
                        <span class="fw-bold">Email</span>
                        <br />
                        <small>hola@zoostudio.com</small>
                    </div>
                        <div class="d-block mb-4">
                        <span class="fw-bold">Teléfono</span>
                        <br />
                        <small>+34 675 53 91 50</small>
                        <br />
                        <small>+34 695 99 98 35</small>
                    </div>
                    <div class="d-block mb-4">
                        <span class="fw-bold mb-4">Sevilla</span>
                        <!-- <br />
                        <small>Calle falsa 123</small>
                        <br />
                        <small>Districto Macarena, 41009</small>
                        <br /> -->
                    </div>
                </div>
            </div>
            <!-- <div class="col">
                <div class="title mb-4">Ponte en contacto</div>
                <div class="mt-2">
                    <input
                    type="text"
                    class="form-control form-ux"
                    placeholder="Nombre"
                    name="nombreForm"
                    />
                </div>
                <div class="mt-2">
                    <input
                    type="text"
                    class="form-control form-ux"
                    placeholder="Tu correo electrónico"
                    name="emailForm"
                    />
                </div>
                <div class="mt-2">
                    <input
                    type="text"
                    class="form-control form-ux"
                    placeholder="Asunto"
                    name="asuntoForm"
                    />
                </div>
                <div class="mt-2">
                    <b-form-textarea
                        class="form-control form-ux"
                        id="textarea"
                        placeholder="Mensaje"
                        rows="3"
                        no-resize
                    ></b-form-textarea>
                </div>
                <div class="mt-4">
                    <b-button class="btn-primary">ENVIAR</b-button>
                </div>
            </div> -->
        </div>
    </div>
</template>

<script>

    module.exports = {
        name: "form_email",
    };
</script>

<style>

    .title{
        font-weight: bold;
        text-align: left;
    }

    .form-ux, .form-ux:focus {
        background-color: transparent;
        border: 0px;
        border-radius: 0px;
        border-bottom: 1px solid #009999;
        color: #009999;
        font-size: 15px;
        line-height: 35px;
    }

    .btn-primary,
    .btn-primary:active,
    .btn-primary:visited,
    .btn-primary:focus {
        background-color: transparent;
        border-color: #009999;
        color: #009999;
    }

    .btn-primary:hover {
        background-color: #009999;
        border-color: #009999;
        color: #ffffff;
    }

    .items {
        color: #000000;
        text-align: center;
        transition: 0.3s;
        border-radius: 3px;
        text-decoration: none; 
        padding-top: -10px;
    }

    .items:hover {
        color: #009999;
        background-color: #ffffff;
        cursor: pointer;
    }
</style>