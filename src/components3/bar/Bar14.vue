<template>
  <div class="">
    <v-chart class="chart" :option="option"></v-chart>
  </div>
</template>

<script>
import chartConf from '@/config/chart';
// import * as echarts from 'echarts';
// import { mapState } from 'vuex';

const spirit1 =
  'image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAABACAYAAAB7jnWuAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo3NzU3ODAxNDk5MTIxMUVDQTJEOUY3MzlFN0FGRTExQyIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo3NzU3ODAxNTk5MTIxMUVDQTJEOUY3MzlFN0FGRTExQyI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjc3NTc4MDEyOTkxMjExRUNBMkQ5RjczOUU3QUZFMTFDIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjc3NTc4MDEzOTkxMjExRUNBMkQ5RjczOUU3QUZFMTFDIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+W5cI1gAAAjNJREFUeNpi/P//P8NAAiaGAQajDmDBJsjIyEhQo0D/fQEGtt8KYM4v1gcfChU/ENKDLb2RFQLC025XMrH/ec/EyHgejIFskBhdokBo6s0GoD/aMHwHFAPJkWoeI7ZgwRUFQpNu8wEj7TqQKYXDvGcMfxg03+WpfqJNFLAyWOKxnAEsB1FDmyj4/49BmRpqyHYAIzPDAWqoIdsB7zJUrwFjEacFIDmQGprmgvdZqo5AajUWqdVQOdrlAmQgMu223z8GBiWoL+69yVLdRE5BRLQDRGY+kPzz67c6UcUrG+vNN+kKz6niAOGptxL+MzKWAJnaJIbuVSBufJeluppsBwhNvbUOyAmkpLIBGp/9Plt1GskFEbhYpdByiGcYpgpNv51EWiJcfY1N6A3bfQKlHgnBwPDknegv5f+hWr+ICgHB9xwSVLMc7CMGGaiZxEUB499/1LOcgJlYHfDvLwMHegmHrwTEViKiq0c3k6SSkPH/v4MgTHzpRrz60UbpqANGHTDqgFEHjDoAqwM+5KqCarKzcEWMzJtJNhhVz1momcSHAOO//9nAflYjsBp1fJOlchZHP6wRjLEAkB6QXpA82CxSBihA4G2O2kkgdZKS4IX6+sAwSYRMTP9Hs+GoA0YdMLAO+PePcTQKRh0w6oBRB4w6gBaAhfhWLtO5f1jEwKU0PUIAMhj9fxZSk3gWSAyb+Lts9QZizSV5tBw8XQdq8aJN0+ESR2nFEztWPJoLRpQDAAIMAJgQ7NJYAyccAAAAAElFTkSuQmCC';

// eslint-disable-next-line max-len
const spirit2 =
  'image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAABACAYAAAB7jnWuAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo4N0MyQUI1MTk5MkIxMUVDOEI3MkRDMzc5RjBGRDI2QyIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo4N0MyQUI1Mjk5MkIxMUVDOEI3MkRDMzc5RjBGRDI2QyI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjg3QzJBQjRGOTkyQjExRUM4QjcyREMzNzlGMEZEMjZDIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjg3QzJBQjUwOTkyQjExRUM4QjcyREMzNzlGMEZEMjZDIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+MhPJygAABEdJREFUeNrsWUGLHEUUfq+qe7JZlQWDRKOyUaOHICLECLLTsrKrLIrurhB/QfAgeBU85OAhEPDiSfFiRISAgRxMQlg9pDcqCiYH0YsHwwoaUfQUTTLT0/X8qrtnp3p2e7pnepcYnBo+qru6+tVXr16996qHRYRuZlF0k8uYgOfe/PDwkWqsxRCxeklM/KC9Z6Uvi5hPmZhMBZt69KejmxOoWB4C3saAy8ScNIglRHQSeKWWBiZIl77QkugNzHF5k0eHgIvAE9tpA/cBrxY9FJIDqF4YWQNt6pT1f6qsAyuevnV3QaPcJr9uUTSwgxj5eTs18Etm7Zurn+lzVGdrEGhvwA3CnKOIWiZKarvVED9e2zDztO05HSdE0h2K7TKhZAMKl6BKMfixoveijpzTWs3atjg2oefRWgwn5A2p1GEJ3APsAe7wkjfNWiLEo72oLK4CV4DftpqAHfh949GLys6wwNtarZtUYmWvWIXALISeH1JTh1ILoLuB3+vsgrtY1Eej7nHYypdWRmUCLdz2wc7k/hp+Zp+V0S+3kIDEkgNi60JtVwcZKhJyUXUJdmMvP1ubANNCZsTlS6A4hznrR3pejpeE+XjZeLYPs1p0mnzyeR6gdRQR2H+5sQ6jaM59NtnxV1gkKJ0w+kx2vM/yqyDzOzs+dVFlCRRLLq5/+ze37eD7qhjedT/p+1UvT6BFcrRZnBM+0O5ezkFRux0/fxxxPqhsd4YCTOADYZrJHNTUDdWZx+WZgTaAQbqYz7E0cg40guqWJ0Hk8YrbEpNZAGw9iICkIFly1Per8XgSdWUCtq9vzBTqH51QjSRWKEGJDTyOLo84HT4kUU3oRVffeazhRgJM5GOHlA1iM4NdMRYNeL6v6QuSYdSfFi3cZEOrec3wotCAbeipxOCWnOhmdpr4G5AYmoB956pufAdt/OnIW+4zgQ1LcC9wsGf9dOoa6SYup0fwgdO3mSgwTKfdLQo8VkggMr3ZZ4ZzATuiOfLBE+/C5lb7DOTl4mBk8qFTjL4wyvo7/iPQsb9aORwjn7vIaUplLeZd1pHazHKHKDMxX5+CKo9lNnDFjjEoIzoTi15gFe1CIhIaUa9z3WgMD4pZvClsVozx/1Ik35f5Adsh/KeB2E08U3N8HHd1k3ckASjMZJcHo2teMu9dQqOvv3NgtTLuVDsmym3AwA1rZej2jrJoZil43bKHWlEAJLKNGuSK7deNHgLaooJ8ILBfTrooNELlfKCIqfM0EW8JAfiTQIseKi0/gNcObtkZXOjJVGZJQhLLuqMOEDbDgvnMOpLD4rZ8gWy7pJeqnozeydBfzucDjryV5oEugaQ8M/5QOSZwa34lIzbbN1KB7PESjAmMCYwJ/LcIsE3EB+OEcwS/lKXaYXbdlXGiTE6hK27HfhnhT7Ru/YHEdi/Sx1B1hbEcRsozi4PoWhw3wqE89Pi/4/89gX8FGACpv5JqZ5e62AAAAABJRU5ErkJggg==';

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
    const xData = ['男', '女'];
    const yData = [220, 120];
    const maxData = 220 + 120;
    this.setOption(xData, yData, maxData);
  },

  methods: {
    setOption(xData, yData, maxData) {
      this.option = {
        tooltip: {
          backgroundColor: '#1c4d61',
          borderColor: '#16d0fe',
          textStyle: {
            color: '#ffffff'
          },
          formatter: '{b}: {c}人'
        },
        animationDuration() {
          return chartConf.animationDuration;
        },

        grid: [
          {
            //上图grid
            height: '50%',
            left: 20,
            top: '0',
            right: 140,
            bottom: '0'
          },
          {
            //下图grid
            height: '50%',
            left: 20,
            top: '50%',
            right: 140,
            bottom: '0'
          }
        ],

        xAxis: [
          {
            gridIndex: 0,
            max: maxData,
            splitLine: { show: false },
            offset: 10,
            axisLine: {
              lineStyle: {
                color: '#999'
              }
            },
            axisLabel: {
              show: false
            }
          },
          {
            gridIndex: 1,
            max: maxData,
            splitLine: { show: false },
            offset: 10,
            axisLine: {
              lineStyle: {
                color: '#999'
              }
            },
            axisLabel: {
              show: false
            }
          }
        ],
        yAxis: [
          {
            gridIndex: 0,
            show: false,
            data: xData,
            inverse: true
          },
          {
            gridIndex: 1,
            show: false,
            data: xData,
            inverse: true
          }
        ],
        series: [
          {
            gridIndex: 0,
            type: 'pictorialBar',
            symbol: spirit1,
            symbolRepeat: 'fixed',
            symbolMargin: '5%',
            symbolClip: true,
            symbolSize: [18, 36],
            symbolBoundingData: maxData,
            data: [yData[0]],
            z: 10,
            label: {
              show: true,
              fontFamily: 'Pirulen',
              formatter(params) {
                return `${((params.value / maxData) * 100).toFixed(1)} %`;
              },
              position: 'right',
              offset: [10, 0],
              color: '#56cfff',
              fontSize: 24
            }
          },
          {
            gridIndex: 1,
            type: 'pictorialBar',
            symbol: spirit2,
            symbolRepeat: 'fixed',
            symbolMargin: '5%',
            symbolClip: true,
            symbolSize: [18, 36],
            symbolBoundingData: maxData,
            data: [yData[1]],
            z: 10,
            label: {
              show: true,
              fontFamily: 'Pirulen',
              formatter(params) {
                return `${((params.value / maxData) * 100).toFixed(1)} %`;
              },
              position: 'right',
              offset: [10, 0],
              color: '#D4237A',
              fontSize: 24
            }
          },
          {
            gridIndex: 0,
            type: 'pictorialBar',
            itemStyle: {
              opacity: 0.2
            },
            animationDuration: 0,
            symbolRepeat: 'fixed',
            symbolMargin: '5%',
            symbol: spirit1,
            symbolSize: [18, 36],
            symbolBoundingData: maxData,
            data: [maxData],
            z: 5
          },
          {
            gridIndex: 1,
            type: 'pictorialBar',
            itemStyle: {
              opacity: 0.2
            },
            animationDuration: 0,
            symbolRepeat: 'fixed',
            symbolMargin: '5%',
            symbol: spirit2,
            symbolSize: [18, 36],
            symbolBoundingData: maxData,
            data: [maxData],
            z: 5
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
