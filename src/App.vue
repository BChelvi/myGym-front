<template>
  <nav>
    <router-link to='/'>Retour acceuil</router-link> |
    <div  v-if="isLogged" id="logout"><router-link to='exerciceslist'>S'entrainer</router-link> |<a @click="logout" href="#">Se déconnecter</a></div>
    <div v-else><router-link to='connection' >Se connecter</router-link>
      <router-link to='signin' >S'inscrire</router-link></div>
      
  </nav>
  <router-view/>
</template>

<script>

import ApiService from '@/service/ApiService.js';

  export default{

    data() {
      return {
        isLogged:false,
            user:null
      }
    },
    created(){
         this.isLogged = localStorage.getItem('isLoggedIn') ==="true";
            // this.show_username()
            if(this.isLogged)
            this.user =JSON.parse(localStorage.getItem('data_user'))
        }
        ,
        methods:{
        logout(){
            this.isLogged=false;
                ApiService.search("logout")
                localStorage.removeItem('isLoggedIn')
                localStorage.removeItem('data_user')
                this.$router.replace({ path: '/' })
        },     
    }
  }
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
