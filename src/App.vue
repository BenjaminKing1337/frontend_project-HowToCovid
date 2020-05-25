<template>
  <div id="app">
    <ourNavbar></ourNavbar>
    <ourContent class="content"></ourContent>
    <ourFooter></ourFooter>
  </div>
</template>

<script>
import Navbar from "./components/Navbar";
import Content from "./components/Content";
import Footer from "./components/Footer";
export default {
  components:{
    ourNavbar: Navbar,
    ourContent: Content,
    ourFooter: Footer,
  }
}
</script>

<style lang="scss">
body{
  margin: 0;
  padding: 0;
  background-color: white;
  color: black;
}
body::-webkit-scrollbar{
  width: 0.25rem;
}
body::-webkit-scrollbar-track{
  background: #5B5A5A;
}
body::-webkit-scrollbar-thumb{
  background: #C7D40F;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: black;
}
:root{
  font-size: 16px;
}
.content{
  margin-left: 5rem;
  padding: 1rem;
  height: 100vh;
}

@media only screen and (max-width: 600px){
  .content{
    margin: 0;
  }
}
</style>
