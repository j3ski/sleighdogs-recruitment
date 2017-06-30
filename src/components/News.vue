<template>
  <section>
    <h2>News and resources</h2>
    <div class="articles">
      <div v-for="article in news" class="article">
        <div class="lead-img">
          <img :src="article.leadImg" alt="">
        </div>
        <h4>{{article.title}}</h4>
        <p>{{article.description}}</p>
        <a href="">Read More</a>
      </div>
    </div>
  </section>
</template>

<script>
  import {fetchNews} from '../services/newsService'

  export default {
    name: 'news',
    data() {
      return {
        news: []
      }
    },
    created() {
      fetchNews().then(news => this.news = news)
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  h2 {
    margin-bottom: 3rem;
  }
  h4 {
    margin-bottom: 13px;
    margin-top: 21px;
  }
  p {
    line-height: 1.4rem;
    margin: 0;
    margin-bottom: 7px;
  }
  a {
    color: gray;
  }
  .articles {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
  }
  .article {
    width: 343px;
    flex-shrink: 0;
    .lead-img {
      height: 343px;
      overflow: hidden;
      img {
        height: 100%;
      }
    }
  }
  section {
    margin-top: 45px;
  }
</style>
