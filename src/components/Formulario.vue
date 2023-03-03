<template>
    <form>
        <InputDeTexto />
        <InputDeSubmit />
    </form>
</template>

<script>
    import InputDeTexto from './InputDeTexto.vue';
    import InputDeSubmit from './InputDeSubmit.vue';

    export default{
        name:"Formulario",
        components:{
            InputDeTexto,
            InputDeSubmit,
        }
    }
</script>