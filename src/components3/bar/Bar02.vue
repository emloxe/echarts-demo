<template>
  <div class="">
    <v-chart class="chart" :option="option"></v-chart>
  </div>
</template>

<script>
// import chartConf from '@/config/chart';
import * as echarts from 'echarts';
// import { mapState } from 'vuex';

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
    const xData = ['数据1', '数据2', '数据3', '数据4', '数据5'];
    const yData = [356, 1230, 425, 1425, 632];
    this.setOption(xData, yData);
  },

  methods: {
    setOption(xData, yData) {
      this.option = {
        grid: {
          top: '10%',
          bottom: '15%',
          right: '5%',
          left: '15%'
        },
        xAxis: {
          data: xData,
          axisTick: {
            show: false // 隐藏X轴轴线
          },
          splitLine: {
            show: true,
            lineStyle: {
              color: 'rgba(77, 128, 254, 0.1)',
              width: 2
            }
          },
          axisLine: {
            show: true,
            lineStyle: {
              color: 'rgba(77, 128, 254, 0.2)'
            }
          },
          axisLabel: {
            show: true,
            margin: 14,
            fontSize: 14,
            textStyle: {
              color: '#ffffff' // '#65D5FF' X轴文字颜色
            }
          }
        },
        yAxis: [
          {
            type: 'value',
            gridIndex: 0,
            // splitNumber: 4,
            splitLine: {
              show: true,
              lineStyle: {
                color: 'rgba(77, 128, 254, 0.1)',
                width: 2
              }
            },
            axisTick: {
              show: false
            },
            axisLine: {
              show: true,
              lineStyle: {
                color: 'rgba(77, 128, 254, 0.2)'
              }
            },
            axisLabel: {
              show: true,
              margin: 14,
              fontSize: 16,
              textStyle: {
                color: '#65D5FF'
              }
            }
          }
        ],
        series: [
          {
            type: 'bar',
            barWidth: 16,
            itemStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  {
                    offset: 0,
                    color: '#0F4071' // 0% 处的颜色
                  },
                  {
                    offset: 1,
                    color: '#1588D1' // 100% 处的颜色
                  }
                ])
              }
            },
            data: yData,
            z: 10,
            zlevel: 0
          },
          {
            // 分隔
            type: 'pictorialBar',
            itemStyle: {
              normal: {
                color: '#0F375F'
              }
            },
            symbolRepeat: 'fixed',
            symbolMargin: 6,
            symbol: 'rect',
            symbolClip: true,
            symbolSize: [18, 2],
            symbolPosition: 'start',
            symbolOffset: [1, 1],
            data: yData,
            width: 2,
            z: 0,
            zlevel: 1
          },
          {
            name: '外框',
            type: 'bar',
            barGap: '-110%', // 设置外框粗细
            data: [100, 100, 100, 100, 100, 100, 100],
            barWidth: 16,
            itemStyle: {
              normal: {
                color: 'transparent', // 填充色
                // barBorderRadius: 0, //圆角半径
                label: {
                  // 标签显示位置
                  show: false,
                  position: 'top' // insideTop 或者横向的 insideLeft
                }
              }
            },
            z: 0
          },
          {
            name: '背影',
            type: 'line',
            smooth: true, // 平滑曲线显示
            showAllSymbol: false, // 显示所有图形。
            symbolSize: 0,
            lineStyle: {
              width: 0
            },
            areaStyle: {
              color: 'rgba(0, 151, 251, 0.1)'
            },
            data: yData,
            z: 5
          }
        ],
        dataZoom: [
          {
            type: 'slider',
            show: false,
            xAxisIndex: [0],
            endValue: 4,
            startValue: 0
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
  height: 280px;
}
</style>
