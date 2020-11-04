<template>
  <common-card
  title="累计订单量"
  value="2,157,480">
    <template>
<!--      <div id="total-orders-chart" :style="{width:'100%',height:'100%'}"></div>-->
    <v-chart :options="getOptions()"></v-chart>
    </template>
    <template v-slot:footer>
      <span>昨日订单量 </span>
      <span class="emphis">2,6000,100</span>
    </template>
  </common-card>
</template>

<script>
import CommonCard from '../CommonCard/CommonCard'
export default {
  name: 'ToalOrders',
  components: { CommonCard },
  data () {
    return {

    }
  },
  mounted () {

  },
  methods: {
    getOptions () {
      return {
        xAxis: {
          type: 'category',
          boundaryGap: false,
          show: false
        },
        yAxis: {
          type: 'value',
          show: false
        },
        grid: {
          left: 0,
          right: 0
          // top: 0
        },
        series: [{
          data: [820, 932, 901, 934, 1290, 1330, 1320],
          type: 'line',
          areaStyle: {
            color: 'purple'
          },
          smooth: true,
          lineStyle: {
            width: 0
          },
          itemStyle: {
            opacity: 0
          }
        }]
      }
    }
  }
}
</script>

<style scoped>

</style>
