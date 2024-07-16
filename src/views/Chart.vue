<template>
  <div class="chart-view">
    <div class="chart-view-wrap">
      <router-view />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Chart',
  components: {}
};
</script>

<style lang="less">
.chart-view {
  box-sizing: border-box;
  padding-top: 140px;
  padding-left: 40px;
  padding-right: 40px;
  padding-bottom: 20px;
  height: 100%;
  background-image: url(~@/assets/other/bg-border2.png);
  background-size: 100% 100%;
  text-align: left;
  overflow: hidden;

  .chart-view-wrap {
    height: 100%;
    overflow-y: auto;
    text-align: center;

    /* 整个滚动条 */
    &::-webkit-scrollbar {
      width: 12px; /* 水平滚动条的高度、垂直滚动条的宽度 */
    }

    /* 滚动条轨道 */
    &::-webkit-scrollbar-track {
      background: #2c3039; /* 颜色和样式 */
      border-radius: 6px;
      overflow: hidden;
    }

    /* 滚动条滑块 */
    &::-webkit-scrollbar-thumb {
      background: rgb(65, 76, 91); /* 滑块颜色 */
      border-radius: 6px;
    }

    /* 滑块hover效果 */
    &::-webkit-scrollbar-thumb:hover {
      background: #555;
    }
  }

  .box1,
  .box2,
  .box3,
  .box4,
  .box-auto {
    display: inline-block;
    margin: 12px 24px;
    background-position: center;
    background-repeat: no-repeat;
    box-sizing: border-box;
    padding: 10px;
    background-size: 100% 100%;
    vertical-align: top;
  }

  .box1 {
    width: 520px;
    height: 320px;
    background-image: url(~@/assets/other/border1.png);
  }

  .box-auto {
    width: 800px;
    padding: 10px;
    border: 1px solid #19c9ff5b;
  }

  .box2 {
    width: 520px;
    height: 320px;
    background-image: url(~@/assets/other/border2.png);
  }

  .box3 {
    width: 520px;
    height: 280px;
    background-image: url(~@/assets/other/border3.png);
  }

  .box4 {
    width: 800px;
    height: 280px;
    background-image: url(~@/assets/other/border4.png);
  }
}
</style>
