<template>
  <div>
    <div class="box-auto">
      <China01 />
    </div>

    <div class="box-auto">
      <China02 />
    </div>

    <div class="box-auto">
      <XY01 />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

// import Bar from '@/components2/web/Bar.vue';
import China01 from '@/components3/map/China01/Index.vue';
import China02 from '@/components3/map/China02/Index.vue';
import XY01 from '@/components3/map/XY01/Index.vue';

export default {
  name: 'ChartBar',
  components: {
    China01,
    China02,
    XY01
  }
};
</script>

<style lang="less"></style>
