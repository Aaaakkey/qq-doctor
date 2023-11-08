<template>
	<view>
		
		<!-- 订单展示 -->
		<view class="orderOneWrapp">
			<view class="orderOne">
				<!-- 第一行文字 订单医院和状态 -->
				<view class="orderHospWrapp">
					<view class="orderHospText">
						赣州市第一人民医院
		
						<image src="../../../static/img/order/goRight.png" mode="" class="descIcon"
							></image>
					</view>
		
					<view class="orderState" v-if="!state1">
						已完成
					</view>
					<view class="orderState " v-if="state2">
						未使用
					</view>
					<view class="orderState" v-if="state3">
						退款
					</view>
					<view class="orderState" v-if="state4">
						待付款
					</view>
					<view class="orderState" v-if="!state5">
						待评价
					</view>
				</view>
				<!-- 第二部分 -->
				<view class="orderDescWrapp">
					<!-- 医生照片 -->
					<view class="docIconWrapp">
						<image src="../../../static/img/order/docIcon.png" mode="" class="docIcon"></image>
					</view>
					<!-- 订单详情 已经诊断结果按钮 -->
					<view class="orderDescAndButtonWrapp">
						<view class="creatTimeWrapp">
							创建时间: 2023-10-23 21:36
						</view>
						<view class="orderWayWrapp">
							<text>眼科线下挂号</text>
						</view>
						<view class="moneyWrapp">
							<text>实付: ￥27.00</text>
							<view class="resButton" @click="navToCTRes()" v-if="state1">
								<text class="resButtonText">诊断结果</text>
							</view>
						</view>
		
						<view class="buttonWrapp">
		
							<!-- 第一个按钮 -->
							<view class="delButton" v-if="state1">
								<text class="">删除订单</text>
							</view>
		
							<!--  -->
							<view class="serButton" v-if="state1">
								<text class="">售后服务</text>
							</view>
							<view class="serButton" v-if="isPay">
								<text class="">找朋友付</text>
							</view>
							<view class="serButton" v-if="refund">
								<text class="">退款</text>
							</view>
							<view class="serButton" v-if="refund">
								<text class="">退款进程</text>
							</view>
							<!-- 第三个按钮 -->
							<view class="rateButton" v-if="state1">
								<text class="">评价</text>
							</view>
							<view class="rateButton" v-if="state2">
								<text class="">订单信息</text>
							</view>
							<view class="rateButton" v-if="state3">
								<text class="">撤销退款</text>
							</view>
							<view class="rateButton" v-if="isPay">
								<text class="">继续付款</text>
							</view>
							<view class="rateButton" v-if="detail">
								<text class="">查看详情</text>
							</view>
						</view>
					</view>
				</view>
			</view>
		</view>
		<view class="DiaResWrapp">
			<!-- 诊断结果 -->
			<view class="diagnosticResultsWrapp">
				<!-- 医生图片 以及诊断详情 -->
				<view class="docIconAndDescWrapp">

					<view class="docIconWrapp">
						<image class="docIcon" src="../../../static/img/doctor2.png" mode=""></image>
					</view>
					<view class="DescWrapp">
						<view class="DescText">
							<text class="text1">订单号：4935975230644435337</text>
							<text class="text2">\n企桥医建线上诊断</text>
							<text class="text3">\n姓名: 赵熙蒙医生</text>
							<text class="text3">\n医院：赣州市第一人民医院</text>
							<text class="text3">\n科室：呼吸与危重症医学科</text>
						</view>
					</view>
				</view>
				<!-- 医生结论 -->
				<view class="conclusionWrapp">
					<text class="conclusionText1">医生结论</text>
					<text class="conclusionText2">\n病状特征初步分析:</text>
					<text
						class="conclusionText3">\n通过病人的病情描述以及远程视频线上诊断我初步断定为感冒症状，无大碍，请病人定时按照药单服用药物，保持充足的睡眠和休息以快速痊愈。</text>
				</view>
				<!-- 处方药单 -->
				<view class="prescriptionWrapp">
					<text class="prescriptionText1">处方药单</text>
					<text class="prescriptionText3">\n999感冒灵冲剂 一次两袋 一天三次
						\n阿莫西林胶囊 一次2颗 一天两次</text>
				</view>
			</view>
		</view>


	</view>
</template>

<script>
	export default {
		data() {
			return {
				// 订单是否完成
				state1: true,
				// 订单是否使用
				state2: false,
				//  退款中
				state3: false,
				// 待付款
				state4: false,
				// 待评价
				state5: false,
				keyword: "",
				// 订单是否支付
				isPay: false,
				// 是否退款
				refund: false,
				// 查看详情
				detail: false,
				list: ["1", "2", "3", "4", "5"],
			};
		}
	}
</script>

<style lang="scss" scoped>
	.DiaResWrapp {
		margin-top: 40rpx;
		height: 100%;
		width: 100%;
		display: flex;
		flex-direction: row;
		justify-content: center;
	}

	.diagnosticResultsWrapp {
		background-color: white;
		height: 100%;
		width: 680rpx;
		border-radius: 20rpx;
		display: flex;
		flex-direction: column;
		box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.3);
		padding-bottom: 50rpx;

		.docIconAndDescWrapp {
			
			display: flex;
			flex-direction: row;

			.docIconWrapp {
				.docIcon {
					margin-top: 30rpx;
					margin-left: 25rpx;
					height: 200rpx;
					width: 140rpx;
				}
			}

			.DescWrapp {
				line-height: 45rpx;
				display: flex;
				flex-direction: column;
				margin-top: 20rpx;
				margin-left: 30rpx;

				.DescText {

					.text1 {
						color: #000000;
					}

					.text2 {
						font-size: 35rpx;
						font-weight: 600;
						color: #FFBB24;

					}

					.text3 {
						color: #9E9E9E;
						font-size: 28rpx;
					}
				}
			}
		}

		.conclusionWrapp {
			line-height: 45rpx;
			margin-top: 20rpx;
			margin-left: 35rpx;

			.conclusionText1 {
				color: #FFBB24;
				font-size: 33rpx;
				font-weight: 600;
			}

			.conclusionText2 {
				color: black;
				font-size: 28rpx;
			}

			.conclusionText3 {

				font-family: 思源黑体;
				font-size: 28rpx;

			}
		}

		.prescriptionWrapp {
			line-height: 40rpx;
			margin-top: 20rpx;
			margin-left: 35rpx;

			.prescriptionText1 {
				color: #FFBB24;
				font-size: 33rpx;
				font-weight: 600;
			}

			.prescriptionText2 {
				color: black;
				font-size: 28rpx;
			}

			.prescriptionText3 {

				font-family: 思源黑体;
				font-size: 28rpx;

			}
		}

	}


	.orderOneWrapp {
		
		padding-bottom: 20rpx;
	    margin-top: 40rpx;
		height: 100%;
		width: 100%;
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;

		.orderOne {
			height: 100%;
			width: 680rpx;
			background-color: white;
			flex-direction: column;
			border-radius: 20rpx;
			box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
			padding-bottom: 20rpx;

			.orderHospWrapp {
				display: flex;
				flex-direction: row;
				justify-content: space-between;

				.orderHospText {
					font-size: 34rpx;
					font-weight: 550;
					margin-left: 20rpx;
					margin-top: 12rpx;
				}

				.descIcon {
					height: 28rpx;
					width: 38rpx;

				}

				.orderState {
					color: #9E9E9E;
					font-size: 24rpx;
					margin-right: 24rpx;
					margin-top: 14rpx;
					font-family: 思源黑体;
				}
			}

			.orderDescWrapp {
				display: flex;
				flex-direction: row;
				width: 100%;
				// background-color: #FFBB24;

				.docIconWrapp {

					// background-color: aqua;
					.docIcon {
						margin-top: 20rpx;
						margin-left: 32rpx;
						height: 140rpx;
						width: 132rpx;
					}
				}

				.orderDescAndButtonWrapp {
					display: flex;
					flex-direction: column;
					align-items: flex-start;
					width: 100%;
					// height: 60%;


					.creatTimeWrapp {
						margin-left: 26rpx;
						color: #AAAAAA;
						margin-top: 8rpx;
					}

					.orderWayWrapp {
						margin-left: 26rpx;
						display: flex;
						margin-top: 8rpx;
						color: #AAAAAA;
					}

					.moneyWrapp {
						margin-top: 8rpx;
						margin-left: 26rpx;
						display: flex;
						flex-direction: row;
						justify-content: space-between;
						width: 100%;
						color: #AAAAAA;


						.resButton {
							height: 41rpx;
							width: 124rpx;
							font-size: 24rpx;

							color: #FFBB24;
							border-style: solid;
							border-color: #FFBB24;
							border-radius: 30rpx;
							border-width: 3rpx;
							text-align: center;
							margin-right: 40rpx;


						}
					}

					.buttonWrapp {
						margin-top: 15rpx;
						display: flex;
						flex-direction: row;
						width: 80%;
						justify-content: space-between;
						margin-left: 90rpx;

						.delButton {
							height: 41rpx;
							width: 124rpx;
							font-size: 24rpx;
							color: #AAAAAA;
							border-style: solid;
							border-color: #AAAAAA;
							border-radius: 30rpx;
							border-width: 3rpx;
							text-align: center;

						}

						.serButton {
							height: 41rpx;
							width: 124rpx;
							font-size: 24rpx;

							color: #AAAAAA;
							border-style: solid;
							border-color: #AAAAAA;
							border-radius: 30rpx;
							border-width: 3rpx;
							text-align: center;

						}

						.rateButton {
							height: 41rpx;
							width: 124rpx;
							font-size: 24rpx;

							color: #FFBB24;
							border-style: solid;
							border-color: #FFBB24;
							border-radius: 30rpx;
							border-width: 3rpx;
							text-align: center;

						}

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