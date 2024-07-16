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
      legend: ['计划数', '使用数'],
      data: [
        [14200, 13000, 20000, 15000, 20000],
        [10200, 3000, 10000, 12000, 12000]
      ]
    };

    this.setOption(data);
  },

  methods: {
    getSeriesData(data, legendArr) {
      var style = [
        {
          lineStyle: {
            width: 1,
            color: '#4A99FF'
            // shadowColor: '#4A99FF',
            // shadowBlur: 10,
          },
          areaStyle: {
            // 单项区域填充样式
            color: {
              type: 'linear',
              x: 0, //右
              y: 0, //下
              x2: 1, //左
              y2: 1, //上
              colorStops: [
                {
                  offset: 0,
                  color: '#4A99FF'
                },
                {
                  offset: 0.5,
                  color: 'rgba(0,0,0,0)'
                },
                {
                  offset: 1,
                  color: '#4A99FF'
                }
              ],
              globalCoord: false
            },
            opacity: 1 // 区域透明度
          }
        },
        {
          // label: {
          //   show: true,
          //   color: '#4BFFFC',
          //   fontFamily: 'Pirulen'
          // },
          lineStyle: {
            width: 1,
            color: '#4BFFFC'
            // shadowColor: '#4BFFFC',
            // shadowBlur: 10,
          },
          z: 10,
          areaStyle: {
            normal: {
              // 单项区域填充样式
              color: {
                type: 'linear',
                x: 0, //右
                y: 0, //下
                x2: 1, //左
                y2: 1, //上
                colorStops: [
                  {
                    offset: 0,
                    color: '#4BFFFC'
                  },
                  {
                    offset: 0.5,
                    color: 'rgba(0,0,0,0)'
                  },
                  {
                    offset: 1,
                    color: '#4BFFFC'
                  }
                ],
                globalCoord: false
              },
              opacity: 1 // 区域透明度
            }
          }
        }
      ];

      const val = data.map((item, i) => {
        return {
          value: item,
          name: legendArr[i],
          emphasis: {
            lineStyle: {
              width: 2
            }
          },
          ...style[i]
        };
      });
      return val;
    },

    setOption(val) {
      const seriesData = this.getSeriesData(val.data, val.legend);

      this.option = {
        animationDuration() {
          return chartConf.animationDuration;
        },
        legend: {
          orient: 'vertical',
          data: val.legend,
          bottom: 35,
          right: 40,
          itemWidth: 14, // 图例标记的图形宽度。[ default: 25 ]
          itemHeight: 14, // 图例标记的图形高度。[ default: 14 ]
          itemGap: 21, // 图例每项之间的间隔。[ default: 10 ]横向布局时为水平间隔，纵向布局时为纵向间隔。
          textStyle: {
            fontSize: 14,
            color: '#56cfff'
          }
        },
        radar: {
          indicator: val.indicator,
          splitNumber: 3,
          axisName: {
            color: '#fff',
            fontSize: 12
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
        tooltip: {
          trigger: 'item',
          axisPointer: {
            type: 'shadow'
          },
          ...chartConf.styleTooltip
          // formatter: '{a} <br /> {b}: {c}'
        },
        series: {
          type: 'radar',
          symbolSize: 0,
          // symbol: 'angle',
          data: seriesData
        }
      };
    }
  }
};
</script>

<style scoped lang="less">
.chart {
  height: 280px;
}
</style>
