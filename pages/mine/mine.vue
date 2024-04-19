<script setup>
import { useUserStore } from '@/store/user'

// 引入store
const userStore = useUserStore()

</script>

<template>
  <view>
    <image :src="userStore.profile?.backgroundUrl" mode=""></image>
  </view>
</template>

<style lang="scss">

</style>
