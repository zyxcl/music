<script setup>
  import { getBanner } from '../../services/home.js'
  import { searchApi } from '../../services/search.js'
  
  // getBanner().then(res => {
  //   console.log(res);
  // })
  
  searchApi('刘德华').then(res => {
    console.log(res.data);
  })
  
  
</script>

<template>
  <view>
    
  </view>
</template>


<style lang="scss">

</style>
