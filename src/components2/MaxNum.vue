<template>
  <div class="wrap">
    <div class="max-num clearfix orange">
      <div class="num-logo fl">
        <p>资产</p>
      </div>
      <div class="num fl">
        <h5>总体数量</h5>
        <p><countTo :startVal="0" :endVal="22" :duration="2000"></countTo><i>个</i></p>
      </div>
    </div>

    <div class="max-num clearfix">
      <div class="num-logo fl">
        <p>巡检</p>
      </div>
      <div class="num fl">
        <h5>总计次数</h5>
        <p><countTo :startVal="0" :endVal="28561" :duration="2000"></countTo><i>次</i></p>
      </div>
    </div>

    <div class="max-num clearfix green">
      <div class="num-logo fl">
        <p>安全</p>
      </div>
      <div class="num fl">
        <h5>运行时长</h5>
        <p><countTo :startVal="0" :endVal="1698" :duration="2000"></countTo><i>天</i></p>
      </div>
    </div>
  </div>
</template>

<script>
import countTo from 'vue-count-to';

export default {
  components: {
    countTo
  },
  props: {
    name: String
  },

  data() {
    return {};
  },

  created() {},

  methods: {}
};
</script>

<style lang="less" scoped>
.wrap {
  display: flex;
  justify-content: space-between;
}

.max-num {
  .num-logo {
    width: 200px;
    height: 160px;

    background-image: url(~@/assets/logo2.png);

    p {
      margin-top: 99px;
      font-size: 18px;
      color: #aae7fd;
      font-weight: bold;
    }
  }

  .num {
    width: 268px;
    height: 160px;
    margin-left: 20px;

    background-image: url(~@/assets/info2.png);
    background-repeat: no-repeat;
    background-position: center;
    text-align: left;
    h5 {
      margin-left: 50px;
      margin-top: 50px;
      color: #fff;
      font-size: 18px;
    }
    p {
      margin-left: 50px;
      margin-top: 20px;

      color: #fff;
      font-size: 28px;
      font-family: 'Pirulen';
      i {
        margin-left: 0px;
        font-size: 18px;
        font-style: normal;
      }
    }
  }

  &.orange {
    .num-logo {
      background-image: url(~@/assets/logo1.png);

      p {
        color: #ffe7b4;
      }
    }

    .num {
      background-image: url(~@/assets/info1.png);
    }
  }

  &.green {
    .num-logo {
      background-image: url(~@/assets/logo3.png);

      p {
        color: #aafdf3;
      }
    }

    .num {
      background-image: url(~@/assets/info3.png);
    }
  }
}
</style>
