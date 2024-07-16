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
        { name: '数据1', max: 30000 },
        { name: '数据2', max: 30000 },
        { name: '数据3', max: 30000 },
        { name: '数据4', max: 30000 },
        { name: '数据5', max: 30000 }
      ],
      data: [14200, 13000, 20000, 15000, 20000]
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
          indicator: val.indicator,
          splitNumber: 3,
          axisName: {
            color: '#56cfff',
            fontSize: 13
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
          center: ['50%', '52%']
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

            label: {
              show: true,
              color: '#feb209',
              fontFamily: 'Pirulen'
            },

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
  height: 220px;
}
</style>
