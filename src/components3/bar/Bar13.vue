<template>
  <div class="">
    <v-chart class="chart" :option="option"></v-chart>
  </div>
</template>

<script>
import chartConf from '@/config/chart';

import moment from 'moment';

import { mapState } from 'vuex';

const category = [
  {
    name: '2024-06-21 12:53:00  巡检完成',
    value: 100
  }
]; // 类别
const total = 100; // 数据总数
const datas = [];
category.forEach((value) => {
  datas.push(value.value);
});

export default {
  name: 'BarHorizontalChart',
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
    ...mapState(['lineData'])
  },

  watch: {
    // taskCountByMonth(val) {
    //   this.setOption(val);
    // },
  },

  created() {
    const time = moment().format('YYYY年MM月Do日');

    const getCategories = () => {
      let now = new Date();
      const res = [];
      let len = 3;
      while (len--) {
        res.unshift({
          name: time + now.toLocaleTimeString().replace(/^\D*/, ''),
          value: 100
        });
        now = new Date(+now - 2000);
      }
      return res;
    };
    const categories = getCategories();

    const getData = () => {
      const res = [];
      let len = 3;
      while (len--) {
        res.push(100);
      }
      return res;
    };

    const data = getData();

    const setOptionFun = () => {
      const now = new Date();
      data.shift();
      data.push(100);
      categories.shift();
      categories.push({
        name: time + now.toLocaleTimeString().replace(/^\D*/, ''),
        value: 100
      });

      this.setOption(categories, data);
    };
    setOptionFun();

    setInterval(() => {
      setOptionFun();
    }, 5000);

    // this.setOption(category, datas);
  },

  methods: {
    setOption(categories, data) {
      this.option = {
        animationDuration() {
          return chartConf.animationDuration;
        },
        xAxis: {
          max: 100,
          splitLine: {
            show: false
          },
          axisLine: {
            show: false
          },
          axisLabel: {
            show: false
          },
          axisTick: {
            show: false
          }
        },
        grid: {
          left: 20,
          top: 20, // 设置条形图的边距
          right: 100,
          bottom: 20
        },
        yAxis: [
          {
            type: 'category',
            data,
            inverse: false,
            axisLine: {
              show: false
            },
            axisTick: {
              show: false
            },

            axisLabel: {
              show: false,
              inside: false,
              align: 'left',
              textStyle: {
                color: '#81E7ED',
                fontSize: '16'
              }
            }
          }
        ],
        series: [
          {
            // 内
            type: 'bar',
            barWidth: 18,

            legendHoverLink: false,
            silent: true,
            itemStyle: {
              normal: {
                color: {
                  type: 'linear',
                  x: 0,
                  y: 0,
                  x2: 1,
                  y2: 0,
                  colorStops: [
                    {
                      offset: 0,
                      color: '#0F4071' // 0% 处的颜色
                    },
                    {
                      offset: 1,
                      color: '#1588D1' // 100% 处的颜色
                    }
                  ]
                },
                label: {
                  normal: {
                    show: false
                  }
                }
              }
            },
            label: {
              normal: {
                show: true,
                position: [0, '-20px'],
                formatter: '{b}',
                textStyle: {
                  color: '#eee',
                  fontSize: 13
                }
              }
            },
            data: categories,
            z: 1
          },
          {
            // 分隔
            type: 'pictorialBar',
            itemStyle: {
              normal: {
                color: '#061348'
              }
            },
            symbolRepeat: 'fixed',
            symbolMargin: 6,
            symbol: 'rect',
            symbolClip: true,
            symbolSize: [1, 21],
            symbolPosition: 'start',
            symbolOffset: [1, -1],
            symbolBoundingData: this.total,
            data: categories,
            z: 2,
            animationEasing: 'elasticOut',
            label: {
              normal: {
                show: true,
                position: [392, 14],
                formatter: '巡检完成',
                textStyle: {
                  color: '#b3ccf8',
                  fontSize: 14
                }
              }
            }
          },
          {
            // 外边框
            type: 'pictorialBar',
            symbol: 'rect',
            symbolBoundingData: total,
            itemStyle: {
              normal: {
                color: 'none'
              }
            },
            data,
            z: 0,
            animationEasing: 'elasticOut',
            label: {
              normal: {
                show: false
              }
            }
          },
          {
            name: '外框',
            type: 'bar',
            barGap: '-120%', // 设置外框粗细
            data: [
              total,
              total,
              total,
              total,
              total,
              total,
              total,
              total,
              total,
              total,
              total,
              total,
              total,
              total,
              total,
              total,
              total,
              total,
              total,
              total
            ],
            barWidth: 25,
            label: {
              normal: {
                show: false
              }
            },
            itemStyle: {
              normal: {
                color: 'transparent', // 填充色
                barBorderColor: '#1C4B8E', // 边框色
                barBorderWidth: 1, // 边框宽度
                // barBorderRadius: 0, //圆角半径
                label: {
                  // 标签显示位置
                  show: false,
                  position: 'top' // insideTop 或者横向的 insideLeft
                }
              }
            },
            z: 0
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
  height: 230px;
}
</style>
