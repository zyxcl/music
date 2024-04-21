<script setup>
import { captchaSentApi, captchaVerifyApi, loginCellphoneApi } from '@/api'
import { ref, computed, onBeforeUnmount } from 'vue'

const countDown = ref(0)
const phone = ref('15801154632')
const captcha = ref('')
const captchaText = computed(() => {
  return countDown.value === 0 ? '获取验证码' : `${countDown.value}s`
})
let timer = null
const getCaptcha = async () => {
  const res = await captchaSentApi(phone.value)
  console.log(res.data)
  countDown.value = 10
  timer = setInterval(() => {
    countDown.value --
    if (countDown.value <= 0) {
      clearInterval(timer)
    }
  }, 1000)
}

const submit = async () => {
  try {
    await captchaVerifyApi({ phone: phone.value, captcha: captcha.value })
    const res = await loginCellphoneApi({ phone: phone.value, captcha: captcha.value })
    console.log(res.data)
  } catch (e) {
    alert(e.response.data.message)
  }
}

onBeforeUnmount(() => {
  clearInterval(timer)
})
</script>

<template>
  <view class="form">
    <view class="row"><input type="text" placeholder="请输入手机号" v-model.trim="phone"></view>
    <view class="row captcha">
      <input type="text" placeholder="请输入验证码" v-model="captcha">
      <button @click="getCaptcha" :disabled="countDown > 0">{{ captchaText }}</button>
    </view>
    <view class="row"><button @click="submit">登录</button></view>
  </view>
</template>

<style lang='scss' scoped>
.form {
  .row {
    margin-bottom: 20rpx;
  }
  input {
    outline: none;
    height: 80rpx;
    width: 100%;
    border-radius: 10rpx;
    border: 1rpx solid #dddddd;
    padding: 0 20rpx;
    box-sizing: border-box;
  }
  button {
    width: 100%;
    height: 80rpx;
    line-height: 80rpx;
    background: var(--primary-color);
    color: #ffffff;
    border: none;
    border-radius: 10rpx;
  }
}
.captcha {
  display: flex;
  input {
    flex: 1;
  }
  button {
    width: 200rpx;
    margin-left: 20rpx;
    &:disabled {
      opacity: 0.7;
    }
  }
}
</style>
