<template>
  <div id="app">
    <div id="nav">
      <ul>
        <li v-for="(item,index) in navList" :key="index">
          <router-link :to="item.path">{{item.name}}</router-link>
        </li>
      </ul>
    </div>
    <router-view />
  </div>
</template>

<script>
import routes from "@/router/routes"
export default {
  data(){
    return{
      navList: routes
    }
  }
}
</script>


<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}
#nav ul{
  padding: 0;
}
#nav ul li{
  list-style: none;
  display: inline-block;
  padding: 10px;
  margin: 2px;
  background: rgba(80,191,255, 0.8);
  transform:skewX(-20deg);
}
#nav ul li:hover{
  background: rgba(80,191,255, 0.5);
}
#nav ul li:active{
  background: rgba(80,191,255, 1);
}

#nav ul li a {
  display: block;
  font-weight: bold;
  color: #2c3e50;
  transform:skewX(0deg);
}

#nav a.router-link-exact-active {
  color: #ffffff;
  text-decoration: none;
}
</style>
