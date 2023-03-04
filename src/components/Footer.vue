<template>
    <footer>
        <p>Lunar Burguer &copy; 2023</p>
    </footer>
</template>
<script>
    export default{
        name:"Footer"
    }
</script>

<style scoped>
    footer{
        height: 150px;
        width: 100%;
        bottom: 0;
        position: fixed;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #222;
        border-top: 4px solid #111;
        color:#fcba03;
    }
</style>