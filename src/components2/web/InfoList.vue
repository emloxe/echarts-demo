<template>
  <div class="info-list">
    <div class="title-top">
      <span class="w1">异常时间</span>
      <span class="w2">系统名称</span>
      <span class="w3">响应时间</span>
    </div>
    <div class="info-wrap">
      <ul>
        <li>
          <span class="w1">2024-07-03 09:30:09</span>
          <span class="w2">老年大学-教师资源库</span>
          <span class="w3">4122ms</span>
        </li>

        <li>
          <span class="w1">2024-07-03 09:30:09</span>
          <span class="w2">老年大学-教师资源库</span>
          <span class="w3">220ms</span>
        </li>

        <li>
          <span class="w1">2024-07-03 09:30:09</span>
          <span class="w2">襄阳科协</span>
          <span class="w3">650ms</span>
        </li>

        <li>
          <span class="w1">2024-07-03 09:30:09</span>
          <span class="w2">记录小康工程-襄阳数据库</span>
          <span class="w3">4440ms</span>
        </li>

        <li>
          <span class="w1">2024-07-03 09:30:09</span>
          <span class="w2">老年大学-教师资源库</span>
          <span class="w3">4756ms</span>
        </li>

        <li>
          <span class="w1">2024-07-03 09:30:09</span>
          <span class="w2">宜城市纪委监委</span>
          <span class="w3">423ms</span>
        </li>

        <li>
          <span class="w1">2024-07-03 09:30:09</span>
          <span class="w2">公共场馆预约管理平台</span>
          <span class="w3">891ms</span>
        </li>

        <li>
          <span class="w1">2024-07-03 09:30:09</span>
          <span class="w2">老年大学-教师资源库</span>
          <span class="w3">4440ms</span>
        </li>

        <li>
          <span class="w1">2024-07-03 09:30:09</span>
          <span class="w2">宜城市纪委监委</span>
          <span class="w3">423ms</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'InfoList',
  components: {},
  provide: {
    // [THEME_KEY]: 'dark',
  },

  data() {
    return {
      option: {}
    };
  },

  computed: {
    // ...mapState(['taskCountByMonth'])
  },

  watch: {
    // taskCountByMonth(val) {
    //   this.setOption(val);
    // },
  },

  created() {},

  methods: {}
};
</script>

<style scoped lang="less">
.info-list {
  margin: 20px 10px 20px 30px;
  line-height: 36px;
  text-align: left;

  .title-top {
    padding-right: 10px;
    span {
      font-size: 15px;
      color: #55c1ff;
    }
  }

  span {
    display: inline-block;
    font-size: 14px;
    color: #c3cad9;

    &.w1 {
      width: 35%;
    }

    &.w2 {
      width: 45%;
    }

    &.w3 {
      width: 20%;
    }
  }

  .info-wrap {
    height: 260px;
    overflow-y: auto;

    /* 整个滚动条 */
    &::-webkit-scrollbar {
      width: 8px; /* 水平滚动条的高度、垂直滚动条的宽度 */
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
      border-radius: 4px;
    }

    /* 滑块hover效果 */
    &::-webkit-scrollbar-thumb:hover {
      background: rgb(94, 108, 127);
    }
  }
}
</style>
