<template>
  <section class="prices-block">
    <div class="container">
      <div class="prices">
        <div class="price" v-for="price in prices" :key="price.id">
          <div class="price-inner">
            <div class="price-top">
              <div class="price-name">
                {{ price.name }}
              </div>
              <div class="price-pay">
                ${{ price.pay }}/ Month
              </div>
              <div class="price-text" v-for="text in price.items" :key="text.id">
                {{ text.text }}
              </div>
            </div>
            <div class="price-bottom">
              <a href="#">{{ price.buttonText }}</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'PricesBlock',
  data() {
    return {
      prices: [
        { id: '1',
          name: 'Basic',
          pay: '5.01',
          items: [
            { id: '1', text: 'Lorem ipsum' },
            { id: '2', text: 'Dolor sit amet, consect' },
            { id: '3', text: 'Adipiscing elit' },
            { id: '4', text: 'Proin commodo turpis' },
            { id: '5', text: 'lacus pulvinarvel' },
            { id: '6', text: 'Prnare nisi pretium.' },
          ],
          buttonText: 'Buy now'
        },
        { id: '2',
          name: 'Pro',
          pay: '10.01',
          items: [
            { id: '1', text: 'Lorem ipsum' },
            { id: '2', text: 'Dolor sit amet, consect' },
            { id: '3', text: 'Adipiscing elit' },
            { id: '4', text: 'Proin commodo turpis' },
            { id: '5', text: 'lacus pulvinarvel' },
          ],
          buttonText: 'Buy now'
        },
        { id: '3',
          name: 'Premium',
          pay: '20.01',
          items: [
            { id: '1', text: 'Lorem ipsum' },
            { id: '2', text: 'Dolor sit amet, consect' },
            { id: '3', text: 'Adipiscing elit' },
            { id: '4', text: 'Proin commodo turpis' },
          ],
          buttonText: 'Buy now'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.prices-block {
  padding: 6.1vw 0 4.4vw;
  background: #f1f1f1;
}
.prices {
  display: flex;
  margin: 0 -.9vw;
  justify-content: space-evenly;
  box-sizing: border-box;
  align-items: stretch;
  @media (max-width:768px) {
    flex-wrap: wrap;
  }
}
.price {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: stretch;
  width: 33.33%;
  padding: 0 .9vw;
  text-align: center;
  box-sizing: border-box;
  line-height: 1;
  margin-bottom: 20px;
  @media (max-width:768px) {
    width: 50%;
  }
  @media (max-width:480px) {
    width: 100%;
  }
}
.price-inner {
  flex-grow: 2;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: stretch;
}
.price-name {
  background: #485460;
  color: #fff;
  font-size: 26px;
  padding: 15px 0;
}
.price-pay {
  background: #f8f9fb;
  font-size: 20px;
  color: #485460;
  padding: 33px 0;
  border-bottom: 1px solid #ecf0f1;
}
.price-text {
  background: #fff;
  border-bottom: 1px solid #ecf0f1;
  color: #8c9299;
  padding: 15px 0;
  font-size: 14px;
}
.price-bottom {
  background: #f8f9fb;
  font-size: 20px;
  color: #485460;
  padding: 28px 0;
  flex-grow: 2;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  a {
    display: inline-block;
    color: #fff;
    text-decoration: none;
    font-size: 17px;
    font-weight: 600;
    background: #788492;
    padding: 13px 46px;
    -webkit-border-radius: 3px;
    border-radius: 3px;
    transition: background .3s ease;
    &:hover {
      background: #49cbcd;
    }
  }
}
</style>