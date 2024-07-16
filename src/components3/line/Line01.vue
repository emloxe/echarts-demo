<template>
  <div class="">
    <v-chart class="chart" :option="option"></v-chart>
  </div>
</template>

<script>
import * as echarts from 'echarts';
import chartConf from '@/config/chart';
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
    const xData = ['2020年', '2021年', '2022年', '2023年', '2024年'];
    const yData = [20, 17, 30, 32, 29];
    this.setOption(xData, yData);
  },

  methods: {
    setOption(xData, yData) {
      this.option = {
        title: {
          left: 'left',
          text: '异常走势图',
          padding: [20, 0, 0, 30],
          textStyle: {
            color: '#55c1ff',
            fontSize: 15
          }
        },
        grid: {
          top: '25%',
          left: '5%',
          right: '8%',
          bottom: '5%',
          containLabel: true
        },
        tooltip: {
          trigger: 'axis',
          backgroundColor: 'transparent',
          axisPointer: {
            lineStyle: {
              color: {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [
                  {
                    offset: 0,
                    color: 'rgba(126,199,255,0)' // 0% 处的颜色
                  },
                  {
                    offset: 0.5,
                    color: 'rgba(126,199,255,1)' // 100% 处的颜色
                  },
                  {
                    offset: 1,
                    color: 'rgba(126,199,255,0)' // 100% 处的颜色
                  }
                ],
                global: false // 缺省为 false
              }
            }
          },
          ...chartConf.styleTooltip,
          formatter: '{b}异常报警: {c}个'
        },
        xAxis: [
          {
            type: 'category',
            boundaryGap: false,
            axisLine: {
              // 坐标轴轴线相关设置。数学上的x轴
              show: true,
              lineStyle: {
                color: '#233653'
              }
            },
            axisLabel: {
              // 坐标轴刻度标签的相关设置
              textStyle: {
                color: '#7ec7ff'
                // padding: 16,
                // fontSize: 14
              },
              formatter(data) {
                return data;
              }
            },
            splitLine: {
              show: false
            },
            axisTick: {
              show: false
            },
            data: xData
          }
        ],
        yAxis: [
          {
            minInterval: 1,
            nameTextStyle: {
              color: '#7ec7ff'
              // fontSize: 16,
              // padding: 10
            },
            min: 0,
            splitLine: {
              show: false,
              lineStyle: {
                color: '#192a44'
              }
            },
            axisLine: {
              show: true,
              lineStyle: {
                color: '#233653'
              }
            },
            axisLabel: {
              show: true,
              textStyle: {
                color: '#7ec7ff'
                // padding: 16
              },
              formatter(value) {
                if (value === 0) {
                  return value;
                }
                return value;
              }
            },
            axisTick: {
              show: false
            }
          }
        ],
        series: [
          {
            type: 'line',
            symbol: 'circle', // 默认是空心圆（中间是白色的），改成实心圆
            showAllSymbol: true,
            symbolSize: 0,
            smooth: true,
            lineStyle: {
              normal: {
                width: 3,
                color: 'rgba(10,219,250,1)' // 线条颜色
              },
              borderColor: 'rgba(0,0,0,.4)'
            },
            itemStyle: {
              color: 'rgba(10,219,250,1)',
              borderColor: '#646ace',
              borderWidth: 2
            },
            tooltip: {
              show: true
            },
            areaStyle: {
              // 区域填充样式
              normal: {
                // 线性渐变，前4个参数分别是x0,y0,x2,y2(范围0~1);相当于图形包围盒中的百分比。如果最后一个参数是‘true’，则该四个值是绝对像素位置。
                color: new echarts.graphic.LinearGradient(
                  0,
                  0,
                  0,
                  1,
                  [
                    {
                      offset: 0,
                      color: 'rgba(10,219,250,.3)'
                    },
                    {
                      offset: 1,
                      color: 'rgba(10,219,250, 0)'
                    }
                  ],
                  false
                ),
                shadowColor: 'rgba(10,219,250, 0.5)', // 阴影颜色
                shadowBlur: 20 // shadowBlur设图形阴影的模糊大小。配合shadowColor,shadowOffsetX/Y, 设置图形的阴影效果。
              }
            },
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
