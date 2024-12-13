<template>
  <div class="">
    <v-chart class="chart" :option="option"></v-chart>
  </div>
</template>

<script>
// import chartConf from '@/config/chart';
import * as echarts from 'echarts';
// import { mapState } from 'vuex';

const CubeLeft = echarts.graphic.extendShape({
  shape: {
    x: 0,
    y: 0
  },
  buildPath: function (ctx, shape) {
    const xAxisPoint = shape.xAxisPoint;
    const c0 = [shape.x + 8, shape.y];
    const c1 = [shape.x - 12, shape.y];
    const c2 = [xAxisPoint[0] - 12, xAxisPoint[1]];
    const c3 = [xAxisPoint[0] + 8, xAxisPoint[1]];
    ctx.moveTo(c0[0], c0[1]).lineTo(c1[0], c1[1]).lineTo(c2[0], c2[1]).lineTo(c3[0], c3[1]).closePath();
  }
});
const CubeRight = echarts.graphic.extendShape({
  shape: {
    x: 0,
    y: 0
  },
  buildPath: function (ctx, shape) {
    const xAxisPoint = shape.xAxisPoint;
    const c1 = [shape.x + 8, shape.y];
    const c2 = [xAxisPoint[0] + 8, xAxisPoint[1]];
    const c3 = [xAxisPoint[0] + 18, xAxisPoint[1] - 7];
    const c4 = [shape.x + 18, shape.y - 7];
    ctx.moveTo(c1[0], c1[1]).lineTo(c2[0], c2[1]).lineTo(c3[0], c3[1]).lineTo(c4[0], c4[1]).closePath();
  }
});
const CubeTop = echarts.graphic.extendShape({
  shape: {
    x: 0,
    y: 0
  },
  buildPath: function (ctx, shape) {
    const c1 = [shape.x + 8, shape.y];
    const c2 = [shape.x + 18, shape.y - 7];
    const c3 = [shape.x, shape.y - 7];
    const c4 = [shape.x - 12, shape.y];
    ctx.moveTo(c1[0], c1[1]).lineTo(c2[0], c2[1]).lineTo(c3[0], c3[1]).lineTo(c4[0], c4[1]).closePath();
  }
});
echarts.graphic.registerShape('CubeLeft', CubeLeft);
echarts.graphic.registerShape('CubeRight', CubeRight);
echarts.graphic.registerShape('CubeTop', CubeTop);

export default {
  name: 'bar',
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
    const xData = ['数据1', '数据2', '数据3'];
    const yData = [23, 12, 42];
    this.setOption(xData, yData);
  },

  methods: {
    setOption(xData, yData) {
      const yMax = yData.reduce((accumulator, currentValue) => {
        if (accumulator < currentValue) {
          return currentValue;
        }
        return accumulator;
      }, 0);
      const yMaxData = Array(yData.length).fill(yMax);

      this.option = {
        grid: {
          containLabel: true,
          left: 20,
          right: 20,
          bottom: 10,
          top: 40
        },
        xAxis: {
          axisLabel: {
            margin: 15,
            color: '#04bbff',
            fontSize: 14,
            interval: 0,
            formatter: '{value} 月'
          },
          axisTick: {
            alignWithLabel: true,
            lineStyle: {
              color: '#e0e1e6'
            },
            show: true
          },
          splitLine: {
            show: false
          },
          axisLine: {
            lineStyle: {
              color: '#06a6e6',
              width: 1
              // type: 'dashed'
            },
            show: true
          },
          data: xData,
          type: 'category'
        },
        yAxis: {
          axisLabel: {
            margin: 15,
            color: '#04bbff',
            fontSize: 14
          },
          axisTick: {
            lineStyle: {
              color: '#e0e1e6',
              width: 1
            },
            show: true
          },
          splitLine: {
            show: true,
            lineStyle: {
              color: '#333f60'
              // type: 'dashed'
            }
          },
          axisLine: {
            lineStyle: {
              color: '#06a6e6',
              width: 1
              // type: 'dashed'
            },
            show: true
          },
          name: ''
        },
        series: [
          {
            type: 'custom',
            renderItem: (params, api) => {
              const location = api.coord([api.value(0), api.value(1)]);
              return {
                type: 'group',
                children: [
                  {
                    type: 'CubeLeft',
                    shape: {
                      api,
                      xValue: api.value(0),
                      yValue: api.value(1),
                      x: location[0],
                      y: location[1],
                      xAxisPoint: api.coord([api.value(0), 0])
                    },
                    style: {
                      fill: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                        {
                          offset: 0,
                          color: '#28d5e2'
                        },
                        {
                          offset: 1,
                          color: '#1982e0'
                        }
                      ])
                    }
                  },
                  {
                    type: 'CubeRight',
                    shape: {
                      api,
                      xValue: api.value(0),
                      yValue: api.value(1),
                      x: location[0],
                      y: location[1],
                      xAxisPoint: api.coord([api.value(0), 0])
                    },
                    style: {
                      fill: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                        {
                          offset: 0,
                          color: '#28d5e2'
                        },
                        {
                          offset: 1,
                          color: '#1982e0'
                        }
                      ])
                    }
                  },
                  {
                    type: 'CubeTop',
                    shape: {
                      api,
                      xValue: api.value(0),
                      yValue: api.value(1),
                      x: location[0],
                      y: location[1],
                      xAxisPoint: api.coord([api.value(0), 0])
                    },
                    style: {
                      fill: '#ad81ff'
                    }
                  }
                ]
              };
            },
            data: yData
          },
          {
            type: 'bar',
            label: {
              normal: {
                show: true,
                position: 'top',
                fontSize: 16,
                color: '#fff',
                offset: [4, -10]
              }
            },
            itemStyle: {
              color: 'transparent'
            },
            data: yData
          }
        ],
        tooltip: {
          trigger: 'axis',
          show: false
        }
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
