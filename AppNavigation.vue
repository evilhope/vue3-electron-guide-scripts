<template>
  <nav>
    <router-link to="/">
      Home
    </router-link>
    <span> | </span>
    <router-link to="/categories">
      About
    </router-link>
  </nav>
</template>

<script lang="ts">
import {defineComponent} from 'vue';

export default defineComponent({
  name: 'AppNavigation',
});
</script>

<style scoped>
nav {
  display: flex;
  gap: 1em;
  justify-content: center;
}
</style>
