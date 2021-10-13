<template>
    <div class="container">
        <div class="row">
            <div class="col">
                <div class="d-block">
                    <div class="mb-4">¡Síguenos!</div>
                    <div class="d-flex justify-content-between w-50 mb-5">
                        <i class="fab fa-2x fa-facebook"></i>
                        <i class="fab fa-2x fa-twitter"></i>
                        <i class="fab fa-2x fa-instagram"></i>
                        <i class="fab fa-2x fa-linkedin"></i>
                    </div>
                    <div class="d-block mb-4">
                        <span class="fw-bold">Email</span>
                        <br />
                        <small>example@example.com</small>
                    </div>
                        <div class="d-block mb-4">
                        <span class="fw-bold">Teléfono</span>
                        <br />
                        <small>555555555</small>
                    </div>
                    <div class="d-block mb-4">
                        <span class="fw-bold mb-4">Sevilla</span>
                        <br />
                        <small>Calle falsa 123</small>
                        <br />
                        <small>Districto Macarena, 41009</small>
                        <br />
                    </div>
                </div>
            </div>
            <div class="col">
                <div class="feelText">Ponte en contacto</div>
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
            </div>
        </div>
    </div>
</template>

<script>

    module.exports = {
        name: "form_email",
    };
</script>

<style>

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
</style>