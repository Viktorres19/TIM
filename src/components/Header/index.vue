<template>
<header class="header">
  <div class="container">
    <div class="header-inner">
      <div class="logo">
        Vue Tim
      </div>
      <MainMenu />
    </div>
  </div>
</header>
</template>

<script>
import MainMenu from "./MainMenu";
export default {
  name: "Header",
  components: {MainMenu}
}
</script>

<style lang="scss" scoped>
@font-face {
  font-family: "Lobster";
  src: local("Lobster"),
  url("/fonts/Lobster/Lobster-Regular.ttf") format("truetype");
}
.header {
  order: 1;
  background: #fff;
  width: 100%;
}
.header-inner {
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width:768px) {
    align-items: flex-start;
  }
}
.logo {
  font-family: "Lobster", Helvetica, Arial;
  font-size: 43px;
  color: #44c0c2;
  padding-right: 20px;
}
</style>