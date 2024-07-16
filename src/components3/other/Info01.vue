<template>
  <div class="text1">
    <div class="clearfix">
      <div class="fl item clearfix">
        <div class="fl">
          <span class="icon icon1"></span>
        </div>
        <div class="fl">
          <h6>总任务数</h6>
          <p style="color: #56cfff">
            <countTo :startVal="startVal" :endVal="endVal1 || 0" :duration="duration"></countTo>
          </p>
        </div>
      </div>

      <div class="fl item clearfix">
        <div class="fl">
          <span class="icon icon3"></span>
        </div>
        <div class="fl">
          <h6>参与人次</h6>
          <p style="color: #feb209">
            <countTo :startVal="startVal" :endVal="endVal2 || 0" :duration="duration"></countTo>
          </p>
        </div>
      </div>

      <div class="fl item clearfix">
        <div class="fl">
          <span class="icon icon2"></span>
        </div>
        <div class="fl">
          <h6>网评文章</h6>
          <p style="color: #15e1ac">
            <countTo :startVal="startVal" :endVal="endVal3 || 0" :duration="duration"></countTo>
          </p>
        </div>
      </div>

      <div class="fl item clearfix">
        <div class="fl">
          <span class="icon icon4"></span>
        </div>
        <div class="fl">
          <h6>完成率</h6>
          <p style="color: #eb5960">
            <countTo :startVal="startVal" :endVal="endVal4 || 0" :duration="duration" suffix="%"></countTo>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import countTo from 'vue-count-to';
import chartConf from '@/config/chart';

// import { mapState } from 'vuex';

export default {
  name: 'Text1',
  components: {
    countTo
  },

  computed: {
    // ...mapState(['task'])
  },

  data() {
    return {
      startVal: 0,
      endVal1: 12,
      endVal2: 18,
      endVal3: 80,
      endVal4: 99,
      duration: chartConf.animationDuration
    };
  }
};
</script>

<style scoped lang="less">
.item {
  box-sizing: border-box;
  min-width: 48%;
  padding-left: 10px;

  .icon {
    display: inline-block;
    height: 75px;
    width: 75px;
    background-image: url(~@/assets/tit1.png);
    background-repeat: no-repeat;
    background-position: center;

    &.icon2 {
      background-image: url(~@/assets/tit2.png);
    }

    &.icon3 {
      background-image: url(~@/assets/tit3.png);
    }

    &.icon4 {
      background-image: url(~@/assets/tit4.png);
    }
  }

  h6,
  p {
    padding-right: 10px;
    text-align: left;
  }

  h6 {
    margin-top: 14px;
    font-size: 16px;
    font-weight: 500;
    line-height: 26px;
    color: #fff;
  }

  p {
    font-size: 20px;
    line-height: 30px;
    color: #ffe923;
    font-weight: 600;
    font-family: 'Pirulen';
  }
}
</style>
