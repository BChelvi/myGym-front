<template>
    <div class=" flex flex-col justify-between pt-8 bg-cyan-100 font-['Oswald']">
      <CarrousselProgrammesComp/>
    </div>
    <FooterComp/>
</template>

<script>
import FooterComp from '@/components/FooterComp.vue';
import CarrousselProgrammesComp from '../components/CarrousselProgrammesComp.vue';
// @ is an alias to /src


  export default {
    name: 'HomeView',
    components: {
    FooterComp,
    CarrousselProgrammesComp
}
}

</script>

<style>

@font-face {
  font-family:  'Oswald';
  src: url(../assets/fonts/Oswald/static/Oswald-Regular.ttf);

}

</style>