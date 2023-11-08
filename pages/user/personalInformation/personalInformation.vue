<template>
	<view>
		<!-- 个人信息 -->
		<view class="informationWrapp">
			<!--  -->
			<view class="information">
				<view class="informationUp">
					<text class="informationUpText1">头像</text>
					<view class="headIconWrapp">
						<!-- 头像 -->
						<image src="../../../static/img/user/headSculpture.png" mode="" class="headIcon"></image>
						<!-- 箭头 -->
						<image src="../../../static/img/user/goRight2.png" mode="" class="goRight2Icon"
							@click="updateImg"></image>
					</view>
				</view>
				<view class="informationDownWrapp">
					<view class="informationDown">
						<view class="informationDownText1">
							昵称
						</view>
						<view class="informationDownText2">
							simon0414
							<image src="../../../static/img/user/goRight2.png" mode="" class="goRight2Icon"
								@click="navTouserName()"></image>
						</view>

					</view>

				</view>
			</view>
		</view>


		<!-- 个人信息 -->
		<view class="information2Wrapp">
			<!--  -->
			<view class="information2">
				<view class="information2Up">
					<text class="information2UpText1">密码</text>
					<view class="headIcon2Wrapp">
						<!-- 密码 -->
						<view class="passwordWrapp">
							<text>******</text>
						</view>
						<!-- 箭头 -->
						<image src="../../../static/img/user/goRight2.png" mode="" class="goRight2Icon"
							@click="navToModifyPassword()"></image>
					</view>
				</view>
				<view class="information2DownWrapp">
					<view class="information2Down">
						<view class="information2DownText1">
							手机号
						</view>
						<view class="information2DownText2">
							18683927916
							<image src="../../../static/img/user/goRight2.png" mode="" class="goRight2Icon"
								@click="navToModifyPhone()"></image>
						</view>

					</view>

				</view>
			</view>
		</view>


	</view>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		methods: {
			navTouserName() {
				uni.navigateTo({
					url: "userName"
				})
			},
			navToModifyPassword() {
				uni.navigateTo({
					url: "modifyPassword"
				})
			},
			navToModifyPhone() {
				uni.navigateTo({
					url: "/pages/user/personalInformation/modifyPhone"
				})
			},
			
			// 更改头像
			updateImg() {
				uni.chooseImage({
					sourceType: ['album'], //从相册选择
					success: chooseImageRes => {
						console.log('成功', chooseImageRes);
						const tempFilePaths = chooseImageRes.tempFilePaths;
						uni.uploadFile({
							url: 'http://192.168.31.00:7005/file/upload', //仅为示例，非真实的接口地址
							filePath: tempFilePaths[0],
							name: 'file',
							header: {
								accessToken: uni.getStorageSync('accessToken'),
								platform: 2,
								type: 1
							},
							formData: {
								category: 3
							},
							success: res => {
								// console.log('上传成功', JSON.parse(res.data));
								// uploadFile上传成功后，根据和后台的约定msgCode判断接口调用状态
								let data = JSON.parse(res.data);
								// 成功：获取到头像
								if (data.msgCode == 200) {
									this.updateParams.headImg = JSON.parse(res.data).data;
									// 更新当前页面数据
									this.updateUserInfo();
								}
								// 失败报错
								if (data.msgCode == 500) {
									this.myToast(data.msgContent, 'none');
								}
								// 登陆过期
								if (data.msgCode == 311 || data.msgCode == 312) {
									myToast(
										data.msgContent,
										'none',
										() => {
											const res = uni.getStorageInfoSync();
											for (let s of res.keys) {
												// 保留账号密码
												if (s === 'pwd' || s === 'lang') {
													// console.log('保留账号密码', s)
												} else {
													uni.removeStorageSync(s);
												}
											}
											uni.reLaunch({
												url: '/pages/group/index'
											});
										},
										1000
									);
								}
							}
						});
					},
					fail: err => {
						this.myToast('图片上传失败', 'none');
					}
				});
			},

		}
	}
</script>

<style lang="scss" scoped>
	.informationWrapp {
		margin-top: 28rpx;
		height: 236rpx;
		width: 100%;
		// background-color: rebeccapurple;
		display: flex;
		flex-direction: row;
		justify-content: center;
		margin-bottom: 20rpx;

		.information {
			width: 688rpx;
			height: 100%;
			background-color: white;
			border-radius: 24rpx;
			box-shadow: 0px 0px 4px black;
			display: flex;
			flex-direction: column;


			.informationUp {
				height: 50%;
				width: 100%;
				// padding-top: 20rpx;
				border-bottom-style: solid;
				padding-left: 30rpx;
				border-color: #D8D8D8;
				border-width: 2rpx;
				display: flex;
				flex-direction: row;
				justify-content: space-between;

				.informationUpText1 {
					color: #000000;
					font-feature-settings: "kern" on;
					font-size: 36rpx;
					font-weight: 500;
					line-height: 118rpx;

				}

				.headIconWrapp {
					display: flex;
					flex-direction: row;
					align-items: center;

					.headIcon {
						height: 106rpx;
						width: 110rpx;
						border-radius: 100%;
						margin-right: 25rpx;
					}


				}

			}

			.informationDownWrapp {
				height: 50%;
				width: 100%;
				line-height: 118rpx;

				padding-left: 30rpx;

				.informationDown {
					display: flex;
					flex-direction: row;
					justify-content: space-between;

					.informationDownText1 {

						color: #000000;
						font-feature-settings: "kern" on;
						font-size: 36rpx;
						font-weight: 500;

					}

					.informationDownText2 {

						color: #000000;
						font-feature-settings: "kern" on;
						font-size: 26rpx;
						font-weight: 500;

					}
				}

			}
		}
	}

	.information2Wrapp {
		margin-top: 28rpx;
		height: 236rpx;
		width: 100%;
		// background-color: rebeccapurple;
		display: flex;
		flex-direction: row;
		justify-content: center;
		margin-bottom: 20rpx;

		.information2 {
			width: 688rpx;
			height: 100%;
			background-color: white;
			border-radius: 24rpx;
			box-shadow: 0px 0px 4px black;
			display: flex;
			flex-direction: column;


			.information2Up {
				height: 50%;
				width: 100%;
				// padding-top: 20rpx;
				border-bottom-style: solid;
				padding-left: 30rpx;
				border-color: #D8D8D8;
				border-width: 2rpx;
				display: flex;
				flex-direction: row;
				justify-content: space-between;

				.information2UpText1 {
					color: #000000;
					font-feature-settings: "kern" on;
					font-size: 36rpx;
					font-weight: 500;
					line-height: 118rpx;

				}

				.headIcon2Wrapp {
					display: flex;
					flex-direction: row;
					align-items: center;

					.passwordWrapp {
						line-height: 118rpx;
						font-size: 30rpx;
						padding-right: 10rpx;
						transform: translateY(8rpx);
					}

					.headIcon2 {
						height: 106rpx;
						width: 110rpx;
						border-radius: 100%;
						margin-right: 25rpx;

					}


				}

			}

			.information2DownWrapp {
				height: 50%;
				width: 100%;
				line-height: 118rpx;

				padding-left: 30rpx;

				.information2Down {
					display: flex;
					flex-direction: row;
					justify-content: space-between;

					.information2DownText1 {

						color: #000000;
						font-feature-settings: "kern" on;
						font-size: 36rpx;
						font-weight: 500;

					}

					.information2DownText2 {

						color: #000000;
						font-feature-settings: "kern" on;
						font-size: 26rpx;
						font-weight: 500;

					}
				}

			}
		}
	}

	.goRight2Icon {
		height: 30rpx;
		width: 30rpx;
		margin-right: 30rpx;
		transform: translateY(4rpx);
	}
</style>
<style>
	page {
		background-color: #F7F7F7;
	}
</style>