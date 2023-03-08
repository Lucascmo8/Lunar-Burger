<template>
    <div v-if="this.pedidos != false">
        <table id="TabelaDosPedidos">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Cliente</th>
                    <th>Pão</th>
                    <th>Carne</th>
                    <th>Opcionais</th>
                    <th class="acoesTabela">Status</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(pedido,index) in pedidos" :key="index">
                    <td>{{ index + 1 }}</td>
                    <td>{{pedido.nomeDoCliente}}</td>
                    <td>{{pedido.pao}}</td>
                    <td>{{pedido.carne}}</td>
                    <td class="opcionaisDetalhe">{{ pedido.opcionais.join(", ")}}</td>
                    <td class="acoesTabela">
                        <select name="" id="" @change="atualizarPedido($event,index)">
                            <option value="" disabled>Selecione</option>
                            <option v-for="(stat,indexs) in status" :key="indexs" :value="stat" :selected="pedido.status == stat">{{ stat }}</option>
                        </select>
                        <button @click="apagarPedido(index)">Apagar</button>
                    </td>
                </tr>
                
            </tbody>
    
        </table>
    </div>
    <h3 v-else>Não há Pedidos cadastrados aqui</h3>

</template>

<script >
    export default{
        name:"TabelaDosPedidos",
        data(){
            return{
                pedidos:this.pegarPedidosLocalStorage(),
                pedidoId:null,
                status:["Solicitado","Em Produção","Finalizado"], 
            }
        },
        methods:{
            pegarPedidosLocalStorage(){   
                return JSON.parse(localStorage.getItem("pedidos")) ?? []
            },
            adicionarPedidoLocalStorage(pedidos){
                return localStorage.setItem("pedidos",JSON.stringify(pedidos))
            },
            apagarPedido(numeroDoPedido){
                const pedidosLocalStorage = this.pegarPedidosLocalStorage()
                pedidosLocalStorage.splice(numeroDoPedido,1)
                this.adicionarPedidoLocalStorage(pedidosLocalStorage)
                this.pedidos = this.pegarPedidosLocalStorage()
            },  
            atualizarPedido(evento,numeroDoPedido){
                const pedidosLocalStorage = this.pegarPedidosLocalStorage()
                pedidosLocalStorage[numeroDoPedido].status = evento.target.value
                this.adicionarPedidoLocalStorage(pedidosLocalStorage)
            }
        },

        mounted(){
            
        }
    }
</script>

<style scoped>
    div{
        overflow-x:auto ;
    }
    #TabelaDosPedidos{
        margin: 16px auto;
        border-collapse: collapse;
    }
    th,td{
        width: 90px;
        text-align: center;
        padding: 8px;
    }
    th{
        border-bottom: 3px solid black;
        
    }

    td{
        border-bottom: 2px solid rgb(207, 207, 207);
    }

    .acoesTabela{
        width: 110px;
    }

    select,button{
        width: 100%;
        padding: 5px 5px;
        border-radius: 10px;
        margin-bottom: 4px;
    }

    button{
        background-color: #222;
        color: #fcba03;
        font-weight: bold;
        border: 2px solid #222;
        transition: color 1s ease-in-out,background-color 1s ease-in-out;
    }

    button:hover,button:focus{
        background-color:#fcba03;
        color: #222 ;
    }

    .opcionaisDetalhe{
        text-align: left;
    }

    h3{
        margin-top: 32px;
        text-align: center;
    }
</style>