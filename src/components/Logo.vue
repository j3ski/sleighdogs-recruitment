<template>
  <header>
    <figure>
      <div class="logo"></div>
      <figcaption>
        <h1>
          Lorem ipsum sit dolor lorem amet
        </h1>
      </figcaption>
    </figure>
  </header>
</template>

<script>
export default {
  name: 'logo'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  @import '../styles/mixins.scss';
  .logo {
    width: 100%;
    height: 100vh;
    background: url('../assets/photo 1.jpeg');
    background-repeat: no-repeat;
    background-size: auto 100%;
    background-position-x: center;
  }
  figure {
    position: relative;
  }
  figcaption {
    @include center;
    @include transparentBg;
  }
  h1 {
    font-size: 2.8rem;
    line-height: 4.1rem;
    max-width: 320px;
    letter-spacing: 0.05rem;
    text-align: center;
    word-spacing: 0.1rem;
    margin: 13px 65px;
  }
  @media(min-aspect-ratio: 376/251) {
    .logo {
      background-size: 100%;
      background-position-y: bottom;
    }
  }
</style>
