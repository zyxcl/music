import { defineStore } from 'pinia'
import { ref } from 'vue'
import { loginStatusApi } from '@/api'


export const useUserStore = defineStore('user', () => {
  const profile = ref(null)
  
  const getProfile = async () => {
    const res = await loginStatusApi()
    profile.value = res.data.profile
  }
  
  return {
    profile,
    getProfile
  }
});