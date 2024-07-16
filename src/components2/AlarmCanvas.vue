<template>
  <div id="alarm-wrap" style="">
    <div class="more topLeft">
      <h5>21<span>次</span></h5>
      <p>本年告警</p>
    </div>
    <div class="more topRight">
      <h5>12<span>次</span></h5>
      <p>今日巡检</p>
    </div>
    <div class="more bottomLeft">
      <h5>0<span>次</span></h5>
      <p>本周告警</p>
    </div>
    <div class="more bottomRight">
      <h5>0<span>次</span></h5>
      <p>本日告警</p>
    </div>
    <canvas ref="alarm" id="alarm" width="568" height="568" style=""></canvas>
  </div>
</template>

<script>
import { addCenterImg } from './AlarmCanvas';
// import { addCenterImg, addCircle } from './AlarmCanvas';

export default {
  data() {
    return {};
  },
  mounted() {
    const cx = 568 / 2;
    const cy = 568 / 2;

    const zr = zrender.init(this.$refs.alarm, {});

    addCenterImg({ zr, cx, cy }, './images/line1.png', -Math.PI * 2, 8000);
    addCenterImg({ zr, cx, cy }, './images/line21.png', Math.PI * 2, 20000, 2);
    addCenterImg({ zr, cx, cy }, './images/line22.png', Math.PI * 2, 5000, 3);
    addCenterImg({ zr, cx, cy }, './images/line3.png', -Math.PI * 2, 20000);

    // addCircle({ zr, cx, cy }, 0);
    // addCircle({ zr, cx, cy }, 1000);
    // addCircle({ zr, cx, cy }, 2000);

    const img = new zrender.Image({
      originX: cx,
      originY: cy,
      z: 15,
      style: {
        image: './images/safe.png',
        x: 0,
        y: 0
      }
    });

    zr.add(img);
  },

  methods: {}
};
</script>

<style lang="less" scoped>
#alarm-wrap {
  position: relative;
  width: 100%;
  height: 100%;
  background-image: url(~@/assets/center-bg.png);
  background-position: center;
  background-repeat: no-repeat;
}

#alarm {
  position: absolute;
  left: 91px;
  top: 91px;
  width: 568px;
  height: 568px;
}

.more {
  position: absolute;
  box-sizing: border-box;
  width: 182px;
  height: 120px;
  background-position: center;
  background-repeat: no-repeat;
  text-align: center;

  h5 {
    font-size: 40px;
    line-height: 42px;
    font-family: 'Pirulen';

    span {
      font-size: 20px;
    }
  }

  p {
    padding-top: 5px;
    font-size: 19px;
    line-height: 30px;
    color: #fff;
  }
}

.topLeft {
  top: 80px;
  left: 40px;
  padding-right: 65px;
  background-image: url(~@/assets/center-tl.png);

  h5 {
    color: #ff5155;
  }
}

.topRight {
  top: 80px;
  right: 40px;
  padding-left: 65px;

  background-image: url(~@/assets/center-tr.png);
  h5 {
    color: #1cdcff;
  }
}

.bottomLeft {
  bottom: 68px;
  left: 40px;

  padding-right: 65px;

  background-image: url(~@/assets/center-bl.png);
  h5 {
    color: #ff871c;
  }
  p {
    padding-top: 10px;
  }
}

.bottomRight {
  bottom: 68px;
  right: 40px;
  padding-left: 65px;

  background-image: url(~@/assets/center-br.png);
  h5 {
    color: #ffdc1c;
  }
  p {
    padding-top: 10px;
  }
}
</style>
