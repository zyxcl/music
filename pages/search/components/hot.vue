
<script setup>
import { ref } from 'vue'
import { searchHotApi } from '@/api'

const props = defineProps(['historyList'])
const emits = defineEmits(['clearHistory', 'startSearch'])
const hotList = ref([])

searchHotApi().then(res => {
  hotList.value = res.data
})

</script>


<template>
  <uni-section v-if="historyList.length > 0" title="搜索历史" type="line" padding>
    <template v-slot:right>
      <uni-icons type="trash" size="20" @click="$emit('clearHistory')"></uni-icons>
    </template>
    <view class="tags">
      <uni-tag
        v-for="item in historyList"
        :key="item"
        :circle="true"
        :text="item"
        type="primary"
        size="small"
        @click="$emit('startSearch', item)"
      />
    </view>
  </uni-section>
  
  <uni-section title="热门搜索" type="line" padding>
    <view
      class="hot-item"
      v-for="(item, index) in hotList"
      :key="item.searchWord"
      @click="$emit('startSearch', item.searchWord)"
    >
      <view :class="['no', { red: index < 3 }]">{{ index + 1 }}</view>
      <text>{{item.searchWord}}</text>
      <image v-if="item.iconUrl" :src="item.iconUrl" mode="widthFix"></image>
    </view>
  </uni-section>
</template>

<style lang="scss">
.hot-item {
  display: flex;
  align-items: center;
  height: 60rpx;
  .no {
    font-weight: bold;
  }
  text {
    margin: 0 20rpx 0 10rpx;
  }
  image {
    width: 30rpx;
    height: 30rpx;
  }
}
.red {
  color: #c84341;
}
.uni-tag--primary {
  border-color: #dddddd;
  background-color: #dddddd;
  margin-right: 20rpx;
  color: #333333;
}
.tags {
  display: flex;
  flex-wrap: wrap;
  .uni-tag {
    margin-bottom: 20rpx;
  }
}
</style>
