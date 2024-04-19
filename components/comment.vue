<script setup>
import { ref, watch, watchEffect } from 'vue'
import { useMusicStore } from '../store/music.js'
import { commentApi } from '@/api'

const musicStore = useMusicStore()

const props = defineProps(['visible', 'type', 'id'])
const emits = defineEmits(['update:visible'])

const popup = ref(null)
const hotComments = ref([])
const comments = ref([])

watchEffect(async () => {
  if (props.visible) {
    popup.value?.open()
    console.log('获取评论');
    const res = await commentApi(props.type, props.id)
    console.log(res);
    comments.value = res.comments
    hotComments.value = res.hotComments
  } else {
    popup.value?.close()
  }
})

const change = (e) => {
  if (!e.show) {
    emits('update:visible', false)
  }
}

</script>

<template>
  <uni-popup ref="popup" type="bottom" background-color="#fff" @change="change">
    <scroll-view scroll-y class="list" >
      <uni-section title="热门评论" type="line" v-if="hotComments.length > 0">
         <uni-list>
           <uni-list-item
             v-for="(item, index) in hotComments"
             :key="item.commentId"
             :title="item.user.nickname"
             :note="item.content"
             showArrow
             :thumb="item.user.avatarUrl"
             thumb-size="base"
             clickable
           >
           </uni-list-item>
         </uni-list>
      </uni-section>
      <uni-section title="最新评论" type="line">
        <uni-list>
          <uni-list-item
            v-for="(item, index) in comments"
            :key="item.commentId"
            :title="item.user.nickname"
            :note="item.content"
            showArrow
            :thumb="item.user.avatarUrl"
            thumb-size="base"
            clickable
          >
          </uni-list-item>
        </uni-list>
      </uni-section>
    </scroll-view>
  </uni-popup>
</template>

<style lang="scss" scoped>
.list {
  height: 1000rpx;
}
</style>