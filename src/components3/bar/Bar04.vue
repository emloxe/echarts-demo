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
        legend: {
          show: false
        },
        grid: {
          left: '3%',
          right: '10%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: [
          {
            splitLine: {
              show: false
            },
            type: 'value',
            show: false
          }
        ],
        yAxis: [
          {
            splitLine: {
              show: false
            },
            axisLine: {
              // y轴
              show: false
            },
            type: 'category',
            axisTick: {
              show: false
            },
            data: xData,
            axisLabel: {
              color: '#fff'
            }
          }
        ],
        series: [
          {
            name: '标准化',
            type: 'bar',
            barWidth: 16, // 柱子宽度
            label: {
              show: true,
              position: 'right', // 位置
              color: '#00FFFF',
              fontSize: 14,
              fontWeight: 'bold', // 加粗
              distance: 5 // 距离
            }, // 柱子上方的数值
            itemStyle: {
              barBorderRadius: [0, 8, 8, 0], // 圆角（左上、右上、右下、左下）
              color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                {
                  offset: 0,
                  color: '#0F4071' // 0% 处的颜色
                },
                {
                  offset: 1,
                  color: '#1588D1' // 100% 处的颜色
                }
              ])
              // 渐变
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
