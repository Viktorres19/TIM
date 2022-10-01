<template>
<div class="main-slider">
  <Carousel :autoplay="5000" :wrap-around="true">
    <Slide v-for="slide in slides" :key="slide">
      <div class="carousel__content">
        <h1 class="h1">{{slide.title}}</h1>
        <p>{{slide.text}}</p>
        <a class="carousel__link" href="#">{{slide.buttonText}}</a>
      </div>
      <img :src="require(`@/assets/img/slide_${slide.id}.jpg`)" :alt="slide.title">
    </Slide>

    <template #addons>
      <Navigation />
    </template>
  </Carousel>
</div>
</template>

<script>
import { defineComponent } from 'vue'
import { Carousel, Pagination, Slide, Navigation } from 'vue3-carousel';

import 'vue3-carousel/dist/carousel.css';

export default defineComponent({
  name: "Slider",
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation
  },
  data() {
    return {
      mounted: false,
      slides: [
        { id: '1', title: 'This is a main heading', text: 'Lorem Ipsum is simply dummy text', buttonText: 'Learn More'},
        { id: '2', title: 'This is a main heading', text: 'Lorem Ipsum is simply dummy text', buttonText: 'Learn More'},
        { id: '3', title: 'This is a main heading', text: 'Lorem Ipsum is simply dummy text', buttonText: 'Learn More'}
      ]
    }
  },
  mounted() {
    this.findElementsFunc();
  },
  methods: {
    findElementsFunc() {
      if (window.innerWidth > 999) {
        this.$el.querySelector(".carousel__prev").style.cssText = `
          background-color: #49cbcd;
          transform: translate(0, -50%);
          left: 20px;
          width: 50px;
          height: 50px;
        `;
        this.$el.querySelector(".carousel__next").style.cssText = `
          background-color: #49cbcd;
          transform: translate(0, -50%);
          right: 20px;
          width: 50px;
          height: 50px;
        `;
      } else if (window.innerWidth <= 998) {
        this.$el.querySelector(".carousel__prev").style.cssText = `
          display: none;
        `;
          this.$el.querySelector(".carousel__next").style.cssText = `
          display: none;
        `;
      }
    }
  }
});
</script>

<style lang="scss" scoped>
.carousel__slide {
  height: 0;
  padding-bottom: 39.5%;
  overflow: hidden;
  @media (max-width:1024px) {
    min-height: 500px;
    padding-bottom: 0;
  }
  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: 1;
  }
  .carousel__content {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 2;
    color: white;
    .h1 {
      margin: 15px 0;
    }
    p {
      font-size: 23px;
      @media (max-width:768px) {
        font-size: 19px;
      }
    }
  }
  .carousel__link {
    color: #fff;
    text-decoration: none;
    border: 3px solid #fff;
    border-radius: 5px;
    font-size: 26px;
    font-weight: 600;
    margin-top: 50px;
    display: inline-block;
    padding: 15px 40px;
    transition: all .3s ease;
    @media (max-width:768px) {
      font-size: 21px;
      margin-top: 40px;
      padding: 12px 32px;
    }
    &:hover {
      color: #49cbcd;
      border-color: #49cbcd;
    }
  }
}
</style>