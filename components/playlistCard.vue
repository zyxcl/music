<script setup>
import { ref, watch, watchEffect } from 'vue'
import { useMusicStore } from '../store/music.js'

const musicStore = useMusicStore()

const props = defineProps(['visible'])
const emits = defineEmits(['update:visible'])

const popup = ref(null)

watchEffect(() => {
  if (props.visible) {
    popup.value?.open()
  } else {
    popup.value?.close()
  }
})

const change = (e) => {
  if (!e.show) {
    emits('update:visible', false)
  }
}

const formatAr = (ar) => {
  return ar.map(v => v.name).join('/')
}
</script>

<template>
  <uni-popup ref="popup" type="bottom" background-color="#fff" @change="change">
   <uni-section title="播放列表" type="line">
      <scroll-view scroll-y class="list" >
        <uni-list>
          <uni-list-item
            v-for="(item, index) in musicStore.playlist"
            :key="item.id"
            :title="item.name"
            :note="formatAr(item.ar)"
            showArrow
            :thumb="item.al.picUrl"
            thumb-size="base"
            clickable
            ellipsis="1"
            @click="musicStore.changeMusic(index)"
          >
            <template v-slot:footer>
              <view class="right-text">
                <text class="red" v-if="musicStore.curSongDetail.id === item.id">正在播放</text>
                <text v-else>播放</text>
              </view>
            </template>
          </uni-list-item>
        </uni-list>
      </scroll-view>
    </uni-section>
  </uni-popup>
</template>

<style lang="scss" scoped>
.list {
  height: 1000rpx;
}
.right-text {
  font-size: 12px;
  line-height: 80rpx;
  color: #999999;
}
.red {
  color: #c84341;
}
</style>