<template>
    <div id="navbar">
        <b-button v-b-toggle.sidebar-right class="divempty" disabled><i class="fas fa-bars"></i></b-button>
        <div id="logo">
            <img id="img" src="./assets/imgs/logo.png" alt="">
            <div id="subtitle">ESTUDIO DE ARQUITECTURA</div>
        </div>
        <div id="navbar-right">
            <div class="sidebar">
			<sidebar></sidebar>
		    </div>
        </div>
    </div>
</template>
<script>
	module.exports = {
		name: 'topbar',
		mixins: [],
		data() {
			return {
				section: "topbar",
			};
		},
		components: {
            sidebar: httpVueLoader("../components/sidebar.vue"),
		},
	};

    // When the user scrolls down 80px from the top of the document, resize the navbar's padding and the logo's font size
    window.onscroll = function() {scrollFunction()};

    function scrollFunction() {
        if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
            document.getElementById("navbar").style.padding = "10px 10px";
            document.getElementById("logo").style.fontSize = "20px";
            document.getElementById("img").style.height = "30px";
            document.getElementById("subtitle").style.fontSize = "12px";
            document.getElementById("logo").style.fontWeight = "normal";


        } else {
            document.getElementById("navbar").style.padding = "12px 10px";
            document.getElementById("logo").style.fontSize = "smaller";
            document.getElementById("img").style.height = "120px";
            document.getElementById("subtitle").style.fontSize = "smaller";

        }
    }
</script>
<style scoped>

    .fa-bars {
        color: #FFFFFF;
        font-size: 25px;
        margin: 4px;
        padding: 1px;
    }

    .divempty {
        background: transparent;
        border: none;
        outline:0;
        padding: 2px 4px;
        text-align: center;
        font-size: 16px;
        color: #ffffff;
        margin: 40px 1px;
        transition: 0.3s;
    }

    #navbar {
        overflow: hidden;
        background-color: #ffffff;
        padding: 12px 10px;
        transition: 0.4s;
        position: fixed;
        width: 100%;
        top: 0;
        z-index: 99;
        display: flex;
        align-items: center;
        flex-direction: row;
        justify-content: space-between;
    }

    #logo {
        display: flex;
        align-items: center;
        flex-direction: column;
    }

    #navbar #logo {
        float: left;
        color: black;
        text-align: center;
        padding: 12px;
        text-decoration: none;
        font-size: smaller; 
        line-height: 25px;
        border-radius: 4px;
    }

    #img {
        width: auto;
        height: auto;
        max-height: 120px;
    }

    #navbar #logo #img, #subtitle {
        font-size: smaller;
        transition: 0.4s;
        font-family: 'Roboto';
        text-shadow: 0px 0px 2px #000;
        text-decoration: none;
        line-height: 25px;
        border-radius: 4px;
    }

    #navbar-right {
        float: right;
    }

    @media screen and (max-width: 180px) {
        #navbar {
            padding: 12px 10px !important;
        }
        #navbar #logo {
            float: none;
            display: block;
            text-align: left;
        }
        #navbar-right {
            float: none;
        }
    }
</style>