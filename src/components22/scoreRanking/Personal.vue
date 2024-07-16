<template>
  <div class="table">
    <div class="top">
      <span class="index">排名</span>
      <span class="name">姓名</span>
      <span class="company">单位</span>
      <span class="integral">积分</span>
    </div>

    <vue-seamless-scroll :class-option="optionSingleHeightTime" :data="scoreorderUser" class="center">
      <ul class="">
        <li
          v-for="(item, index) in scoreorderUser"
          :key="index"
          :class="{
            first: index == 0,
            second: index == 1,
            third: index == 2
          }"
        >
          <span class="index" v-text="index + 1"></span>
          <span class="name" v-text="item.user_name"></span>
          <span class="company" v-text="item.dept_name"></span>
          <span class="integral" v-text="item.score"></span>
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

  computed: {
    ...mapState(['scoreorderUser']),
    optionSingleHeightTime() {
      return {
        singleHeight: 34,
        waitTime: 2500
      };
    }
  },
  data() {
    return {};
  }
};
</script>

<style scoped lang="less">
.index {
  width: 60px;
  font-family: 'Pirulen';
}

.name {
  width: 80px;
}

.company {
  width: 160px;
}

.integral {
  width: 60px;
}
</style>
