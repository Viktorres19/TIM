<template>
<footer class="footer" :style="cssProps">
  <div class="container">
    <div class="h2">{{ title }}</div>
    <div class="footer-container">
      <div class="footer-container__column">
        <Socials />
      </div>
      <div class="footer-container__column">
        <Subscribe />
      </div>
    </div>
  </div>
</footer>
</template>

<script>
import Socials from "./Socials"
import Subscribe from "./Subscribe"

export default {
  name: "Main",
  components: {Socials, Subscribe},
  data () {
    return {
      title: "Contact us",
      cssProps: {
        backgroundImage: `url(${require('@/assets/img/footer_bg.jpg')})`
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .footer {
    order: 3;
    padding: 5.6vw 0;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    color: #fff;
    .h2 {
      margin-bottom: 2vw;
      text-align: center;
    }
  }
  .footer-container {
    display: flex;
    margin: 5.7vw -1vw 0;
    overflow: hidden;
    @media (max-width:768px) {
      flex-wrap: wrap;
    }
  }
  .footer-container__column {
    width: 50%;
    padding: 0 1vw;
    @media (max-width:768px) {
      width: 100%;
    }
  }
</style>