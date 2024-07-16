<template>
  <div class="">
    <div class="center" style="">
      <div class="male male-per per">
        <countTo :startVal="0" :endVal="(maleSum / sum) * 100" :duration="duration" :decimals="1" suffix="%"></countTo>
      </div>
      <div class="male male-num num">
        <countTo :startVal="0" :endVal="maleSum" :duration="duration"></countTo>
        <span class="suffix">人</span>
      </div>
      <div class="female female-per per">
        <countTo
          :startVal="0"
          :endVal="(femaleSum / sum) * 100"
          :decimals="1"
          :duration="duration"
          suffix="%"
        ></countTo>
      </div>
      <div class="female female-num num">
        <countTo :startVal="0" :endVal="femaleSum" :duration="duration"></countTo>
        <span class="suffix">人</span>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

import countTo from 'vue-count-to';
import chartConf from '@/config/chart';

export default {
  name: 'People',
  components: {
    countTo
  },

  computed: {
    ...mapState(['sex'])
  },

  data() {
    return {
      startVal: 0,
      maleSum: 100,
      femaleSum: 80,
      sum: 180,
      duration: chartConf.animationDuration
    };
  },

  methods: {}
};
</script>

<style scoped lang="less">
.center {
  position: relative;
  width: 340px;
  height: 240px;
  margin: 0px auto;
  background-image: url(~@/assets/sex.png);
  background-size: contain;
  background-position: center center;
  background-repeat: no-repeat;
}

.male,
.female {
  position: absolute;
  width: 70px;
  text-align: center;
}
.per {
  height: 24px;
  line-height: 24px;
  font-size: 16px;
  color: #fff;
  top: 80px;
}
.male-per {
  left: 260px;
}
.female-per {
  left: 10px;
}

.num {
  height: 24px;
  line-height: 24px;
  font-size: 20px;
  color: #00faa8;
  top: 150px;

  .suffix {
    font-size: 14px;
  }
}

.male-num {
  left: 260px;
}
.female-num {
  left: 10px;
}
</style>
