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
  name: 'pie',
  components: {},

  data() {
    return {
      option: {}
    };
  },

  computed: {
    // ...mapState(['wangpersByAge'])
  },

  watch: {
    // wangpersByAge(val) {
    //   console.log('wangpersByAge');
    //   this.setOption(val);
    // }
  },

  created() {
    const data = [
      {
        name: '受理业务总量',
        pct: 100,
        num: 1234
      },
      {
        name: '办结业务总量',
        pct: 50,
        num: 5678
      },
      {
        name: '在办业务总量',
        pct: 49,
        num: 9012
      },
      {
        name: '超期业务总量',
        pct: 1,
        num: 50
      }
    ];

    this.setOption(data);
  },

  methods: {
    setOption(data) {
      var titleArr = [],
        seriesArr = [];
      var colors = [
        ['#5B8FF9', 'rgba(12, 69, 122, 0.1)'],
        ['#5AD8A6', 'rgba(12, 69, 122, 0.1)'],
        ['#44aff0', 'rgba(12, 69, 122, 0.1)'],
        ['#ff4343', 'rgba(12, 69, 122, 0.1)']
      ];
      data.forEach(function (item, index) {
        titleArr.push({
          text: item.num,
          subtext: item.name,
          left: index * 25 + 10 + '%',
          top: '70%',
          textAlign: 'center',
          textStyle: {
            fontWeight: 'normal',
            fontSize: '16',
            color: '#feb209',
            textAlign: 'center',
            fontFamily: 'Pirulen'
          },
          subtextStyle: {
            fontWeight: 'normal',
            fontSize: 14,
            color: '#56cfff',
            textAlign: 'center'
          }
        });
        seriesArr.push({
          name: item.name,
          type: 'pie',
          clockWise: false,
          radius: [40, 50],
          itemStyle: {
            normal: {
              color: colors[index][0],
              shadowColor: colors[index][0],
              shadowBlur: 0,
              label: {
                show: false
              },
              labelLine: {
                show: false
              }
            }
          },
          hoverAnimation: false,
          center: [index * 25 + 10 + '%', '50%'],
          data: [
            {
              value: item.pct,
              label: {
                normal: {
                  formatter: function (params) {
                    return params.value + '%';
                  },
                  position: 'center',
                  show: true,
                  textStyle: {
                    fontSize: 18,
                    // fontWeight: 'bold',
                    color: '#fff',
                    fontFamily: 'Pirulen'
                  }
                }
              }
            },
            {
              value: 100 - item.pct,
              name: 'invisible',
              itemStyle: {
                normal: {
                  color: colors[index][1]
                },
                emphasis: {
                  color: colors[index][1]
                }
              }
            }
          ]
        });
      });

      this.option = {
        animationDuration() {
          return chartConf.animationDuration;
        },
        // tooltip: {
        //   trigger: 'item',
        //   formatter: '{a} <br/>{b}: {c} 人 <br/> 比例: {d}%',
        //   ...chartConf.styleTooltip
        // },

        title: titleArr,
        series: seriesArr
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
