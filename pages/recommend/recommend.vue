<script setup>
  import { recommendSongsApi } from '../../api'
  
  recommendSongsApi().then(res => {
    console.log(res);
  })
</script>

<template>
  <view>
    每日推荐
  </view>
</template>

<style>

</style>
