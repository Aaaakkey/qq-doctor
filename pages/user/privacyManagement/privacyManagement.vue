<template>
	<view>
		<!-- 系统权限管理 -->
		<view class="SystemPermissions">
			<text>系统权限管理</text>
		</view>

		<!-- 系统权限管理 -->
		<view class="SystemPermissionsWrapp">

			<view class="SPWrapp">
				<view class="SystemPermissions2">
					<view class="SystemPermissionsText">
						<text class="SystemPermissionsText1">系统权限管理</text>
						<text class="SystemPermissionsText2">\n管理您已授权在应用的系统权限</text>
					</view>

					<view class="permissionsWrapp">

						<!-- 箭头 -->
						<image src="../../../static/img/user/goRight2.png" mode="" class="goRight2Icon" @click="navToSPM()"></image>
					</view>
				</view>

			</view>
		</view>

		<!-- 推荐管理 -->
		<view class="SystemPermissions">
			<text>推荐管理</text>
		</view>

		<!-- 通用 -->
		<view class="SystemPermissionsWrapp">

			<view class="SPWrapp">
				<view class="SystemPermissions2">
					<view class="SystemPermissionsText">
						<text class="SystemPermissionsText1">病情智能识别分析推荐科类</text>
						<text class="SystemPermissionsText2">\n病情智能识别分析推荐科类</text>
					</view>

					<view class="permissionsWrapp">

				<!-- 		箭头 -->
					<!-- 	<image src="../../../static/img/user/goRight2.png" mode="" class="goRight2Icon"></image> -->
				      <switch checked color="#FFCC33" style="transform:scale(0.8)"/>
					</view>
				</view>

			</view>
		</view>

		<!-- 隐私说明 -->
		<view class="SystemPermissions">
			<text>隐私说明</text>
		</view>
		<!-- 隐私说明 -->
		<view class="privacyWrapp">
			<!-- 第一部分 -->
			<view class="privacyInformation">
				<view class="privacyInfo">
					<text class="privacyInfoText1" >隐私政策</text>
					<view class="goRightWrapp">
						<!-- 箭头 -->
						<image src="../../../static/img/user/goRight2.png" mode="" class="goRight2Icon" @click="navToPP()"></image>
					</view>
				</view>

				<!-- 第二部分  应用权限说明-->
				<view class="applicationPermissions">
					<view class="applicationInfo">
						<view class="applicationInfoText1">
							应用权限说明
						</view>
						<view class="applicationInfoText2">
							<image src="../../../static/img/user/goRight2.png" mode="" class="goRight2Icon"></image>
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

			};
		},
		methods : {
		    navToPP(){
				uni.navigateTo({
					url: "/pages/user/privacyPolicy/privacyPolicy"
				})
			},
			navToSPM(){
				uni.navigateTo({
					url: "/pages/user/systemPermissionManagement/systemPermissionManagement"
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.SystemPermissions {
		margin-top: 32rpx;
		margin-left: 46rpx;
		color: #404345;
		font-size: 28rpx;
	}



	.SystemPermissionsWrapp {
		margin-top: 28rpx;
		;
		height: 116rpx;
		width: 100%;

		display: flex;
		flex-direction: row;
		justify-content: center;


		.SPWrapp {
			width: 688rpx;
			height: 100%;
			background-color: white;
			border-radius: 24rpx;
			box-shadow: 0px 0px 4px black;
			display: flex;
			flex-direction: column;


			.SystemPermissions2 {
				height: 100%;
				width: 100%;
				// padding-left: 30rpx;		
				display: flex;
				flex-direction: row;
				justify-content: space-between;
				align-items: center;

				.SystemPermissionsText {
					margin-left: 20rpx;

					.SystemPermissionsText1 {
						color: #000000;
						font-feature-settings: "kern" on;
						font-size: 36rpx;
						font-weight: 500;


					}

					.SystemPermissionsText2 {
						color: #979797;
						font-feature-settings: "kern" on;
						font-size: 36rpx;
						font-weight: 500;
						font-size: 24rpx;

					}
				}


				.permissionsWrapp {
					display: flex;
					flex-direction: row;
					align-items: center;

					margin-left: 10rpx;

					.permissionsText {}

					.goRight2Icon {
						height: 30rpx;
						width: 30rpx;
						margin-right: 30rpx;

					}

				}

			}


		}
	}



	.privacyWrapp {
		margin-top: 28rpx;
		height: 263rpx;
		width: 100%;

		display: flex;
		flex-direction: row;
		justify-content: center;
		margin-bottom: 20rpx;

		.privacyInformation {
			width: 688rpx;
			height: 100%;
			background-color: white;
			border-radius: 24rpx;
			box-shadow: 0px 0px 4px black;
			display: flex;
			flex-direction: column;


			.privacyInfo {
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
                align-items: center;

				.privacyInfoText1 {
					color: #000000;
					font-feature-settings: "kern" on;
					font-size: 36rpx;
					font-weight: 500;
		

				}

				.goRightWrapp {
					display: flex;
					flex-direction: row;
					align-items: center;


					.MIText {
						margin-right: 20rpx;
						font-size: 35rpx;
						// line-height: 230rpx;
						transform: translateY(4rpx);
					}

					.headIcon {
						height: 106rpx;
						width: 110rpx;
						border-radius: 100%;
						margin-right: 25rpx;
					}

					.goRight2Icon {
						height: 30rpx;
						width: 30rpx;
						margin-right: 30rpx;
						transform: translateY(4rpx);
					}

				}

			}

			.applicationPermissions {
				height: 50%;
				width: 100%;
			

				padding-left: 30rpx;

				.applicationInfo {
					display: flex;
					flex-direction: row;
					justify-content: space-between;
					align-items: center;

					.applicationInfoText1 {

						color: #000000;
						font-feature-settings: "kern" on;
						font-size: 36rpx;
						font-weight: 500;
		

					}

					.applicationInfoText2 {		
						color: #000000;
						font-feature-settings: "kern" on;
						font-size: 26rpx;
						font-weight: 500;
						line-height: 150rpx;
					}

					.goRight2Icon {
						height: 30rpx;
						width: 30rpx;
						margin-right: 30rpx;
						transform: translateY(4rpx);
					}
				}

			}

		}
	}
</style>
<style>
page {
	background-color:#F7F7F7;
}
</style>