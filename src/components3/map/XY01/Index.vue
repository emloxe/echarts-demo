<template>
  <div class="">
    <v-chart class="chart" :option="option"></v-chart>
  </div>
</template>

<script>
// import chartConf from '@/config/chart';
import * as echarts from 'echarts';
// import { mapState } from 'vuex';

import { xiangyangMap, convertData, img, img2 } from './data';

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
    echarts.registerMap('xiangyang', xiangyangMap);

    var data = [
      {
        name: '襄州区',
        value: 402
      },
      {
        name: '枣阳市',
        value: 4617
      },
      {
        name: '樊城区',
        value: 4215
      },
      {
        name: '宜城市',
        value: 4803
      },
      {
        name: '谷城县',
        value: 3343
      },
      {
        name: '南漳县',
        value: 4631
      },
      {
        name: '保康县',
        value: 7127
      },
      {
        name: '老河口市',
        value: 36
      },
      {
        name: '襄城区',
        value: 136
      }
    ];

    this.setOption(data);
  },

  methods: {
    setOption(data) {
      this.option = {
        geo: {
          map: 'xiangyang',
          aspectScale: 0.85, // 地图的长宽比
          layoutCenter: ['50%', '50%'], //地图位置
          layoutSize: '100%',
          // roam: true, //是否允许缩放
          itemStyle: {
            normal: {
              shadowColor: '#276fce',
              shadowOffsetX: 3,
              shadowOffsetY: 10,
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
            mapType: 'xiangyang',
            aspectScale: 0.85,
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
          },
          {
            tooltip: {
              show: false
            },
            type: 'effectScatter', // 水波纹
            coordinateSystem: 'geo',
            rippleEffect: {
              scale: 10,
              brushType: 'stroke'
            },
            showEffectOn: 'render',
            itemStyle: {
              normal: {
                color: '#00FFFF'
              }
            },
            label: {
              normal: {
                color: '#fff'
              }
            },
            symbol: 'circle',
            symbolSize: [6, 3],
            data: convertData(data),
            zlevel: 1
          },
          {
            type: 'scatter',
            coordinateSystem: 'geo',
            itemStyle: {
              color: '#00FFF6'
            },
            symbol: img,
            symbolSize: [32, 41],

            symbolOffset: [0, -20],
            z: 999,
            data: convertData(data)
          },
          {
            type: 'scatter',
            coordinateSystem: 'geo',
            label: {
              normal: {
                show: true,
                formatter: function (params) {
                  var name = params.name;
                  var value = params.value[2];
                  var text = `{fline|${value}人}\n{tline|${name}}`;
                  return text;
                },
                color: '#fff',
                align: 'center',
                rich: {
                  fline: {
                    padding: [0, 25],
                    color: '#fff',
                    fontSize: 14,
                    fontWeight: 400
                  },
                  tline: {
                    padding: [0, 27],
                    color: '#ABF8FF',
                    fontSize: 12
                  }
                }
              },
              emphasis: {
                show: true
              }
            },
            itemStyle: {
              color: '#00FFF6'
            },
            symbol: img2,
            symbolSize: [100, 50],
            symbolOffset: [0, -60],
            z: 999,
            data: convertData(data)
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
