<template>
	<view class="message-tab">
		<view class="message-tab-block">
			<view class="message-tab-image">
				<image src="../../static/img/talk.png" mode=""></image>
			</view>
			<input class="send-input" confirm-type="send"/>
			<view class="message-tab-image">
				<image src="../../static/img/smile.png" mode=""></image>
			</view>
			<view class="message-tab-image1">
				<image src="../../static/img/pic.png" mode=""></image>
			</view>
		</view>

	</view>
</template>

<script>
	export default {
		name: "MessageTab",
		data() {
			return {

			};
		}
	}
</script>

<style lang="scss" scoped>
	.message-tab {
		position: fixed;
		width: 750rpx;
		height: 170rpx;
		bottom: 0;
		z-index: 999;
		background-color: rgb(245, 245, 245);
		border-top: 1px solid rgb(234, 234, 234);

		.message-tab-block {
			height: 750rpx;
			height: 90rpx;
			display: flex;
			flex-flow: row nowrap;
			justify-content: space-between;
			align-items: center;

			.message-tab-image {
				image {
					padding: 15rpx;
					width: 50rpx;
					height: 50rpx;
				}

			}
			.message-tab-image1 {
				image {
					padding: 15rpx;
					width: 55rpx;
					height: 55rpx;
				}
			
			}

		}
		.send-input{
			width: 100%;
			height: 80%;
			border-radius: 20rpx;
			background-color: rgb(254,254,254);
		}
	}
</style>