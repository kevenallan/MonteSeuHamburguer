<template>

    <Navbar :logo="logo_msh" :alt="alt_msh"/>
    <router-view/>
    <Footer/>
</template>

<script>

    import Navbar from './components/Navbar.vue';
    import Footer from './components/Footer.vue';

    export default {
        components: {
            Navbar,
            Footer
        },
        data() {
            return {
                //msh - Monte seu Hamburguer
                logo_msh: "/img/logo.png",
                alt_msh: "Mangabeira Burger"
            }
        }
    }

</script>

<style>

    * {
        font-family: Helvetica;
        padding: 0;
        margin: 0;
        box-sizing: border-box; /*ISSO SERVE PERA OS "INPUTS" NÃO PASSAREM DA LARGURA MAXIMA DA DIV "PAI" */
    }

    .container {
        margin: 50px;
        min-height: 250px;
    }

    h1 {
        text-align: center;
        font-size: 42px;
        margin-bottom: 30px;
        color: #222;
    }

</style>
