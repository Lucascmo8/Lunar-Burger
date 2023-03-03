<template>
    <img :src="avatar" :alt="descricao">
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