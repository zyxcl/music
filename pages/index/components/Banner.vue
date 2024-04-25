<script setup>
  const props = defineProps(['banners'])
</script>

<template>
  <view class="swiper-wrap">
    <swiper class="swiper" indicator-dots indicator-color="rgba(255, 255, 255, .4)"	indicator-active-color="#ffffff" autoplay circular>
      <swiper-item v-for="item in banners" :key="item.targetId">
        <image :src="item.pic" mode="widthFix"></image>
      </swiper-item>
    </swiper>
  </view>
</template>


<style lang="scss" scoped>
.swiper-wrap {
  padding: 30rpx;
}
.swiper {
  border-radius: 20rpx;
  overflow: hidden;
  height: 268rpx;
  image {
    width: 100%;
  }
}
</style>