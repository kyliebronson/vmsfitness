<template>
  <div id="app">
    <div>
      <ul class="header">
        <li class="imgfix">
          <img src="./assets/logo.png" alt="" srcset="" />
        </li>
        <li>
          <router-link to="/"> HOME </router-link>
        </li>
        <li><router-link to="/about"> ABOUT </router-link></li>
        <li><router-link to="/contact"> CONTACT ME </router-link></li>
        <li><router-link to="/bookonline"> BOOK ONLINE </router-link></li>

        <li class="mobile-button" @click="showMobileMenu">
          <font-awesome-icon icon="bars" />
        </li>
      </ul>
    </div>
    <!-- Mobile menu -->
    <div class="mobile-menu" v-if="mobileVisible">
      <ul @click="showMobileMenu">
        <li>
          <router-link to="/"> HOME </router-link>
        </li>
        <li><router-link to="/about"> ABOUT </router-link></li>
        <li><router-link to="/contact"> CONTACT US </router-link></li>
        <li><router-link to="/bookonline"> BOOK ONLINE</router-link></li>
      </ul>
    </div>
    <router-view />
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
  },
  data() {
    return {
      mobileVisible: false,
    };
  },
  methods: {
    showMobileMenu() {
      this.mobileVisible = !this.mobileVisible;
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.header {
  list-style: none;
  background-color: black;
  color: white;
  display: flex;
  justify-content: left;
  padding-inline-start: 0;
  vertical-align: middle;
  min-height: 80px;
  border-bottom: 1px solid rgba(189, 23, 22, 0.6);
}
</style>
