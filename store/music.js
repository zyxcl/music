import { defineStore } from 'pinia'
import { ref, computed, watch } from 'vue'
import { songDetailApi, songUrlApi } from '@/api'


export const useMusicStore = defineStore('music', () => {
  // 音频对象
  const audio = uni.createInnerAudioContext()
  // 当前播放列表
  const playlist = ref([])
  // 当前播放歌曲下标
  const currentIndex = ref(0)
  // 当前播放位置
  const currentTime = ref(0)
  // 总时长
  const duration = ref(0)
  // 是否正在播放
  const isPlay = ref(false)
  // 是否随机播放
  const isRandom = ref(false)
  // 当前播放歌曲详情
  const curSongDetail = computed(() => {
    if (playlist.value.length === 0) return {}
    return {
      ...playlist.value[currentIndex.value],
      arStr: playlist.value[currentIndex.value].ar.map(v => v.name).join('/')
    }
  })
  
  // 往播放列表添加一首歌
  const addSong = async (song) => {
    // 查找列表中是否存在此歌曲
    const index = playlist.value.findIndex(v => v.id === song.id)
    if (index > -1) {
      currentIndex.value = index
    } else {
      // 获取这一首歌的url
      const musicRes = await songUrlApi(song.id)
      song.url = musicRes.data[0].url
      // 添加到播放列表
      playlist.value.unshift(song)
      currentIndex.value = 0
    }
  }
  
  // 覆盖播放列表歌曲
  const playAllSongs = async (ids) => {
    ids = Array.isArray(ids) ? ids.join() : ids
    // 获取所有歌曲的详情
    const res = await songDetailApi(ids)
    // 获取所有歌曲的url
    const musicRes = await songUrlApi(ids)
    playlist.value = res.songs.map(item => {
      return {
        ...item,
        url: musicRes.data.find(v => v.id === item.id).url
      }
    })
    currentIndex.value = 0
  }
  // 当前歌曲内容切换时修改播放url
  watch(curSongDetail, () => {
    audio.src = curSongDetail.value.url
  })
  // 播放
  const play = () => {
    if (audio.paused) {
      audio.play()
      isPlay.value = true
    } else {
      audio.pause()
      isPlay.value = false
    }
  }
  // 切歌
  const changeMusic = (index) => {
    // 是否随机播放
    if (isRandom.value) {
      currentIndex.value = Math.floor(Math.random() * playlist.value.length)
    } else {
      if (index > playlist.value.length - 1) {
        currentIndex.value = 0
      } else if (index < 0) {
        currentIndex.value = playlist.value.length - 1
      } else {
        currentIndex.value = index
      }
    }
  }
  
  // 修改播放位置
  const changeCurrent = value => {
    audio.seek(duration.value * (value / 100))
  }
  
  // 监听播放进度更新
  audio.onTimeUpdate(() => {
    currentTime.value =  audio.currentTime
  })
  // 监听可以开始播放
  audio.onCanplay(() => {
    duration.value =  audio.duration
    console.log('可以开始播放了');
    play()
  })
  
  return {
    audio,
    currentTime,
    duration,
    playlist,
    currentIndex,
    isRandom,
    curSongDetail,
    changeCurrent,
    isPlay,
    addSong,
    playAllSongs,
    play,
    changeMusic
  }
});