<template>
    <div class="flex justify-center flex-col">
        <div class="flex flex-col md:flex-row md:justify-center p-3 my-1 flex-wrap " v-bind:key="element.exercices_biceps_id" v-for="element in AllExericesArm">
            <a v-bind:href="/exercice/ + element.exercices_biceps_id">
            <img class="w-full md:w-64 pr-4 px-3" v-bind:src="element.img" alt="">
            <ul class="flex flex-col px-3 py-2">
                <li class="font-bold text-2xl">{{element.title}}</li>
                
            </ul>
            </a>
        </div>
    </div>
</template>
  
<script>
  // @ is an alias to /src

    import ApiService from '@/service/ApiService.js';
    
    export default {
        name: 'AllExercicesArmComp',
        data(){
                return{
                    AllExericesArm:[]
                }
            },
        mounted: function(){
            this.getallexercicesarm()
        },

        methods: {
            getallexercicesarm(){
                ApiService.search('getallexercicesarm').then(this.manage)
            },
            manage(results){
                this.AllExericesArm = results.data
                console.log(this.AllExericesArm)
            },
        },
    }
</script>