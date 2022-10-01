<template>
  <nav class="main-menu">
    <button :class="['main-menu__toggle', isMenuOpened ? 'active' : '']" @click="openMenu">
      <span class="item" />
    </button>
    <ul :class="['main-menu__links', isMenuOpened ? 'active' : '']">
      <li :key="item.id" v-for="item in menuItems">
        <a href="#">{{ item.name }}</a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "MainMenu",
  data () {
    return {
      menuItems: [
        { id: 1, name: "Home"},
        { id: 1, name: "Service"},
        { id: 1, name: "Portfolio"},
        { id: 1, name: "Team"},
        { id: 1, name: "Blog"},
        { id: 1, name: "Contact"},
      ],
      isMenuOpened: false
    }
  },
  methods: {
    openMenu() {
      this.isMenuOpened = !this.isMenuOpened
    }
  }
}
</script>

<style lang="scss" scoped>
.main-menu {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  position: relative;
  @media (max-width:768px) {
    padding-top: 20px;
  }
}
.main-menu__links {
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: flex-end;
  font-size: 14px;
  margin: 0;
  padding: 0;
  @media (max-width:768px) {
    display: flex;
    flex-direction: column;
    margin-top: 5px;
    height: 0;
    overflow: hidden;
    &.active {
      height: auto;
    }
  }
  li {
    list-style-type: none;
  }
  a {
    display: block;
    color: #484c55;
    text-decoration: none;
    padding: 40px 20px;
    background-color: #fff;
    border-bottom: 3px solid #fff;
    transition: all .3s ease;
    box-sizing: border-box;
    @media (max-width:768px) {
      padding: 10px 0px 10px 20px;
      min-width: 180px;
      text-align: right;
    }
    &:hover {
      color: #49cbcd;
      border-bottom: 3px solid #49cbcd;
      background: #f8f9fb;
    }
  }
}
.main-menu__toggle {
  position: relative;
  width: 18px;
  height: 18px;
  border: none;
  background-color: transparent;
  cursor: pointer;
  display: none;
  @media (max-width:768px) {
    display: block;
  }
  &.active {
    .item {
      display: none;
    }
    &:before, &:after {
      top: 50%;
      left: 50%;
      width: 22px;
    }
    &:before {
      transform: translate(-50%, -50%) rotate(45deg);
    }
    &:after {
      transform: translate(-50%, -50%) rotate(-45deg);
    }
  }
  .item, &:before, &:after {
    width: 100%;
    height: 4px;
    background: #49cbcd;
    position: absolute;
    left: 0;
    border-radius: 4px;
  }
  .item {
    display: block;
    top: 50%;
    transform: translateY(-50%);
  }
  &:before, &:after {
    content: "";
    transition: transform .2s linear;
  }
  &:before {
    z-index: 1;
    bottom: 0;
  }
  &:after {
    z-index: 2;
    top: 0;
  }
}
</style>