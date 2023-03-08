<template>
    <main class="mainContainer">
        <h2>Lista de Pedidos</h2>
        <TabelaDosPedidos />
    </main>
</template>

<script>
    import TabelaDosPedidos from '../components/TabelaDosPedidos.vue'

    export default{
        name:"Pedidos",
        components:{
            TabelaDosPedidos,
        }
    }
</script>

<style scoped>
    main{
        margin-top: 120px;
    }
</style>