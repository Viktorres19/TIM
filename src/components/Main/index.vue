<template>
<main class="main">
  <Slider />
  <Team />
  <PricesBlock />
</main>
</template>

<script>
import Slider from "./Slider";
import Team from "./Team";
import PricesBlock from "./PricesBlock";

export default {
  name: "Main",
  components: {Team, Slider, PricesBlock},
  data(){
    return {
      slides: [
        'https://picsum.photos/id/230/600/300',
        'https://picsum.photos/id/231/600/300',
        'https://picsum.photos/id/232/600/300',
        'https://picsum.photos/id/233/600/300',
        'https://picsum.photos/id/234/600/300',
        'https://picsum.photos/id/235/600/300',
        'https://picsum.photos/id/236/600/300',
      ]
    }
  }
}
</script>

<style>
  .main {
    order: 2;
    flex-grow: 2;
  }
</style>