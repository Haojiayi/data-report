<template>
    <div class="comment-card">
      <div class="title">{{title}}</div>
      <div class="value">{{value}}</div>
      <div class="chart">
        <slot></slot>
      </div>
      <div class="line"></div>
      <div class="total">
        <slot name="footer"></slot>
      </div>
    </div>
</template>

<script>
export default {
  name: 'CommonCard',
  props: {
    title: String,
    value: String
  }
}
</script>

<style scoped>
.title{
  font-size: 12px;
  color: #999999;
}
  .value{
    font-size: 25px;
    color: #000000;
    margin-top: 5px;
    letter-spacing: 1px;
  }
  .chart{
    height: 50px;
  }
  .line{
    margin: 10px 0;
    border-top: #eeeeee 1px solid;
  }
  .total{
    color: #666666;
    font-size: 12px;
  }

</style>
<style lang="scss">
  .emphis{
    margin-left: 5px;
    color: #333333;
    font-weight: 700;
  }
</style>
