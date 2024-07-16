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
    const yData1 = [220, 120, 240, 266, 210, 246];
    const yData2 = [130, 150, 220, 245, 136, 256];
    const yData3 = [350, 270, 460, 511, 346, 502, 50];
    this.setOption(xData, yData1, yData2, yData3);
  },

  methods: {
    setOption(xData, yData1, yData2, yData3) {
      this.option = {
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          }
        },
        legend: {
          data: ['FT101', 'FT102', '总和'],
          left: 'center',
          align: 'left',
          top: '2%',
          textStyle: {
            color: '#fff'
          },
          itemWidth: 10,
          itemHeight: 10,
          itemGap: 35
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: [
          {
            type: 'category',
            data: xData,
            axisLine: {
              show: true,
              lineStyle: {
                color: '#00c7ff',
                width: 1,
                type: 'solid'
              }
            },
            axisTick: {
              lineStyle: {
                color: '#00c7ff'
              },
              show: true
            },

            axisLabel: {
              show: true,
              textStyle: {
                color: '#00c7ff'
              }
            }
          }
        ],
        yAxis: [
          {
            type: 'value',
            name: '万m³',
            axisLabel: {
              formatter: '{value} m³'
            },
            axisTick: {
              show: false
            },
            axisLine: {
              show: true,
              lineStyle: {
                color: '#00c7ff',
                width: 1,
                type: 'solid'
              }
            },
            splitLine: {
              show: true,
              lineStyle: {
                color: '#384267',
                type: 'dashed'
              }
            }
          }
        ],
        series: [
          {
            name: 'FT101',
            type: 'bar',
            data: yData1,
            barWidth: 12, // 柱子宽度
            barGap: 0.5, // 柱子之间间距
            itemStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  {
                    offset: 0,
                    color: '#00C7E1'
                  },
                  {
                    offset: 1,
                    color: '#005193'
                  }
                ]),
                opacity: 1,
                barBorderRadius: 12
              }
            }
          },
          {
            name: 'FT102',
            type: 'bar',
            data: yData2,
            barWidth: 12,
            // barGap: 1,
            itemStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  {
                    offset: 0,
                    color: '#00da9c'
                  },
                  {
                    offset: 1,
                    color: '#007a55'
                  }
                ]),
                opacity: 1,
                barBorderRadius: 12
              }
            }
          },
          {
            name: '总和',
            type: 'bar',
            data: yData3,
            barWidth: 12,
            // barGap: 1,
            itemStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  {
                    offset: 0,
                    color: '#7CB8F8'
                  },
                  {
                    offset: 1,
                    color: '#051B8F'
                  }
                ]),
                opacity: 1,
                barBorderRadius: 12
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
  height: 280px;
}
</style>
