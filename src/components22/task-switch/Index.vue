<template>
  <div class="wrap">
    <Title title="任务统计" />
    <div class="switch-wrap">
      <span :class="{ active: activeIndex == 0 }" class="pagination" @mouseenter="changeIndex(0)">平台</span>
      <span :class="{ active: activeIndex == 1 }" class="pagination" @mouseenter="changeIndex(1)">类型</span>
      <span :class="{ active: activeIndex == 2 }" class="pagination" @mouseenter="changeIndex(2)">级别</span>
    </div>
    <div style="height: 10px"></div>
    <swiper
      ref="mySwiper"
      :slides-per-view="3"
      :space-between="50"
      :options="swiperOptions"
      @swiper="onSwiper"
      @slideChange="onSlideChange"
    >
      <swiper-slide>
        <BarChart />
      </swiper-slide>
      <swiper-slide>
        <PolarBarChart />
      </swiper-slide>
      <swiper-slide>
        <RadarChart />
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper';
import Title from '@/components3/other/Title.vue';

import PolarBarChart from './BarChart2.vue';
import BarChart from './BarChart.vue';
import RadarChart from './RadarChart.vue';

export default {
  name: 'App',
  components: {
    Title,
    Swiper,
    SwiperSlide,

    PolarBarChart,
    BarChart,
    RadarChart
  },

  directives: {
    swiper: directive
  },
  mounted() {
    console.log('Current Swiper instance object', this.swiper);
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.$swiper;
    }
  },

  data() {
    return {
      activeIndex: 0,
      swiperOptions: {
        observer: true, // 修改swiper自己或子元素时，自动初始化swiper
        observeParents: true, // 修改swiper的父元素时，自动初始化swiper
        autoplay: {
          delay: 2000,
          disableOnInteraction: false
        }
      }
    };
  },

  methods: {
    onSwiper(swiper) {
      console.log(swiper);
    },
    onSlideChange(e) {
      this.activeIndex = e.activeIndex;
    },
    changeIndex(index) {
      this.swiper.slideTo(index, 500, false);
    }
  }
};
</script>

<style scoped lang="less">
.wrap {
  overflow: hidden;
}
</style>
