<template>
<div class="bottom-view">
  <div class="view">
    <el-card shadow="hover">
      <template v-slot:header>
        <div class="title-wrapper">关键词搜索</div>
      </template>
      <template>
        <div class="chart-wrapper">
          <div class="chart-inner">
            <div class="chart">
              <div class="chart-title">搜索用户数</div>
              <div class="chart-data">29,364</div>
              <v-chart :options="searchUserOptions"></v-chart>
            </div>
            <div class="chart">
              <div class="chart-title">搜索量</div>
              <div class="chart-data">29,364</div>
              <v-chart :options="searchUserOptions"></v-chart>
            </div>
          </div>
          <div class="table-wrapper">
            <el-table :data="tableData">
              <el-table-column prop="rank" label="排名" width="180"></el-table-column>
              <el-table-column prop="keyword" label="关键词" width="180"></el-table-column>
              <el-table-column prop="count" label="总搜索量"></el-table-column>
              <el-table-column prop="user" label="搜索用户数"></el-table-column>
            </el-table>
            <el-pagination></el-pagination>
          </div>
        </div>
      </template>
    </el-card>
  </div>
  <div class="view">
    <el-card shadow="hover">
      <template v-slot:header>
        <div class="title-wrapper">
          <div class="title">分类销售排行</div>
          <div class="radio-wrapper">
            <el-radio-group v-model="radioSelect" size="small" >
              <el-radio-button label="品类"></el-radio-button>
              <el-radio-button label="商品"></el-radio-button>
            </el-radio-group>
          </div>
        </div>
      </template>
      <template>
        <div class="chart-wrapper">
          <v-chart :options="typeOptions"></v-chart>
        </div>
      </template>
    </el-card>
  </div>
</div>
</template>

<script>
export default {
  name: 'BottomView',
  data () {
    return {
      searchUserOptions: {
        xAxis: {
          type: 'category',
          boundaryGap: false
        },
        yAxis: {
          show: false,
          min: 0,
          max: 500
        },
        series: [{
          type: 'line',
          areaStyle: {
            color: 'rgba(95,187,255,.5)'
          },
          data: [100, 150, 300, 400, 250],
          lineStyle: {
            color: 'rgba(95,187,255)'
          },
          itemStyle: {
            opacity: 0
          },
          smooth: true
        }],
        grid: {
          left: 0,
          right: 0,
          bottom: 0,
          top: 0
        }
      },
      searchOptions: {},
      typeOptions: {},
      tableData: [{
        id: 2,
        rank: 1,
        keyword: '北京',
        count: 100,
        user: 90,
        range: '90%'
      }, {
        id: 3,
        rank: 1,
        keyword: '北京',
        count: 100,
        user: 90,
        range: '90%'
      }, {
        id: 4,
        rank: 1,
        keyword: '北京',
        count: 100,
        user: 90,
        range: '90%'
      }],
      radioSelect: '品类'
    }
  },
  mounted () {
    this.renderOption()
  },
  methods: {
    renderOption () {
      const mockData = [
        {
          name: '粉面粥店',
          lengendname: '粉面粥店',
          value: 67,
          percent: '15.40%',
          itemStyle: { color: '#8d7fec' }
        }, {
          name: '简餐便当',
          lengendname: '简餐便当',
          value: 97,
          percent: '22.30%',
          itemStyle: { color: '#5085f2' }
        }, {
          name: '汉堡披萨',
          lengendname: '汉堡披萨',
          value: 92,
          percent: '21.15%',
          itemStyle: { color: '#d7ff47' }
        }
      ]
      this.typeOptions = {
        title: [{
          text: '品类分布',
          textStyle: {
            fontSize: 14,
            color: '#666'
          },
          left: 20,
          top: 20
        }, {
          text: '累计订单量',
          subtext: '320',
          textStyle: {
            fontSize: 14,
            color: '#999'
          },
          subtextStyle: {
            fontSize: 28,
            color: '#333'
          },
          x: '34.5%',
          y: '42.5%',
          textAlign: 'center'
        }],
        series: [{
          name: '品类分布',
          type: 'pie',
          data: mockData,
          label: {
            normal: {
              show: true,
              position: 'outter',
              formatter: function (paramas) {
                return `${paramas.data.lengendname} `
              }
            }
          },
          center: ['35%', '50%'],
          radius: ['45%', '60%'], // 内半径 外半径
          labelLine: {
            length: 5,
            length2: 3,
            smooth: true
          },
          clockWise: true,
          itemStyle: {
            borderColor: '#fff',
            borderWidth: 4
          }
        }],
        legend: {
          show: true,
          type: 'scroll',
          orient: 'vortical',
          height: 250,
          left: '70%',
          top: 'middle',
          textStyle: {
            color: '#999'
          }
        },
        tooltip: {
          show: true,
          trigger: 'item',
          formatter: function (params) {
            const str = params.seriesName + '</br >' + params.marker + params.data.lengendname + '</<br>>' + '数量' + params.data.value
            return str
          }
        }
      }
    }
  }
}
</script>

<style scoped lang="scss">
.bottom-view{
  display: flex;
  margin-top: 20px;
  .view{
    &:first-child{
    padding: 0 0 10px 0;
  }
    &:last-child{
      padding: 0 0 0 10px;
    }
    flex: 1;
    width: 50%;
    box-sizing: border-box;
    .title-wrapper{
      display: flex;
      align-items: center;
      box-sizing: border-box;
      height: 60px;
      font-size: 14px;
      border-bottom: 1px solid #eee;
      font-weight: 700;
      padding: 0 0 0 20px;
      .radio-wrapper{
        display: flex;
        flex: 1;
        justify-content: flex-end;
        margin-right: 20px;
      }
    }
    .chart-wrapper{
      display: flex;
      flex-direction: column;
      height: 452px;
      .chart-inner{
        display: flex;
        padding: 0 10px;
        margin-top: 10px;
        .chart{
          flex: 1;
          margin:0 10px;
          .chart-title{
            color: #999999;
            font-size: 14px;
          }
          .chart-data{
            font-size: 22px;
            color: #333;
            letter-spacing: 2px;
            font-weight: 500;
          }
          .echarts{
            height: 50px;
          }
        }
      }

    }
  }
}
</style>
