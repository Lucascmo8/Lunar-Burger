<template>
    <div>
        <p v-if="clienteLogado">Você tem 1000 Crédito</p>
        <p v-else>Por favor Logue com sua conta para ver seus créditos</p>
        <p v-if="90<100 && clienteLogado">Gostaria de Comprar mais créditos?</p>
        <p v-show="mostrarFormaDePagamento">Pagamento será em {{ formaDePagamento }}</p>
        <p>Para Compra mais Créditos acesse esse <a v-bind:href="meuLink" target="_blank">Link</a></p>
        <Foto />
    </div>
</template>

<script>
import Foto from './Foto.vue'
    export default{
        name:"Info",
        data(){
            return{
                clienteLogado:false,
                mostrarFormaDePagamento:false,
                formaDePagamento:"Cartão de crédito",
                meuLink:"https://github.com/Lucascmo8"
            }
        },
            components:{
                Foto,
            }
    }
</script>