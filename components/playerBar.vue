<script setup>
import { computed, ref } from 'vue'
import { useMusicStore } from '../store/music.js'
import PlaylistCard from './playlistCard.vue'
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
  <view v-if="musicStore.curSongDetail.name" :class="['play-bar', { padding: padding }]">
    <uni-list :border="true">
      <uni-list-chat
        :title="musicStore.curSongDetail.name"
        :avatar="musicStore.curSongDetail.al?.picUrl"
        :note="musicStore.curSongDetail.arStr"
        clickable
        @click="goPlayer"
      >
        <view class="chat-custom-right">
          <image class="icon" src="../static/image/play.png" mode="widthFix" @click.stop="musicStore.play()"></image>
          <button size="mini" @click.stop="visible = true">列表</button>
        </view>
      </uni-list-chat>
    </uni-list>
  </view>
  <PlaylistCard v-model:visible="visible" />
</template>



<style lang="scss" scoped>
.play-bar {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
}
.padding {
  bottom: 100rpx;
}
.chat-custom-right .icon {
  width: 80rpx;
  height: 80rpx;
}
</style>