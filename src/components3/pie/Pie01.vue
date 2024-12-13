<template>
  <div class="">
    <v-chart class="chart" :option="option"></v-chart>
  </div>
</template>

<script>
import chartConf from '@/config/chart';
// import * as echarts from 'echarts';
// import { mapState } from 'vuex';

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
        value: 18,
        name: '正常'
      },
      {
        value: 1,
        name: '异常'
      }
    ];
    this.setOption(data);
  },

  methods: {
    setOption(data) {
      this.option = {
        legend: {
          orient: 'vertical',
          x: 'left',
          y: '80',
          padding: 10,
          itemGap: 20,
          textStyle: { color: '#c3cad9' }
        },

        tooltip: {
          trigger: 'item',
          formatter: '{b} : {c}个 ({d}%)',
          ...chartConf.styleTooltip
        },

        series: [
          {
            type: 'pie',
            // radius: '50%',
            radius: ['40%', '50%'],
            center: ['50%', '50%'],
            color: ['#0096ff', '#f85f5b'],
            data,
            // roseType: 'radius',

            label: {
              normal: {
                formatter: ['{b|{b}{d}%}', '{c|{c}个}'].join('\n'),
                rich: {
                  b: {
                    color: '#d9efff',
                    fontSize: 15,
                    height: 40
                  },
                  c: {
                    color: '#fff',
                    fontSize: 14,
                    fontWeight: 'bold',
                    lineHeight: 5
                  }
                }
              }
            },
            itemStyle: {
              // borderWidth: 2,
              borderRadius: 10,
              color: 'pink',
              borderColor: '#FFF',
              normal: {
                borderWidth: 1,
                borderRadius: 10,
                borderColor: 'rgba(0,0,0,0)'
              }
            },
            labelLine: {
              normal: {
                backgroundColor: 'yellow',
                borderColor: 'skyblue',
                borderWidth: 10,
                lineStyle: {
                  borderColor: 'skyblue',
                  borderWidth: 10,
                  backgroundColor: 'yellow'
                }
              }
            }
          },
          {
            type: 'pie',
            // radius: '50%',
            radius: ['10%', '20%'],
            center: ['50%', '50%'],
            color: ['#0096ff', '#f85f5b'],
            data: [
              {
                value: 18,
                name: '正常2'
              },
              {
                value: 12,
                name: '异常2'
              }
            ],
            // roseType: 'radius',

            label: {
              normal: {
                formatter: ['{b|{b}{d}%}', '{c|{c}个}'].join('\n'),
                rich: {
                  b: {
                    color: '#d9efff',
                    fontSize: 15,
                    height: 40
                  },
                  c: {
                    color: '#fff',
                    fontSize: 14,
                    fontWeight: 'bold',
                    lineHeight: 5
                  }
                }
              }
            },
            itemStyle: {
              // borderWidth: 2,
              borderRadius: 10,
              color: 'pink',
              borderColor: '#FFF',
              normal: {
                borderWidth: 1,
                borderRadius: 10,
                borderColor: 'rgba(0,0,0,0)'
              }
            },
            labelLine: {
              normal: {
                backgroundColor: 'yellow',
                borderColor: 'skyblue',
                borderWidth: 10,
                lineStyle: {
                  borderColor: 'skyblue',
                  borderWidth: 10,
                  backgroundColor: 'yellow'
                }
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
