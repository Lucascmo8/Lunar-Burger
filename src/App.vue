<template>
    <div>
        <Titulo />
        <lifecycleHooks />
        <Formulario />
        <Info />
    </div>
</template>

<script>
import Titulo from './components/Titulo.vue'
import lifecycleHooks from './components/lifecycleHooks.vue'
import Formulario from './components/Formulario.vue'
import Info from './components/Info.vue'

    
export default{
        name:'App',
        components:{
            Titulo,
            lifecycleHooks,
            Formulario,
            Info,
        }
    }
</script>