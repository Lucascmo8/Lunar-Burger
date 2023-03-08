<template>
    <div>    
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
                    <td>{{ index }}</td>
                    <td>{{pedido.nomeDoCliente}}</td>
                    <td>{{pedido.pao}}</td>
                    <td>{{pedido.carne}}</td>
                    <td>{{ pedido.opcionais.join(", ")}}</td>
                    <td class="acoesTabela">
                        <select name="" id="" >
                            <option value="">Selecione</option>
                            <option v-for="(stat,indexs) in status" :key="indexs" :value="stat" :selected="pedido.status == stat">{{ stat }}</option>
                        </select>
                        <button>Apagar</button>
                    </td>
                </tr>
                
            </tbody>
    
        </table>
    </div>
</template>

<script>
    export default{
        name:"TabelaDosPedidos",
        data(){
            return{
                pedidos:this.pegarPedidosLocalStorage(),
                pedidoId:null,
                status:["Solicitado","Em Produção","Finalizado"]
            }
        },
        methods:{
            pegarPedidosLocalStorage(){   
                return JSON.parse(localStorage.getItem("pedidos")) ?? []
            },

        },
        mounted(){
            console.log(this.status)
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
</style>