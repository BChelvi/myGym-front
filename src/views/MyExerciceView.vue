<template>
    <form class=" flex justify-center -mt-12 flex-col bg-cyan-100  font-['Oswald']">
        <div class="flex flex-col md:flex-row md:justify-center items-center p-3 my-1">
            <h1 class="flex justify-center p-1 m-1 text-2xl font-medium text-sky-900">{{ exercice[0].title }}</h1>       
            <img class="" v-bind:src="exercice[0].img" alt="">
        </div>
        <div class="flex flex-col items-center bg-white rounded-3xl text-sky-900 p-2 m-2">
            <div class="flex flex-row items-center">
                <div class="flex flex-col items-center">
                    <div class="m-2">PERFORMANCES</div>
                    <div class="flex justify-around items-center">
                        <div class="mr-6">POIDS</div>
                        <select ref="lift1" name="lift1" id="lift1" class="mx-6">
                            <option>{{last_lifts[0]-1}}</option>
                            <option selected="selected">{{ last_lifts[0]}}</option>
                            <option>{{parseInt(this.last_lifts[0])+parseInt(1)}}</option>
                        </select>
                        <select ref="lift2" name="lift2" id="lift2" class="mx-6">
                            <option>{{last_lifts[1]-1}}</option>
                            <option selected="selected">{{ last_lifts[1]}}</option>
                            <option>{{parseInt(this.last_lifts[1])+parseInt(1)}}</option>
                        </select>
                        <select ref="lift3" name="lift3" id="lift3" class="mx-6">
                            <option>{{last_lifts[2]-1}}</option>
                            <option selected="selected">{{ last_lifts[2]}}</option>
                            <option>{{parseInt(this.last_lifts[2])+parseInt(1)}}</option>
                        </select>
                    </div>
                    <div class="m-2">SERIES</div>
                    <div class="flex justify-around items-center">
                        <div class="mr-6">REPETITIONS</div>
                        <select ref="reps1" name="reps1" id="reps1" class="mx-6">
                            <option>9</option>
                            <option>10</option>
                            <option>11</option>
                        </select>
                        <select ref="reps2" name="reps2" id="reps2" class="mx-6">
                            <option>9</option>
                            <option>10</option>
                            <option>11</option>
                        </select>
                        <select ref="reps3" name="reps3" id="reps3" class="mx-6">
                            <option>9</option>
                            <option>10</option>
                            <option>11</option>
                        </select>
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
                this.last_lifts=results.data[0].lift.split(",");
                this.last_reps=[];
            },
            addPerformance(){
                var repet = ""+this.$refs.reps1.value+","+this.$refs.reps2.value+","+this.$refs.reps3.value+"";
                var lifting = ""+this.$refs.lift1.value+","+this.$refs.lift.value+","+this.$refs.lift3.value+"";
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
                }
                else console.log("couille dans le paté")
            }          
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



</style>