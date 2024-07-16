<template>
  <div class="">
    <v-chart class="chart" :option="option"></v-chart>
  </div>
</template>

<script>
// import * as echarts from 'echarts';
import chartConf from '@/config/chart';
// import { mapState } from 'vuex';

const fontSize = 12;
const fontColor = '#999';

export default {
  name: 'bar',
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
    const xData = ['2020年', '2021年', '2022年', '2023年', '2024年'];
    const yData = [20, 17, 30, 32, 29];
    this.setOption(xData, yData);
  },

  methods: {
    setOption(xData, yData) {
      this.option = {
        title: {
          text: '每月巡检（次）',
          padding: [20, 0, 0, 30],
          textStyle: {
            color: '#fff',
            fontSize: 15,
            fontWeight: 'normal'
          }
        },
        grid: {
          top: '25%',
          left: '5%',
          right: '8%',
          bottom: '5%',
          containLabel: true
        },
        animationDuration() {
          return chartConf.animationDuration;
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          },
          ...chartConf.styleTooltip,
          formatter: '{b}: {c}个'
        },
        legend: {
          selectedMode: false,
          right: '50',
          top: '53',
          data: [
            {
              name: '123',
              textStyle: {
                fontSize: 14,
                color: fontColor
              },
              icon: 'image://../images/legend.png'
            }
          ]
        },
        xAxis: {
          type: 'category',
          triggerEvent: true,
          splitLine: {
            show: false
          },
          axisLine: {
            show: true,
            lineStyle: {
              color: 'rgba(255,255,255,.6)'
            }
          },
          axisTick: {
            show: false
          },
          axisLabel: {
            color: '#DDD',
            fontSize: 14
          },
          data: xData
        },
        yAxis: [
          {
            // name: '单位',
            nameTextStyle: {
              color: fontColor,
              fontSize
            },

            axisLine: {
              show: true,
              lineStyle: {
                color: 'rgba(255,255,255,.6)'
              }
            },
            splitLine: false,
            axisTick: {
              show: true
            },
            axisLabel: {
              color: fontColor,
              fontSize,
              fontFamily: 'Microsoft YaHei'
            }
          }
        ],

        series: [
          {
            name: '图例',
            data: yData,
            type: 'line',
            symbol: 'image://../images/a.svg',
            symbolSize: 18,
            animationDuration: 2000,
            label: {
              show: true,
              position: 'top',
              color: '#56cfff'
            },
            lineStyle: {
              normal: {
                width: 3,
                color: {
                  type: 'linear',
                  x: 0,
                  y: 0,
                  x2: 0,
                  y2: 1,
                  colorStops: [
                    {
                      offset: 0,
                      color: '#41d9ff'
                    },
                    {
                      offset: 1,
                      color: '#6376ff'
                    }
                  ],
                  global: false // 缺省为 false
                }
              }
            }
          },
          {
            type: 'pictorialBar',
            barGap: '10%',
            symbolRepeat: true,
            symbolMargin: 2,
            symbol: 'rect',
            symbolSize: 1,
            color: '#999',
            symbolClip: true,
            data: yData
          }
        ]
      };
    }
  }
};
</script>

<style scoped lang="less">
.chart {
  height: 250px;
}
</style>
