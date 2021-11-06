<template>
  <div>
    Hola soy el componente home
  </div>
  <div>
    <!--<input type="text" v-model="ids"> -->
    <span>If doest appear matches please click reload buttonS</span>
    <!-- <button @click="getAllCategories">reload</button>-->
  </div>
  <p>
    into component
  </p>
  <ol>
    <li
      v-for="cat in t.datos.value"
      :key="cat"
    >
      {{ cat }}
    </li>
  </ol> 
  <p>
    out component
  </p>
  <!-- <ol>
      <li v-for="ca in t">
        {{ ca }}
      </li>
    </ol> -->
  <div>
    component ends
  </div>
</template>

<script lang="ts">
import {ref, onMounted, onUpdated} from 'vue';
import type { Ref } from '@vue/reactivity';
import useGetAllCategories from '../components/precioYaEndpoint';
//import axios from 'axios';
//import  getAllCategories  from '../components/endPointsV1';

export default {
  name: 'Categories',
  components: {
  },
  setup() {
  
    /*const instance_precioYa = axios.create({
        //method:'GET',
        //baseURL: 'https://free-football-soccer-videos1.p.rapidapi.com/v1/',
        timeout: 2000,
        headers: {
            'Accept': 'applicaton/json',
            'Content-Type': 'applicaton/json'
        }
      });*/
        const d: Ref<number[]> = ref([0,1]);
        //const res: Ref<number[]> = ref([]);
        //res.value = await getAllCategories();
        d.value = [1,2,3];
        var  t  = useGetAllCategories(d);
        console.log('estosss');
        console.log(t.longitud.value);
        console.log(t.datos);
        /* 
        instance_precioYa.get('http://localhost:4000/category')
            .then((response) => {  
                console.log(response.status)
                console.log(response.data)
                datos.value = response.data
                console.log('type ofsss')
                console.log(typeof response.data)
                
            })
            .catch(function (error) {
                //handle error
                console.log(error.message);
            }); */
    /*const requestData  = useGetAllCategories(); */ 
    //const parsedRquest  = toRef(requestData).datos;
    //const ids   = ref(1);
    //const t = useGetAllCategories();
    console.log('onsetup');
    console.log(typeof d.value);
  
    //const g = computed( () => { return requestData.value.filter(d =>{return d.datos})});
    //watch(ids,getCoin);
    onMounted(function() {
     console.log('component mounted');
    }),
    onUpdated(function(){
      console.log('updating interface');
    });

    return { d, t };
  },
};

</script>