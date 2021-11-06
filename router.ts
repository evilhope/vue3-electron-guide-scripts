import {createRouter, createWebHashHistory} from 'vue-router';
import Home from '/@/components/Home.vue';
import Categories from '/@/views/categories.vue';

const routes = [
  {path: '/', name: 'Home', component: Home},
  //{path: '/about', name: 'About', component: () => import('/@/components/About.vue')}, // Lazy load route component
  {path: '/categories', name: 'Categories', component: Categories},
];

export default createRouter({
  routes,
  history: createWebHashHistory(),
});
