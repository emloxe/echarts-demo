<template>
  <div class="title">
    {{ title }}
  </div>
</template>

<script>
export default {
  name: 'Text1',
  props: {
    title: String
  }
};
</script>

<style scoped lang="less">
.title {
  height: 40px;
  line-height: 42px;
  padding-left: 46px;

  text-align: left;
  color: #fff;
  font-size: 19px;
  background-image: url(~@/assets/tit.png);
  background-repeat: no-repeat;
  background-position: 0 center;
}
</style>
