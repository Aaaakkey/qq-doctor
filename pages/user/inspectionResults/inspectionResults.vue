<template>
	
	<!-- 后面根据百分比对页面进行优化 ！！！！！！！！！ -->
	<view class="CTResWrapp" :style="{ height: this.app_height * 1 + 'rpx' }">
		<!-- 空白 -->
		<!-- 检验结果 -->
		<view class="resText">
			<text class="">CT分析结果</text>
		</view>
		<!-- 检测图片 -->
		<view class="CTIconWrapp">
			<view class="CTIcon1Wrapp">
				<image src="../../../static/img/user/res1.png" mode="" class="CTIcon1"></image>
			</view>
			<view class="goRightWrapp">
				<image src="../../../static/img/user/goRight.png" mode="" class="goRightIcon"></image>
			</view>
			<view class="CTIcon2Wrapp">
				<image src="../../../static/img/user/res1.png" mode="" class="CTIcon2"></image>
			</view>
		</view>

		<!-- 注意事项 -->
		<view class="noticWrapp">
			<view class="noticeText">
				<view class="notice1">
					<text class="">注意</text>
				</view>
				<view class="notice2">
					<text class="">CT图分析标注了各器官的具体形状,请就诊时交予医生判断病变情况</text>
				</view>
			</view>
		</view>

		<!-- 空白填充 -->
		<view class="" style="height: 30%; width: 100%;">

		</view>
		<!-- 下载图标 -->
		<view class="downLoadWrapp">
			<image src="../../../static/img/user/downLoad.png" mode="" class="downLoadIcon" @click="capture()"></image>
			<view class="downLoadText">
				保存图片
			</view>
		</view>

	</view>
</template>

<script>
	export default {
		data() {
			return {

				app_height: 0,
			}
		},
		methods: {
			capture() {

				uni.downloadFile({
					url: "https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/uni-app.png", // 这里是我已经请求好的图片数据
					success: (res) => {
						console.log(res, 'res')
						var tempFilePath = res.tempFilePath;
						uni.saveImageToPhotosAlbum({ // 然后调用这个方法
							filePath: tempFilePath,
							success: (res) => {
								uni.showToast({
									title: '图片已保存'
								})
							}
						})
					},
					fail: () => {
						uni.showToast({
							title: '图片保存失败'
						})
					}
				});
			},

		},
		onLoad() {
			const _this = this;
			uni.getSystemInfo({
				success: res => {
					console.log('手机可用高度:' + res.windowHeight * 2 + 'rpx');
					_this.app_height = res.windowHeight * 2;
				}
			});
		},


	}
</script>

<style lang="scss" scoped>
	.CTResWrapp {
		// :height: this.allHeightrpx ;
		width: 100%;
		background-color: #F7F7F7;
		display: flex;
		flex-direction: column;
	}

	.resText {
		margin-top: 74rpx;
		color: #000000;
		font-size: 36rpx;
		text-align: center;
	}

	.CTIconWrapp {
		margin-top: 30rpx;
		display: flex;
		flex-direction: row;
		justify-content: space-evenly;

		.CTIcon1Wrapp {
			.CTIcon1 {
				height: 376rpx;
				width: 284rpx;
			}
		}

		.goRightWrapp {
			display: flex;
			flex-direction: column;
			justify-content: center;

			.goRightIcon {
				height: 30.44rpx;
				width: 42rpx;
			}
		}

		.CTIcon2Wrapp {
			.CTIcon2 {
				height: 376rpx;
				width: 284rpx;
			}
		}
	}

	.noticWrapp {
		.noticeText {
			margin-left: 50rpx;

			.notice1 {
				margin-top: 20rpx;
				color: #FFBB24;
				// line-height: 70rpx;
				font-size: 48rpx;
				font-weight: normal;
			}

			.notice2 {
				width: 90%;
				margin-top: 30rpx;
				color: #000000;
				font-size: 30rpx;
			}
		}
	}

	// 下载
	.downLoadWrapp {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;

		.downLoadIcon {
			height: 96rpx;
			width: 96rpx;
		}

		.downLoadText {
			width: 100%;
			text-align: center;
			padding-top: 10rpx;
			color: #5E5E69;
			font-size: 28rpx;
		}
	}
</style>
<style>
page {
	background-color:#F7F7F7;
}
</style>