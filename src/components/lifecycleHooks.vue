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
                this.lifeCycle()
            },2000)
        },
        mounted(){
            setTimeout(()=>{
                this.cliente = "Charizard"
                
            },5000)
        },
        methods:{
            lifeCycle(){
                console.log("mudou!")
            }
        }
    }
</script>

<style scoped>
    p{
        border:1px solid black
    }
</style>

