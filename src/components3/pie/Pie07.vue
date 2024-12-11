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
  '#44aff0',
  '#f69846',
  '#f6d54a',
  '#ff4343',
  // '#45dbf7',
  // '#f69846',
  '#4777f5',
  '#ad46f3',
  '#5045f6',
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
        value: 588,
        name: 'IT设备'
      },
      {
        value: 156,
        name: '办公用品'
      },
      {
        value: 18,
        name: 'IT通用设备'
      },
      {
        value: 14,
        name: '专用设备'
      },
      {
        value: 10,
        name: '图书档案'
      },
      {
        value: 86,
        name: '摄影摄像器材'
      }
    ];

    const colorData = this.getColorData(data);

    this.setOption(colorData);
  },

  methods: {
    getAll(array) {
      return array.reduce((accumulator, { value }) => {
        return value + accumulator;
      }, 0);
    },

    getLegend(data) {
      const obj = {};

      const total = this.getAll(data);

      data.forEach(({ value, name }) => {
        obj[name] = {
          value,
          pct: Math.floor((value / total) * 1000) / 10
        };
      });

      return obj;
    },

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
      const legendData = this.getLegend(data);

      this.option = {
        legend: {
          orient: 'vertical',
          top: 'center',
          right: 20,
          padding: 10,
          itemGap: 20,
          // icon: 'pin',
          formatter: (name) => {
            if (data.length) {
              const item = legendData[name];
              return `{name|${name}：}{value| ${item.value}} {unit|个} {rate| ${item.pct}%}`;
            }
          },
          textStyle: {
            align: 'left',
            verticalAlign: 'middle',
            rich: {
              name: {
                color: 'rgba(255,255,255,0.9)',
                fontSize: 12
              },
              value: {
                color: '#56cfff',
                fontSize: 16
              },
              unit: {
                color: '#56cfff',
                padding: [0, 2, 0, 0]
              },
              rate: {
                color: '#feb209',
                fontSize: 12,
                fontFamily: 'Pirulen'
              }
            }
          }
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
            center: ['28%', '50%'],
            data,
            padAngle: 5,
            label: {
              normal: {
                show: false
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
                show: false
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
  margin-top: -20px;
  height: 280px;
}
</style>
