<template>
  <div class="">
    <v-chart class="chart" :option="option"></v-chart>
  </div>
</template>

<script>
import chartConf from '@/config/chart';
// import * as echarts from 'echarts';
// import { mapState } from 'vuex';

const color = [
  '#ff4343',
  '#44aff0',
  '#f69846',
  '#f6d54a',
  '#45dbf7',
  // '#f69846',
  '#4777f5',
  '#5045f6',
  '#ad46f3',
  '#f845f1'
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
            borderWidth: 1,
            shadowBlur: 2,
            borderColor: color[index],
            shadowColor: color[index],
            color: color[index]
          }
        }
      }));

      return colorData;
    },

    setOption(data) {
      this.option = {
        legend: {
          orient: 'vertical',
          x: 'left',
          y: '40',
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
            radius: ['50%', '56%'],
            center: ['55%', '50%'],
            data,
            padAngle: 5,
            label: {
              normal: {
                formatter: ['{b|{b}}', '{c|{c}个}'].join('\n'),
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
              normal: {
                borderWidth: 1,
                borderRadius: 10
              }
            },
            labelLine: {
              normal: {
                lineStyle: {
                  borderWidth: 10
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
