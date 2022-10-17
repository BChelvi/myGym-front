<template>
    <form class=" flex justify-center -mt-12 flex-col bg-cyan-100  font-['Oswald']">
        <div class="flex flex-col md:flex-row md:justify-center items-center p-3 my-1">
            <h1 class="flex justify-center p-1 m-1 text-2xl font-medium text-sky-900">{{ exercice[0].title }}</h1>       
            <img class="" v-bind:src="exercice[0].img" alt="">
            <div>Dernière performance le {{exercice[0].perf_date}}</div>
        </div>
        <div class="flex flex-col items-center bg-white rounded-3xl text-sky-900 p-2 m-2">
            <div class="flex flex-row items-center">
                <div class="flex flex-col items-center">
                    <div class="my-4">POIDS</div>
                    <div class="flex flex-wrap justify-around w-100">
                        <div class="flex flex-col items-center">
                            <div>Série : 1</div>
                            <vue-number-input v-model="last_lifts[0]" :min="0" :max="200"   center controls placeholder="Small" size="small" class="m-1"></vue-number-input>
                        </div>
                        <div class="flex flex-col items-center">
                            <div>Série : 2</div>
                            <vue-number-input v-model="last_lifts[1]" :min="0" :max="200"   center controls placeholder="Small" size="small" class="m-1"></vue-number-input>
                        </div>
                        <div class="flex flex-col items-center">
                            <div>Série : 3</div>
                            <vue-number-input v-model="last_lifts[2]" :min="0" :max="200"   center controls placeholder="Small" size="small" class="m-1"></vue-number-input>
                        </div>
                        <div class="flex flex-col items-center ">
                            <div>Série : 4</div>
                            <vue-number-input v-model="last_lifts[3] " :min="0" :max="200"  center controls placeholder="Small" size="small" class="m-1"></vue-number-input>
                        </div>
                        <div class="flex flex-col items-center">
                            <div>Série : 5</div>
                            <vue-number-input v-model="last_lifts[4]" :min="0" :max="200"   center controls placeholder="Small" size="small" class="m-1"></vue-number-input>
                        </div>
                        <div class="flex flex-col items-center">
                            <div>Série : 6</div>
                            <vue-number-input v-model="last_lifts[5]" :min="0" :max="200"  center controls placeholder="Small" size="small" class="m-1"></vue-number-input>
                        </div>
                        
                    </div>
                    <div class="mt-12 mb-6">REPETITIONS</div>
                    <div class="flex justify-around  flex-wrap items-center mb-6">
                        
                        <div class="flex flex-col items-center">
                            <div>Série : 1</div>
                            <vue-number-input v-model="last_reps[0]" :min="0" :max="200"   center controls placeholder="Small" size="small" class="m-1"></vue-number-input>
                        </div>
                        <div class="flex flex-col items-center">
                            <div>Série : 2</div>
                            <vue-number-input v-model="last_reps[1]" :min="0" :max="200"  center controls placeholder="Small" size="small" class="m-1"></vue-number-input>
                        </div>
                        <div class="flex flex-col items-center">
                            <div>Série : 3</div>
                            <vue-number-input v-model="last_reps[2]" :min="0" :max="200"   center controls placeholder="Small" size="small" class="m-1"></vue-number-input>
                        </div>
                        <div class="flex flex-col items-center">
                            <div>Série : 4</div>
                            <vue-number-input v-model="last_reps[3]" :min="0" :max="200"   center controls placeholder="Small" size="small" class="m-1"></vue-number-input>
                        </div>
                        <div class="flex flex-col items-center">
                            <div>Série : 5</div>
                            <vue-number-input v-model="last_reps[4]" :min="0" :max="200"  center controls placeholder="Small" size="small" class="m-1"></vue-number-input>
                        </div>
                        <div class="flex flex-col items-center">
                            <div>Série : 6</div>
                            <vue-number-input v-model="last_reps[5]" :min="0" :max="200"   center controls placeholder="Small" size="small" class="m-1"></vue-number-input>
                        </div>
                    </div>                  
                </div>
            </div>
        </div>
        <div class="flex mt-2 mb-6 justify-center">
            <button type="button" @click="addPerformance"  class="flex flex-col bg-white hover:bg-sky-900 hover:text-white active:bg-sky-900 active:text-white text-sky-900 font-bold py-3 px-8 rounded-3xl  text-2xl shadow-xl">ENREGISTRER</button>
        </div>
    </form>
    <FooterComp/>
</template>

<script>

    import ApiService from '@/service/ApiService.js';
    import FooterComp from '@/components/FooterComp.vue';

    var infos = JSON.parse(localStorage.getItem('user'));

    

    export default{
        name: "MyExerciceView",
        components: {
            FooterComp
        },
        props:{
            exercice_id: String
        },
        data(){
            return {
                exercice:null,
                last_lifts:null,
                last_reps:null,
              
              
            }
        },    
        created(){       
            ApiService.search('getmyexercice',{user : infos['user_id'],exercice_id : this.exercice_id}).then(this.manageExercice)
        },
        methods:{
            manageExercice(results){
                this.exercice= results.data;
                console.log(this.exercice);
                if(!results.data[0].lift){
                    this.last_lifts=[0,0,0,0,0,0];
                }
                else {this.last_lifts=results.data[0].lift.split(",");}
                
                if(!results.data[0].reps){
                    this.last_reps = [0,0,0,0,0,0];
                }
               else{this.last_reps=results.data[0].reps.split(",");}              
            },
            addPerformance(){
                
               
                var lifting = ""+this.last_lifts[0]+","+this.last_lifts[1]+","+this.last_lifts[2]+","+this.last_lifts[3]+","+this.last_lifts[4]+","+this.last_lifts[5]+"";
                var repet = ""+this.last_reps[0]+","+this.last_reps[1]+","+this.last_reps[2]+","+this.last_reps[3]+","+this.last_reps[4]+","+this.last_reps[5]+"";
                ApiService.search("addperformance",{user : infos['user_id'],
                                                    exercice_id : this.exercice_id,
                                                    lift : lifting,
                                                    reps : repet,
                                                    series : 3
                                                }
                ).then(this.manageResults); 
            },
            manageResults(results){    
                if(results.data)
                {
                    console.log(results.data);
                    this.$router.replace({ path: '/mytrainingview' })
                }
                else console.log("couille dans le paté")
            },
        }
    }  

</script>

<style>

@font-face {
  font-family:  'Oswald';
  src: url(../assets/fonts/Oswald/static/Oswald-Regular.ttf);

}

img{
    width: 200px;
    height: 200px;
    object-fit: contain;
}

input[type='number']::-webkit-inner-spin-button,
  input[type='number']::-webkit-outer-spin-button {
   opacity : 1;
  }

</style>