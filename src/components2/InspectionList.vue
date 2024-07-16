<template>
  <div class="table">
    <vue-seamless-scroll :class-option="optionSingleHeightTime" :data="inspectionList" class="inspection-list">
      <ul class="">
        <li
          v-for="(item, index) in inspectionList"
          :key="index"
          :class="{
            first: index <= 2
          }"
        >
          <span class="left-space"></span>
          <span class="index" v-text="index + 1"></span>
          <span class="name" v-text="item.name"></span>
          <span class="status">正常运行</span>
          <span class="time" v-text="item.time"></span>
          <span class="right-space"></span>
        </li>
      </ul>
    </vue-seamless-scroll>
  </div>
</template>

<script>
import vueSeamlessScroll from 'vue-seamless-scroll';
import { mapState } from 'vuex';

export default {
  name: '',
  components: {
    vueSeamlessScroll
  },

  data() {
    return {};
  },
  computed: {
    ...mapState(['inspectionList']),
    optionSingleHeightTime() {
      return {
        singleHeight: 45,
        waitTime: 0
      };
    }
  }
};
</script>

<style scoped lang="less">
.inspection-list {
  text-align: left;
  width: 430px;
  height: 600px;
  overflow: hidden;
  margin-top: 15px;
  margin-left: 8px;

  li {
    margin-bottom: 20px;
    background-color: #0b2745c6;
    font-size: 0;

    span {
      font-size: 16px;
      display: inline-block;
      height: 30px;
      line-height: 30px;
      vertical-align: top;
    }

    .left-space {
      width: 14px;
      height: 30px;
      margin-right: 10px;
      box-sizing: border-box;
      border-top: 2px solid #33b0f7;
      border-left: 2px solid #33b0f7;
      border-bottom: 2px solid #33b0f7;
    }

    &.first .index {
      border: 2px solid #ffdc1c;
      background: #2f2906;
    }

    .index {
      vertical-align: top;
      width: 30px;
      height: 30px;
      box-sizing: border-box;
      border-radius: 50%;
      border: 2px solid #1cd2ff;
      background: #06252f;
      color: #fff;
      text-align: center;
      line-height: 28px;
      font-size: 18px;
    }

    .name {
      margin-left: 12px;
      width: 180px;
      color: #fff;
    }

    .status {
      margin-left: 10px;
      width: 80px;
      color: #459fe6;
    }
    .time {
      width: 80px;
      color: rgb(146, 153, 168);
    }
    .right-space {
      width: 14px;
      height: 30px;
      box-sizing: border-box;
      border-top: 2px solid #33b0f7;
      border-right: 2px solid #33b0f7;
      border-bottom: 2px solid #33b0f7;
    }
  }
}
</style>
