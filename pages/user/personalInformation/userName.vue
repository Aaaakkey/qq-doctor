<template>
	<view>
		<uni-easyinput v-model="value" placeholder="请输入昵称" class="userNameWrapp"></uni-easyinput>
		<text class="userNameText">限2~12个中文、英文或数字</text>
            
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style lang="scss" scoped>
   
   .userNameWrapp{
	   margin-top: 30rpx;
   }
   .userNameText{
	   color: #9E9E9E;
	   font-size: 20rpx;
	   margin-left: 20rpx;
   }
</style>
