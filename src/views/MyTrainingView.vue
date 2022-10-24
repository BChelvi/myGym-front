<template>
    <div class="flex flex-col justify-between bg-cyan-100 font-['Oswald']">
     
      <div class="flex justify-center -mt-6 items-center">
        <div class="p-1">tags</div>
        <div class="p-1">tags</div>
        <div class="p-1">tags</div>
      </div>     
          <CarrousselRoutineComp/>
          <div class="text-center">Jour : {{jour_user}}</div>
      <RoutineComp/>
     
    </div>
    <footer-comp/>
  </template>
  
  <script>
import FooterComp from '@/components/FooterComp.vue';
import RoutineComp from '../components/RoutineComp.vue';
import CarrousselRoutineComp from '../components/CarrousselRoutineComp.vue';
  
  export default {
    data(){
      return{
        jour_user:null,
      }
    },
    created(){
      var user = JSON.parse(localStorage.getItem('user'));
      this.jour_user= user['actual_day'];
           
        },
    name: 'MyTrainingView',
    components: {
      FooterComp,
      RoutineComp,
      CarrousselRoutineComp,
    },
}
  </script>
  