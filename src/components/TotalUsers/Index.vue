<template>

      <common-card
      title="累计用户数"
      value="1,081,014">
        <template>
          <v-chart :options="getOptions()"></v-chart>
        </template>
        <template v-slot:footer>
          <div class="compare-wrapper">
            <div class="compare">
              <span>日同比 </span>
              <span class="emphis">8.73%</span>
              <div class="increase"></div>
            </div>
            <div class="compare">
              <span class="month">月同比 </span>
              <span class="emphis">35.73%</span>
              <div class="decrease"></div>
            </div>
          </div>

        </template>
      </common-card>
</template>

<script>
import commonCardMixin from '../../mixins/commonCardMixin'

export default {
  name: 'TotalUsers',
  mixins: [commonCardMixin],
  mounted () {
  },
  methods: {
    getOptions () {
      return {
        tooltip: {
          show: false
        },
        grid: {
          left: 0,
          right: 0,
          bottom: 0,
          top: 0
        },
        yAxis: {
          type: 'category',
          show: false
        },
        xAxis: {
          type: 'value',
          show: false
        },
        series: [{
          type: 'bar',
          data: [200],
          stack: '总量',
          itemStyle: {
            color: '#45c946'
          },
          barWidth: 10
        }, {
          type: 'bar',
          data: [300],
          stack: '总量',
          itemStyle: {
            color: '#eee'
          }
        }, {
          type: 'custom',
          data: [200],
          stack: '总量',
          renderItem: (params, api) => {
            const value = api.value(0)
            const endPoint = api.coord([value, 0])
            return {
              type: 'group',
              position: endPoint,
              children: [{
                type: 'path',
                shape: {
                  d: 'M512 253.952 995.7376 770.048 28.2624 770.048 512 253.952z',
                  x: -6,
                  y: 6,
                  width: 10,
                  height: 10,
                  layout: 'cover'
                },
                style: {
                  fill: '#45c946'
                }
              }, {
                type: 'path',
                shape: {
                  d: 'M512.37705078 774.09511719l-449.60449219-449.59921875 899.20810547 0-449.60449218 449.59921875z',
                  x: -6,
                  y: -15,
                  width: 10,
                  height: 10,
                  layout: 'cover'
                },
                style: {
                  fill: '#45c946'
                }
              }]
            }
          }
        }]
      }
    }
  }

}
</script>

<style scoped lang="scss">
  .compare-wrapper{
    display: flex;
    flex-direction: row;
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
  }
  .month{
    margin-left: 10px;
  }

</style>
