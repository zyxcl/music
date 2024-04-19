"use strict";
const common_vendor = require("../common/vendor.js");
const api_index = require("../api/index.js");
const useMusicStore = common_vendor.defineStore("music", () => {
  const audio = common_vendor.index.createInnerAudioContext();
  const playlist = common_vendor.ref([]);
  const currentIndex = common_vendor.ref(0);
  const currentTime = common_vendor.ref(0);
  const duration = common_vendor.ref(0);
  const isPlay = common_vendor.ref(false);
  const isRandom = common_vendor.ref(false);
  const curSongDetail = common_vendor.computed(() => {
    if (playlist.value.length === 0)
      return {};
    return {
      ...playlist.value[currentIndex.value],
      arStr: playlist.value[currentIndex.value].ar.map((v) => v.name).join("/")
    };
  });
  const addSong = async (song) => {
    const index = playlist.value.findIndex((v) => v.id === song.id);
    if (index > -1) {
      currentIndex.value = index;
    } else {
      const musicRes = await api_index.songUrlApi(song.id);
      song.url = musicRes.data[0].url;
      playlist.value.unshift(song);
      currentIndex.value = 0;
    }
  };
  const playAllSongs = async (ids) => {
    ids = Array.isArray(ids) ? ids.join() : ids;
    const res = await api_index.songDetailApi(ids);
    const musicRes = await api_index.songUrlApi(ids);
    playlist.value = res.songs.map((item) => {
      return {
        ...item,
        url: musicRes.data.find((v) => v.id === item.id).url
      };
    });
    currentIndex.value = 0;
  };
  common_vendor.watch(curSongDetail, () => {
    audio.src = curSongDetail.value.url;
  });
  const play = () => {
    if (audio.paused) {
      audio.play();
      isPlay.value = true;
    } else {
      audio.pause();
      isPlay.value = false;
    }
  };
  const changeMusic = (index) => {
    if (isRandom.value) {
      currentIndex.value = Math.floor(Math.random() * playlist.value.length);
    } else {
      if (index > playlist.value.length - 1) {
        currentIndex.value = 0;
      } else if (index < 0) {
        currentIndex.value = playlist.value.length - 1;
      } else {
        currentIndex.value = index;
      }
    }
  };
  const changeCurrent = (value) => {
    audio.seek(duration.value * (value / 100));
  };
  audio.onTimeUpdate(() => {
    currentTime.value = audio.currentTime;
  });
  audio.onCanplay(() => {
    duration.value = audio.duration;
    console.log("可以开始播放了");
    play();
  });
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
  };
});
exports.useMusicStore = useMusicStore;
