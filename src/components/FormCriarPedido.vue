<template>
    <div id="formContainer">
        <div>
                <p>Pedido feito</p>
        </div>
        <form @submit="concluirPedido">

            <div class="inputContainer">
                <label for="nomeCliente" class="labelInput">Nome do cliente</label>
                <input type="text" id="nomeCliente" name="nomeCliente" placeholder="Digite o seu nome" required>
            </div>

            <div class="inputContainer">
                <label for="tipoPao" class="labelInput">Escolha o pão</label>
                <select name="tipoPao" id="tipoPao" required>
                    <option value="" class="nullOption" disabled selected>Selecione o seu pão</option>
                    <option v-for="(pao,index) in paes" :key="index" value="pao">{{ pao }}</option>
                </select>
            </div>

            <div class="inputContainer">
                <label for="tipoCarne" class="labelInput">Escolha o carne</label>
                <select name="tipoCarne" id="tipoCarne" required>
                    <option value="" class="nullOption" disabled selected>Selecione a sua carne</option>
                    <option v-for="(carne,index) in carnes" :key="index" value="pao">{{ carne }}</option>
                </select>
            </div>

            <label for="opcionais" class="labelInput">Gostaria de algo a mais?</label>
            <div id="checkboxContainer">
                <div class="optionContainer">
                        <input type="checkbox" name="salame" id="salame" value="salame">
                    <label for="salame">Salame</label>
                </div>
            </div>
            <button id="buttonSubmit">Criar pedido</button>
        </form>
    </div>
</template>

<script>
    export default {
        name:"FormCriarPedido",
        data(){

        },
        methods:{
            concluirPedido(evento){
                evento.preventDefault()
            }
        },
        data(){
            return{
                nomeCliente:undefined,
                paoEscolhido:undefined,
                carneEscolhida:undefined,
                opcionaisEscolhidos:[],

                paes:["Brioche","Integral","Italiano","Três Queijos"],
                carnes:["Costela","Frango","Maminha","Picanha"],
                opcionais:["Azeitona","Bacon","Calabresa","Cebola roxa","Cheddar","Salame"],
                status:"solicitado",
                mensagem:undefined,
            }
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
    }

    #checkboxContainer{
        display: flex;
        flex-wrap: wrap;
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
        transition: color 1s ease-in-out,background 1s ease-in-out;
    }

    #buttonSubmit:hover{
        background-color:#fcba03;
        color: #222 ;
    }

</style>