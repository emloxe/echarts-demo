<template>
  <div v-show="isShow" class="time">
    <span>{{ timeArr[0][0] }}</span>
    <span>{{ timeArr[0][1] }}</span>
    <b>:</b>
    <span>{{ timeArr[1][0] }}</span>
    <span>{{ timeArr[1][1] }}</span>
    <b>:</b>
    <span>{{ timeArr[2][0] }}</span>
    <span>{{ timeArr[2][1] }}</span>
    {{ time }}
  </div>
</template>

<script>
import moment from 'moment';

export default {
  mounted() {
    const time = moment().format('HH-mm-ss');
    this.timeArr = time.split('-');
    this.isShow = true;
    this.setTime();
  },
  data() {
    return {
      isShow: false,
      time: '',
      timeArr: ['00', '00', '00']
    };
  },
  methods: {
    setTime() {
      setInterval(() => {
        // this.time = moment().format('YYYY年MM月Do日 HH:mm:ss');
        const time = moment().format('HH-mm-ss');
        this.timeArr = time.split('-');
      }, 1000);
    }
  }
};
</script>

<style lang="less" scoped>
.time {
  // position: absolute;
  // top: 30px;
  // right: 20px;
  top: 120px;
  left: 460px;
  width: 360px;
  font-size: 20px;
  color: rgb(82, 192, 255);
  line-height: 40px;
  text-align: left;

  span {
    margin: 0 3px;
    width: 34px;
    height: 40px;
    line-height: 40px;
    text-align: center;
    display: inline-block;
    font-family: 'Pirulen';
    background-image: url(~@/assets/time-box.png);
    background-size: 100% 100%;
    background-repeat: no-repeat;
    vertical-align: top;
  }
}
</style>
