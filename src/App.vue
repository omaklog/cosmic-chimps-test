<template>
  <v-app>
    <v-main>
      <img class="logo" alt="Vue logo" src="./assets/logo.svg">
      <HomeView/>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import HomeView from'./views/HomeView.vue'

export default defineComponent({
  name: 'App',
  components:{
    HomeView
  }
})

</script>
<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  position: fixed;
  bottom: 30px;
  right: 30px;
  width: 225px;
  z-index: 999;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

</style>
