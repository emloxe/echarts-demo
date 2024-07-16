<template>
  <div class="">
    <div class="" style="margin-top: 5px">
      <v-chart class="chart" :option="option"></v-chart>
    </div>
  </div>
</template>

<script>
import chartConf from '@/config/chart';
import { mapState } from 'vuex';

export default {
  name: 'List',
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
    ...mapState(['taskCountByType'])
  },

  watch: {
    taskCountByType(val) {
      console.log('taskCountByType', val);
      this.setOption(val);
    }
  },

  methods: {
    setOption(val) {
      this.option = {
        grid: {
          top: 14,
          bottom: 0,
          left: 30
        },
        animationDuration() {
          return chartConf.animationDuration;
        },
        xAxis: {
          type: 'value',

          splitLine: {
            lineStyle: {
              color: '#1c263c',
              type: 'dashed'
            }
          },
          axisLabel: {
            color: '#04C2C6',
            fontSize: 12
          },
          minInterval: 1
        },
        yAxis: {
          type: 'category',
          data: val.axios,

          axisLine: {
            lineStyle: {
              type: 'dashed',
              color: '#34465E'
            }
          },

          axisLabel: {
            color: '#eee',
            fontSize: 12,
            padding: [-20, 0, 0, -5],
            inside: true,
            align: 'left',
            height: 10,
            verticalAlign: 'top'
          },
          axisTick: {
            show: false
          }
        },

        tooltip: {
          trigger: 'axis',
          ...chartConf.styleTooltip,
          formatter: '{a} <br /> {b}: {c}'
        },
        series: [
          {
            name: '任务平台',
            label: {
              show: true,
              position: 'right',
              color: '#ddd'
            },
            data: val.data,
            type: 'bar',
            barWidth: 8,
            barCategoryGap: '50%',
            itemStyle: {
              borderRadius: 2,
              color: {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 1,
                y2: 0,
                colorStops: [
                  {
                    offset: 0,
                    color: '#0ab1ffbb'
                  },
                  {
                    offset: 1,
                    color: '#6BFFF3bb'
                  }
                ],
                global: false // 缺省为 false
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
  height: 200px;
}
</style>
