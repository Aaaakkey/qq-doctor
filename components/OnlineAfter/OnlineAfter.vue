<template>
	<view class="online-after">
		<view class="online-after-title">义诊回放</view>
		<view class="online-after-context">
			<view class="online-after-context-top">
				<view><image src="../../static/img/doctor2.png"></image></view>
				<view class="online-after-context-top-right">
					<view style="color: #4485fd; font-weight: 600; font-size: 28rpx;">呼吸重症医学科</view>
					<view style="font-size: 26rpx; margin-top: 10rpx;">赵熙蒙医生</view>
				</view>
			</view>
			
			
			<view class="online-after-context-bottom">
				<view style="font-size: 26rpx; color: #9e9e9e;">赣州市第一人民医院</view>
		
				<view style="width: 160rpx; height: 50rpx; background-color: red; margin-top: 30rpx;;
				background-color: #fef9eb; border: #4485fd 2px solid; text-align: center; color: #4485fd; font-size: 28rpx;
				">义诊回放</view>
			</view>
			
		</view> 
	</view>
</template>

<script>
	export default {
		name:"OnlineAfter",
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss">
	.online-after{
		width: 375rpx;
		height: 320rpx;
		display: flex;
		flex-flow: column nowrap;
		.online-after-title{
			text-align: center;
			margin-left: 20rpx;
			width:120rpx;
			height: 40rpx;
			background-color: blue;
			border-radius: 5rpx;
			background-color: #979eb5;
			color: #d8d8d8;
			font-size: 26rpx;
			line-height: 40rpx;
		}
		.online-after-context{
			margin-left: 20rpx;
			border-radius: 10rpx;
			width: 340rpx;
			height: 250rpx;
			background-color: #edf6fe;
			border: #4485fd solid 2px;
			display: flex;
			flex-flow: column nowrap;
			align-items: center;
			image{
				margin-top: 10rpx;
				margin-right: 20rpx;
				width: 80rpx;
				height: 80rpx;
			}
			.online-after-context-top{
				display: flex;
				flex-flow: row nowrap;
				.online-after-context-top-right{
					margin-left: 10rpx;
					margin-top: 10rpx;
				}
				
			}
			.online-after-context-bottom{
				display: flex;
				flex-flow: column nowrap;
				align-items: center;
			}
		}
	}
</style>