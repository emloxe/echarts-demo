<template>
  <div id="app">
    <div class="app-border">
      <Time></Time>
      <header class="header">Echarts 图表汇总</header>

      <div class="router">
        <router-link to="/bar">柱状图</router-link>
        <router-link to="/pie">饼图</router-link>
        <router-link to="/line">折线图</router-link>
        <router-link to="/map">地图</router-link>
        <router-link to="/other">其他</router-link>
      </div>

      <router-view />
    </div>
  </div>
</template>

<script>
/* eslint-disable vue/no-unused-components */

import _ from 'lodash';
import MaxNum from '@/components2/MaxNum.vue';
import Time from '@/components3/other/Time.vue';

// import * as api from './api';

export default {
  name: 'App',
  components: { MaxNum, Time },

  computed: {},

  watch: {},

  mounted() {
    this.listenerWindow();
  },

  methods: {
    listenerWindow() {
      const setScale = () => {
        const scale = Math.min(document.body.offsetWidth / 1920);
        // eslint-disable-next-line max-len
        // const scale = Math.min(document.body.offsetWidth / 1920, document.body.offsetHeight / 1080);
        document.querySelector('#app').style.transform = `scale(${scale})`;
      };
      setScale();
      const fun = _.debounce(
        () => {
          console.log('throttle', new Date());
          setScale();
        },
        500,
        {}
      );
      window.addEventListener('resize', () => {
        fun();
      });
    }
  }
};
</script>

<style lang="less">
html,
body {
  margin: 0;
  padding: 0;
  overflow-x: hidden;
}
#app {
  position: absolute;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 1920px;
  height: 1080px;
  box-sizing: border-box;
  background-image: url(~@/assets/other/bg-border2.png);
  background-size: 100% 100%;
  transform-origin: left top;
  transition: transform 0.2s;
  animation-timing-function: ease-out;
  overflow: hidden;
  user-select: none;
}

.app-border {
  width: 100%;
  height: 100%;
  background: url(~@/assets/com-border.png) center;
}

.header {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 80px;
  line-height: 80px;
  padding-top: 10px;
  font-size: 28px;
  color: #52ffff;
  letter-spacing: 0.2em;
  pointer-events: none;
}

.router {
  position: absolute;
  top: 28px;
  right: 10px;
  width: 540px;
  height: 90px;
  text-align: left;

  a {
    display: inline-block;
    width: 140px;
    height: 46px;
    margin-left: -15px;
    margin-bottom: 5px;
    background: url(~@/assets/router.png) center no-repeat;
    text-align: center;
    line-height: 46px;
    color: #a9ddee;
    font-size: 15px;

    &.router-link-exact-active {
      background: url(~@/assets/router-check.png) center no-repeat;
      color: #fff;
    }
  }
}
</style>
