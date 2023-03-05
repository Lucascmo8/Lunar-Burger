<template>
    <div id="bannerContainer">
        <h2>Lunar Burger</h2>
    </div>
    
</template>

<script>
    export default{
        name:"Banner",
    }
</script>

<style scoped>

    #bannerContainer{
        background-image: url(/images/banner-burger.jpg);
        background-position:center bottom;
        background-size: cover;
        background-repeat:no-repeat ;
        height: 500px;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: flex-start;
    }

    h2{
        color: #fff;
        text-align: center;
        background: #2222225b;
        font-size: 60px;
        padding: 20px;
    }
</style>