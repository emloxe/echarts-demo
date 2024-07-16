<template>
  <div class="">
    <v-chart class="chart" :option="option"></v-chart>
  </div>
</template>

<script>
// import chartConf from '@/config/chart';
// import * as echarts from 'echarts';
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
    const xData = ['数据1', '数据2', '数据3'];
    const yData = [23.42, 12.3, 42.5];
    this.setOption(xData, yData);
  },

  methods: {
    setOption(xData, yData) {
      const yMax = yData.reduce((accumulator, currentValue) => {
        if (accumulator < currentValue) {
          return currentValue;
        }
        return accumulator;
      }, 0);
      const yMaxData = Array(yData.length).fill(yMax);

      this.option = {
        color: [
          '#63caff',
          '#49beff',
          '#03387a',
          '#03387a',
          '#03387a',
          '#6c93ee',
          '#a9abff',
          '#f7a23f',
          '#27bae7',
          '#ff6d9d',
          '#cb79ff',
          '#f95b5a',
          '#ccaf27',
          '#38b99c',
          '#93d0ff',
          '#bd74e0',
          '#fd77da',
          '#dea700'
        ],
        grid: {
          containLabel: true,
          left: 20,
          right: 20,
          bottom: 10,
          top: 40
        },
        xAxis: {
          axisLabel: {
            color: '#c0c3cd',
            fontSize: 14,
            interval: 0
          },
          axisTick: {
            lineStyle: {
              color: '#384267'
            },
            show: true
          },
          splitLine: {
            show: false
          },
          axisLine: {
            lineStyle: {
              color: '#384267',
              width: 1
              // type: 'dashed'
            },
            show: true
          },
          data: xData,
          type: 'category'
        },
        yAxis: {
          axisLabel: {
            color: '#c0c3cd',
            fontSize: 14
          },
          axisTick: {
            lineStyle: {
              color: '#384267',
              width: 1
            },
            show: true
          },
          splitLine: {
            show: true,
            lineStyle: {
              color: '#384267',
              type: 'dashed'
            }
          },
          axisLine: {
            lineStyle: {
              color: '#384267',
              width: 1
              // type: 'dashed'
            },
            show: true
          },
          name: ''
        },
        series: [
          {
            data: yData,
            type: 'bar',
            barMaxWidth: 'auto',
            barWidth: 30,
            itemStyle: {
              color: {
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                type: 'linear',
                global: false,
                colorStops: [
                  {
                    offset: 0,
                    color: '#0b9eff'
                  },
                  {
                    offset: 1,
                    color: '#63caff'
                  }
                ]
              }
            },
            label: {
              show: true,
              position: 'top',
              distance: 10,
              color: '#fff'
            }
          },
          {
            data: [1, 1, 1, 1, 1, 1, 1, 1],
            type: 'pictorialBar',
            barMaxWidth: '20',
            symbol: 'diamond',
            symbolOffset: [0, '50%'],
            symbolSize: [30, 15]
          },
          {
            data: yData,
            type: 'pictorialBar',
            barMaxWidth: '20',
            symbolPosition: 'end',
            symbol: 'diamond',
            symbolOffset: [0, '-50%'],
            symbolSize: [30, 12],
            zlevel: 2
          },
          {
            data: yMaxData,
            type: 'bar',
            barMaxWidth: 'auto',
            barWidth: 30,
            barGap: '-100%',
            zlevel: -1
          },
          {
            data: [1, 1, 1, 1, 1, 1, 1, 1],
            type: 'pictorialBar',
            barMaxWidth: '20',
            symbol: 'diamond',
            symbolOffset: [0, '50%'],
            symbolSize: [30, 15],
            zlevel: -2
          },
          {
            data: yMaxData,
            type: 'pictorialBar',
            barMaxWidth: '20',
            symbolPosition: 'end',
            symbol: 'diamond',
            symbolOffset: [0, '-50%'],
            symbolSize: [30, 12],
            zlevel: -1
          }
        ],
        tooltip: {
          trigger: 'axis',
          show: false
        }
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
