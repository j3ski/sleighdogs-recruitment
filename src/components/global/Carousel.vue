<template>
  <div class="carousel">
    <button class="prev" @click="() => $emit('prev')"></button>
    <div class="carousel-wrapper">
      <transition-group name="carousel" tag="div" class="carousel-items-wrapper">
        <slot></slot>
      </transition-group>
    </div>
    <button class="next" @click="() => $emit('next')"></button>
  </div>
</template>

<script>
  export default {
    name: 'carousel'
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
  @import '../../styles/mixins.scss';
  .carousel-enter, .carousel-leave-to {
    &:first-child {
      transform: translateX(-100%);
    }
    &:last-child {
      transform: translateX(100%);
    }
  }
  .carousel-leave-to:last-child {
    transform: translateX(10%);
  }
  .carousel-leave-active {
    position: absolute;
  }

  .carousel-wrapper {
    display: inline-block;
    overflow: hidden;
  }
  .prev, .next {
    @include button;
    display: inline-block;
    padding: 0px;
  }
  .prev {
    @include arrow(15px, -45deg);
  }
  .next {
    @include arrow(15px, 135deg);
  }
  .carousel-items-wrapper {
    position: relative;
  }
  .carousel {
    display: flex;
    justify-content: space-between;
  }
</style>
