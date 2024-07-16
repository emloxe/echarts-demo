<template>
  <div class="time-wrap">
    <span class="time-btn" @click="toggle">{{ showTime }}</span>
    <div v-show="isShow" class="time-content">
      <div class="left fl">
        <span :class="{ active: item === year }" @click="yearChange(item)" v-for="item in yearArr" :key="item">{{
          item
        }}</span>

        <b class="close" @click="toggle">关闭</b>
      </div>

      <div class="detail fr">
        <ul>
          <li v-for="item in monthArr" :key="item" @click="monthChange(item)">
            {{ item }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import moment from 'moment';

const monthArr = ['全年', '1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'];

export default {
  name: 'TimeChoice',
  props: {},
  mounted() {
    this.showTime = moment().format('YYYY-MM');

    const year = new Date().getFullYear();
    this.year = year;
    const arr = [];
    for (let index = 0; index < 5; index += 1) {
      arr.push(year - index);
    }
    this.yearArr = arr;
  },
  data() {
    return {
      isShow: false,

      yearArr: [],
      monthArr: JSON.parse(JSON.stringify(monthArr)).splice(0, new Date().getMonth() + 2),

      showTime: '',
      year: ''
    };
  },
  methods: {
    timeBtnClick() {
      this.showTimeContent = true;
    },
    yearChange(year) {
      this.year = year;
      if (year === new Date().getFullYear()) {
        this.monthArr = JSON.parse(JSON.stringify(monthArr)).splice(0, new Date().getMonth() + 2);
      } else {
        this.monthArr = JSON.parse(JSON.stringify(monthArr));
      }
    },
    monthChange(txt) {
      if (txt === '全年') {
        this.showTime = this.year;
      } else {
        this.showTime = `${this.year}-${txt.replace('月', '').padStart(2, 0)}`;
      }
      this.$store.commit('setTime', this.showTime);
      this.isShow = false;
    },
    toggle() {
      this.isShow = !this.isShow;
    }
  }
};
</script>

<style scoped lang="less">
.time-wrap {
  position: absolute;
  top: 135px;
  right: 460px;

  .time-btn {
    display: inline-block;
    width: 174px;
    height: 40px;
    line-height: 40px;
    margin: 0 10px;
    background-image: url(~@/assets/time-btn.png);
    background-size: 100% 100%;
    background-position: center;
    cursor: pointer;
    color: #3aa8e7;
    font-size: 18px;
    letter-spacing: 3px;
  }

  .time-content {
    position: absolute;
    right: 10px;
    box-sizing: border-box;
    width: 240px;
    height: 240px;
    border: 1px solid #2976a3;
    background: rgba(0, 0, 0, 0.6);
    cursor: pointer;
    z-index: 100;

    .left {
      width: 80px;
      padding: 10px 0;
      box-sizing: border-box;
      font-size: 0;
      height: 100%;
      background: #3aa8e71e;
      span {
        display: block;
        color: #eee;
        font-size: 16px;
        line-height: 36px;

        &.active {
          color: #3aa8e7;
        }
      }

      b {
        font-size: 14px;
        width: 30px;
        margin-top: 10px;
        line-height: 30px;
        padding: 4px 8px;
        color: #ddd;
        border: 1px solid #3aa8e77e;
        background: #3aa8e734;
      }
    }

    .detail {
      width: 158px;
      height: 238px;
      padding: 10px 0;
      box-sizing: border-box;
      overflow-y: scroll;
      li {
        height: 32px;
        line-height: 32px;
        color: #fff;
        font-size: 16px;

        &:hover {
          background-color: rgba(100, 100, 100, 0.3);
        }
      }
    }
  }
}

div::-webkit-scrollbar {
  width: 6px;
  // height:10px;
  /**/
}
div::-webkit-scrollbar-track {
  background: rgb(239, 239, 239);
  border-radius: 2px;
}
div::-webkit-scrollbar-thumb {
  background: #bfbfbf;
  border-radius: 10px;
}
div::-webkit-scrollbar-thumb:hover {
  background: #333;
}
div::-webkit-scrollbar-corner {
  background: #179a16;
}
</style>
