<template>
  <div class="">
    <v-chart class="chart" :option="option"></v-chart>
  </div>
</template>

<script>
// import chartConf from '@/config/chart';
import * as echarts from 'echarts';
// import { mapState } from 'vuex';

const attackSourcesColor = [
  new echarts.graphic.LinearGradient(0, 1, 1, 1, [
    { offset: 0, color: '#ff4300' },
    { offset: 1, color: '#ff9500' }
  ]),
  new echarts.graphic.LinearGradient(0, 1, 1, 1, [
    { offset: 0, color: '#ffb400' },
    { offset: 1, color: '#ffde00' }
  ]),
  new echarts.graphic.LinearGradient(0, 1, 1, 1, [
    { offset: 0, color: '#4ef1fc' },
    { offset: 1, color: '#3a64ff' }
  ]),
  new echarts.graphic.LinearGradient(0, 1, 1, 1, [
    { offset: 0, color: '#4ef1fc' },
    { offset: 1, color: '#3a64ff' }
  ])
];

function attackSourcesDataFmt(sData) {
  const sss = [];
  sData.forEach((item, i) => {
    const itemStyle = {
      color: i > 3 ? attackSourcesColor[3] : attackSourcesColor[i]
    };
    sss.push({
      value: item,
      itemStyle
    });
  });
  return sss;
}

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
    const yData = [6, 3, 0, 0, 0];
    const yMaxData = [8, 8, 8, 8, 8];
    this.setOption(xData, yData, yMaxData);
  },

  methods: {
    setOption(xData, yData, yMaxData) {
      this.option = {
        grid: {
          top: 20,
          bottom: 0,
          left: 10,
          right: 50,
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
            inverse: true,
            axisTick: {
              show: false
            },
            axisLine: {
              show: false
            },
            axisLabel: {
              margin: 50,
              textStyle: {
                align: 'left',
                fontSize: 15,
                color: '#ddd'
              }
            },
            data: xData
          },
          {
            type: 'category',
            inverse: true,
            axisLine: {
              show: false
            },
            axisTick: {
              show: false
            },
            axisLabel: {
              margin: 30,
              formatter(value) {
                return `${value} 条`;
              },
              textStyle: {
                fontSize: 15,
                color: '#ddd'
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
                color: 'rgba(70,166,255,.2)',
                borderWidth: 0,
                borderColor: '#333'
              }
            },
            barWidth: '50%',

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
                barBorderRadius: [0, 18, 18, 0],
                borderWidth: 0,
                borderColor: '#333'
              }
            },
            label: {
              normal: {
                show: false
              }
            },
            barWidth: '50%',

            data: attackSourcesDataFmt(yData)
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
