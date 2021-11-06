import { ref, computed } from 'vue';
import type { Ref } from '@vue/reactivity';
import axios from 'axios';
//import  instance_precioYa  from './axios_mixins.js'
export default function useGetAllCategories (arreglo : Ref<number[]>) {
    const instance_precioYa = axios.create({
        //method:'GET',
        //baseURL: 'https://free-football-soccer-videos1.p.rapidapi.com/v1/',
        timeout: 2000,
        headers: {
            'Accept': 'applicaton/json',
            'Content-Type': 'applicaton/json',
        },
      });
 
      const longitud = computed(() =>{ return arreglo.value.length;});
        const datos = ref([]);
        const numeric = ref(1);
        numeric.value = 2;
        instance_precioYa.get('http://localhost:4000/category')
            .then((response) => {  
                console.log(response.status);
                console.log(response.data);
                datos.value = response.data;
                console.log('type of');
                console.log(typeof response.data);
                
            })
            .catch(function (error) {
                //handle error
                console.log(error.message);
            });
        
        return{ longitud, datos };
}