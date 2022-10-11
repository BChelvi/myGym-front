
<template>
    
    <section id="card" class="bg-gray-50 monserrat">
        <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto my-auto lg:py-0">
            <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                    <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                        Se connecter
                    </h1>
                    <form class="space-y-4 md:space-y-6">
                        <div>
                            <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Votre email</label>
                            <input type="email" ref="email"  name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700" required="">
                        </div>
                        <div>
                            <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Mot de passe</label>
                            <input type="password" ref="pwd" name="pwd" id="pwd" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" required="">
                        </div>
                        <div class="flex items-center flex-col">
                            <div class="flex">
                                <div class="text-sm font-medium text-primary-600 hover:underline "><router-link to='/Signin'>Pas encore de compte?</router-link></div>
                            </div>
                            <a href="#" class="text-sm font-medium text-primary-600 hover:underline my-5">Mot de passe oublié ?</a>
                        </div>
                        <div class="flex justify-center">
                            <button type="button" @click="login" class="w-80 text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Se connecter</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>
    
</template>

<script>
/* eslint-disable */

import ApiService from '@/service/ApiService.js';

export default {
  name: 'ConnectionView',
  components: { 
    
},methods: {
      login(){
        ApiService.search("login",{"mail":this.$refs.email.value,"pwd":this.$refs.pwd.value}).then(this.manageResults); 

    },   manageResults(results){
        console.log(results.data)
        console.log(results.data['user_id'])
       

      if( results.data && results.data["user_id"])
     {
        console.log("login success");
        this.$setUser(results.data);
        this.$router.replace({ path: '/' })

     }
     else console.log("couille dans le paté")
    },

}
    }
</script>

<style scoped>
  
    FooTer{
        position: relative;
        bottom: 0;
    }
    body{
        background-color: #F9FAFB;
    }
    #card{
        margin-top: 10%;
    margin-bottom: 10%;
    height: 100%;
    }
</style>
