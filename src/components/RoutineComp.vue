<template>
    <div class=" flex justify-center flex-col  bg-cyan-100">
        <div class="flex flex-col md:flex-row md:justify-center p-3 my-1 flex-wrap " v-bind:key="element.exercice_id" v-for="element in routine">
            <router-link :to="{ name: 'exercice', params: { exercice_id:element.exercice_id}}">
            <img class="w-full md:w-64 pr-4 px-3" v-bind:src="element.img" alt="">
            <ul class="flex flex-col px-3 py-2">
                <li class="font-bold text-2xl">{{element.title}}</li>
                
            </ul>
            </router-link>

        </div>
    </div>
    <RouterView/>
    
</template>
  
<script>
  // @ is an alias to /src

    import ApiService from '@/service/ApiService.js';
    
    
    export default {
    name: "RoutineComp",
    data() {
        return {
            routine: []
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
            console.log(this.routine);
        },
    },
    
}
</script>