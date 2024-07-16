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
    const xData = ['数据1', '数据2', '数据3', '数据4'];
    const yData = [356, 1230, 425, 1425];
    this.setOption(xData, yData);
  },

  methods: {
    setOption(xData, yData) {
      this.option = {
        grid: {
          top: '25%',
          left: '-5%',
          bottom: '5%',
          right: '5%',
          containLabel: true
        },
        tooltip: {
          show: true
        },
        animation: false,
        xAxis: [
          {
            type: 'category',
            data: xData,
            axisTick: {
              alignWithLabel: true
            },
            nameTextStyle: {
              color: '#82b0ec'
            },
            axisLine: {
              show: false
            },
            axisLabel: {
              textStyle: {
                color: '#fff'
              },
              margin: 20
            }
          }
        ],
        yAxis: [
          {
            show: false,
            type: 'value',
            axisLabel: {
              textStyle: {
                color: '#fff'
              }
            },
            splitLine: {
              lineStyle: {
                color: '#0c2c5a'
              }
            },
            axisLine: {
              show: false
            }
          }
        ],
        series: [
          {
            name: '',
            type: 'pictorialBar',
            symbolSize: [40, 10],
            symbolOffset: [0, -6], // 上部椭圆
            symbolPosition: 'end',
            z: 12,
            // "barWidth": "0",
            label: {
              normal: {
                show: true,
                position: 'top',
                // "formatter": "{c}%"
                fontSize: 15,
                fontWeight: 'bold',
                color: '#34DCFF'
              }
            },
            color: '#2DB1EF',
            data: yData
          },
          {
            name: '',
            type: 'pictorialBar',
            symbolSize: [40, 10],
            symbolOffset: [0, 7], // 下部椭圆
            // "barWidth": "20",
            z: 12,
            color: '#2DB1EF',
            data: yData
          },
          {
            name: '',
            type: 'pictorialBar',
            symbolSize(d) {
              return d > 0 ? [50, 15] : [0, 0];
            },
            symbolOffset: [0, 12], // 下部内环
            z: 10,
            itemStyle: {
              normal: {
                color: 'transparent',
                borderColor: '#2EA9E5',
                borderType: 'solid',
                borderWidth: 1
              }
            },
            data: yData
          },
          {
            name: '',
            type: 'pictorialBar',
            symbolSize: [70, 20],
            symbolOffset: [0, 18], // 下部外环
            z: 10,
            itemStyle: {
              normal: {
                color: 'transparent',
                borderColor: '#19465D',
                borderType: 'solid',
                borderWidth: 2
              }
            },
            data: yData
          },
          {
            type: 'bar',
            // silent: true,
            barWidth: '40',
            barGap: '10%', // Make series be overlap
            barCateGoryGap: '10%',
            itemStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 0.7, [
                  {
                    offset: 0,
                    color: '#38B2E6'
                  },
                  {
                    offset: 1,
                    color: '#0B3147'
                  }
                ]),
                opacity: 0.8
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
  margin-top: 10px;
  height: 280px;
}
</style>
