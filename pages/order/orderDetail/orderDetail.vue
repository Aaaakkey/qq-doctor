<template>
	<view>
		<!-- 订单的状态 -->
		<view class="orderStateWrapp">
			<text v-if="!state1">订单已完成</text>
			<text v-if="state2">订单已退款</text>
			<text v-if="state3">订单未使用</text>
		</view>
		<!-- 致电 评价 重新下单 -->
		<view class="callAndRateWrapp">
			<view class="callAndRate">
				<view class="thankTextWrapp">
					感谢您对企桥医健的信任,祝愿您身体健康!
				</view>
				<view class="callRate">
					<view class="callWrapp">
						<image src="../../../static/img/user/customerService.png" mode="" class="callIcon"></image>
						<view class="callText">
							致电医院
						</view>
					</view>
					<view class="callWrapp">
						<image src="../../../static/img/user/customerService.png" mode="" class="callIcon"></image>
						<view class="callText">
							致电医生
						</view>
					</view>
					<view class="callWrapp" v-if="!state1">
						<image src="../../../static/img/order/rate.png" mode="" class="callIcon"></image>
						<view class="callText"  @click="navToEvaInfo()">
							评价信息
						</view>
					</view>
					<view class="callWrapp" v-if="state2">
						<image src="../../../static/img/order/afterSales.png" mode="" class="callIcon"></image>
						<view class="callText">
							重新下单
						</view>
					</view>
					

				</view>
			</view>

		</view>

		<!-- 医生医院的基本信息 -->
		<view class="hospAndDocDescWrapp">
			<view class="hospAndDocDesc">
				<view class="hospDescWrapp">
					赣州市第一人民医院
				</view>
				<view class="docDescTextWrapp">
					医生基本信息
				</view>
				<!-- 医生图片以及详细信息 -->
				<view class="docIconAndDescWrapp">
					<!-- 医生图片 -->
                   <view class="docIconWrapp">
                   	 <image src="../../../static/img/order/docIcon.png" mode="" class="docIcon"></image>
                   </view>
				   <!-- 医生详情 -->
				   <view class="docDescWrapp">
				   	<text>眼科</text>
					<text>\n联系电话: </text>
					<text>\n18683927916</text>
					<text>\n0888-9661245</text>
					<text>\n办公室:</text>
					<text>\n赣州市第一人民医院</text>
					<text>\n4F208室</text>
				   </view>
				</view>
			</view>


		</view>
	
	    <!-- 订单信息 -->
		<view class="orderDescWrapp">
			
			<view class="orderDesc">
					<!-- 订单信息文字 -->
				<view class="orderDescText1">
					订单信息
				</view>
				<!-- 订单详情文字 -->
				<view class="orderDescText2">
					<text>订单ID: 4935975230644435337</text>
					<text>\n创建时间: 2023-10-21 18:56</text>
					<text>\n完成时间: 2023-10-22 19:00</text>
					<text v-if="!state1">\n支付方式: 微信支付</text> 		<text v-if="state2">\n支付方式: 微信支付(原路返回)</text>
					<text>\n姓名: 赵熙蒙</text>
					<text>\n手机号: 18683927916</text>
				</view>
				<!-- 病人信息 以及图片 -->
				<view class="patientWrapp">
					<text>病人信息:</text>
					<view class="patientIconWrapp">
						<image src="../../../static/img/order/patientIcon.png" mode="" class="patientIcon"></image>
						<view class="">
							周嘉兴
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
                state1 : false,
				state2 : false,
				state3 : false,
				state4 : false
				
			}
		},
		methods: {
           navToEvaInfo(){
			   uni.navigateTo({
			   	url: "/pages/order/evaluativeInformation/evaluativeInformation"
			   })
		   }
		}
	}
</script>

<style lang="scss" scoped>
	.orderStateWrapp {
		margin-left: 32rpx;
		margin-top: 35rpx;
		font-size: 48rpx;
		font-weight: 600;
	}

	.callAndRateWrapp {
		margin-top: 32rpx;
		display: flex;
		flex-direction: row;
		height: 200rpx;
		width: 100%;
		justify-content: center;

		.callAndRate {
			width: 680rpx;
			background-color: white;
			border-radius: 20rpx;
box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.3);
			// border-style: solid;
			display: flex;
			flex-direction: column;

			.thankTextWrapp {
				color: #979797;
				font-weight: 600;
				width: 100%;
				font-size: 24rpx;
				padding-left: 10rpx;
				padding-top: 8rpx;
				border-bottom-style: solid;
				border-color: #D8D8D8;
				padding-bottom: 30rpx;
				border-width: 2rpx;
			}

			.callRate {
				margin-top: 15rpx;
				margin-left: 60rpx;
				width: 80%;
				display: flex;
				flex-direction: row;
				justify-content: space-between;

				.callWrapp {
					display: flex;
					flex-direction: column;
					align-items: center;
					justify-content: center;

					.callIcon {
						height: 52rpx;
						width: 52rpx;
					}

					.callText {
						padding-top: 5rpx;
						color: #9E9E9E;
						font-size: 24rpx;
					}
				}
			}
		}


	}

	.hospAndDocDescWrapp {
		display: flex;
		flex-direction: row;
		justify-content: center;
		margin-top: 32rpx;

		.hospAndDocDesc {
			background-color: white;
			width: 680rpx;
			height: 520rpx;
			display: flex;
			flex-direction: column;
		box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.3);
			border-radius: 20rpx;

			.hospDescWrapp {
				padding-left: 20rpx;
				padding-top: 28rpx;
				color: #000000;
				font-size: 48rpx;
			}

			.docDescTextWrapp {
				color: #000000;
				font-size: 28rpx;
				padding-left: 20rpx;
				padding-top: 13rpx;
			}

           .docIconAndDescWrapp{
			   margin-top: 44rpx;
			   display: flex;
			   flex-direction: row;
			   
			   .docIconWrapp{
				   
				   margin-left: 26rpx;
				   .docIcon{
					height: 200rpx;
					width: 200rpx;
				   }
			   }
			   
			   .docDescWrapp{
				   font-size: 24rpx;
				   margin-left: 30rpx;
			   }
		   }

		}


	}

    .orderDescWrapp{
		margin-top: 32rpx;
		display: flex;
		flex-direction: row;
		justify-content: center;
		width: 100%;
		height: 590rpx;
		
		.orderDesc{
			width: 680rpx;
			background-color: white;
			border-radius: 20rpx;
			box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.3);
			display: flex;
			flex-direction: column;
			
		    .orderDescText1{
				margin-left: 26rpx;
				margin-top: 24rpx;
				font-size: 48rpx;
			}
			.orderDescText2{
				margin-top: 10rpx;
				margin-left: 44rpx;
				line-height: 50rpx;
			}
			.patientWrapp{
				margin-left: 44rpx;
				display: flex;
				flex-direction: row;
				
				.patientIconWrapp{
					margin-top: 10rpx;
					margin-left: 18rpx;
					display: flex;
					flex-direction: column;
					align-items: center;
					color: #677294;
					font-size: 28rpx;
					.patientIcon{
						width: 200rpx;
						height: 148rpx;
						border-radius: 20rpx;
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