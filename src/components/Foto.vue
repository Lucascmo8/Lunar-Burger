<template>
    <img id="imagem" :src="avatar" :alt="descricao">
</template>

<script>
    export default{
        name:"Foto",
        data(){
            return{
                avatar:"/images/idea.png",
                descricao:"Lampadinha"
            }
        }
    }
</script>

<style scoped>
    img{
        background: yellow;
    }
</style>