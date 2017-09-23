<template>
  <!-- <div>
    <nuxt/>
  </div> -->
  <div>
    <nav class="navbar is-primary" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <router-link to="/" class="navbar-item" exact-active-class="link-exact-active">
          <logo style=""/>
        </router-link>
        <router-link to="/" class="navbar-item">Home</router-link>
        <router-link to="/counter" class="navbar-item">Counter</router-link>
        <router-link to="/todo" class="navbar-item">Todo</router-link>

        <!-- <button class="button navbar-burger">
              <span></span>
              <span></span>
              <span></span>
            </button> -->
      </div>
    </nav>

    <section class="section">
      <div class="container">
        <div class="columns is-centered">
          <nuxt/>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'
export default {
  components: {
    Logo
  }
}
</script>


<style>
@import '../node_modules/font-awesome/css/font-awesome.min.css';
@import '../node_modules/bulma/css/bulma.css';
html {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*, *:before, *:after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
</style>
