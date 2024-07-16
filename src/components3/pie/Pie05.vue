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
  name: 'List',
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
        value: 38,
        name: '数据1'
      },
      {
        value: 25,
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
        title: {
          // text: '年龄分布',
          left: '20',
          top: '0',
          textStyle: {
            color: '#fff',
            fontSize: 15,
            fontWeight: 'normal'
          }
        },
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
          formatter: '{a} <br/>{b}: {c} 人 <br/> 比例: {d}%',
          ...chartConf.styleTooltip
        },
        series: [
          {
            name: '年龄分布',
            type: 'pie',
            roseType: 'area',
            radius: ['10%', '60%'],
            center: ['50%', '50%'],
            labelLine: {
              // show: false,
              // length: 10,
              // length2: 5,
            },
            label: {
              alignTo: 'edge',
              formatter: '{name|{b}}\n{num|{c}} 人 \n {per|{d}%}',
              minMargin: 5,
              edgeDistance: 10,
              lineHeight: 15,
              color: '#ddd',
              rich: {
                name: {
                  fontSize: 13,
                  color: '#56cfff'
                },

                num: {
                  fontSize: 13,
                  fontFamily: 'Pirulen',
                  color: '#eb5960'
                },

                per: {
                  fontSize: 10,
                  fontFamily: 'Pirulen',
                  color: '#feb209'
                }
              }
            },
            data,
            itemStyle: {
              borderRadius: 0,
              borderWidth: 1
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
  height: 280px;
}
</style>
