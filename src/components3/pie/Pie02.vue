<template>
  <div class="">
    <v-chart class="chart" :option="option"></v-chart>
  </div>
</template>

<script>
import chartConf from '@/config/chart';
// import * as echarts from 'echarts';
// import { mapState } from 'vuex';

const colorArr = ['#218de0', '#01cbb3', '#85e647', '#5d5cda', '#05c5b0', '#c29927'];
const colorAlpha = [
  'rgba(60,170,211,0.05)',
  'rgba(1,203,179,0.05)',
  'rgba(133,230,71,0.05)',
  'rgba(93,92,218,0.05)',
  'rgba(5,197,176,0.05)',
  'rgba(194,153,39,0.05)'
];

export default {
  name: 'pie',
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
    const data = [
      {
        value: 48,
        name: '数据1'
      },
      {
        value: 40,
        name: '数据2'
      },
      {
        value: 38,
        name: '数据3'
      },
      {
        value: 24,
        name: '数据4'
      },
      {
        value: 10,
        name: '数据5'
      }
    ];

    const colorData = this.getColorData(data);

    this.setOption(colorData);
  },

  methods: {
    getColorData(data) {
      const colorData = data.map((element, index) => ({
        value: element.value,
        name: element.name,
        itemStyle: {
          borderColor: colorArr[index],
          borderWidth: 2,
          shadowBlur: 20,
          shadowColor: '#41a8f8',
          shadowOffsetx: 25,
          shadowOffsety: 20,
          color: colorAlpha[index]
        }
      }));

      return colorData;
    },
    setOption(data) {
      this.option = {
        tooltip: {
          trigger: 'item',
          formatter: '{b} : {c} ({d}%)',
          ...chartConf.styleTooltip
        },

        legend: {
          show: false
        },

        polar: {},
        angleAxis: {
          interval: 1,
          type: 'category',
          data: [],
          z: 10,
          axisLine: {
            show: false,
            lineStyle: {
              color: '#0B4A6B',
              width: 1,
              type: 'solid'
            }
          },
          axisLabel: {
            interval: 0,
            show: true,
            color: '#0B4A6B',
            margin: 8,
            fontSize: 16
          }
        },
        radiusAxis: {
          min: 20,
          max: 120,
          interval: 20,
          axisLine: {
            show: false,
            lineStyle: {
              color: '#0B3E5E',
              width: 1,
              type: 'solid'
            }
          },
          axisLabel: {
            formatter: '{value} %',
            show: false,
            padding: [0, 0, 20, 0],
            color: '#0B3E5E',
            fontSize: 16
          },
          splitLine: {
            lineStyle: {
              color: '#07385e',
              width: 1,
              type: 'dashed'
            }
          }
        },
        calculable: true,
        series: [
          {
            stack: 'a',
            type: 'pie',
            radius: '80%',
            roseType: 'radius',
            zlevel: 10,
            startAngle: 90,
            label: {
              normal: {
                formatter: ['{b|{b}}', '{d|{d}%}'].join('\n'),
                rich: {
                  b: {
                    color: '#3bd2fe',
                    fontSize: 14,
                    lineHeight: 20
                  },
                  d: {
                    color: '#d0fffc',
                    fontSize: 14,
                    height: 20
                  }
                }
              }
            },
            labelLine: {
              normal: {
                show: true,
                length: 10,
                length2: 45,
                lineStyle: {
                  color: '#0096b1'
                }
              }
            },
            data
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
