
<script setup>
import { ref } from 'vue'
import { bannerApi, topPlaylistApi, dragonBalltApi } from '@/api'
import { useUserStore } from '@/store/user'
import PlayBar from '../../components/playerBar.vue'


// 引入store
const userStore = useUserStore()

const banners = ref([])
const playlist = ref([])

const navIcons = [
  {
    "id": -1,
    "name": "每日推荐",
    "iconUrl": "http://p1.music.126.net/4DpSgAVpJny4Ewf-Xw_WQQ==/109951163986641971.jpg",
    "url": "/pages/recommend/recommend"
  },
  {
    "id": -6,
    "name": "私人FM",
    "iconUrl": "http://p1.music.126.net/Shi7cRT1bDhwpVDM7AOFXg==/109951165265330616.jpg",
    "url": "/pages/personalfm/personalfm"
  },
  {
    "id": -2,
    "name": "歌单",
    "iconUrl": "http://p1.music.126.net/uG5p6CnwAHrLqOkaSeRlnA==/109951163986649164.jpg",
    "url": "",
  },
  {
    "id": -3,
    "name": "排行榜",
    "iconUrl": "http://p1.music.126.net/SDFC6A3X2wzUCavYyeGIOg==/109951163986649670.jpg",
    "url": "/pages/toplist/toplist"
  },
  {
    "id": 1025001,
    "name": "有声书",
    "iconUrl": "http://p1.music.126.net/Kb4oK0m_ocs3FR3lo-r9yg==/109951167319110429.jpg",
    "url": ""
  },
  {
    "id": 13000,
    "name": "数字专辑",
    "iconUrl": "http://p1.music.126.net/nRWhsf3P7r7eqHz-v61VBg==/109951166989045593.jpg",
    "url": ""
  },
  {
    "id": 11000,
    "name": "直播",
    "iconUrl": "http://p1.music.126.net/2JvVZZjcjyCE72fGMsC1hg==/109951166989043011.jpg",
    "url": ""
  },
  {
    "id": 1025000,
    "name": "关注新歌",
    "iconUrl": "http://p1.music.126.net/BAOWsqZmmxL8JIH-wejMmQ==/109951167294312390.jpg",
    "url": ""
  },
  {
    "id": 1027000,
    "name": "收藏家",
    "iconUrl": "http://p1.music.126.net/gk99UFRasebERf38t6A1kA==/109951168168319514.jpg",
    "url": ""
  }
]

bannerApi().then(res => {
  banners.value = res.banners
})

topPlaylistApi({ limit: 6 }).then(res => {
  playlist.value = res.playlists
})

const goSearch = () => {
  uni.navigateTo({
    url: '/pages/search/search'
  })
}

const link = (url) => {
  if (!url) return
  uni.navigateTo({
    url
  })
}

const userDrawer = ref(null)

const goDetail = id => {
  uni.navigateTo({
    url: `/pages/songlist/songlist?id=${id}`
  })
}
	
</script>
<template>
	<view class="container">
    <view class="header">
      <uni-icons class="bars" type="bars" size="24" @click="userDrawer.open()"></uni-icons>
      <view class="search" @click="goSearch">
        <uni-search-bar placeholder="搜索" bgColor="#EEEEEE" readonly />
      </view>
    </view>
    <view class="swiper-wrap">
      <swiper class="swiper" indicator-dots indicator-color="rgba(255, 255, 255, .4)"	indicator-active-color="#ffffff" autoplay circular>
        <swiper-item v-for="item in banners" :key="item.targetId">
          <image :src="item.imageUrl" mode="widthFix"></image>
        </swiper-item>
      </swiper>
    </view>
    <swiper class="icon-swiper" display-multiple-items="5">
      <swiper-item v-for="item in navIcons" :key="item.id">
        <image :src="item.iconUrl" mode="widthFix" @click="link(item.url)"></image>
        <view class="icon-name">
          {{item.name}}
        </view>
      </swiper-item>
    </swiper>
    <uni-section type="line" title="推荐歌单">
      <view class="playlist">
        <view class="playlist-item" v-for="item in playlist" :key="item.id" @click="goDetail(item.id)">
          <image :src="item.coverImgUrl" mode="widthFix"></image>
          <view class="playlist-item-name">
            {{item.name}}
          </view>
        </view>
      </view>
    </uni-section>
    <uni-drawer ref="userDrawer" mode="left" :width="320">
      <view v-if="userStore.profile">
        <view class="">
          {{userStore.profile.nickname}}
        </view>
        <image :src="userStore.profile.avatarUrl" mode=""></image>
        {{userStore.profile}}
      </view>
      <navigator v-else url="/pages/login/login">登录</navigator>
    </uni-drawer>
	</view>
  <PlayBar
    <!-- #ifdef WEB -->
    :padding="true"
    <!-- #endif -->    
  />
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
.icon-swiper {
  height: 150rpx;
  swiper-item {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  image {
    width: 100rpx;
    height: 100rpx;
    background: #c84341;
    border-radius: 50%;
  }
  .icon-name {
    font-size: 12px;
    margin-top: 16rpx;
  }
}
.swiper-wrap {
  padding: 30rpx;
}
.swiper {
  border-radius: 20rpx;
  overflow: hidden;
  height: 256rpx;
  image {
    width: 100%;
  }
}
::v-deep .uni-section .uni-section-header__decoration {
  background: #c84341;
}
.playlist {
  display: flex;
  flex-wrap: nowrap;
  padding: 0 30rpx;
  overflow: auto;
}
.playlist::-webkit-scrollbar {
  display: none;
}
.playlist-item {
  width: 240rpx;
  flex-shrink: 0;
  margin-right: 20rpx;
  image {
    width: 100%;
    border-radius: 10rpx;
  }
}
.playlist-item-name {
  font-size: 24rpx;
  height: 70rpx;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
   -webkit-line-clamp: 2;
   -webkit-box-orient: vertical;
}
</style>
