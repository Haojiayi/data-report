<template>
  <div class="sales-view">
    <el-card shadow="hover" :body-style="{padding:'0 0 20px'}">
      <template v-slot:header>
        <div class="menu-wrapper">
          <el-menu
            class="saleview-menu"
            :default-active="activeIndex"
            @select="onMenuSelect"
          mode="horizontal">
            <el-menu-item index="1">销售额</el-menu-item>
            <el-menu-item index="2">访问量</el-menu-item>
          </el-menu>
          <div class="menu-right">
            <el-radio-group v-model="radioSelect" size="small">
              <el-radio-button label="今日"></el-radio-button>
              <el-radio-button label="本周"></el-radio-button>
              <el-radio-button label="本月"></el-radio-button>
              <el-radio-button label="今年"></el-radio-button>
            </el-radio-group>
            <el-date-picker
            type="daterange"
            v-model="date"
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
            size="small"
            :picker-options="pickerOptions"
            unlink-panels
            class="saleview-picker">
            </el-date-picker>
          </div>
        </div>
      </template>
      <template>
        <div class="sales-view-chart-wrapper">
          <v-chart :options="chartOptions" ></v-chart>
          <div class="sale-view-list">
            <div class="sale-view-title">排行榜</div>
            <div class="list-item-wrapper">
              <div class="list-item" v-for="item in rankData" :key="item.no">
                <div :class="['list-item-no', +item.no <= 3? 'top-no':'']">{{item.no}}</div>
                <div class="list-item-name">{{item.name}}</div>
                <div class="list-item-money">{{item.money}}</div>
              </div>
            </div>
          </div>
        </div>
      </template>
    </el-card>
  </div>
</template>

<script>
export default {
  name: 'SalesView',
  data () {
    return {
      activeIndex: '1',
      radioSelect: '今日',
      date: null,
      pickerOptions: {
        shortcuts: [{
          text: '最近一周',
          onClick (picker) {
            const start = new Date()
            const end = new Date()
            start.setTime(start.getTime() - 3600 * 24 * 1000 * 7)
            picker.$emit('pick', [start, end])
          }
        }, {
          text: '最近一个月',
          onClick (picker) {
            const start = new Date()
            const end = new Date()
            start.setTime(start.getTime() - 3600 * 24 * 1000 * 30)
            picker.$emit('pick', [start, end])
          }
        }, {
          text: '最近三个月',
          onClick (picker) {
            const start = new Date()
            const end = new Date()
            start.setTime(start.getTime() - 3600 * 24 * 1000 * 90)
            picker.$emit('pick', [start, end])
          }
        }]
      },
      chartOptions: {
        title: {
          text: '年度销售额',
          textStyle: {
            fontSize: 12,
            color: '#666'
          },
          left: 25,
          top: 15
        },
        xAxis: {
          type: 'category',
          data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月',
            '9月', '10月', '11月', '12月'],
          axisTick: {
            alignWithLabel: true,
            lineStyle: { color: '#999' }
          },
          axisLine: {
            lineStyle: {
              color: '#999'
            }
          },
          axisLabel: {
            color: '#333'
          }
        },
        yAxis: {
          type: 'value',
          axisLine: {
            show: false
          },
          axisTick: {
            show: false
          },
          splitLine: {
            lineStyle: {
              type: 'dot',
              color: '#eee'
            }
          }
        },
        series: [{
          type: 'bar',
          barWidth: '35%',
          data: [200, 300, 500, 400, 600, 700, 100, 150, 200, 120, 500, 153],
          color: ['#3398DB']
        }],
        grid: {
          top: 50,
          left: 40,
          right: 0
        }
      },
      rankData: [
        {
          no: 1,
          name: '麦当劳',
          money: '332,234'
        }, {
          no: 2,
          name: '麦当劳',
          money: '332,234'
        }, {
          no: 3,
          name: '麦当劳',
          money: '332,234'
        }, {
          no: 4,
          name: '麦当劳',
          money: '332,234'
        }, {
          no: 5,
          name: '麦当劳',
          money: '332,234'
        }, {
          no: 6,
          name: '麦当劳',
          money: '332,234'
        }, {
          no: 7,
          name: '麦当劳',
          money: '332,234'
        }
      ]
    }
  },
  methods: {
    onMenuSelect (index) {
      this.activeIndex = index
    }
  }
}
</script>

<style scope lang="scss">
.echarts{
  width: 100%;
  height: 100%;
}
.sales-view{margin-top: 20px}
  .menu-wrapper{
    position: relative;
    display: flex;
    .saleview-menu{
      width: 100%;
      padding-left: 20px;
      .el-menu-item{
        height: 50px;
        line-height: 50px;
        margin: 0 20px;
      }
    }
    .menu-right{
      position: absolute;
      right: 20px;
      top: 0;
      height: 50px;
      line-height: 50px;
      display: flex;
      align-items: center;
      justify-content: flex-end;
      .saleview-picker{
        margin-left: 20px;
      }
    }
  }
  .sales-view-chart-wrapper{
    display: flex;
    height: 270px;
    .echarts{
      flex:0 0 70%;
      width: 70%;
      height: 100%;
    }
    .sale-view-list{
      flex: 1;
      width: 100%;
      height: 100%;
      overflow: hidden;
      .sale-view-title{
        margin-top: 20px;
        font-size: 12px;
        font-weight: 500;
        color: #666666;
      }
      .list-item-wrapper{
        margin-top: 15px;
        .list-item{
          display: flex;
          align-items: center;
          font-size: 12px;
          height: 20px;
          padding: 6px;
          .list-item-no{
            display: flex;
            align-items: center;
            justify-content: center;
            width: 20px;
            height: 20px;
            color: #333333;
            &.top-no{
              border-radius: 50%;
              background: #000;
              color: white;
              font-weight: 500;
            }
          }
          .list-item-name{
            margin-left: 10px;
            color: #333333;
          }
          .list-item-money{
            color: #333333;
            flex: 1;
            text-align: right;
          }
        }
      }

    }
  }
</style>
