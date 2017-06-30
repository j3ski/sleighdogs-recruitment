<template>
  <div class="product">
    <div class="inner">
    </div>
    <h3 class="title-line">
      <span>{{product.title}}</span>
      <span>{{product.price}}</span>
    </h3>
    <p>{{product.description}}</p>
  </div>
</template>

<script>
export default {
  name: 'product',
  props: ['product']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  @import '../styles/variables.scss';
  .product {
    transition: all 0.3s linear;
    display: inline-block;
    will-change: transition;
    padding: 10px;
  }
  .inner {
    background: $white;
    width: 250px;
    height: 250px
  }
  .title-line {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 1.4rem;
    margin: 20px 0 10px;

    span:last-child {
      display: inline-block;
      margin-right: 12px;
    }
  }
  p {
    max-width: 101%;
    margin: 0;
  }
</style>
