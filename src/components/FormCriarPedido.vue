<template>
    <div id="formContainer">
        <div>
                <MensagemDeEnvio :mensagem="mensagem" v-show="mensagem"/>
        </div>
        <form @submit.prevent="concluirPedido">

            <div class="inputContainer">
                <label for="nomeCliente" class="labelInput">Nome do cliente</label>
                <input type="text" id="nomeCliente" name="nomeCliente" v-model="nomeCliente" placeholder="Digite o seu nome" required minlength="3">
            </div>

            <div class="inputContainer">
                <label for="tipoPao" class="labelInput">Escolha o pão</label>
                <select name="tipoPao" id="tipoPao" v-model="paoEscolhido" required>
                    <option value="" class="nullOption" disabled selected>Selecione o seu pão</option>
                    <option v-for="(pao,index) in paes" :key="index" :value="pao">{{ pao }}</option>
                </select>
            </div>

            <div class="inputContainer">
                <label for="tipoCarne" class="labelInput">Escolha o carne</label>
                <select name="tipoCarne" id="tipoCarne" v-model="carneEscolhida" required>
                    <option value="" class="nullOption" disabled selected>Selecione a sua carne</option>
                    <option v-for="(carne,index) in carnes" :key="index" :value="carne">{{ carne }}</option>
                </select>
            </div>

            <label for="opcionais" class="labelInput">Gostaria de algo a mais?</label>
            <div id="checkboxContainer">
                <div class="optionContainer" v-for="(opcional,index) in opcionais" :key="index">
                        <input type="checkbox" name="opcionais" :id="opcional" v-model="opcionaisEscolhidos" :value="opcional">
                    <label :for="opcional">{{opcional}}</label>
                </div>
            </div>
            <button id="buttonSubmit">Criar pedido</button>
        </form>
    </div>
</template>

<script>
    import MensagemDeEnvio from './MensagemDeEnvio.vue'

    export default {
        name:"FormCriarPedido",
        data(){

        },
        methods:{
            concluirPedido(){
                

                const pedidoCriado ={
                    nomeDoCliente:this.nomeCliente,
                    pao:this.paoEscolhido,
                    carne:this.carneEscolhida,
                    opcionais:Array.from(this.opcionaisEscolhidos),
                    status:"Solicitado",
                }
                this.criarPedido(pedidoCriado)
                this.limparFormulario()
                this.mostrarMensagem()
                setTimeout(()=>this.esconderMensagem(),5000)
            },
            adicionarPedidoLocalStorage(pedidos){
                return localStorage.setItem("pedidos",JSON.stringify(pedidos))
            },
            pegarPedidosLocalStorage(){   
                return JSON.parse(localStorage.getItem("pedidos")) ?? []
            },
            criarPedido(pedido){
                let pedidos = this.pegarPedidosLocalStorage()
                pedidos.push(pedido)
                this.adicionarPedidoLocalStorage(pedidos)
            },
            limparFormulario(){
                this.nomeCliente = ""
                this.paoEscolhido=""
                this.carneEscolhida=""
                this.opcionaisEscolhidos=[]
            },
            mostrarMensagem(){
                this.mensagem = `Seu foi realizado com sucesso`
            },
            esconderMensagem(){
                this.mensagem = null
            }

        },
        data(){
            return{
                nomeCliente:null,
                paoEscolhido:null,
                carneEscolhida:null,
                opcionaisEscolhidos:[],

                paes:["Brioche","Integral","Italiano","Três Queijos"],
                carnes:["Costela","Frango","Maminha","Picanha"],
                opcionais:["Azeitona","Bacon","Calabresa","Cebola roxa","Cheddar","Salame"],
                mensagem:null,
            }
        },
        components:{
            MensagemDeEnvio
        }
    }
</script>

<style scoped>
    #formContainer{
        max-width: 400px;
        margin:0 auto;
    }

    form{
        padding: 16px;
        border-radius:10px;
        transition: 1s ease-in-out ;
        min-width: 200px;
        margin-top:20px;
    }

    form:hover{
        box-shadow: 1px 0px 5px rgba(0, 0, 0, 0.4);
    }

    .inputContainer{
        display: flex;
        flex-direction: column;
        margin-bottom: 20px;
    }

    .labelInput{
        font-weight: bold;
        margin-bottom: 15px;
        color: #222;
        padding: 5px 10px;
        border-left: 4px solid #fcba03;
    }

    .nullOption{
        color: #999;

    }

    input,select{
        padding: 5px 10px;
        border-radius: 10px;
    }

    #checkboxContainer{
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap:32px;
        padding:15px;
    }

    .optionContainer{
        display: flex;
        align-items: center;
        justify-content: flex-start;
        gap:10px
    }

    #buttonSubmit{
        width: 100%;
        background-color: #222;
        color: #fcba03;
        font-weight: bold;
        border: 2px solid #222;
        padding: 10px;
        border-radius: 10px;
        font-size: 18px;
        transition: color 1s ease-in-out,background-color 1s ease-in-out;
    }

    #buttonSubmit:hover,#buttonSubmit:focus{
        background-color:#fcba03;
        color: #222 ;
    }

    @media(max-width:360px){
        #checkboxContainer{
            grid-template-columns: 1fr;
        }
    }

</style>