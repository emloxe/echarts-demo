<template>
  <div class="table">
    <div class="top">
      <span class="index">排名</span>
      <span class="region">地区</span>
      <span class="integral">积分</span>
    </div>

    <vue-seamless-scroll :class-option="optionSingleHeightTime" :data="scoreorderRegion" class="center">
      <ul class="">
        <li
          v-for="(item, index) in scoreorderRegion"
          :key="index"
          :class="{
            first: index == 0,
            second: index == 1,
            third: index == 2
          }"
        >
          <span class="index" v-text="index + 1"></span>
          <span class="region" v-text="item.region"></span>
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
    ...mapState(['scoreorderRegion']),
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

.region {
  width: 200px;
}

.integral {
  width: 80px;
}
</style>
