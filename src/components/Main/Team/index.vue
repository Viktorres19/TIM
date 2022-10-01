<template>
  <section class="team">
    <div class="container">
      <h2 class="h2">
        {{ title }}
      </h2>
      <div class="members">
        <div class="member" v-for="member in members" :key="member.id">
          <div class="member__inner">
            <div class="member__image">
              <img :src="require(`@/assets/img/team_${member.id}.png`)" :alt="member.name">
              <button />
            </div>
          </div>
          <h4 class="h4">
            {{ member.name }}
          </h4>
          <h6 class="h6">
            {{ member.position }}
          </h6>
          <p>
            {{ member.description }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Team',
  data(){
    return {
      title: 'The Team',
      members: [
        { id: '1', img: '1', name: 'Adrian Thomas', position: 'CEO & Founder', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been' },
        { id: '2', img: '2', name: 'Narate Kethram', position: 'Creative Director', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been' },
        { id: '3', img: '3', name: 'Fernando Comet', position: 'CEO & Founder', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been' },
        { id: '4', img: '4', name: 'Adedayo Saheed', position: 'Creative Director', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been' },
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
  .team {
    padding: 5.2vw 0 3.5vw;
    .h2 {
      text-align: center;
      @media (max-width:768px) {
        margin-top: .3em;
        margin-bottom: 0;
      }
    }
  }
  .members {
    display: flex;
    justify-content: flex-start;
    margin: 0 -15px;
    padding-top: 4.6vw;
    @media (max-width:768px) {
      flex-wrap: wrap;
    }
  }
  .member {
    box-sizing: border-box;
    padding: 0 15px;
    width: 25%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    text-align: center;
    margin-bottom: 20px;
    @media (max-width:768px) {
      width: 50%;
    }
    @media (max-width:480px) {
      width: 100%;
    }
    &__inner {
      width: 100%;
      max-width: 201px;
      box-sizing: border-box;
    }
    &__image {
      width: 100%;
      padding-bottom: 100%;
      position: relative;
      height: 0;
      overflow: hidden;
      border-radius: 50%;
      border: 1px solid #44c0c2;
      transition: all .3s ease;
      cursor: pointer;
      &:hover {
        border-color: transparent;
        button {
          opacity: 1;
        }
      }
      img {
        color: white;
        position: absolute;
        left: 0;
        top: 0;
        z-index: 1;
        width: 100%;
        height: 100%;
      }
      button {
        position: absolute;
        left: 50%;
        top: 50%;
        z-index: 2;
        border: none;
        transform: translate(-50%, -50%);
        width: 42px;
        height: 42px;
        background: transparent;
        pointer-events: none;
        opacity: 0;
        transition: all .3s ease;
        &:before, &:after {
          z-index: 3;
          position: absolute;
          top: 50%;
          left: 50%;
          content: "";
          height: 42px;
          width: 6px;
          background-color: #44c0c2;
          border-radius: 4px;
        }
        &:after {
          transform: translate(-50%, -50%);
        }
        &:before {
          transform: translate(-50%, -50%) rotate(90deg);
        }
      }
    }
    .h4 {
      margin: 3.5vw 0 .3em;
    }
    .h6 {
      margin: 0 0 .8vw;
    }
    p {
      font-size: 14px;
      line-height: 1.4;
      margin-top: .7vw;
    }
  }
</style>