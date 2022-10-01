<template>
  <form action="" class="subscribe">
    <label class="subscribe__name">
      <input type="text" pattern="[a-zA-Z]+" placeholder="Name" required="">
    </label>
    <label class="subscribe__email">
      <input type="email" pattern="^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" placeholder="Email" required="">
    </label>
    <label class="subscribe__text">
      <textarea rows="7" placeholder="Message" required=""></textarea>
    </label>
    <input class="subscribe__submit" type="submit" value="Send">
  </form>
</template>

<script>
export default {
  name: "Subscribe",
  data () {
    return {

    }
  }
}
</script>

<style lang="scss" scoped>
  .subscribe {
    display: flex;
    justify-content: flex-end;
    margin: 0 -.7vw;
    flex-wrap: wrap;
  }
  .subscribe__name, .subscribe__email, .subscribe__text {
    box-sizing: border-box;
    padding: 0 .7vw;
  }
  .subscribe__name, .subscribe__email, .subscribe__text {
    margin-bottom: 30px;
    input, text, textarea {
      width: 100%;
      display: block;
      box-sizing: border-box;
      font-size: 16px;
      padding: 14px 20px;
      border: none;
      border-radius: 2px;
      color: #c1c1c1;
      background: #fff;
    }
  }
  .subscribe__name, .subscribe__email {
    width: 50%;
    @media (max-width:480px) {
      width: 100%;
    }
  }
  .subscribe__text {
    width: 100%;
  }
  .subscribe__submit {
    font-size: 22px;
    border: none;
    line-height: 1;
    background: #49cbcd;
    padding: 12px 55px;
    color: #fff;
    cursor: pointer;
    border-radius: 2px;
    display: inline-block;
    margin: 0 .7vw;
  }
</style>