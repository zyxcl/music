
<script setup>
import { ref } from 'vue'
import { bannerApi, topPlaylistApi, dragonBalltApi, homepageApi } from '@/api'
import { useUserStore } from '@/store/user'
import Header from './components/Header'
import Banner from './components/Banner'
import Ball from './components/Ball'
import Playlist from './components/Playlist'
import Songs from './components/Songs'

// 引入store
const userStore = useUserStore()
// 首页内容
const blocks = ref([])

homepageApi().then(res => {
  console.log(res.data.blocks)
  blocks.value = res.data.blocks
})
	
</script>
<template>
<playerBar>
  <Header />
  <view class="block" v-for="(block, index) in blocks">
    <!-- {{block.showType}} -->
    <!-- 轮播 -->
    <Banner v-if="block.showType === 'BANNER'" :banners="block.extInfo.banners" />
    <!-- icon图标 -->
    <Ball v-else-if="block.showType === 'DRAGON_BALL'" />
    <!-- 歌单 -->
    <Playlist v-else-if="block.showType === 'HOMEPAGE_SLIDE_PLAYLIST'" :title="block.uiElement.subTitle.title" :list="block.creatives" />
    <!-- <Playlist v-else-if="block.showType === 'HEART_LYRICS'" :title="block.uiElement.subTitle.title" :list="block.creatives[0].resources" /> -->
    <!-- 歌曲 -->
    <Songs v-else-if="block.showType === 'HOMEPAGE_SLIDE_SONGLIST_ALIGN'" :title="block.uiElement.subTitle.title" :list="block.creatives" :ids="block.resourceIdList" />
 <!--   <uni-section v-else type="line" :title="block.uiElement?.subTitle.title">
    </uni-section> -->
    
  </view>
 </playerBar>

</template>


<style lang="scss" scoped>


</style>
