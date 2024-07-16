<template>
  <div class="wrap">
    <Title title="网评员画像" />

    <div class="switch-wrap">
      <span :class="{ active: activeIndex == 0 }" class="pagination" @mouseenter="changeIndex(0)">学历</span>
      <span :class="{ active: activeIndex == 1 }" class="pagination" @mouseenter="changeIndex(1)">年龄</span>
      <span :class="{ active: activeIndex == 2 }" class="pagination" @mouseenter="changeIndex(2)">政治面貌</span>
      <span :class="{ active: activeIndex == 3 }" class="pagination" @mouseenter="changeIndex(3)">标签</span>
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
        <FunnelChart />
      </swiper-slide>
      <swiper-slide>
        <PieChart />
      </swiper-slide>
      <swiper-slide>
        <RadarChart2 />
      </swiper-slide>

      <swiper-slide>
        <RadialBarChart />
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper';
import Title from '@/components3/other/Title.vue';

import FunnelChart from './FunnelChart.vue';
import PieChart from '../../components3/pie/Pie05.vue';
import RadialBarChart from './RadialBarChart.vue';
import RadarChart2 from './RadarChart2.vue';

export default {
  name: 'People',
  components: {
    Title,
    Swiper,
    SwiperSlide,
    FunnelChart,
    PieChart,
    RadialBarChart,
    RadarChart2
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
