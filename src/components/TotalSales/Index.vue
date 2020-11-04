<template>
    <common-card title="累计销售额" value="￥ 32,039,165">
      <template>
        <div class="compare-wrapper">
          <div class="compare">
            <span>日同比</span>
            <span class="emphis">7.33%</span>
            <div class="increase"></div>
          </div>
          <div class="compare">
            <span>月同比</span>
            <span class="emphis">12.33%</span>
            <div class="decrease"></div>
          </div>
        </div>
      </template>
      <template v-slot:footer>
        <span>昨日销售额 </span>
        <span class="emphis">￥ 30，000，000</span>
      </template>
    </common-card>
</template>

<script>

import commonCardMixin from '../../mixins/commonCardMixin'

export default {
  name: 'TotalSales',
  mixins: [commonCardMixin]
}
</script>

<style scoped lang="scss">
  .compare-wrapper{
    display: flex;
    height: 100%;
    flex-direction: column;
    justify-content: center;
  }
  .compare{
    height: 50%;
    font-size: 12px;
    margin-top: 3px;
    color: #666666;
    display: flex;
    flex-direction: row;
    .increase{
      width: 0;
      height: 0;
      border-width: 4px;
      border-color: transparent transparent red transparent;
      border-style: solid;
      margin: 2px 0px 0px 5px;
    }
    .decrease{
      width: 0;
      height: 0;
      border-color: green transparent transparent transparent;
      border-style: solid;
      border-width: 4px;
      margin: 6px 0px 0px 5px;
    }
  }

</style>
