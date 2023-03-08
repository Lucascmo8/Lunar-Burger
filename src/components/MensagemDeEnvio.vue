<template>
    <p id="mensagemDeEnvio">
        {{ mensagem }}
    </p>
</template>

<script>
    export default{
        name:"MensagemDeEnvio",
        props:{
            mensagem:String,
        }
    }
</script>

<style scoped>
    #mensagemDeEnvio{
        color: #004085;
        background-color: #cce5ff;
        border:2px solid #b8daff;
        border-radius: 10px;
        padding: 10px;
        max-width: 370px;
        min-width: 200px;
        margin:16px auto;
        box-shadow: 1px 0px 5px rgba(0, 0, 0, 0.4);
    }
</style>