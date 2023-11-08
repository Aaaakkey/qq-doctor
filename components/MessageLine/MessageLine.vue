<template>
	<view class="messageline-body">

		<view class="messageline-block" v-if='item.picurl == "" '>
			<view class="messageline-context">
				<view class="messageline-time">{{transTime}}</view>
				<view class="messageline">
					<view class="messageline-text">
						{{item.message}}
					</view>
				</view>
			</view>
			<view class="messageline-image">
				<image :src="user.picurl"></image>
			</view>
		</view>
		<view v-else class="picline-block">
			<view class="picline-context">
				<view class="picline-time">{{transTime}}</view>
				<view class="picline-block-image">
					<image :src=item.picurl mode="aspectFill"></image>
				</view>

			</view>
			<view class="picline-image">
				<image :src="user.picurl"></image>
			</view>
		</view>


	</view>

</template>

<script>
	import {
		parseTime
	} from "../../utils/tool.js";
	export default {
		name: "MessageLine",
		data() {
			return {};
		},
		props: {
			item: {
				type: Object,
				default () {
					return {
						message: "默认消息",
						sender: "0",
						time: "1698672207",
						picurl: ""
					}
				}
			},
			user: {
				type: Object,
				default () {
					return {
						name: "赵熙蒙",
						picurl: "../../static/img/doctor2.png"
					}
				}
			}
		},
		computed: {
			transTime() {
				return parseTime(this.item.time);
			},
		}
	}
</script>

<style lang="scss" scoped>
	.messageline-body {
		display: flex;
		flex-flow: row nowrap;
		justify-content: flex-end;
		margin-left: 120rpx;

		.messageline-block {
			display: flex;
			margin-top: 20rpx;
			margin-bottom: 20rpx;

			.messageline-context {
				display: flex;
				flex-flow: column nowrap;
				align-items: flex-end;

				.messageline-time {
					color: #ACB3BF;
					margin-right: 20rpx;
					font-size: 24rpx;
				}

				.messageline {
					padding: 20rpx 20rpx;
					border-radius: 20rpx;
					background-color: #007AFF;
					margin: 10rpx 10rpx;
					display: flex;
					justify-content: center;
					align-items: center;

					.messageline-text {
						font-size: 36rpx;
						color: #ffffff;
					}
				}
			}

			.messageline-image {
				image {
					margin-right: 20rpx;
					width: 110rpx;
					height: 110rpx;
					border-radius: 100%;
				}
			}

		}

		.picline-block {
			display: flex;
			margin-top: 20rpx;
			margin-bottom: 20rpx;

			.picline-context {
				display: flex;
				flex-flow: column nowrap;
				align-items: flex-end;

				.picline-time {
					color: #ACB3BF;
					margin-right: 20rpx;
					font-size: 24rpx;
				}

				.picline-block-image {
					margin: 20rpx 0rpx;
					background-color: #007AFF;
					width: 300rpx;
					height: 400rpx;
					border-radius: 20rpx;
					margin-right: 10rpx;
					display: flex;
					justify-content: center;
					align-items: center;

					image {
						width: 90%;
						height: 90%;
					}
				}

			}

			.picline-image {
				image {
					margin-right: 20rpx;
					width: 110rpx;
					height: 110rpx;
					border-radius: 100%;
				}
			}
		}
	}
</style>