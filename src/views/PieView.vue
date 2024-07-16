<template>
  <div>
    <div class="box1">
      <Pie1 />
    </div>

    <div class="box1">
      <Pie2 />
    </div>

    <div class="box1">
      <Pie3 />
    </div>

    <div class="box1">
      <Pie4 />
    </div>

    <div class="box1">
      <Pie5 />
    </div>

    <div class="box1">
      <Pie6 />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

// import Bar from '@/components2/web/Bar.vue';
import Pie1 from '@/components3/pie/Pie01.vue';
import Pie2 from '@/components3/pie/Pie02.vue';
import Pie3 from '@/components3/pie/Pie03.vue';
import Pie4 from '@/components3/pie/Pie04.vue';
import Pie5 from '@/components3/pie/Pie05.vue';
import Pie6 from '@/components3/pie/Pie06.vue';

export default {
  name: 'ChartBar',
  components: { Pie1, Pie2, Pie3, Pie4, Pie5, Pie6 }
};
</script>

<style lang="less"></style>
