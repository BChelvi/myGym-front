import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import './assets/tailwind.css'
import VueNumberInput from '@chenfengyuan/vue-number-input';


const user = {
    install: (app) => {
        app.config.globalProperties.$setUser = (user) => {
          app.config.globalProperties.$user = user
          if (app.config.globalProperties.$UpdateUser){
            app.config.globalProperties.$UpdateUser(user)
          }
          if (!user)
            localStorage.removeItem('user');
          else
            localStorage.setItem('user', JSON.stringify(user));
        }
        let cuser = localStorage.getItem('user');
        if (cuser)
          app.config.globalProperties.$user = JSON.parse(cuser);
        else
          app.config.globalProperties.$user = null;
        app.config.globalProperties.$UpdateUser = null;
        app.config.globalProperties.$RefreshUser = (action) => {
            app.config.globalProperties.$UpdateUser = action        
        }
    }
}


const app=createApp(App);

app.component(VueNumberInput.name, VueNumberInput)


app.use(router).use(user).mount('#app');

