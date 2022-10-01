<template>
  <Header />
  <Main />
  <Footer />
</template>

<script>
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';

export default {
  name: 'App',
  components: {
    Footer,
    Main,
    Header
  }
}
</script>

<style lang="scss">
body {
  margin: 0;
  padding: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #4e525d;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: space-between;
  min-height: 100vh;
  padding: 0;
}
.container {
  max-width: 1170px;
  width: 100%;
  margin: 0 auto;
  box-sizing: border-box;
  padding: 0 15px;
  overflow: hidden;
}
.h1 {
  font-size: 63px;
  font-weight: 600;
  @media (max-width:768px) {
    font-size: 50px;
  }
}
.h2 {
  font-size: 42px;
}
.h3 {
  font-size: 24px;
}
.h4 {
  font-size: 22px;
}
.h6 {
  font-size: 14px;
}
</style>