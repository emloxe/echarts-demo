<template>
  <div class="">
    <v-chart class="chart" :option="option"></v-chart>
  </div>
</template>

<script>
import chartConf from '@/config/chart';
// import * as echarts from 'echarts';
// import { mapState } from 'vuex';

const color = ['#1890FF', '#1173CE', '#115FA8', '#0E4C86', '#0C457A'];

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
        value: 38,
        name: '数据1'
      },
      {
        value: 20,
        name: '数据2'
      },
      {
        value: 18,
        name: '数据3'
      },
      {
        value: 14,
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
          normal: {
            color: color[index]
          }
        }
      }));

      return colorData;
    },

    setOption(data) {
      this.option = {
        tooltip: {
          trigger: 'item',
          formatter: '{b} : {c}个 ({d}%)',
          ...chartConf.styleTooltip
        },

        series: [
          {
            type: 'pie',
            radius: '75%',
            center: ['50%', '50%'],
            roseType: 'radius',
            data,
            label: {
              normal: {
                formatter: ['{b|{b}}', '{c|{c}个}'].join('\n'),
                rich: {
                  b: {
                    color: '#3bd2fe',
                    fontSize: 14,
                    height: 40
                  },
                  c: {
                    color: '#fff',
                    fontSize: 14,
                    lineHeight: 5
                  }
                }
              }
            },
            labelLine: {
              normal: {
                lineStyle: {
                  borderWidth: 10
                }
              }
            },
            animationDelay: () => Math.random() * 200
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
