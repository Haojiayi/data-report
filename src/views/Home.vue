<template>
  <div class="home">
    <top-view></top-view>
    <sales-view></sales-view>
    <bottom-view></bottom-view>
    <map-view></map-view>
  </div>
</template>

<script>
// @ is an alias to /src
import TopView from '../components/Topview/TopView'
import SalesView from '../components/SalesView/SalesView'
import MapView from '../components/MapView/MapView'
import BottomView from '../components/BottomView/BottomView'
export default {
  name: 'Home',
  components: {
    TopView,
    BottomView,
    SalesView,
    MapView
  }
}
</script>
<style>
  .home{
    width: 100%;
    height: 100%;
    /*padding: 20px;*/
    background: #eeeeee;
  }
</style>
