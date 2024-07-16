<template>
  <div class="center">
    <div class="map">
      <div class="item bkx" @click="regionChange('保康县')" :class="{ active: activeRegion == '保康县' }">
        <span class="top"></span>
        <p class="region">保康县</p>
      </div>
      <div class="item xcq" @click="regionChange('襄城区')" :class="{ active: activeRegion == '襄城区' }">
        <span class="top"></span>
        <p class="region">襄城区</p>
      </div>
      <div class="item fcq" @click="regionChange('樊城区')" :class="{ active: activeRegion == '樊城区' }">
        <span class="top"></span>
        <p class="region">樊城区</p>
      </div>
      <div class="item xzq" @click="regionChange('襄州区')" :class="{ active: activeRegion == '襄州区' }">
        <span class="top"></span>
        <p class="region">襄州区</p>
      </div>
      <div class="item gxq" @click="regionChange('高新区')" :class="{ active: activeRegion == '高新区' }">
        <span class="top"></span>
        <p class="region">高新区</p>
      </div>
      <div class="item djxq" @click="regionChange('东津新区')" :class="{ active: activeRegion == '东津新区' }">
        <span class="top"></span>
        <p class="region">东津新区</p>
      </div>
      <div class="item zys" @click="regionChange('枣阳市')" :class="{ active: activeRegion == '枣阳市' }">
        <span class="top"></span>
        <p class="region">枣阳市</p>
      </div>
      <div class="item ycs" @click="regionChange('宜城市')" :class="{ active: activeRegion == '宜城市' }">
        <span class="top"></span>
        <p class="region">宜城市</p>
      </div>
      <div class="item lhks" @click="regionChange('老河口市')" :class="{ active: activeRegion == '老河口市' }">
        <span class="top"></span>
        <p class="region">老河口市</p>
      </div>
      <div class="item nzx" @click="regionChange('南漳县')" :class="{ active: activeRegion == '南漳县' }">
        <span class="top"></span>
        <p class="region">南漳县</p>
      </div>
      <div class="item gcx" @click="regionChange('谷城县')" :class="{ active: activeRegion == '谷城县' }">
        <span class="top"></span>
        <p class="region">谷城县</p>
      </div>
      <div class="item ylz" @click="regionChange('鱼梁洲')" :class="{ active: activeRegion == '鱼梁洲' }">
        <span class="top"></span>
        <p class="region">鱼梁洲</p>
      </div>
    </div>

    <div class="btn-wrap">
      <span @click="regionChange('襄阳市')" :class="{ active: activeRegion == '襄阳市' }" class="btn">襄阳市</span>
      <span @click="regionChange('市直单位')" :class="{ active: activeRegion == '市直单位' }" class="btn"
        >市直单位</span
      >
      <span @click="regionChange('襄城区')" :class="{ active: activeRegion == '襄城区' }" class="btn">襄城区</span>
      <span @click="regionChange('樊城区')" :class="{ active: activeRegion == '樊城区' }" class="btn">樊城区</span>
      <span @click="regionChange('襄州区')" :class="{ active: activeRegion == '襄州区' }" class="btn">襄州区</span>
      <span @click="regionChange('高新区')" :class="{ active: activeRegion == '高新区' }" class="btn">高新区</span>
      <span @click="regionChange('鱼梁洲')" :class="{ active: activeRegion == '鱼梁洲' }" class="btn">鱼梁洲</span>
      <br />
      <span @click="regionChange('东津新区')" :class="{ active: activeRegion == '东津新区' }" class="btn"
        >东津新区</span
      >
      <span @click="regionChange('枣阳市')" :class="{ active: activeRegion == '枣阳市' }" class="btn">枣阳市</span>
      <span @click="regionChange('宜城市')" :class="{ active: activeRegion == '宜城市' }" class="btn">宜城市</span>
      <span @click="regionChange('老河口市')" :class="{ active: activeRegion == '老河口市' }" class="btn"
        >老河口市</span
      >
      <span @click="regionChange('南漳县')" :class="{ active: activeRegion == '南漳县' }" class="btn">南漳县</span>
      <span @click="regionChange('谷城县')" :class="{ active: activeRegion == '谷城县' }" class="btn">谷城县</span>
      <span @click="regionChange('保康县')" :class="{ active: activeRegion == '保康县' }" class="btn">保康县</span>
    </div>

    <div class="region-info" :style="{ right: infoLoaction[0] + 'px', bottom: infoLoaction[1] + 'px' }">
      <h4>{{ activeRegion }}</h4>

      <div class="centent">
        <div class="top">
          <h5>
            获取积分
            <span style="display: inline-block; width: 80px">{{
              (region && region[map[activeRegion]].score) || 0
            }}</span>
          </h5>
        </div>

        <div class="clearfix">
          <div class="info-item fl">
            <p class="data">{{ (region && region[map[activeRegion]].wangperSum) || 0 }}(人)</p>
            <h6>网评员</h6>
          </div>
          <div class="info-item fl bg">
            <p class="data" style="color: #eb5960">{{ (region && region[map[activeRegion]].livePercent) || 0 }}%</p>
            <h6>活跃率</h6>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'Center',
  props: {
    msg: String
  },
  data() {
    return {
      activeRegion: '襄阳市',
      activeTime: 'month',

      activeTimeType: '年',

      infoLoaction: [30, 0],

      map: {
        襄阳市: '襄阳市',
        市直单位: '市直单位',
        襄城区: '襄城区',
        樊城区: '樊城区',
        襄州区: '襄州区',
        高新区: '高新区',
        东津新区: '东津新区',
        枣阳市: '枣阳市',
        宜城市: '宜城市',
        老河口市: '老河口市',
        南漳县: '南漳',
        保康县: '保康',
        谷城县: '谷城',
        鱼梁洲: '鱼梁洲'
      },

      mapLocation: {
        襄阳市: [30, 0],
        市直单位: [30, 0],
        襄城区: [30, 177],
        樊城区: [40, 217],
        襄州区: [30, 227],
        高新区: [25, 267],
        东津新区: [30, 160],
        枣阳市: [30, 180],
        宜城市: [30, 20],
        老河口市: [530, 260],
        南漳县: [360, 40],
        保康县: [600, 60],
        谷城县: [530, 260],
        鱼梁洲: [30, 177]
      }
    };
  },

  computed: {
    ...mapState(['region'])
  },
  methods: {
    regionChange(text) {
      this.activeRegion = text;
      this.infoLoaction = this.mapLocation[text];
    }
  }
};
</script>

<style scoped lang="less">
.center {
  position: absolute;
  left: 470px;
  top: 160px;
  width: 980px;
  height: 700px;
  background-position: center;
  background-repeat: no-repeat;
}
@keyframes scaleMap {
  0% {
    opacity: 0;
    transform: scale(0.3);
  }

  100% {
    transform: scale(1);
    opacity: 1;
  }
}
.map {
  position: absolute;
  width: 980px;
  height: 700px;

  background-image: url(~@/assets/map.png);
  animation-name: scaleMap;
  animation-timing-function: ease-out;
  animation-duration: 1.5s;
  animation-iteration-count: 1;
  animation-delay: 0s;
  transform-origin: center;
  backface-visibility: hidden;
}

.region-info {
  position: absolute;
  z-index: 10;
  right: 30px;
  bottom: 0;
  width: 340px;
  height: 210px;
  background-image: url(~@/assets/info2.png);
  background-size: 100% 100%;
  transition: all 0.5s;
  h4 {
    line-height: 30px;
    height: 30px;
    font-size: 15px;
    color: #ffffff;
  }

  .centent {
    padding: 10px 20px;
  }

  .top {
    margin-top: 10px;
    h5 {
      color: #fff;
      font-size: 16px;
    }
    height: 56px;
    line-height: 56px;

    span {
      font-size: 30px;
      color: #ffe923;
      // font-family: "Pirulen";
    }
  }

  p {
    color: #1f7dcf;
    font-size: 24px;
    line-height: 36px;
  }

  .info-item {
    width: 50%;
    margin-top: 6px;

    &.bg {
      background: url(~@/assets/line.png) no-repeat;
      background-size: contain;
      background-position-y: 45%;
    }

    h6 {
      color: #fff;
      font-size: 12px;
    }
  }
}

@keyframes scaleDot {
  0% {
    transform: scale(0);
    opacity: 0;
  }
  80% {
    opacity: 1;
  }
  100% {
    transform: scale(1);
    opacity: 0;
  }
}
.item {
  position: absolute;
  cursor: pointer;

  &.active {
    z-index: 10;

    .top {
      background-image: url(~@/assets/region2.png);
    }

    &::before {
      content: '';
      z-index: -1;
      position: absolute;
      left: -50px;
      top: -50px;
      width: 100px;
      height: 100px;
      border-radius: 50px;
      opacity: 0;
      animation-name: scaleDot;
      animation-timing-function: ease-out;
      animation-duration: 2s;
      animation-iteration-count: infinite;
      animation-delay: 0s;
      transform-origin: center;
      background-color: rgba(0, 0, 0, 0.3);
    }
  }

  .top {
    position: absolute;
    width: 40px;
    margin-left: -20px;
    height: 50px;
    margin-top: -40px;
    background-image: url(~@/assets/region.png);
    background-position: center;
    background-repeat: no-repeat;
  }
  .region {
    z-index: 5;
    position: absolute;
    width: 80px;
    margin-left: -40px;
    margin-top: 10px;
    color: #fff;
    font-size: 14px;
    line-height: 20px;
    text-align: center;
  }
  &.xcq {
    left: 550px;
    top: 320px;
  }

  &.fcq {
    left: 560px;
    top: 270px;
  }
  &.ylz {
    left: 590px;
    top: 300px;
  }
  &.djxq {
    left: 640px;
    top: 290px;
  }

  &.xzq {
    left: 610px;
    top: 250px;
  }

  &.nzx {
    left: 460px;
    top: 400px;
  }

  &.ycs {
    left: 640px;
    top: 430px;
  }

  &.bkx {
    left: 240px;
    top: 390px;
  }

  &.lhks {
    left: 410px;
    top: 180px;
  }

  &.gcx {
    left: 380px;
    top: 200px;
  }

  &.zys {
    left: 830px;
    top: 260px;
  }

  &.gxq {
    left: 580px;
    top: 230px;
  }
}

.number {
  display: none;
  color: #16fdaf;
  font-size: 14px;
  line-height: 20px;
}

.btn-wrap {
  padding-top: 760px;
}
.btn {
  display: inline-block;
  margin: 5px 10px;
  padding: 5px 30px;
  line-height: 30px;
  background-image: url(~@/assets/btn-bg.png);
  background-size: 100% 100%;
  color: #fff;
  font-size: 15px;
  cursor: pointer;

  &.active {
    background-image: url(~@/assets/btn-bg2.jpg);
  }
}
</style>
