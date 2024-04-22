<script setup>
import { computed, ref } from 'vue'
import { useMusicStore } from '@/store/music.js'
import PlaylistCard from '../playlistCard.vue'
const props = defineProps(['padding'])

const musicStore = useMusicStore()
const visible = ref(false)
const goPlayer = () => {
  uni.navigateTo({
    url: '/pages/player/player'
  })
}

</script>
<template>
  <view class="player-bar-wrap">
    <view class="content">
      <slot></slot>
    </view>
    <uni-list v-if="musicStore.curSongDetail.name" :border="true">
      <uni-list-chat
        :title="musicStore.curSongDetail.name"
        :avatar="musicStore.curSongDetail.al?.picUrl"
        :note="musicStore.curSongDetail.arStr"
        clickable
        @click="goPlayer"
      >
        <view class="chat-custom-right">
          <button size="mini" @click.stop="musicStore.play()">{{ musicStore.isPlay ? '播放' : '暂停' }}</button>
          <button size="mini" @click.stop="visible = true">列表</button>
        </view>
      </uni-list-chat>
    </uni-list>
    <PlaylistCard v-model:visible="visible" />
  </view>
</template>



<style lang="scss" scoped>
.player-bar-wrap {
  width: 100%;
  height: $content-height;
  display: flex;
  flex-direction: column;
}
.content {
  flex: 1;
  overflow: auto;
}
.chat-custom-right .icon {
  width: 80rpx;
  height: 80rpx;
}

</style>