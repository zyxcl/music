<script setup>
  import { useMusicStore } from '@/store/music.js'
  const musicStore = useMusicStore()
  
  const props = defineProps(['list', 'title', 'ids'])

  // 把当前所有歌曲添加到播放列表
  const playAll = async (id) => {
    const index = props.ids.indexOf(id)
    await musicStore.playAllSongs(props.ids)
    musicStore.currentIndex = index
    uni.navigateTo({
      url: `/pages/player/player`
    })
  }
</script>

<template>
  <uni-section type="line" :title="title">
    <swiper class="song-swiper">
      <swiper-item v-for="(item, index) in list" :key="index">
        <view class="song" v-for="song in item.resources" :key="song.resourceId" @click="playAll(song.resourceId)">
          <image :src="song.uiElement.image.imageUrl" mode="widthFix"></image>
          <view class="song-info">
            {{song.uiElement.mainTitle.title}}
          </view>
        </view>
      </swiper-item>
    </swiper>
  </uni-section>
</template>


<style lang="scss" scoped>
  .song-swiper {
    height: 360rpx;
  }
  .song {
    height: 120rpx;
    display: flex;
    box-sizing: border-box;
    padding: 10rpx 30rpx;
    image {
      width: 100rpx;
      height: 100rpx;
    }
    .song-info {
      flex: 1;
      padding: 0 20rpx;
    }
  }
</style>