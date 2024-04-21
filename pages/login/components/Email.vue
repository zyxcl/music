<script setup>
  import { loginApi } from '@/api'
  import { ref } from 'vue'
  import { useUserStore } from '@/store/user'
  
  // 引入store
  const userStore = useUserStore()
  
  const form = ref(null)
  const formData = ref({
    email: '',
    password: ''
  })
  const rules = {
    email: {
      rules: [
        { required: true, errorMessage: '邮箱不能为空'},
        { format: 'email', errorMessage: '邮箱格式错误'},
      ]
    },
    password: {
      rules: [{
        required: true,
        errorMessage: '密码不能为空'
      }]
    }
  }
  const submit = async () => {
   try {
     await form.value.validate()
     const res = await loginApi(formData.value)
     if (res.code === 200) {
       // 登录成功，把cookie存到本地
       uni.setStorageSync('curCookie', res.cookie)
       // 把用户信息存到store中
       userStore.profile = res.profile
       uni.showToast({
         title: '登录成功',
         icon: 'success'
       })
       uni.switchTab({
         url: '/pages/index/index'
       })
     } else {
       uni.showToast({
       	title: res.msg,
       	icon: 'error'
       })
     }
   } catch(e) {
     uni.showToast({
     	title: e,
     	icon: 'error'
     })
   }
  }
</script>

<template>
  <view class="email-login">
    <uni-forms ref="form" :rules="rules" :modelValue="formData">
      <uni-forms-item name="email">
        <uni-easyinput prefixIcon="email" v-model="formData.email" placeholder="请输入邮箱" />
      </uni-forms-item>
      <uni-forms-item name="password">
        <uni-easyinput prefixIcon="locked" type="password" v-model="formData.password" placeholder="请输入密码" />
      </uni-forms-item>
    </uni-forms>
    <button type="primary" @click="submit">提交</button>
  </view>
</template>



<style lang="scss" scoped>

</style>
