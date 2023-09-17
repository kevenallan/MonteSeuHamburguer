<template>
    <Banner/>
    <div class="container">
        <h1>Monte o seu Hamburguer</h1>
        <BurgerForm/>
    </div>
</template>

<script>

    import Banner from '@/components/Banner.vue';
    import BurgerForm from '@/components/BurgerForm.vue';

    export default {
        name: 'HomeView',
        components: {
            Banner,
            BurgerForm
        }
    }

</script>
