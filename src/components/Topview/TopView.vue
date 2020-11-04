<template>
<div class="top-view">
  <el-row :gutter="20">
    <el-col :span="6">
      <el-card shadow="hover">
        <toltal-sales/>
      </el-card>
    </el-col>
    <el-col :span="6">
      <el-card shadow="hover">
        <toal-orders />
      </el-card>
    </el-col>
    <el-col :span="6">
      <el-card shadow="hover">
        <today-users />
      </el-card>
    </el-col>
    <el-col :span="6">
      <el-card shadow="hover">
        <toal-users />
      </el-card>
    </el-col>
  </el-row>

</div>
</template>

<script>
import ToltalSales from '../TotalSales/Index'
import TodayUsers from '../TodayUser/Index'
import ToalOrders from '../ToalOrders/Index'
import ToalUsers from '../TotalUsers/Index'
export default {
  name: 'TopView',
  components: {
    ToltalSales,
    TodayUsers,
    ToalOrders,
    ToalUsers
  }
}
</script>

<style scoped lang="scss">

</style>
