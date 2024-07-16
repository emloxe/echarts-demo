<template>
  <div v-show="isShow" class="time">
    {{ time }}
  </div>
</template>

<script>
import moment from 'moment';

export default {
  mounted() {
    this.time = moment().format('YYYY年MM月Do日 HH:mm:ss');
    this.isShow = true;
    this.setTime();
  },
  data() {
    return {
      isShow: false,
      time: ''
    };
  },
  methods: {
    setTime() {
      setInterval(() => {
        const time = moment().format('YYYY年MM月Do日 HH:mm:ss');
        this.time = time;
      }, 1000);
    }
  }
};
</script>

<style lang="less" scoped>
.time {
  position: absolute;
  // top: 30px;
  // right: 20px;
  top: 53px;
  left: 60px;
  font-size: 22px;
  color: rgb(82, 192, 255);
  text-align: left;
  // font-family: "Pirulen";
}
</style>
