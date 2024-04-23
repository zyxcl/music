<script setup>
  const props = defineProps({
    size: {
      type: Number,
      default: 30
    },
    type: String,
    color: {
      type: String,
      default: '#333333'
    }
  })
</script>

<template>
  <view :class="['iconfont', `icon-${type}`, 'icon']" :style="{ fontSize: `${size}px`, color }"></view>
</template>

<style lang="scss" scoped>
@import '@/static/font/iconfont.css';
.icon {
  display: inline-block;
  vertical-align: top;
}
</style>