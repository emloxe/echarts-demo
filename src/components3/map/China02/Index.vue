<template>
  <div class="">
    <v-chart class="chart" :option="option"></v-chart>
  </div>
</template>

<script>
// import chartConf from '@/config/chart';
import * as echarts from 'echarts';
import { mapState } from 'vuex';

import { chinaMap, chinaDatas, chinaGeoCoordMap } from './data';

const iconRQ =
  'image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAUCAYAAABiS3YzAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjNCRkRBMEJBQzgwRjExRUFBNUI0RTMyMThEN0UxMzFEIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjNCRkRBMEJCQzgwRjExRUFBNUI0RTMyMThEN0UxMzFEIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6M0JGREEwQjhDODBGMTFFQUE1QjRFMzIxOEQ3RTEzMUQiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6M0JGREEwQjlDODBGMTFFQUE1QjRFMzIxOEQ3RTEzMUQiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5mT42iAAABQ0lEQVR42mL8LabOQCQIBOL1xChkItJAkLp+IBajpqFWQCwPxJ7UNDQCSgdQy1BmIA6Bsl2AmJMahjoAsTiUzQPETtQwNAKN709IAwvUayZQ/hcg/o0k/x6Ig9D0+ABxKJT9HYh/oMm/BBm6GYitgTgfiBmJcLkkEK/CIXcGiGNB3v8JxIVQF31gIA/8AeIWaNK7gRymG4BYH4hPkGjgXSC2A+JaWNChR9QjqIJeIP5PhIGzgdgAiI8Tin2QbSVAvIOAgROBOA0auUQlKV4gtidgqBGp6RSUFrmIKA/ESDEUPcGfBOIUIH6Lln29iTVUCIjdkJJKExDbAPFcqJdPEMpd2AwF5TBWaFKxBeJ6qOHIqaMbmjrcsBUw2AwNh7rKAEeaBaWOMiD2BeJvQOxOyFBuaFJJwZZU0MBWaHCIo0sABBgAetA4Jx5t/ToAAAAASUVORK5CYII=';

const convertData = function (data) {
  const res = [];
  for (let i = 0; i < data.length; i++) {
    const dataItem = data[i];
    const fromCoord = [112.05, 32.04];
    const toCoord = chinaGeoCoordMap[dataItem[0].name];
    if (fromCoord && toCoord) {
      res.push([
        {
          coord: toCoord
        },
        {
          coord: fromCoord,
          value: dataItem[0].value
        }
      ]);
    }
  }
  return res;
};

export default {
  name: 'China',
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
    ...mapState(['taskCountByMonth'])
  },

  watch: {
    // taskCountByMonth(val) {
    //   this.setOption(val);
    // },
  },

  created() {
    echarts.registerMap('chinaMap', chinaMap);
    echarts.registerMap('chinaMapOutline', chinaMap);
    this.setOption();
  },

  methods: {
    setOption() {
      const series = [
        {
          map: 'chinaMap',
          type: 'map',
          zoom: 1.2,
          label: {
            normal: {
              show: false,
              textStyle: {
                color: '#fff'
              }
            },
            emphasis: {
              show: false,
              textStyle: {
                color: '#fff'
              }
            }
          },
          top: '10%',
          tooltip: {
            show: false
          },
          roam: false,
          itemStyle: {
            normal: {
              // areaColor: 'transparent',
              areaColor: {
                type: 'radial',
                x: 0.5,
                y: 0.5,
                r: 0.8,
                colorStops: [
                  {
                    offset: 0,
                    color: 'rgba(147, 235, 248, 0)' // 0% 处的颜色
                  },
                  {
                    offset: 1,
                    color: 'rgba(147, 235, 248, .02)' // 100% 处的颜色
                  }
                ],
                globalCoord: false // 缺省为 false
              },
              borderColor: 'rgba(0,255,255,.02)',
              borderWidth: 1
            },
            emphasis: {
              focus: 'self',
              areaColor: 'rgba(0,255,255,.32)'
            }
          }
        }
      ];

      [['襄阳', chinaDatas]].forEach((item) => {
        const periodValue = 4;
        series.push(
          {
            type: 'lines',
            zlevel: 2,
            effect: {
              show: true,
              period: periodValue, // 箭头指向速度，值越小速度越快
              trailLength: 0.02, // 特效尾迹长度[0,1]值越大，尾迹越长重
              symbol: 'arrow', // 箭头图标
              symbolSize: 5 // 图标大小
            },
            lineStyle: {
              normal: {
                width: 1, // 尾迹线条宽度
                opacity: 1, // 尾迹线条透明度
                curveness: 0.3, // 尾迹线条曲直度
                color: '#5aa2cf'
              }
            },
            data: convertData(item[1])
          },
          {
            type: 'scatter',
            coordinateSystem: 'geo',
            zlevel: 3,
            rippleEffect: {
              // 涟漪特效
              period: periodValue, // 动画时间，值越小速度越快
              brushType: 'stroke', // 波纹绘制方式 stroke, fill
              scale: 4 // 波纹圆环最大限制，值越大波纹越大
            },
            label: {
              normal: {
                show: true,
                position: 'right', // 显示位置
                offset: [2, 0], // 偏移设置
                formatter(params) {
                  // 圆环显示文字
                  return params.data.name;
                },
                fontSize: 13,
                color: '#F4E925'
              },
              emphasis: {
                show: true
              }
            },
            symbol: 'circle',
            symbolSize(val) {
              return 8 + val[2] * 5; // 圆环大小
            },
            itemStyle: {
              normal: {
                show: false,
                color: '#F4E925'
              }
            },
            data: item[1].map((dataItem) => ({
              name: dataItem[0].name,
              value: chinaGeoCoordMap[dataItem[0].name].concat([dataItem[0].value])
            }))
          }
        );
      });

      this.option = {
        grid: {
          right: '2%',
          left: '2%'
        },
        color: ['#34c6bb'],
        geo: {
          silent: true,
          map: 'chinaMapOutline',
          zoom: 1.2,
          top: '10%',
          label: {
            normal: {
              show: false,
              textStyle: {
                color: '#fff'
              }
            },
            emphasis: {
              textStyle: {
                color: '#fff'
              }
            }
          },
          emphasis: {
            focus: 'self'
          },

          roam: false,
          itemStyle: {
            normal: {
              areaColor: 'rgba(0,255,255,.05)',
              borderColor: '#52ffff',
              borderWidth: 1.5,
              shadowColor: '#52ffff',
              shadowOffsetX: 0,
              shadowOffsetY: 4,
              shadowBlur: 10
            },
            emphasis: {
              areaColor: 'transparent', // 悬浮背景
              textStyle: {
                color: '#fff'
              }
            }
          }
        },
        series: [
          ...series,
          {
            name: '襄阳圆圈',
            type: 'effectScatter',
            coordinateSystem: 'geo',
            data: [[112.05, 32.04]],
            symbolSize: 12,
            showEffectOn: 'render',
            rippleEffect: {
              brushType: 'stroke'
            },
            hoverAnimation: true,
            label: {
              show: false
            },
            itemStyle: {
              normal: {
                color: '#F4E925',
                shadowBlur: 10,
                shadowColor: '#05C3F9'
              }
            },
            zlevel: 2
          },
          {
            // 首都星图标
            name: '首都',
            type: 'scatter',
            coordinateSystem: 'geo',
            data: [
              {
                name: '首都',
                value: [116.4551, 40.2539, 100]
              }
            ],
            symbol: iconRQ,
            symbolSize: 15,
            label: {
              normal: {
                show: false
              },
              emphasis: {
                show: false
              }
            },
            zlevel: 2
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
  height: 650px;
}
</style>
