<template>
  <section>
    <h2>Feature Products</h2>
    <carousel @next="onNext" @prev="onPrev" ref="carousel">
      <product v-for="product in displayedProducts" :key="product.id" :product="product" class="featured-product">{{product.id}}</product>
    </carousel>
    <button>Shop the range</button>
  </section>
</template>

<script>
  import {fetchProducts} from '../services/featuredProductsService'
  import Product from './Product'

  export default {
    name: 'featured-products',
    components: {
      Product
    },
    data() {
      return {
        products: [],
        offset: 0,
        productsCount: 4
      }
    },
    computed: {
      displayedProducts() {
          return this.products.concat(this.products).slice(this.offset, this.offset + this.productsCount)
      }
    },
    methods: {
      onNext() {
          this.offset = (this.offset + 1) % this.products.length
      },
      onPrev() {
          this.offset = (this.offset - 1 + this.products.length) % this.products.length
      },
      handleResize() {
        let width = this.$refs.carousel.$el.clientWidth
        this.productsCount = Math.floor((width - (2 * 16 + 1)) / 270) || 1
      }
    },
    created() {
      fetchProducts().then(products => this.products = products)
    },
    mounted() {
      window.addEventListener('resize', this.handleResize)
      this.handleResize()
    },
    destroyed() {
        window.removeEventListener('resize', this.handleResize)
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  @import '../styles/variables.scss';
  section {
    margin-top: 22px;
  }
  .featured-product {
    width: 270px;
    box-sizing: border-box;
  }
  button {
    margin: 0 auto;
    display: block;
    text-transform: uppercase;
    border: none;
    letter-spacing: -0.5px;
    padding: 8px;
    width: 344px;
    max-width: 100%;
    margin-top: 14px;
    background: $lightBlue;
  }
</style>
