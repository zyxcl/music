<script setup>
  import { ref } from 'vue'
  const visibleUser = ref(false)
  const goSearch = () => {
    uni.navigateTo({
      url: '/pages/search/search'
    })
  }
</script>

<template>
  <view class="header">
    <uni-icons class="bars" color="#5e6d82" type="bars" size="30" @click="visibleUser = true"></uni-icons>
    <view class="search" @click="goSearch">
      <uni-search-bar placeholder="搜索" bgColor="#EEEEEE" readonly />
    </view>
  </view>
  <userDeawer v-model:visible="visibleUser"></userDeawer>
</template>


<style lang="scss" scoped>
  .header {
    padding: 30rpx;
    display: flex;
    width: 100%;
    box-sizing: border-box;
    align-items: center;
  }
  .search {
    flex: 1;
    border-radius: 40rpx;
    margin-left: 20rpx;
    .uni-searchbar {
      padding: 0;
    }
  }
</style>