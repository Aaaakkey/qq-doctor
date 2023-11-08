<template>
	<view class="receiveline-body">
		<view class="receiveline-block" v-if='item.picurl == "" '>
			<view class="receiveline-image">
				<image :src="user.picurl" mode=""></image>
			</view>
			<view class="receive-context">
				<view class="receiveline-time">{{ transTime }}</view>
				<view class="receiveline">
					<view class="receiveline-text">
						{{ item.message }}
					</view>
				</view>
			</view>
		</view>
		<view v-else class="recpicline-block">
			<view class="recpicline-image">
				<image :src="user.picurl"></image>
			</view>
			<view class="recpicline-context">
				<view class="recpicline-time">{{ transTime }}</view>
				<view class="recpicline-block-image"><image :src=item.picurl mode=""></image></view>
				
			</view>
			
		</view>
	</view>
</template>

<script>
	import {
		parseTime
	} from "../../utils/tool.js";
	export default {
		name: "ReceiveLine",
		data() {
			return {};
		},
		props: {
			item: {
				type: Object,
				default () {
					return {
						message: "默认消息",
						sender: "1",
						time: "1698672207",
					};
				},
			},
			user: {
				type: Object,
				default () {
					return {
						name: "安俊禹",
						picurl: "../../static/img/doctor3.png"
					}
				}
			}
		},
		computed: {
			transTime() {
				return parseTime(this.item.time);
			},
		},
	};
</script>

<style lang="scss" scoped>
	.receiveline-body {
		display: flex;
		flex-flow: row nowrap;
		justify-content: flex-start;
		margin-right: 120rpx;

		.receiveline-block {
			display: flex;
			flex-flow: row nowrap;
			justify-content: flex-start;
			margin-top: 20rpx;
			margin-bottom: 20rpx;

			.receiveline-image {
				image {
					margin-left: 20rpx;
					width: 110rpx;
					height: 110rpx;
					border-radius: 100%;
				}
			}

			.receive-context {
				display: flex;
				flex-flow: column nowrap;
				.receiveline-time {
					color: #ACB3BF;
					margin-left: 20rpx;
					font-size: 24rpx;
				}
				.receiveline {
					padding: 20rpx 20rpx;
					border-radius: 20rpx;
					background-color: rgb(224, 243, 250);
					margin: 10rpx 10rpx;
					display: flex;
					justify-content: center;
					align-items: center;

					.receiveline-text {
						font-size: 36rpx;
						color: black;
					}
				}
			}
		}
		.recpicline-block{
			display: flex;
			margin-top: 20rpx;
			margin-bottom: 20rpx;
			.recpicline-context{
				.recpicline-time{
					color: #ACB3BF;
					margin-left: 20rpx;
					font-size: 24rpx;
				}
				.recpicline-block-image{
					margin: 20rpx 0;
					background-color: rgb(224, 243, 250);
					width: 300rpx;
					height: 400rpx;
					border-radius: 20rpx;
					margin-right: 10rpx;
					display: flex;
					justify-content: center;
					align-items: center;
					image{
						width: 90%;
						height: 90%;
					}
				}
				
			}
			.recpicline-image {
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