// Script qui gere les requetes ajax avec AXIOS

/* eslint-disable */
const axios = require('axios').default;


const url= "http://localhost/my-gym-back/";



class ApiService{

    //des fonctions async qui permettent d'attendre que le resultat arrive 
    async search(action,params={}){
        params.action=action;
        let results = await axios.post(url + "api.php", params, {headers: {"Access-Control-Allow-Origin": "*"}
        

    });
        return results;
    }

    async action(action){
        let results = await axios.post(url + "api.php",action, {headers: {"Access-Control-Allow-Origin": "*"}

    });
        return results;
    }

  

    // async publish(action,params={}){
    //     params.action=action;
    //     let results = await axios.post(url + "api_publish.php", params, {headers: {"Access-Control-Allow-Origin": "*"}});
    //     return results;
    // }
}

export default new ApiService();

