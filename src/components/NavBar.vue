<template>
    <header id="nav">
        <router-link to="/" id="logoUrl">
            <img :src="logo" :alt="alt" id="logoImg">
            <h1>Lunar Burger</h1>
        </router-link>
        <router-link to="/">Home</router-link>
        <router-link to="/Pedidos">Pedidos</router-link>
    </header>
</template>

<script>
    export default{
        name:"NavBar",
        props:['logo','alt']
    }
</script>

<style scoped>
    #nav{
        background-color: #222;
        border-bottom: 4px solid #111;
        padding: 15px 50px;
        display:flex;
        justify-content: flex-end;
        align-items: center;
        gap:16px;
    }

    #logoUrl{
        margin:auto;
        margin-left: 0;
        display: flex;
        gap:16px;
    }

    #logoImg{
        height: 40px;
        width:40px;
    }

    #nav a{
        color:#fcba03;
        text-decoration: none;
        transition: 1s linear;
    }

    #nav a:hover{
        color:#dab243;
        text-decoration: underline;
    }
</style>