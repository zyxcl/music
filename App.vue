<script setup>
import { onLaunch } from '@dcloudio/uni-app'
import { useUserStore } from './store/user'

const userStore = useUserStore()

onLaunch(() => {
  // 获取用户信息
  userStore.getProfile()
})
</script>

<style lang="scss">
	/*每个页面公共css */
	@import '@/uni_modules/uni-scss/index.scss';
	/* #ifndef APP-NVUE */
	// 设置整个项目的背景色
	page {
		background-color: #ffffff;
    min-height: 100%;
	}
  
  .uni-section .uni-section-header__decoration {
    background-color: $primary-color !important;
  }

	/* #endif */
</style>
