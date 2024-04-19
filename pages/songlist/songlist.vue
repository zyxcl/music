<script setup>
  import { ref } from 'vue'
  import { onLoad } from '@dcloudio/uni-app'
  import { playlistDetailApi } from '@/api'
  import { useMusicStore } from '../../store/music.js'
  import PlayBar from '../../components/playerBar.vue'
  import Comment from '../../components/comment.vue'
  
  const musicStore = useMusicStore()
  
  const playlist = ref({})
  const showComment = ref(false)
  const id = ref('')
  
  const getDetail = async (id) => {
    const res = await playlistDetailApi(id)
    playlist.value = res.playlist
  }
  
  onLoad((options) => {
    id.value = options.id
    getDetail(options.id)
  })
  // 把点击的歌曲添加到播放列表
  const goPlayer = item => {
    musicStore.addSong(item)
    uni.navigateTo({
      url: `/pages/player/player`
    })
  }
  // 把当前所有歌曲添加到播放列表
  const playAll = () => {
    const ids = playlist.value.trackIds.map(v => v.id)
    musicStore.playAllSongs(ids)
    uni.navigateTo({
      url: `/pages/player/player`
    })
  }
</script>

<template>
  <view class="header">
    <view class="info">
      <image :src="playlist.coverImgUrl" mode="widthFix"></image>
      <view class="header-right">
        <view class="title">{{playlist.name}}</view>
        <view class="creator">
          <image :src="playlist.creator?.avatarUrl" mode="widthFix"></image>
          <view class="nickname">
            {{playlist.creator?.nickname}}
          </view>
        </view>
      </view>
    </view>
    <view class="desc">
      {{playlist.description}}
    </view>
    <view class="btns">
      <view class="btn">
        <uni-icons type="redo-filled" size="20" color="#ffffff"></uni-icons>
        {{ playlist.shareCount }}
      </view>
      <view class="btn" @click="showComment = true">
        <uni-icons type="chat-filled" size="20" color="#ffffff"></uni-icons>
        {{ playlist.commentCount }}
      </view>
      <view class="btn">
        <uni-icons type="folder-add-filled" size="20" color="#ffffff"></uni-icons>
        {{ playlist.subscribedCount }}
      </view>
    </view>
  </view>
  <view class="song-list">
    <button size="mini" @click="playAll">播放全部</button>
    <view
      v-for="(item, index) in playlist.tracks"
      :key="item.id"
      class="song-item"
      @click="goPlayer(item)"
    >
      {{index + 1}}. {{item.name}}
    </view>
  </view>
  <PlayBar />
  <Comment v-model:visible="showComment" type="playlist" :id="id" />
</template>



<style lang="scss" scoped>
.header {
  padding: 30rpx;
}
.info {
  display: flex;
  image {
    width: 240rpx;
    height: 240rpx;
    border-radius: 20rpx;
  }
}
.header-right {
  flex: 1;
  overflow: hidden;
  margin-left: 30rpx;
  .title {
    font-weight: bold;
  }
}
.creator {
  display: flex;
  align-items: center;
  image {
    width: 50rpx;
    height: 50rpx;
    border-radius: 50%;
  }
  .nickname {
    margin-left: 16rpx;
    flex: 1;
    overflow: hidden;
    font-size: 12px;
  }
}
.desc {
  font-size: 12px;
  margin: 20rpx 0;
}
.btns {
  display: flex;
  .btn {
    flex: 1;
    margin-right: 30rpx;
    height: 80rpx;
    border-radius: 40rpx;
    background: rgba(0, 0, 0, 0.6);
    font-size: 12px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
