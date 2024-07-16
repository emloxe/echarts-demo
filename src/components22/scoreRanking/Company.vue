<template>
  <div class="table">
    <div class="top">
      <span class="index">排名</span>
      <span class="company">市直单位</span>
      <span class="integral">积分</span>
    </div>

    <vue-seamless-scroll :class-option="optionSingleHeightTime" :data="scoreorderDept" class="center">
      <ul class="">
        <li
          v-for="(item, index) in scoreorderDept"
          :key="index"
          :class="{
            first: index == 0,
            second: index == 1,
            third: index == 2
          }"
        >
          <span class="index" v-text="index + 1"></span>
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

  data() {
    return {};
  },
  computed: {
    ...mapState(['scoreorderDept']),
    optionSingleHeightTime() {
      return {
        singleHeight: 34,
        waitTime: 2500
      };
    }
  }
};
</script>

<style scoped lang="less">
.index {
  width: 80px;
  font-family: 'Pirulen';
}

.company {
  width: 200px;
}

.integral {
  width: 80px;
}
</style>
