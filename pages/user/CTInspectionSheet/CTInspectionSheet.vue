<template>
	<view class="CTWrapp">
		<!-- 展示CT检验单列表 -->
		<view class="CTListWrapp">
			<view class="CTOne" v-for="(item1,index1) in list" :key="index1">
				<!-- 提交医生 分析状态 -->
				<view class="CTOneTextWrapp">
					<!-- 分析医生 -->
					<view class="text1">
						<text>提交给赵熙蒙医生的CT图</text>
					</view>
					<!-- 分析状态 -->
					<view class="text2">
						<text v-if="state1">分析中</text>
						<text v-if="state2" style="color: #FFBB24;">已完成</text>
					</view>
				</view>

				<!-- 图片 提交时间 诊断结果按钮 -->
				<view class="CTOneCentralSectionWrapp">
					<!-- 图片 -->
					<view class="CTOneIconWrapp">
						<image src="../../../static/img/user/ct.png" mode="" class="CTOneIcon"></image>
					</view>
					<!-- 提交时间 检测病变 诊断结果 -->
					<view class="CTOneCentralSectionRightWrapp">
						<!--提交时间 检测病变  -->
						<view class="CTOneCentralSectionRightText">
							<text>提交时间: 2023-10-23 21:36</text>
							<text>\n监测病变</text>
						</view>
						<!-- 诊断结果按钮 -->
						<view class="resButtonWrapp">

							<view class="resButton" @click="navToCTRes()">
								诊断结果
							</view>

						</view>
					</view>
				</view>

				<!-- 售后服务 评价 -->
				<view class="serviceAndRateWrapp">
					<!-- 评价 -->
					<view class="serviceAndRateText1">
						评价
					</view>
					<!-- 售后服务 -->
					<view class="serviceAndRateText2">售后服务</view>

				</view>
			</view>

		</view>


	</view>
</template>

<script>
	export default {
		data() {
			return {
				list: ["1", "2", "3", "4"],
				state1 : false,
				state2 : true,
				
			}
		},
		methods: {
          navToCTRes(){
			  uni.navigateTo({
			  	url:"/pages/user/inspectionResults/inspectionResults"
			  })
		  }
		}
	}
</script>

<style lang="scss" scoped>
	.CTWrapp {
		// height: 100vh;
		width: 100%;
		// background-color: #F7F7F7;
		display: flex;
		flex-direction: column;
	}

	.CTListWrapp {
		margin-top: 60rpx;
		display: flex;
		flex-direction: column;
		background: #F7F7F7;
		align-items: center;

		.CTOne {
			width: 680rpx;
			height: 246rpx;
			background-color: white;
			border-radius: 20rpx;
			// border-style: solid;
			display: flex;
			flex-direction: column;
			margin-bottom: 40rpx;
			border-radius: 24rpx;
			box-shadow: 0px 0px 4px black;

			.CTOneTextWrapp {

				display: flex;
				flex-direction: row;
				justify-content: space-between;


				.text1 {

					color: #9E9E9E;
					font-size: 30rpx;
					padding-left: 32rpx;
					padding-top: 22rpx;
				}

				.text2 {
					// background-color: black;
					color: #9E9E9E;
					font-size: 30rpx;
					padding-right: 22rpx;
					padding-top: 22rpx;
				}
			}
		}

		.CTOneCentralSectionWrapp {
			height: 134rpx;
			width: 680rpx;
			display: flex;
			flex-direction: row;

			.CTOneIconWrapp {

				.CTOneIcon {
					height: 106rpx;
					width: 80rpx;
					margin-left: 46rpx;
					margin-top: 6rpx;
				}
			}

			.CTOneCentralSectionRightWrapp {
				display: flex;
				flex-direction: column;

				.CTOneCentralSectionRightText {
					padding-left: 66rpx;
					color: #AAAAAA;
					font-size: 24rpx;
					margin-top: 10rpx;
				}

				.resButtonWrapp {

					.resButton {
						height: 52rpx;
						width: 150rpx;
						font-size: 24rpx;
						color: #FFBB24;
						border-style: solid;
						border-color: #FFBB24;
						border-radius: 30rpx;
						border-width: 3rpx;
						text-align: center;
						margin-left: 386rpx;
						line-height: 42rpx;
					}

				}
			}
		}

		.serviceAndRateWrapp {
			display: flex;
			flex-direction: row-reverse;
			// padding-bottom: 10rpx;
			margin-top: 10rpx;

			.serviceAndRateText1 {
				color: #FFBB24;
				font-size: 24rpx;
				margin-right: 40rpx;
			}

			.serviceAndRateText2 {
				color: #9E9E9E;
				font-size: 24rpx;
				margin-right: 40rpx;
			}
		}
	}
</style>
<style>
page {
	background-color:#F7F7F7;
}
</style>