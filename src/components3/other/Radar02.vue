<template>
  <div class="">
    <div class="" style="margin-top: 5px">
      <v-chart class="chart" :option="option"></v-chart>
    </div>
  </div>
</template>

<script>
import chartConf from '@/config/chart';
// import { mapState } from 'vuex';

function contains(arrays, obj) {
  var i = arrays.length;
  while (i--) {
    if (arrays[i] === obj) {
      return i;
    }
  }
  return false;
}

export default {
  name: '',
  components: {},

  computed: {
    // ...mapState(['wangpersByZzmm'])
  },

  watch: {
    // wangpersByZzmm(val) {
    //   console.log('wangpersByZzmm', val);
    //   this.setOption(val);
    // }
  },

  data() {
    return {
      option: {}
    };
  },

  created() {
    const data = {
      indicator: [
        { name: '数据1', max: 20000 },
        { name: '数据2', max: 20000 },
        { name: '数据3', max: 20000 },
        { name: '数据4', max: 20000 },
        { name: '数据5', max: 20000 }
      ],
      data: [14200, 13000, 18000, 15000, 20000]
    };

    this.setOption(data);
  },

  methods: {
    setOption(val) {
      this.option = {
        animationDuration() {
          return chartConf.animationDuration;
        },
        radar: {
          shape: 'circle',
          indicator: val.indicator,
          splitNumber: 3,
          name: {
            formatter: function (name) {
              var i = val.indicator.findIndex((element) => {
                return element.name == name;
              });
              return '{a|' + name + '}\n' + '{b|' + val.data[i] + '}';
            },
            textStyle: {
              rich: {
                a: {
                  color: '#56cfff',
                  fontSize: 13
                },
                b: {
                  color: '#feb209',
                  fontFamily: 'Pirulen'
                }
              }
            }
          },
          splitArea: {
            show: false
          },
          axisLine: {
            lineStyle: {
              color: 'rgba(99, 99, 99, .3)'
            }
          },
          splitLine: {
            lineStyle: {
              color: ['rgba(99, 99, 99, .1)', 'rgba(99, 99, 99, .2)', 'rgba(99, 99, 99, .3)'].reverse()
            }
          },
          center: ['50%', '55%']
        },
        // tooltip: {
        //   trigger: 'item',
        //   axisPointer: {
        //     type: 'shadow'
        //   },
        //   ...chartConf.styleTooltip,
        //   formatter: '{a} <br /> {b}: {c}'
        // },
        series: [
          {
            type: 'radar',
            data: [
              {
                value: val.data,
                name: '任务级别'
              }
            ],

            lineStyle: {
              width: 1,
              opacity: 0.5
            },
            symbolSize: 1,
            areaStyle: {
              color: {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [
                  {
                    color: 'rgba(0, 101, 255, .3)',
                    offset: 0
                  },
                  {
                    color: 'rgba(0, 101, 255, .7)',
                    offset: 1
                  }
                ]
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
  height: 240px;
}
</style>
