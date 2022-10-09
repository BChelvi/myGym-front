<template>
       <div class="flex justify-center flex-col">
        <div class="flex flex-col md:flex-row md:justify-center p-3 my-1 flex-wrap ">
            <img class="max-w-xs md:max-w-md md:w-full h-44 pr-4 px-3" v-bind:src="exercice[0].img" alt="">
            <h1 class="flex justify-center py-2 text-2xl">{{ exercice[0].title }}</h1>       
        </div>
    </div>
</template>

<script>

    import ApiService from '@/service/ApiService.js';

    export default{
        name: "ExerciceArm",
        components: {
        },
        props:{
            exercices_biceps_id: Number
        },
        data(){
            return {
                exercice:null
            }
        },
        created(){
            ApiService.search('getexercicearm',{exercices_biceps_id: this.exercices_biceps_id}).then(this.manageExercice)
        },
        methods:{
            manageExercice(results){
                this.exercice= results.data;
                console.log(this.exercice);
            }
        }
    }

</script>