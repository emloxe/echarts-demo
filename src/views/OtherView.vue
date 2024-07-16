<template>
  <div>
    <div class="box1">
      <Gauge1 />
    </div>
    <div class="box1">
      <Title title="标题1" />
    </div>

    <div class="box1">
      <Sex />
    </div>

    <div class="box1">
      <Funnel />
    </div>

    <div class="box1">
      <Radar />
    </div>

    <div class="box1">
      <Radar2 />
    </div>

    <div class="box1">
      <Radar3 />
    </div>

    <div class="box1">
      <Liquidfill />
    </div>

    <div class="box1">
      <Info1 />
    </div>

    <div class="box1">
      <Time2 />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

import Gauge1 from '@/components3/gauge/Gauge01.vue';
import Title from '@/components3/other/Title.vue';
import Sex from '@/components3/other/Sex.vue';
import Funnel from '@/components3/other/Funnel.vue';
import Radar from '@/components3/other/Radar01.vue';
import Radar2 from '@/components3/other/Radar02.vue';
import Radar3 from '@/components3/other/Radar03.vue';
import Liquidfill from '@/components3/other/Liquidfill.vue';
import Info1 from '@/components3/other/Info01.vue';
import Time2 from '@/components3/other/Time2.vue';

export default {
  name: 'otherView',
  components: {
    Gauge1,
    Title,
    Sex,
    Funnel,
    Radar,
    Radar2,
    Radar3,
    Liquidfill,
    Info1,
    Time2
  }
};
</script>

<style lang="less"></style>
