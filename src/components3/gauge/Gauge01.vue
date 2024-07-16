<template>
  <div class="">
    <v-chart class="chart" :option="option"></v-chart>
  </div>
</template>

<script>
import chartConf from '@/config/chart';

import * as echarts from 'echarts';

// import { mapState } from 'vuex';

const rich = {
  bule: {
    fontSize: 35,
    // fontFamily: 'Pirulen',
    color: '#fff',
    fontWeight: '700',
    padding: [-88, 0, 0, 0]
  },
  white: {
    fontSize: 16,
    color: '#fff',
    fontWeight: '500',
    padding: [-85, 0, 0, 0]
  },

  radius: {
    width: 100,
    height: 30,
    borderWidth: 1,
    borderColor: '#0092F2',
    fontSize: 14,
    color: '#fff',
    backgroundColor: '#1B215B',
    borderRadius: 6,
    textAlign: 'center',
    padding: [3, 0, 0, 0]
  },
  size: {
    height: 60,
    padding: [10, 0, 0, 0]
  }
};

export default {
  name: 'List',
  components: {},
  provide: {
    // [THEME_KEY]: 'dark',
  },

  computed: {
    // ...mapState(['taskCountByMonth'])
  },

  watch: {
    // taskCountByMonth(val) {
    //   this.setOption(val);
    // }
  },

  data() {
    return {
      option: {}
    };
  },

  created() {
    this.setOption();

    setInterval(() => {
      this.setOption(100 - Math.floor(Math.random() * 10));
    }, 5000);
  },

  methods: {
    setOption(val = 95) {
      this.option = {
        animationDuration() {
          return chartConf.animationDuration;
        },
        tooltip: {
          show: false
        },

        series: [
          {
            // 背景外圆
            type: 'pie',
            radius: '100%',
            center: ['50%', '50%'],
            z: 0,
            itemStyle: {
              normal: {
                color: new echarts.graphic.RadialGradient(
                  0.5,
                  0.5,
                  1,
                  [
                    {
                      offset: 0,
                      color: 'rgba(17,24,43,0)'
                    },
                    {
                      offset: 0.5,
                      color: 'rgba(28,42,91,.6)'
                    },
                    {
                      offset: 1,
                      color: '#141C33'
                    }
                  ],
                  false
                ),
                label: {
                  show: false
                },
                labelLine: {
                  show: false
                }
              }
            },
            hoverAnimation: false,
            label: {
              show: false
            },
            tooltip: {
              show: false
            },
            data: [100]
          },

          {
            // 背景内圆
            type: 'pie',
            radius: '50%',
            center: ['50%', '50%'],
            z: 1,
            itemStyle: {
              normal: {
                color: new echarts.graphic.RadialGradient(
                  0.5,
                  0.5,
                  0.8,
                  [
                    {
                      offset: 0,
                      color: '#4978EC'
                    },
                    {
                      offset: 0.5,
                      color: '#1E2B57'
                    },
                    {
                      offset: 1,
                      color: '#141F3D'
                    }
                  ],
                  false
                ),
                label: {
                  show: false
                },
                labelLine: {
                  show: false
                }
              }
            },
            hoverAnimation: false,
            label: {
              show: false
            },
            tooltip: {
              show: false
            },
            data: [100]
          },

          {
            // 外层绿线
            type: 'gauge',
            radius: '85%',
            startAngle: '225',
            endAngle: '-45',
            splitNumber: '100',
            pointer: {
              show: false
            },
            detail: {
              show: false
            },
            data: [
              {
                value: 1
              }
            ],
            axisLine: {
              show: true,
              lineStyle: {
                color: [[1, '#00FFFF']],
                width: 1,
                opacity: 1
              }
            },
            axisTick: {
              show: false
            },
            splitLine: {
              show: true,
              length: 20,
              lineStyle: {
                color: '#051932',
                width: 0,
                type: 'solid'
              }
            },
            axisLabel: {
              show: false
            }
          },

          {
            // 文字+动态圈
            type: 'gauge',
            radius: '78%',
            startAngle: '225',
            endAngle: '-45',
            pointer: {
              show: false
            },

            detail: {
              formatter(value) {
                const num = Math.round(value);
                return `{bule|${num}}{white|分}{size|}\n{radius|综合健康评分}`;
              },
              rich,
              offsetCenter: ['0%', '80%']
            },
            data: [
              {
                value: val,
                name: 'SCORE'
              }
            ],

            progress: {
              show: true,
              itemStyle: {
                color: {
                  type: 'linear',
                  x: 0,
                  y: 0,
                  x2: 1,
                  y2: 0,
                  colorStops: [
                    {
                      offset: 0,
                      color: '#5CF9FE' // 0% 处的颜色
                    },
                    {
                      offset: 0.17,
                      color: '#468EFD' // 100% 处的颜色
                    },
                    {
                      offset: 0.9,
                      color: '#468EFD' // 100% 处的颜色
                    },
                    {
                      offset: 1,
                      color: '#5CF9FE' // 100% 处的颜色
                    }
                  ]
                }
              }
            },
            title: {
              show: false
            },
            axisLine: {
              show: true,
              lineStyle: {
                color: [
                  [0, '#15337C'],
                  [1, '#15337C']
                ],
                width: 12,
                shadowOffsetX: 0,
                shadowOffsetY: 0,
                opacity: 1
              }
            },
            axisTick: {
              show: false
            },
            splitLine: {
              show: false,
              length: 25,
              lineStyle: {
                color: '#00377a',
                width: 2,
                type: 'solid'
              }
            },
            axisLabel: {
              show: false
            }
          },
          {
            // 内圈蓝色线
            type: 'gauge',
            z: 2,
            radius: '60%',
            startAngle: '225',
            endAngle: '-45',
            axisLine: {
              // 坐标轴线
              lineStyle: {
                // 属性lineStyle控制线条样式
                color: [[1, '#018DFF']],
                width: 1,
                opacity: 1 // 刻度背景宽度
              }
            },
            splitLine: {
              show: false
            },
            // data: [{
            //     show: false,
            //     value: '80'
            // }], //作用不清楚
            axisLabel: {
              show: false
            },
            pointer: {
              show: false
            },
            axisTick: {
              show: false
            },
            detail: {
              show: 0
            }
          },
          {
            name: '圈刻度',
            type: 'gauge',
            radius: '79%',
            startAngle: 225, // 刻度起始
            endAngle: -45, // 刻度结束
            z: 4,
            axisTick: {
              show: false
            },
            splitLine: {
              length: 6, // 刻度节点线长度
              lineStyle: {
                width: 1,
                color: 'rgba(1,244,255, 0.9)'
              } // 刻度节点线
            },
            axisLabel: {
              color: 'rgba(255,255,255,0)',
              fontSize: 12
            }, // 刻度节点文字颜色
            pointer: {
              show: false
            },
            axisLine: {
              lineStyle: {
                opacity: 0
              }
            },
            detail: {
              show: false
            },
            data: [
              {
                value: 0,
                name: ''
              }
            ]
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
  height: 190px;
  width: 200px;
  margin: auto;
}
</style>
