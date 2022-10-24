<template>
    
    <section class="bg-gray-50 monserrat" id="card">
        <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto lg:py-0">
            <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                <div class="p-6 space-y-4 md:space-y-6 sm:p-8 w-full">
                    <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                        S'inscrire
                    </h1>
                    <form class="  space-y-4 md:space-y-6" action="#">
                        <div>
                            <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                            <input type="email" ref="email" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required="required">
                        </div>
                        <div>
                            <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Mot de passe</label>
                            <input type="password" name="password" ref="pwd" id="password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="required">
                        </div>
                        <div>
                            <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirmer votre Mot de passe</label>
                            <input type="password" name="password_verify" id="password_verify" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="required">
                        </div>
                        <div class="flex items-center justify-between">
                            <div class="flex items-start">
                                <div class="flex items-center h-5">
                                    <div>M'inscrire en tant que coach ?</div>
                                    <input type="checkbox" v-model="isCoach">                         
                                </div>                                   
                            </div>
                        </div>
                        <div class="flex justify-center w-full">
                            <button @click="createAccount" type="button" class="w-80 text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">S'inscrire</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
      </section>
      <FooterComp/>
</template>

<script>
/* eslint-disable */

import ApiService from '@/service/ApiService.js';
import FooterComp from '@/components/FooterComp.vue';

export default {
  name: 'SignInView',
  components: {
    FooterComp,
    
  },
  data(){
    return {
        isCoach:null,
    }
  }

,methods: {
    createAccount(){
        console.log(this.isCoach);
        if(this.verifyPassword()){
            ApiService.search("signin",{"mail":this.$refs.email.value,"pwd":this.$refs.pwd.value,"coach": this.isCoach}).then(this.manageResults); 
        }
    }  , manageResults(results){
        console.log(results.data)
        console.log(results.data['user_id'])

      if( results.data &&  results.data['user_id'])
     {
        console.log("Register success");
        this.$setUser(results.data);
        this.$router.replace({ path: '/' })

     }
     else{console.log("failure")}
    },
    verifyPassword(){
        var pwd = document.getElementById('password').value;
        var pwd_verif = document.getElementById('password_verify').value;
        if(pwd!=pwd_verif){
            alert("Les mots de passe ne correspondent pas!");
            return false;
        }
        return true;
    }
}
}
</script>

<style>

 
    FooTer{
        position: absolute;
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
