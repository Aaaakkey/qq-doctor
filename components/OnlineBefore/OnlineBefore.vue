<template>
	<view class="online-before">
		<view class="online-before-title">义诊预告</view>
		<view class="online-before-context">
			<view class="online-before-context-top">
				<view><image src="../../static/img/doctor2.png"></image></view>
				<view class="online-before-context-top-right">
					<view style="color: #4485fd; font-weight: 600; font-size: 28rpx;">呼吸重症医学科</view>
					<view style="font-size: 26rpx; margin-top: 10rpx;">赵熙蒙医生</view>
				</view>
			</view>
			
			
			<view class="online-before-context-bottom">
				<view style="font-size: 26rpx; color: #9e9e9e;">赣州市第一人民医院</view>
				<view style="font-size: 28rpx; font-weight: 900;color: #ffb547;">义诊11月06日17:30开始</view>
				<view style="width: 160rpx; height: 50rpx; background-color: red; margin-top: 10rpx; margin-left:65rpx;
				background-color: #fef9eb; border: #4485fd 2px solid; text-align: center; color: #4485fd; font-size: 28rpx;
				">立即预约</view>
			</view>
			
		</view> 
	</view>
</template>

<script>
	export default {
		name:"OnlineBefore",
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss">
	.online-before{
		width: 375rpx;
		height: 320rpx;
		display: flex;
		flex-flow: column nowrap;
		.online-before-title{
			text-align: center;
			margin-left: 20rpx;
			width:120rpx;
			height: 40rpx;
			background-color: blue;
			border-radius: 5rpx;
			background-color: #6775ec;
			color: #d8d8d8;
			font-size: 26rpx;
			line-height: 40rpx;
		}
		.online-before-context{
			margin-left: 20rpx;
			border-radius: 10rpx;
			width: 340rpx;
			height: 250rpx;
			background-color: #fef9eb;
			border: #f8d58a solid 2px;
			display: flex;
			flex-flow: column nowrap;
			align-items: center;
			image{
				margin-top: 10rpx;
				margin-right: 20rpx;
				width: 80rpx;
				height: 80rpx;
			}
			.online-before-context-top{
				display: flex;
				flex-flow: row nowrap;
				.online-before-context-top-right{
					margin-left: 10rpx;
					margin-top: 10rpx;
				}
				
			}
			.online-before-context-bottom{
			
		
			}
		}
	}
</style>