<template>
    <div id="navbar">
        <b-button v-b-toggle.sidebar-right class="btn"><a href="javascript:history.back()"><i class="fas fa-arrow-circle-left"></i></a></b-button>
        <div id="logo">
            <router-link class="routerLink" to="/"><img id="img" src="./assets/imgs/logo.png" alt=""></router-link>
            <!-- <div id="subtitle">ESTUDIO DE ARQUITECTURA</div> -->
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
        if (document.body.scrollTop > 60 || document.documentElement.scrollTop > 60) {
            document.getElementById("navbar").style.padding = "4px 10px";
            document.getElementById("logo").style.fontSize = "25px";
            document.getElementById("img").style.height = "35px";
            // document.getElementById("subtitle").style.fontSize = "16px";
            document.getElementById("logo").style.fontWeight = "normal";

        } else {
            document.getElementById("navbar").style.padding = "8px 10px";
            document.getElementById("logo").style.fontSize = "smaller";
            document.getElementById("img").style.height = "100px";
            // document.getElementById("subtitle").style.fontSize = "smaller";

        }
    }
</script>
<style scoped>

    .sidebar {
        margin-right: 50px;
    }

    .fa-arrow-circle-left {
        color: #009999;
        font-size: 35px;
        margin: 4px;
        padding: 1px;
    }

    .fa-arrow-circle-left:hover {
        color: #FFFFFF;
        font-size: 35px;
        margin: 4px;
        padding: 1px;
    }
    
    .fa-bars {
        color: #FFFFFF;
        font-size: 25px;
        margin: 4px;
        padding: 1px;
    }

    .btn {
        background: transparent;
        border: none;
        outline:0;
        padding: 2px 4px;
        text-align: center;
        font-size: 16px;
        margin: 20px 1px;
        margin-left: 50px;
        transition: 0.3s;
    }

    .btn:focus {
        outline: none;
        box-shadow: none;
    }

    .btn:hover{
        color: white;
        background-color: #009999;
        opacity: 0.3;
    }

    .divempty {
        background: transparent;
        border: none;
        outline:0;
        padding: 2px 4px;
        text-align: center;
        font-size: 16px;
        color: #ffffff;
        margin: 20px 1px;
        margin-left: 50px;
        transition: 0.3s;
    }

    #navbar {
        overflow: hidden;
        background-color: #ffffff;
        padding: 10px 10px;
        transition: 0.3s;
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
        color: black;
        text-align: center;
        padding: 10px;
        text-decoration: none;
        font-size: smaller; 
        line-height: 25px;
        border-radius: 4px;
    }

    #img {
        width: auto;
        height: auto;
        max-height: 100px;
    }

    #navbar #logo #img, #subtitle {
        font-size: smaller;
        transition: 0.2s;
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
            padding: 10px 10px !important;
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

    .routerLink {
        text-decoration: none;
    }
</style>