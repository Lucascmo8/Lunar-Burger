<template>
  <Banner />
  <main class="mainContainer">
    <h2>Monte o seu Hamburger:</h2>
    <FormCriarPedido />
  </main>
</template>

<script>
import Banner from '../components/Banner.vue'
import FormCriarPedido from '../components/FormCriarPedido.vue';

  export default {
    name:"Home",
    components:{
      Banner,
      FormCriarPedido,
    }
  }
</script>

<style scoped>
  main{
    margin-bottom: 40px;
    
  }

</style>