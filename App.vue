<script setup>
import { onLaunch } from '@dcloudio/uni-app'
import { useUserStore } from './store/user'

const userStore = useUserStore()

onLaunch(() => {
  // 获取账号信息
  userStore.getAccount()
})
</script>

<style lang="scss">
	/*每个页面公共css */
	@import '@/uni_modules/uni-scss/index.scss';
	page, uni-page-body {
		background-color: #ffffff;
    min-height: 100%;
	}
  .uni-section .uni-section-header__decoration {
    background-color: $primary-color !important;
  }
  image {
    background-color: #f4f4f4;
  }
  image.nobg {
    background-color: transparent;
  }
</style>
