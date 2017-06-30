<template>
  <div id="app">
    <logo></logo>
    <section class="main">
      <featuredProducts></featuredProducts>
      <news></news>
    </section>
  </div>
</template>

<script>
import Logo from './components/Logo'
import FeaturedProducts from './components/FeaturedProducts'
import News from './components/News'

export default {
  name: 'app',
  components: {
    Logo,
    FeaturedProducts,
    News
  }
}
</script>

<style lang="scss">
  @import url('https://fonts.googleapis.com/css?family=Bree+Serif');
  @import './styles/fonts.scss';
  @import './styles/variables.scss';
  body {
    background: $bgColor;
  }
  body, figure {
    margin: 0;
  }
  button {
    cursor: pointer;
  }
  section {
    width: 100%;
  }
  .main {
    display: flex;
    flex-direction:column;
    width: 85vw;
    max-width: 1200px;
    margin: 0 auto;
  }
</style>
