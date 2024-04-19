<script setup>
import { songDetailApi, lyricApi, songUrlApi } from '@/api'
import { onLoad } from '@dcloudio/uni-app'
import { ref, computed, watch, watchEffect } from 'vue'
import { useMusicStore } from '../../store/music.js'
import PlaylistCard from '@/components/playlistCard.vue'
import Comment from '@/components/comment.vue'

// 获取sotre对象
const musicStore = useMusicStore()
// 展示播放列表组件
const showCard = ref(false)
// 展示评论
const showComment = ref(false)
// 歌词
const songLyric = ref([])
// 是否展示歌词
const showLyric = ref(false)
// 歌词高亮位置
const lyricActiveIndex = ref(0)

// 监听播放位置改变
watch(() => musicStore.currentTime, () => {
  songLyric.value.forEach((item, index) => {
    if (musicStore.currentTime >= item[0] && musicStore.currentTime < songLyric.value[index + 1][0]) {
      lyricActiveIndex.value = index
    }
  })
})

// 获取歌词
const getLyric = async () => {
  const res = await lyricApi(musicStore.curSongDetail.id)
  const lyric = res.lrc.lyric.split(/\n/).map(item => {
    let [time, text] = item.split(']')
    let [m, s] = time.slice(1).split(':')
    time = m * 60 + s * 1
    return [time, text]
  })
  songLyric.value = lyric
}
// 监听歌曲详情改变，调用歌词
watch(
  () => musicStore.curSongDetail,
  () => {
    if (musicStore.curSongDetail.id) {
      // 获取最新歌词
      getLyric()
      // 改标题
      uni.setNavigationBarTitle({
        title: musicStore.curSongDetail.name + ' - ' +  musicStore.curSongDetail.ar?.map(v => v.name).join('/')
      })
    }
  },
  {
    immediate: true
  }
)


// 播放按钮图片
const playBtnSrc = computed(() => {
  return musicStore.isPlay ? '../../static/icon/zanting.png' : '../../static/icon/bofang.png'
})

// 格式化播放时间
const addZero = n => n >= 10 ? n : '0' + n
const formatTime = (time) => {
  const m = Math.floor(time / 60)
  const s = addZero(parseInt(time % 60))
  return `${m}:${s}`
}
</script>

<template>
  <view class="bg">
    <view class="blur-image" :style="{ backgroundImage: `url(${musicStore.curSongDetail.al?.picUrl})` }"></view>
  </view>
  <view class="player-wrap">
    <div class="center" @click="showLyric = !showLyric">
      <scroll-view scroll-y :scroll-top="lyricActiveIndex * 30" class="lyric" v-if="showLyric">
        <view
          v-for="(item, index) in songLyric"
          :key="index"
          :class="['lyric-row', { active: lyricActiveIndex === index }]"
        >
          {{item[1]}}
        </view>
      </scroll-view>
      <view class="song-disc" v-else>
        <image class="needle-ab" src="../../static/image/needle-ab.png" mode="widthFix"></image>
        <view class="song-circle">
          <image class="circle-bg" src="../../static/image/disc.png" mode="widthFix"></image>
          <image :src="musicStore.curSongDetail.al?.picUrl" mode="widthFix"></image>
        </view>
      </view>
    </div>
    <view class="control">
      <view class="icons-bar">
        <uni-icons type="heart" size="40" color="#ffffff"></uni-icons>
        <uni-icons type="chat" size="40" color="#ffffff" @click="showComment = true"></uni-icons>
      </view>
      <view class="progress">
        <view class="time">
          {{formatTime(musicStore.currentTime)}}
        </view>
        <slider
          :value="musicStore.currentTime / musicStore.duration * 100"
          @change="e => musicStore.changeCurrent(e.detail.value)"
          activeColor="#10AEFF"
          backgroundColor="#ffffff"
          block-color="#ffffff"
          block-size="10"
        />
        <view class="time">
          {{formatTime(musicStore.duration)}}
        </view>
      </view>
      <view class="play-bar">
        <image class="icon" v-if="musicStore.isRandom" src="../../static/icon/suiji.png" mode="widthFix" @click="musicStore.isRandom = false"></image>
        <uni-icons class="icon" v-else type="loop" color="#ffffff" @click="musicStore.isRandom = true"></uni-icons>
        <uni-icons class="icon" type="arrow-left" color="#ffffff" @click="musicStore.changeMusic(musicStore.currentIndex - 1)"></uni-icons>
        <image class="icon" :src="playBtnSrc" mode="widthFix" @click="musicStore.play()"></image>
        <uni-icons class="icon" type="arrow-right" color="#ffffff" @click="musicStore.changeMusic(musicStore.currentIndex + 1)"></uni-icons>
        <uni-icons class="icon" type="list" color="#ffffff" @click="showCard = true"></uni-icons>
      </view>
    </view>
  </view>
  <Comment v-model:visible="showComment" type="music" :id="musicStore.curSongDetail.id" />
  <PlaylistCard v-model:visible="showCard" />
  <!-- <PlaylistCard :visible="showCard" @update:visible="showCard = $event" /> -->
</template>

<style lang="scss" scoped>
uni-page-body {
  height: 100%;
}
.player-wrap {
  // #ifdef WEB
    height: 100%;
  // #endif
  // #ifndef WEB
    height: 100vh;
  //#endif
  position: relative;
  display: flex;
  flex-direction: column;
}
.bg {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  &::after {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    background-color: rgba(0,0,0,.5);
  }
}
.blur-image {
  position: relative;
  width: 100%;
  height: 100%;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  transform: scale(1.5);
  filter: blur(30px);
}
.center {
  flex: 1;
  overflow: hidden;
}
.song-disc {
  height: 600rpx;
  padding-top: 140rpx;
  position: relative;
  .needle-ab {
    width: 200rpx;
    position: absolute;
    top: 0;
    left: 50%;
    margin-left: -20rpx;
    transform-origin: 18rpx 18rpx;
    transform: rotate(-20deg);
  }
  .song-circle {
    width: 600rpx;
    height: 600rpx;
    margin: 0 auto;
    padding: 120rpx;
    position: relative;
    box-sizing: border-box;
    .circle-bg {
      position: absolute;
      top: 0;
      left: 0;
    }
    image {
      width: 100%;
      height: 100%;
      border-radius: 50%;
      position: relative;
    }
  }
}
.lyric {
  color: #ffffff;
  text-align: center;
  height: 80%;
  margin-top: 50rpx;
  overflow: hidden;
  .lyric-row {
    opacity: 0.5;
    height: 60rpx;
    line-height: 60rpx;
  }
  .active {
    opacity: 1;
  }
}
.control {
  height: 300rpx;
}
.icons-bar {
  display: flex;
  justify-content: center;
  .uni-icons {
    margin: 0 40rpx;
  }
}
.progress {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20rpx;
  color: #ffffff;
  .time {
    width: 80rpx;
    text-align: center;
  }
  slider {
    flex: 1;
  }
}
.play-bar {
  display: flex;
  justify-content: space-around;
  padding: 0 20rpx;
  .icon {
    width: 80rpx;
    height: 80rpx;
    font-size: 80rpx !important;
    display: flex;
    justify-content: center;
    align-items: center;
    ::v-deep text {
      font-size: 80rpx !important;
    }
  }
}

</style>
