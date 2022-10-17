<template>
  <nav class="text-white bg-cyan-100">
   
    <div class="tourne flex flex-col justify-between pt-8 bg-sky-900 font-['Oswald']">
      <div class=" menu p-3 flex flex-col">
      <div class="flex justify-between">
        <div class="text-2xl font-bold mb-2"><router-link to='/'>MyGym</router-link></div>
        <div class="flex flex-col" v-if="user" id="logout">
        <a class="text-xs" @click="logout" href="#">Se déconnecter</a>
      </div>
      </div>
      <div class="flex flex-col" v-if="user" id="logout">
        <router-link to='/mytrainingview'>img_user</router-link>
        <div>Mon profio</div>
      </div>
      <div class="flex flex-col" v-else>
      <router-link to='connection' >img_visiteur</router-link>
      <div>Non connecté</div>
      </div>
      
    </div>
    </div>
    <div class="bloc_noir"></div>
    <div v-if="user" class="bloc_programme items-end flex flex-col">
      <div class="text-xs bg-sky-900 mt-2 px-3" id="programme">{{user['title_program']}}</div>
      <div class="text-xs bg-teal-300 mt-4 px-3 p-1" id="semaine">Semaine : {{user['actual_week']}}</div>
      <div class="text-xs bg-black mt-2 px-3" id="jour">Jour : {{user['actual_day']}}</div>
    </div>
  </nav>
  <div class="flex flex-col items-center bg-cyan-100  font-['Oswald']">
   <button class="flex flex-col bg-white hover:bg-sky-900 hover:text-white active:bg-sky-900 active:text-white text-sky-900 font-bold py-3 px-8 rounded-3xl -mt-24 text-3xl shadow-xl" v-if="user" id="logout">
     <router-link to='/mytrainingview'>Mon Entraînement</router-link>
   </button>
   <div class="flex flex-col bg-white hover:bg-sky-900 hover:text-white active:bg-sky-900 active:text-white text-sky-900 font-bold py-3 px-8 rounded-3xl -mt-24 text-3xl shadow-xl" v-else>
   <router-link to='connection' >Se connecter</router-link>
   </div>
   
 </div>

  <router-view/>
</template>

<script>
// import ApiService from '@/service/ApiService.js';


export default{


  data(){
    return{
      user :this.$user
    }
  },
  created() {
    this.$RefreshUser(this.UpdateUser)
  },
  
  methods:{
        logout(){
            
                // ApiService.search("logout") promesse a finir            
                this.$setUser(null)
                this.$router.replace({ path: '/' })
        },  
        UpdateUser(user){
          console.log("UdpateUser",user)
          this.user=user
        }   
    }
  }
</script>

<style>

@font-face {
  font-family:  'Oswald';
  src: url(./assets/fonts/Oswald/static/Oswald-Regular.ttf);

}

.tourne{
  transform : skewY(-10deg) translate(0,-35px);
  z-index: 2;
  position: relative;

}

.bloc_noir{
  height: 8em;
  background-color: black;
  transform : skewY(10deg) translate(0,-140px);
 
  z-index: 1;
  top:25px;
} 
.bloc_programme{
position: absolute;
top:50px;
right: 0;
z-index: 3;
transform : skewY(-10deg) 
}



.menu {
  transform : skewY(10deg);
 
}


</style>
