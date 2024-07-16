<template>
  <div class="">
    <v-chart class="chart" :option="option"></v-chart>
  </div>
</template>

<script>
import chartConf from '@/config/chart';
// import { mapState } from 'vuex';

const maxData = 2000;

export default {
  name: 'SexBarChart',
  components: {},
  props: {
    sex: String
  },

  data() {
    return {
      option: {}
    };
  },

  computed: {
    // ...mapState(['wangpersByEdu'])
  },

  mounted() {
    // this.setOption();
  },

  watch: {
    // wangpersByEdu(val) {
    //   this.setOption(val);
    // }
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

    this.setOption(data);
  },

  methods: {
    setOption(data) {
      this.option = {
        tooltip: {
          ...chartConf.styleTooltip,
          formatter: '{b}: {c}人'
        },
        animationDuration() {
          return chartConf.animationDuration;
        },
        // color: ['#03dfff', '#04a079', '#fa5698', '#f9ff20', '#a756fa'],
        xAxis: {
          max: maxData,
          splitLine: { show: false },
          offset: 10,
          axisLine: {
            show: false,
            lineStyle: {
              color: '#999'
            }
          },
          axisLabel: {
            show: false
          }
        },
        yAxis: {
          show: false,
          inverse: true
        },
        grid: {
          // top: 10,
          // left: 20,
          // right: 120,
        },
        series: [
          {
            name: 'Pyramid',
            type: 'funnel',
            width: '50%',
            height: '80%',
            left: '35%',
            top: '15%',
            sort: 'ascending',
            itemStyle: {
              borderWidth: 0
            },
            label: {
              // color: '#fff',
              position: 'left',
              formatter: '{b| {b}}    {c|{c}}',
              rich: {
                b: {
                  // color: '#fff',
                  textBorderWidth: 0
                },
                c: {
                  // color: '#56cfff',
                  fontFamily: 'Pirulen',
                  fontSize: 16,
                  textBorderWidth: 0
                }
              }
            },
            labelLine: {
              show: false
            },
            data
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
