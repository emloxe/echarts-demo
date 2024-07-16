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
  buildPath(ctx, shape) {
    const { xAxisPoint } = shape;
    const c0 = [shape.x, shape.y];
    const c1 = [shape.x - 20, shape.y - 4];
    const c2 = [xAxisPoint[0] - 20, xAxisPoint[1] - 4];
    const c3 = [xAxisPoint[0], xAxisPoint[1]];
    ctx.moveTo(c0[0], c0[1]).lineTo(c1[0], c1[1]).lineTo(c2[0], c2[1]).lineTo(c3[0], c3[1]).closePath();
  }
});
const CubeRight = echarts.graphic.extendShape({
  shape: {
    x: 0,
    y: 0
  },
  buildPath(ctx, shape) {
    const { xAxisPoint } = shape;
    const c1 = [shape.x, shape.y];
    const c2 = [xAxisPoint[0], xAxisPoint[1]];
    const c3 = [xAxisPoint[0] + 8, xAxisPoint[1] - 4];
    const c4 = [shape.x + 8, shape.y - 4];
    ctx.moveTo(c1[0], c1[1]).lineTo(c2[0], c2[1]).lineTo(c3[0], c3[1]).lineTo(c4[0], c4[1]).closePath();
  }
});
const CubeTop = echarts.graphic.extendShape({
  shape: {
    x: 0,
    y: 0
  },
  buildPath(ctx, shape) {
    // 逆时针 角 y 负数向上  X 负数向左
    const c1 = [shape.x, shape.y];
    const c2 = [shape.x + 8, shape.y - 4];
    const c3 = [shape.x - 11, shape.y - 8];
    const c4 = [shape.x - 20, shape.y - 4];
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
    const yData = [23.42, 12.3, 42.5];
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
        tooltip: {
          trigger: 'item',
          confine: false,
          position: 'top',
          textStyle: {
            fontSize: 12
          },
          backgroundColor: 'transparent',
          formatter(params) {
            const percentage = ((yData[params.dataIndex] / yMax) * 100).toFixed(2);
            return `<div class="tooltip" style="color: #fff">${yData[params.dataIndex]}万亩 ${percentage}%</div>`;
          },
          extraCssText: 'box-shadow: 0 0 20px #00C7FF inset;'
        },
        grid: {
          show: false,
          left: 0,
          right: 10,
          bottom: 15,
          top: 15,
          containLabel: true
        },
        xAxis: {
          type: 'category',
          data: xData,
          axisLine: {
            show: false
          },
          offset: 10,
          axisTick: {
            show: false
          },
          axisLabel: {
            fontSize: 13,
            color: '#ffffff'
          }
        },
        yAxis: {
          show: false,
          type: 'value',
          axisLine: {
            show: true,
            lineStyle: {
              color: 'white'
            }
          },
          splitLine: {
            show: false
          },
          axisTick: {
            show: false
          },
          axisLabel: {
            fontSize: 12
          },
          boundaryGap: ['20%', '20%']
        },
        series: [
          {
            type: 'custom',
            renderItem(params, api) {
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
                      fill: '#1e3648'
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
                      fill: '#1e3648'
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
                      fill: '#1e3648'
                    }
                  }
                ]
              };
            },
            data: yMaxData
          },
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
                          color: '#1477BD'
                        },
                        {
                          offset: 1,
                          color: '#00FFFE'
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
                          color: '#002E75' // 顶部
                        },
                        {
                          offset: 1,
                          color: '#00B0D0' // 底部
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
                      fill: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                        {
                          offset: 0,
                          color: '#33F7FB'
                        },
                        {
                          offset: 1,
                          color: '#00FFFE'
                        }
                      ])
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
                show: false,
                position: 'top',
                formatter: (e) => {
                  console.log(1, e);
                  return 1;
                },
                fontSize: 10,
                color: '#fff',
                offset: [0, -5]
              }
            },
            itemStyle: {
              color: 'transparent'
            },
            data: yMaxData
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
