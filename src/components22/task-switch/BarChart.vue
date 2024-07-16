<template>
  <div class="">
    <div class="" style="margin-top: 5px">
      <v-chart class="chart" :option="option"></v-chart>
    </div>
  </div>
</template>

<script>
import chartConf from '@/config/chart';
import { getOtherLinearColor } from '@/utils/color';
import { mapState } from 'vuex';

export default {
  name: 'List',

  data() {
    return {
      option: {}
    };
  },

  computed: {
    ...mapState(['taskCountByPlat'])
  },

  watch: {
    taskCountByPlat(val) {
      console.log('taskCountByPlat', val);
      this.setOption(val);
    }
  },

  methods: {
    setOption(val) {
      const data = [];
      val.data.forEach((item, index) => {
        data.push({
          value: item,
          itemStyle: getOtherLinearColor(index)
        });
      });

      this.option = {
        grid: {
          top: 24,
          bottom: 30,
          left: 50
        },
        animationDuration() {
          return chartConf.animationDuration;
        },
        xAxis: {
          type: 'category',
          data: val.axios,

          axisLabel: {
            color: '#eee',
            fontSize: 14
          },

          axisTick: {
            show: false
          }
        },
        yAxis: {
          type: 'value',
          minInterval: 1,
          splitLine: {
            lineStyle: {
              color: '#1c263c'
            }
          },
          axisLabel: {
            color: '#aaaaaa',
            fontSize: 12
          }
        },

        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          },
          ...chartConf.styleTooltip,
          formatter: '{a} <br /> {b}: {c}'
        },
        series: [
          {
            name: '任务平台',
            markPoint: {
              data: [
                { type: 'max', name: 'Max' },
                { type: 'min', name: 'Min' }
              ]
            },
            label: {
              show: true,
              position: 'top',
              color: '#ddd'
            },
            data,
            type: 'bar'
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
