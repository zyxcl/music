<script setup>
import { ref } from 'vue'
import { useUserStore } from '@/store/user'
// 引入store
const userStore = useUserStore()


</script>

<template>
  <playerBar>
    <view class="header" :style="{ backgroundImage: `url(${userStore.profile?.backgroundUrl})` }">
      <image class="avatar" :src="userStore.profile?.avatarUrl" mode="aspectFill"></image>
      <view class="nickname">
        {{userStore.profile?.nickname}}
      </view>
      <view class="desc">
        <view class="desc-tag">
          <text class="bold">{{userStore.profile?.followeds}}</text>关注
        </view>
        <view class="desc-tag">
          <text class="bold">{{userStore.profile?.follows}}</text>粉丝
        </view>
        <view class="desc-tag">
          <text class="bold">Lv.{{userStore.profile?.level}}</text>等级
        </view>
        <view class="desc-tag">
          <text class="bold">{{userStore.profile?.listenSongs}}首</text>听歌
        </view>
      </view>
    </view>
  </playerBar>
</template>

<style lang="scss">
  .header {
    height: 450rpx;
    overflow: hidden;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
  }
  .avatar {
    width: 150rpx;
    height: 150rpx;
    border-radius: 50%;
    border: 1px solid #ffffff;
    margin: 100rpx auto 20rpx;
    display: block;
  }
  .nickname {
    text-align: center;
    color: #ffffff;
    font-weight: bold;
  }
  .desc {
    display: flex;
    justify-content: center;
    color: #cfc4c4;
    font-size: 14px;
    padding: 20rpx 0;
  }
  .desc-tag {
    margin: 0 20rpx;
  }
  .bold {
    font-weight: bold;
    margin-right: 10rpx;
    color: #ffffff;
  }
</style>
