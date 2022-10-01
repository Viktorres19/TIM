<template>
  <div class="socials">
    <h3 class="h3">Get in touch with us</h3>
    <p>
      Lorem Ipsum is simply dummy text of the printing and typesetting
      industry. Lorem Ipsum has been the industry's
    </p>
    <div class="social-icons">
      <a v-for="social in socials" :key="social.id" href="#">
        <img :src="require(`@/assets/img/${social.src}.png`)" :alt="social.alt">
      </a>
    </div>
    <div class="socials__bottom">
      <p>Posted by Dospel &amp; GanjaParker</p>
      <p>+XX-XXXX - XXXX - XX</p>
      <p><a href="mailto:info@mail.com">info@mail.com</a></p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Socials",
  data () {
    return {
      title: "Get in touch with us",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s",
      socials: [
        { id: "1", src: "icon_fb", alt: "Facebook" },
        { id: "2", src: "icon_tw", alt: "Twitter" },
        { id: "3", src: "icon_gp", alt: "Googleplus" },
      ]

    }
  }
}
</script>

<style lang="scss" scoped>
.socials {
  padding-right: 5vw;
  .h3 {
    margin-top: 0;
    margin-bottom: 0;
  }
  p {
    color: #a9a9a9;
    font-size: 14px;
    line-height: 1.4;
    margin: .5vw 0 2.1vw;
  }
}
.social-icons {
  display: flex;
  align-items: center;
}
.social-icons {
  margin-bottom: 1.3vw;
  a {
    display: block;
    margin-right: 14px;
  }
}
.socials__bottom {
  p {
    color: #bface2;
    margin: 8px 0;
    line-height: 1.2;
    a {
      text-decoration: none;
      color: inherit;
    }
  }
}
</style>