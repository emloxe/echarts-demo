<template>
  <div class="">
    <v-chart class="chart" :option="option"></v-chart>
  </div>
</template>

<script>
import chartConf from '@/config/chart';
// import { mapState } from 'vuex';

export default {
  name: 'List',
  components: {},
  provide: {
    // [THEME_KEY]: 'dark',
  },
  computed: {
    // ...mapState(['opinion'])
  },
  data() {
    return {
      option: {}
    };
  },

  watch: {
    // opinion(val) {
    //   this.setOption(val);
    // }
  },

  created() {
    const data = {
      num1: 10,
      num2: 5,
      num3: 0
    };

    this.setOption(data);
  },

  methods: {
    setOption(data) {
      this.option = {
        animationDuration() {
          return chartConf.animationDuration;
        },
        series: [
          {
            type: 'liquidFill',
            name: '上报舆情',
            center: ['20%', '50%'],
            radius: '70%',
            outline: {
              borderDistance: 2,
              itemStyle: {
                color: 'none',
                borderColor: '#0289e8',
                borderWidth: 2
              }
            },

            backgroundStyle: {
              color: 'transparent'
            },

            label: {
              fontSize: 15,
              fontFamily: 'Pirulen',
              color: '#fff',
              formatter(param) {
                return `${param.seriesName}\n${data.num1}个`;
              }
            },
            itemStyle: {
              opacity: 0.95,
              color: {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [
                  {
                    offset: 0,
                    color: '#00befa'
                  },
                  {
                    offset: 1,
                    color: '#0078ef'
                  }
                ]
              }
            },

            data: [0.75]
          },
          {
            type: 'liquidFill',
            name: '待审核',
            center: ['50%', '50%'],
            radius: '70%',
            outline: {
              borderDistance: 2,
              itemStyle: {
                color: 'none',
                borderColor: '#955dec',
                borderWidth: 2
              }
            },

            backgroundStyle: {
              color: 'transparent'
            },

            label: {
              fontSize: 15,
              fontFamily: 'Pirulen',
              color: '#fff',
              formatter(param) {
                return `${param.seriesName}\n${data.num2}个`;
              }
            },
            itemStyle: {
              opacity: 0.95,
              color: {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [
                  {
                    offset: 0,
                    color: '#c49df9'
                  },
                  {
                    offset: 1,
                    color: '#834bdb'
                  }
                ]
              }
            },

            data: [0.3]
          },
          {
            type: 'liquidFill',
            name: '有效数',
            center: ['80%', '50%'],
            radius: '70%',
            outline: {
              borderDistance: 2,
              itemStyle: {
                color: 'none',
                borderColor: '#40B27D',
                borderWidth: 2
              }
            },

            backgroundStyle: {
              color: 'transparent'
            },

            label: {
              fontSize: 15,
              color: '#fff',
              fontFamily: 'Pirulen',
              formatter(param) {
                return `${param.seriesName}\n${data.num3}个`;
              }
            },
            itemStyle: {
              opacity: 0.95,
              color: {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [
                  {
                    offset: 0,
                    color: '#05ff8b'
                  },
                  {
                    offset: 1,
                    color: '#40B27D'
                  }
                ]
              }
            },

            data: [0.65]
          }
        ]
      };
    }
  }
};
</script>

<style scoped lang="less">
.chart {
  height: 120px;
}
</style>
