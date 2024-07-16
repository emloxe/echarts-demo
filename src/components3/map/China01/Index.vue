<template>
  <div class="">
    <v-chart class="chart" :option="option"></v-chart>
  </div>
</template>

<script>
// import chartConf from '@/config/chart';
import * as echarts from 'echarts';
// import { mapState } from 'vuex';

import { chinaMap } from './data';

export default {
  name: 'map',
  components: {},
  provide: {
    // [THEME_KEY]: 'dark',
  },

  data() {
    return {
      option: {}
    };
  },

  computed: {
    // ...mapState(['taskCountByMonth'])
  },

  watch: {
    // taskCountByMonth(val) {
    //   this.setOption(val);
    // },
  },

  created() {
    echarts.registerMap('china', chinaMap);
    this.setOption();
  },

  methods: {
    setOption() {
      this.option = {
        geo: {
          map: 'china',
          // aspectScale: 0.85, // 地图的长宽比
          layoutCenter: ['50%', '50%'], //地图位置
          layoutSize: '100%',
          // roam: true, //是否允许缩放
          emphasis: {
            disabled: false
          },
          itemStyle: {
            normal: {
              shadowColor: '#276fce',
              shadowOffsetX: 3,
              shadowOffsetY: 5,
              opacity: 0.5
            },
            emphasis: {
              areaColor: '#276fce',
              label: {
                show: false //是否在高亮状态下显示标签
              }
            }
          }
        },

        series: [
          // 常规地图
          {
            type: 'map',
            mapType: 'china',
            // aspectScale: 0.85,
            layoutCenter: ['50%', '50%'], //地图位置
            layoutSize: '100%',
            zoom: 1, //当前视角的缩放比例
            // roam: true, //是否开启平游或缩放
            scaleLimit: {
              //滚轮缩放的极限控制
              min: 1,
              max: 2
            },
            itemStyle: {
              normal: {
                areaColor: '#0c274b',
                borderColor: '#1cccff',
                borderWidth: 1.5
              },
              emphasis: {
                areaColor: '#02102b',
                label: {
                  color: '#fff'
                }
              }
            }
          }
        ]
      };
    }
  }
};
</script>

<style scoped lang="less">
.chart {
  margin-top: 10px;
  height: 650px;
}
</style>
