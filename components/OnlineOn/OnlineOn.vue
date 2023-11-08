<template>
	<view class="online-on">
		<view class="online-on-title">义诊中</view>
		<view class="online-on-context">
			<view><image src="../../static/img/doctor2.png"></image></view>
			<view style="color: #4485fd; font-weight: 600; font-size: 28rpx;">呼吸重症医学科</view>
			<view style="font-size: 26rpx;">赵熙蒙医生</view>
			<view style="font-size: 26rpx; color: #9e9e9e;">赣州市第一人民医院</view>
		</view> 
	</view>
</template>

<script>
	export default {
		name:"OnlineOn",
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss">
	.online-on{
		width: 375rpx;
		height: 320rpx;
		display: flex;
		flex-flow: column nowrap;
		.online-on-title{
			text-align: center;
			margin-left: 20rpx;
			width:120rpx;
			height: 40rpx;
			background-color: blue;
			border-radius: 5rpx;
			background-color: #e36761;
			color: #d8d8d8;
			font-size: 26rpx;
			line-height: 40rpx;
		}
		.online-on-context{
			margin-left: 20rpx;
			border-radius: 10rpx;
			width: 340rpx;
			height: 250rpx;
			background-color: #fbf3f3;
			border: #e67786 solid 2px;
			display: flex;
			flex-flow: column nowrap;
			align-items: center;
			image{
				margin-top: 10rpx;
				border-radius: 100rpx;
				border: #e36761 2px solid;
				width: 80rpx;
				height: 80rpx;
			}
		}
	}
</style>