<template>
    <div class=" flex justify-center flex-col  bg-cyan-100 font-['Oswald']">
        <div class="flex justify-center my-2">
            <div class="bg-white rounded px-2 py-1 text-sky-900">Routine du jour : {{routine_titre}}</div>
        </div>
        <div class="flex flex-col md:flex-row md:justify-center p-3 my-1 flex-wrap " v-bind:key="element.exercice_id" v-for="element in routine">
            <router-link :to="{ name: 'exercice', params: { exercice_id:element.exercice_id}}">
            <img class="w-full md:w-64 pr-4 px-3" v-bind:src="element.img" alt="">
            <ul class="flex flex-col px-3 py-2">
                <li class="font-bold text-2xl">{{element.title}}</li>
                <div v-if="!element.isDone">A faire</div>
                <div v-else>Deja fait</div>
            </ul>
            </router-link>

        </div>
    </div>
    <RouterView/>
    <div class="flex mt-2 mb-6 justify-center">
        <button type="button"  v-on:click="next_session"  class="flex flex-col bg-white hover:bg-sky-900 hover:text-white active:bg-sky-900 active:text-white text-sky-900 font-bold py-3 px-8 rounded-3xl  text-2xl shadow-xl">SEANCE TERMINEE</button>
      </div>
</template>
  
<script>
  // @ is an alias to /src

    import ApiService from '@/service/ApiService.js';
    
    
    export default {
    name: "RoutineComp",
    data() {
        return {
            routine: [],
            routine_titre:null
           
        };
    },
    mounted: function () {
        this.getroutine();
    },
    methods: {
        getroutine() {
            var infos = JSON.parse(localStorage.getItem('user'));
            ApiService.search("getroutine",{user :infos['user_id'],day: infos['actual_day'],week:infos['actual_week']}).then(this.manage);
        },
        manage(results) {
            this.routine = results.data;
            this.routine_titre = results.data[0].routine_title
            console.log(this.routine);
        },
        next_session(){
            var infos = JSON.parse(localStorage.getItem('user'));
            ApiService.search("resetroutine").then(this.manageRoutine);
            ApiService.search("getroutine",{user :infos['user_id'],day: infos['actual_day']+1,week:infos['actual_week']}).then(this.manage);
            ApiService.search("updateuser",{user :infos['user_id'],day: infos['actual_day']+1,week:infos['actual_week']}).then(this.manageUser);
            infos['actual_day']+=1;
            this.$setUser(infos);
        },
        manageUser(results){
            console.log("user udpated : "+results.data);
        },
        manageRoutine(results){
            console.log(results.data);
        }   
    }
}
</script>

<style>
@font-face {
  font-family:  'Oswald';
  src: url(../assets/fonts/Oswald/static/Oswald-Regular.ttf);

}
</style>