<template>
	<view>
		<!-- 举报信息 -->

		<!-- 举报电话 -->
		<view class="phoneWrapp">
			<view class="phoneText1">1.违法与不良信息举报电话</view>
			<view class="phoneNum">
				18683927916
			</view>
		</view>

		<!-- 举报邮箱 -->
		<view class="emailWrapp">
			<view class="emailText1">2.举报邮箱
			</view>
			<view class="emailNum">
				815175473@qq.com
			</view>
		</view>
		
		<!-- 其他信息 -->
		<view class="otherTextWrapp">
			<view class="otherText">
				以上渠道可投诉举报互联网违法和不良信息涉及的各类问题。
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			};
		}
	}
</script>

<style lang="scss" scoped>
	.phoneWrapp {
		margin-top: 28rpx;

		.phoneText1 {
			margin-left: 15rpx;
			color: #000000;
			font-size: 45rpx;
			font-family: HelloFont ID DianKai;
		}

		.phoneNum {
			color: #9E9E9E;
			margin-top: 20rpx;
			margin-left: 50rpx;
		}
	}
	
	.emailWrapp {
		margin-top: 20rpx;
	
		.emailText1 {
			margin-left: 15rpx;
			color: #000000;
			font-size: 45rpx;
			font-family: HelloFont ID DianKai;
		}
	
		.emailNum {
			color: #9E9E9E;
			margin-top: 20rpx;
			margin-left: 50rpx;
		}
	}
	
	.otherTextWrapp{
		margin-top: 40rpx;
		margin-left: 30rpx;
		margin-right: 10rpx;
		color: #404345;
		font-size: 40rpx;
	}
</style>
<style>
page {
	background-color:#F7F7F7;
}
</style>