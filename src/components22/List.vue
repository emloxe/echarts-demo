<template>
  <div class="text1">
    <Title title="积分展示" />
  </div>
</template>

<script>
import Title from '@/components3/other/Title.vue';

export default {
  name: 'List',
  components: {
    Title
  },
  props: {
    msg: String
  }
};
</script>

<style scoped lang="less">
.item {
  .icon {
    display: inline-block;
    height: 90px;
    width: 130px;
    background-image: url(~@/assets/icon1.png);
    background-repeat: no-repeat;
    background-position: center;
  }

  h6,
  p {
    padding-right: 10px;
    text-align: right;
  }

  h6 {
    margin-top: 30px;
    font-size: 14px;
    font-weight: 500;
    line-height: 22px;
    color: #fff;
  }

  p {
    font-size: 24px;
    line-height: 40px;
    color: #0ad1c9;
    font-weight: 600;
  }
}
</style>
