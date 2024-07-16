<template>
  <div class="">
    <v-chart class="chart" :option="option"></v-chart>
  </div>
</template>

<script>
import chartConf from '@/config/chart';
import { getBlueLinearColor } from '@/utils/color';
// import { mapState } from 'vuex';

export default {
  name: 'Bar',
  components: {},

  data() {
    return {
      option: {}
    };
  },

  computed: {
    // ...mapState(['wangpersByLabel'])
  },

  watch: {
    // wangpersByLabel(val) {
    //   console.log(val);
    //   console.log('wangpersByLabel');
    //   this.setOption(val);
    // }
  },

  created() {
    const xData = ['数据1', '数据2', '数据3'];
    const yData = [23.42, 12.3, 42.5];
    this.setOption(xData, yData);
  },

  methods: {
    setOption(xData, yData) {
      this.option = {
        color: [
          getBlueLinearColor(0),
          getBlueLinearColor(1),
          getBlueLinearColor(2),
          getBlueLinearColor(3),
          getBlueLinearColor(4),
          getBlueLinearColor(5)
        ],
        animationDuration() {
          return chartConf.animationDuration;
        },
        tooltip: {
          trigger: 'item',
          formatter: ' {b}: {c} 人',
          ...chartConf.styleTooltip
        },
        polar: {
          radius: [10, '80%']
        },
        radiusAxis: {
          // show: false,
          axisLine: {
            show: false
          },
          axisLabel: {
            show: false
          },
          splitLine: {
            lineStyle: {
              color: 'rgba(99, 99, 99, .2)'
            }
          },
          axisTick: {
            show: false
          }
        },
        angleAxis: {
          type: 'category',
          data: xData,
          startAngle: 75,
          axisLabel: {
            fontSize: 14,
            color: '#ddd'
          },
          axisTick: {
            show: false
          },
          axisLine: {
            show: false
          }
        },
        series: {
          type: 'bar',
          data: yData,
          coordinateSystem: 'polar'
          // label: {
          //   show: true,
          //   position: 'middle',
          //   formatter: '{b}: {c}',
          // },
        }
      };
    }
  }
};
</script>

<style scoped lang="less">
.chart {
  height: 220px;
}
</style>
