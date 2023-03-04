<template>
    <form @submit="enviarPedido">
        <!-- <InputDeTexto />
        <InputDeTexto /> -->
        <input type="text" v-model="nome" placeholder="Nome" required>
        <input type="email" v-model="email" placeholder="E-mail" required>
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
        },
        data(){
            return{
                nome:"",
                email:"",
            }
        },
        methods:{
            enviarPedido(event){
                event.preventDefault()
                const name= this.nome
                const email = this.email
                alert(`Olá ${name} a confirmação foi enviada para o seu e-mail ${email}`)
            }
        }
    }
</script>

<style scoped>
    form{
        display:flex;
        flex-direction: column;
        width: 250px;
        gap:16px;
    }
</style>