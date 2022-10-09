<template>
    <div class="home">
      <div>exercice{{id}}</div>
    
     <ExercicesComp/>

    </div>
  </template>
  
  <script>
  // @ is an alias to /src

  import ExercicesComp from '../components/ExercicesComp.vue'
  
  export default {
    name: 'ExerciceView',
    components: {
      ExercicesComp
        },
    props :{
        exercice_id : Number
    }
}
  </script>
  