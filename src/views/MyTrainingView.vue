<template>
    <div class="flex flex-col justify-between bg-cyan-100 font-['Oswald']">
     
      <div class="flex justify-center -mt-6 items-center">
        <div class="p-1">tags</div>
        <div class="p-1">tags</div>
        <div class="p-1">tags</div>
      </div>
      <div class="flex justify-between my-2 items-center">
        <div>〈</div>
        <div class="flex flex-col items-center">
          <div>un carroussel des routines</div>
          <div>jour_user</div>
        </div>
        <div>	〉</div>
      </div>
      <div class="flex justify-center my-2">
        <div class="bg-white rounded px-2 py-1 text-sky-900">Routine du jour : Bras</div>
      </div>
    </div>
    <RoutineComp/>
    <footer-comp/>
  </template>
  
  <script>
import FooterComp from '@/components/FooterComp.vue';
import RoutineComp from '../components/RoutineComp.vue'
  
  export default {
    name: 'MyTrainingView',
    components: {
    FooterComp,
    RoutineComp

}
}
  </script>
  