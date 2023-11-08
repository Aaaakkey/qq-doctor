<template>
	<view class="isbn-article">
		<view class="isbn-article-top">
			<image :src="item.pic" mode=""></image>
			<view class="isbn-article-top-text">
				<view style="font-size: 24rpx; margin-left: 10rpx;">{{item.name}} {{item.manager}} {{item.hospital}} {{item.depart}}</view>
				<view style="font-size: 24rpx; color: #9e9e9e; margin-top: 10rpx; margin-left: 10rpx;">来自{{item.name}}医生的科普号</view>
			</view>
		</view>
		<view class="isbn-article-context">
			<view class="isbn-article-context-title">{{item.title}}</view>
			<view class="isbn-article-context-text">
				<view style="overflow: hidden;
			text-overflow: ellipsis;
			display: -webkit-box;
			-webkit-line-clamp: 3;
			-webkit-box-orient: vertical;
			font-size: 26rpx;">{{item.context}}</view>
				<view>
					<image :src="item.contextpic" mode=""></image>
				</view>
			</view>
		</view>
		<view class="isbn-article-bottom">
			<view class="isbn-article-bottom-block" style="border-right: 1px #d8d8d8 solid; margin: 20rpx 0rpx;">
				<image src="../../static/img/share.png" mode=""></image>
				<view class="isbn-article-bottom-block-word">分享</view>
			</view>
			<view class="isbn-article-bottom-block" style="border-right: 1px #d8d8d8 solid; margin: 20rpx 0rpx;">
				<image src="../../static/img/kppl.png" mode=""></image>
				<view class="isbn-article-bottom-block-word">{{item.talknum}}</view>
			</view>
			<view class="isbn-article-bottom-block">
				<image src="../../static/img/articlestar.png" mode=""></image>
				<view class="isbn-article-bottom-block-word">{{item.starnum}}</view>
			</view>
		</view> 
		<view class="isbn-article-next"></view>
	</view>
</template>

<script>
	export default {
		name: "IsbnArticle",
		data() {
			return {

			};
		},
		props: {
			item: {
				type: Object,
				default () {
					return {
						title: "针对多形性未分化肉瘤赠药临床试验脂质体多柔比星（多美素）+卡瑞利珠瑞利珠瑞利珠瑞利珠",
						pic: "../../static/img/doctor2.png",
						context: "入组实验注意事项入组标准入组实验注意事项入组标准入组实验注意事项入组标准入组实验注意事项入组标准入组实验注意事项入组标准",
						name: "赵熙蒙",
						manager: "主任医师",
						hospital: "江西理工大学医学院",
						depart: "中医内科",
						talknum: "25",
						starnum: "125",
						video: "",
						contextpic: "../../static/img/doctor2.png"
					}
				}
			}
		}
	}
</script>

<style lang="scss">
	.isbn-article {
		margin-top: 10rpx;
	
		width: 750rpx;
		height: 480rpx;
		display: flex;
		flex-flow: column nowrap;

		.isbn-article-top {
			margin-left: 25rpx;
			width: 700rpx;
			height: 120rpx;
			display: flex;
			flex-flow: row nowrap;
			align-items: center;

			image {
				height: 100rpx;
				width: 100rpx;
				border-radius: 100rpx;

			}

			.isbn-article-top-text {
				display: flex;
				flex-flow: column nowrap;
				overflow: hidden;
				text-overflow: ellipsis;
			}
		}

		.isbn-article-context {
				margin-left: 25rpx;
			text-align: justify;
			width: 700rpx;
			height: 270rpx;

			.isbn-article-context-title {
				line-height: 70rpx;
				font-size: 44rpx;
				color: #333;
				height: 140rpx;
				font-weight: 900;
				overflow: hidden;
				text-overflow: ellipsis;
				display: -webkit-box;
				-webkit-line-clamp: 2;
				-webkit-box-orient: vertical;
			}

			.isbn-article-context-text {
				display: flex;
				flex-flow: row nowrap;
				color: #9e9e9e;
				image {
					margin-left: 100rpx;
					margin-top: 4rpx;
					width: 140rpx;
					height: 95rpx;
				}
			}


		}

		.isbn-article-bottom {
			margin-left: 25rpx;
			width: 700rpx;
			height: 130rpx;
			display: flex;
			flex-flow: row nowrap;
			.isbn-article-bottom-block{
				flex: 1;
				display: flex;
				flex-flow: row nowrap;
				justify-content: center;
				align-items: center;
				image{
					width: 60rpx;
					height: 60rpx;
				}
				.isbn-article-bottom-block-word{
					font-weight: 600;
					margin-left: 20rpx;
				}
			}
		}
		
	}
	.isbn-article-next{
		width: 750rpx;
		height: 20rpx;
		background-color: #d8d8d8;
	}
</style>