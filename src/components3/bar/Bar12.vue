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
    this.setOption(xData, yData1, yData2);
  },

  methods: {
    setOption(xData, yData1, yData2) {
      this.option = {
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow',
            label: {
              show: true
            }
          }
        },
        legend: {
          data: ['业务1', '业务2'],
          top: '2%',
          right: '10',
          textStyle: {
            color: 'rgba(250,250,250,0.6)',
            fontSize: 13
          }
        },
        xAxis: {
          data: xData,
          axisLine: {
            show: true, // 隐藏X轴轴线
            lineStyle: {
              color: '#00c7ff',
              width: 1
            }
          },
          axisTick: {
            show: true // 隐藏X轴刻度
          },
          axisLabel: {
            show: true,
            textStyle: {
              color: 'rgba(250,250,250,0.8)', // X轴文字颜色
              fontSize: 13
            }
          },
          splitArea: {
            show: true,
            areaStyle: {
              color: ['rgba(250,250,250,0.1)', 'rgba(250,250,250,0)']
            }
          }
        },
        yAxis: [
          {
            type: 'value',
            /* name: "亿元", */
            nameTextStyle: {
              color: '#ebf8ac',
              fontSize: 16
            },
            splitLine: {
              show: false
            },
            axisTick: {
              show: false
            },
            axisLine: {
              show: true,
              lineStyle: {
                color: '#00c7ff',
                width: 1
              }
            },
            axisLabel: {
              show: true,
              textStyle: {
                color: 'rgba(250,250,250,0.8)',
                fontSize: 13
              }
            }
          }
        ],
        series: [
          {
            name: '业务1',
            type: 'bar',
            barWidth: 15,
            itemStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  {
                    offset: 0,
                    color: 'rgba(61,126,235, 1)'
                  },
                  {
                    offset: 1,
                    color: 'rgba(61,126,235, 0)'
                  }
                ]),
                borderWidth: 2
              }
            },
            data: yData1
          },
          {
            name: '业务2',
            type: 'bar',
            barWidth: 15,
            itemStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  { offset: 0, color: 'rgba(15,197,243,1)' },
                  { offset: 1, color: 'rgba(15,197,243,0)' }
                ]),
                borderWidth: 2
              }
            },
            data: yData2
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
