<template>
	<view>
		<!-- 评价 -->
		<view class="evaluativeInformationWrapp">
			<view class="evaluativeInformation">
				<!-- 头像 用户名 和评分 -->
				<view class="headUserAndRateWrapp">
					<image src="../../../static/img/user/headSculpture.png" mode="" class="headIcon"></image>
					<view class="userAndRateWrapp">
						<!-- 用户名 -->
						<text class="userNameText">
							simon
						</text>
						<uni-rate :readonly="true" :value="rateValue" size="18" style="margin-top: 10rpx;" />
					</view>
				</view>
				<!-- 评论 文字和图片 -->
				<view class="evaluativeInformationTextWrapp">
					<view class="evaluativeText">
						11111111111111111111111111111111111111111111111111111111111111111
						11111111111111111
						11111
						11111111
					</view>
					<view class="evaluativeIconWrapp">
						<image src="../../../static/img/doctor2.png" mode="aspectFit" class="evaluativeIcon"></image>
						<image src="../../../static/img/doctor2.png" mode="aspectFit" class="evaluativeIcon"></image>
						<image src="../../../static/img/doctor2.png" mode="aspectFit" class="evaluativeIcon"></image>
						<image src="../../../static/img/doctor2.png" mode="aspectFit" class="evaluativeIcon"></image>
						<image src="../../../static/img/doctor2.png" mode="aspectFit" class="evaluativeIcon"></image>
						
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
				rateValue: 5,

			};
		}
	}
</script>

<style lang="scss" scoped>
	.evaluativeInformationWrapp {
		margin-top: 30rpx;
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: row;
		justify-content: center;
		margin-bottom: 200rpx;

		.evaluativeInformation {
			background-color: #FFFFFF;
			height: 100%;
			width: 690rpx;
			border-radius: 20rpx;
			box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.3);

			.headUserAndRateWrapp {
				display: flex;
				flex-direction: row;
				margin-top: 18rpx;


				.headIcon {
					margin-top: 10rpx;
					height: 110rpx;
					width: 110rpx;
					border-radius: 100%;
					margin-left: 30rpx;

				}

				.userAndRateWrapp {
					margin-left: 26rpx;
					margin-top: 20rpx;
					display: flex;
					flex-direction: column;

					.userNameText {
						font-size: 36rpx;
						font-weight: 600;
						font-feature-settings: "kern" on;
					}
				}

			}

			.evaluativeInformationTextWrapp {
				display: flex;
				flex-direction: column;

				.evaluativeText {
					display: flex;
					flex-direction: row;
					padding-left: 80rpx;
                    overflow-wrap: anywhere;
					width: 680rpx;
					margin-top: 20rpx;
					font-size: 26rpx;
					line-height: 40rpx;
						background-color: #FFFFFF;

				}
				.evaluativeIconWrapp{
					display: flex;
					flex-direction: row;
					justify-content: flex-start;
					background-color: #FFFFFF;
					flex-wrap: wrap;
				
					.evaluativeIcon{
							border-radius: 20rpx;
								background-color: #FFFFFF;
					}
				}

			}
		}


	}
</style>
<style>
	page {
		background-color: #F7F7F7;

	}
</style>