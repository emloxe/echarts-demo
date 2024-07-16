<template>
  <div>
    <div class="box3">
      <Line1 />
    </div>
    <div class="box3">
      <Line2 />
    </div>
    <div class="box3">
      <Line3 />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

// import Bar from '@/components2/web/Bar.vue';
import Line1 from '@/components3/line/Line01.vue';
import Line2 from '@/components3/line/Line02.vue';
import Line3 from '@/components3/line/Line03.vue';

export default {
  name: 'ChartBar',
  components: { Line1, Line2, Line3 }
};
</script>

<style lang="less"></style>
