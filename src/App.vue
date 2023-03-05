<template>
  <NavBar :logo="logoSrc" :alt="appName"/>
  <router-view/>
  <Footer/>
</template>

<script>
  import NavBar from './components/NavBar.vue';
  import Footer from './components/Footer.vue';
  export default{
    components:{
      NavBar,
      Footer,
    },
    data(){
      return{
        logoSrc:"/images/logo.png",
        appName:"Lunar Burguer"
      }
    }
  }
</script>

<style>
  *{
    margin:0;
    padding:0;
    font-family: Helvetica, sans-serif;
  }

  .mainContainer{
    margin:50px;
    min-height: 250px;
  }

  h2{
    text-align:center ;
    font-size: 42px;
  }

  button,label,input,select,option{
    cursor: pointer;
  }
</style>