<template>
    <p>Olá {{ cliente }} gostaria de fazer o seu pedido?</p>    
</template>

<script>
    export default{
        name: "lifecycleHooks",
        data(){
            return{
                cliente:"Lucas"
            }
        },
        created(){
            setTimeout(()=>{
                this.cliente = "Luxray"
            },2000)
        },
        mounted(){
            setTimeout(()=>{
                this.cliente = "Charizard"
            },5000)
        }
    }
</script>