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
    const xData = ['数据1', '数据2', '数据3'];
    const yData = [23.42, 12.3, 42.5];
    const yMaxData = [100, 100, 100];
    this.setOption(xData, yData, yMaxData);
  },

  methods: {
    setOption(xData, yData, yMaxData) {
      this.option = {
        grid: {
          left: 10,
          bottom: 20,
          containLabel: true
        },
        tooltip: {
          show: false
        },
        xAxis: {
          show: false
        },
        yAxis: [
          {
            type: 'category',

            axisTick: {
              show: false
            },
            axisLine: {
              show: false
            },
            axisLabel: {
              margin: 45,
              textStyle: {
                align: 'left',
                // fontSize: 14,
                color: '#fff'
              }
            },
            data: xData
          },
          {
            type: 'category',

            axisLine: {
              show: false
            },
            axisTick: {
              show: false
            },
            axisLabel: {
              textStyle: {
                fontSize: 14,
                color: '#54AFEE'
              }
            },
            splitArea: {
              show: false
            },
            splitLine: {
              show: false
            },
            data: yData
          }
        ],
        series: [
          {
            type: 'bar',
            yAxisIndex: 1,
            itemStyle: {
              normal: {
                show: true,
                color: '#1e3648',
                barBorderRadius: 50,
                borderWidth: 0,
                borderColor: '#333'
              }
            },
            barWidth: '30%',

            data: yMaxData
          },
          {
            type: 'bar',

            itemStyle: {
              normal: {
                show: true,
                color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                  {
                    offset: 0,
                    color: '#6390F0'
                  },
                  {
                    offset: 1,
                    color: '#25EBE9'
                  }
                ]),
                barBorderRadius: 50,
                borderWidth: 0,
                borderColor: '#333'
              }
            },
            label: {
              normal: {
                show: false
              }
            },
            barWidth: '30%',

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
