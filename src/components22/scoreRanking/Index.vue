<template>
  <div class="score-ranking">
    <Title title="积分排行" />
    <div class="switch-wrap">
      <span :class="{ active: activeIndex == 0 }" class="pagination" @mouseenter="changeIndex(0)">属地</span>
      <span :class="{ active: activeIndex == 1 }" class="pagination" @mouseenter="changeIndex(1)">市直单位</span>

      <span :class="{ active: activeIndex == 2 }" class="pagination" @mouseenter="changeIndex(2)">个人</span>
    </div>
    <div style="height: 15px"></div>
    <swiper
      ref="mySwiper"
      :slides-per-view="3"
      :space-between="50"
      :options="swiperOptions"
      @swiper="onSwiper"
      @slideChange="onSlideChange"
    >
      <swiper-slide>
        <Territory />
      </swiper-slide>
      <swiper-slide>
        <Company />
      </swiper-slide>
      <swiper-slide>
        <Personal />
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper';

import Title from '@/components3/other/Title.vue';
import Territory from './Territory.vue';
import Company from './Company.vue';
import Personal from './Personal.vue';

export default {
  name: 'Text2',
  components: {
    Title,
    Territory,
    Company,
    Personal,
    Swiper,
    SwiperSlide
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

<style lang="less">
.score-ranking {
  overflow: hidden;
  span {
    display: inline-block;

    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .table {
    height: 205px;
    width: 360px;
    margin: 0 auto;
  }
  .top {
    margin-top: 10px;
    background: #02438070;
    span {
      position: relative;
      display: inline-block;
      // background: #02638c;
      height: 34px;
      line-height: 34px;
      font-size: 15px;
      color: #fff;
    }
  }

  .center {
    overflow: hidden;
    ul {
      list-style: none;
      padding: 0;
      margin: 0 auto;
      li {
        font-size: 0;
        height: 34px;
        line-height: 34px;
        font-size: 14px;
        color: rgb(194, 194, 194);

        &:nth-child(2n) {
          background: #02438021;
        }

        span {
          display: inline-block;
          // background: #022447aa;

          &.index {
            color: #56cfff;
            font-size: 18px;
          }
        }

        &.first {
          .index {
            color: rgb(235, 89, 96);
          }
        }
        &.second {
          .index {
            color: #feb209;
          }
        }

        &.third {
          .index {
            color: #15e1ac;
          }
        }
      }
    }
  }
}
</style>
