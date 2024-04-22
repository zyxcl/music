<script setup>
  import { voicelistApi } from '../../api'
  
  voicelistApi().then(res => {
    console.log(res);
  })
</script>
<template>
  <view>
    播客
  </view>
</template>


<style>

</style>
