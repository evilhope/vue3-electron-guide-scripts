//import { ref, reactive, computed } from 'vue';
//import { Ref } from '@vue/reactivity';
import axios from 'axios';
//import  instance_precioYa  from './axios_mixins.js'
export default async function getAllCategories () {
    const instance_precioYa = axios.create({
        //method:'GET',
        //baseURL: 'https://free-football-soccer-videos1.p.rapidapi.com/v1/',
        timeout: 2000,
        headers: {
            'Accept': 'applicaton/json',
            'Content-Type': 'applicaton/json',
        },
      });
      let dResponse;
        instance_precioYa.get('http://localhost:4000/category')
            .then((response) => {  

                 dResponse  = response.data;

                
            })
            .catch(function (error) {
                //handle error
                console.log(error.message);
                 dResponse  = [];
            });
    return { dResponse };
        
}