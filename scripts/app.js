const MyNameApp = {
    data(){
        return{
            name:"",
            food: "hamburger",
            inputName:"",
        }
    },
    methods:{
        submitForm(event){
            event.preventDefault()
            this.name = this.inputName
        }
    }
}

Vue.createApp(MyNameApp).mount("#app")