<template>
    <div>
        <p v-if="clienteLogado">Você tem 1000 Crédito</p>
        <p v-else>Por favor Logue com sua conta para ver seus créditos</p>
        <p v-if="90<100 && clienteLogado">Gostaria de Comprar mais créditos?</p>
        <div>
            <button @click="showPagamento">{{ textoBotao }}</button>
        </div>
        <p v-show="mostrarFormaDePagamento">Pagamento será em {{ formaDePagamento }}</p>
        <p class="teste">Para Compra mais Créditos acesse esse <a v-bind:href="meuLink" target="_blank">Link</a></p>
        <Foto />
        <p>Temos os seguintes sabores de hambuger:</p>
        <ul >
            <li v-for="(sabor,index) in sabores" v-bind:key="index"> {{ sabor }}</li>
        </ul>
        <p>Temos os seguintes tipos de queijos</p>
        <ul>
            <li v-for="queijo in tiposDeQueijos" :key="queijo.id">
                {{queijo.tipo}}
            </li>
        </ul>
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
                meuLink:"https://github.com/Lucascmo8",
                textoBotao:"Mostrar",
                sabores:["Frango","Picanha","Contra-filé"],
                tiposDeQueijos:[
                    {id:1,tipo:"cheddar"},
                    {id:2,tipo:"minas"},
                    {id:3,tipo:"mussarela"}]
            }
        },
        components:{
            Foto,
        },
        methods:{
            showPagamento(){
                this.mostrarFormaDePagamento = !this.mostrarFormaDePagamento
                if(this.mostrarFormaDePagamento){
                    this.textoBotao = "Ocultar"
                }else{
                    this.textoBotao = "Mostrar"
                }
            }
        }
    }
</script>

<style>
    p{
        font-size: 18px;
    }
    .teste{
        background-color: rgb(255, 255, 255);
        color: rgb(0, 0, 253);
    }
</style>