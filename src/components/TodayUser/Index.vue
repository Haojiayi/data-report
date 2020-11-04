<template>
  <common-card
    title="今日用户量"
    value="81,014">
    <template>
      <v-chart :options="getOptions()"></v-chart>
    </template>
    <template v-slot:footer>
      <span>退货率 </span>
      <span class="emphis">5.14%</span>
    </template>
  </common-card>
</template>

<script>
import commonCardMixin from '../../mixins/commonCardMixin'

export default {
  name: 'TodayUser',
  mixins: [commonCardMixin],
  mounted () {
  },
  methods: {
    getOptions () {
      return {
        tooltip: {
          show: true
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          show: false,
          data: ['00:00', '01:00', '02:00', '03:00', '04:00', '05:00', '06:00', '07:00']
        },
        yAxis: {
          type: 'value',
          show: false
        },
        grid: {
          left: 0,
          right: 0,
          top: 0,
          bottom: 0
        },
        series: [{
          data: [820, 932, 901, 934, 1290, 1330, 1320],
          type: 'bar',
          color: '#3398DB',
          smooth: true,
          barWidth: '50%'
        }]
      }
    }
  }
}
</script>

<style scoped>

</style>
