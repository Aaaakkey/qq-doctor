<template>
	<view class="onlineorder">
		<view class="onlineorder-info">
			<view class="onlineorder-info-left">
				<view style="margin-left: 40rpx; font-size: 32rpx; margin-top: 10rpx;">订单信息</view>
				<view style="margin-bottom: 10rpx;margin-top: 30rpx; margin-left: 80rpx; font-size: 26rpx">
					姓名:{{orderInfo.name}}
				</view>
				<view style=" margin-left: 80rpx; font-size: 26rpx">
					电话:{{orderInfo.phone}}
				</view>
				<view style=" margin-left: 80rpx;margin-top: 10rpx font-size: 26rpx">
					订单号:
					<p></p>
					<view style="font-size: 26rpx">{{orderInfo.orderId}}</view>

				</view>
				<view style=" margin-left: 80rpx;color: #9E9E9E; margin-top: 50rpx; font-size: 26rpx">
					请在{{remainingTime}}之内支付订单</view>
			</view>
			<view class="onlineorder-info-right">
				<view style=" margin-bottom: 10rpx;">病人信息:</view>
				<image :src="orderInfo.pic" mode=""></image>
				<view style="margin-left: 50rpx; color: #9e9e9e;">{{orderInfo.patientName}}</view>
			</view>
		</view>

		<view class="onlineorder-pay">
			<scroll-view scroll-y>
				<radio-group name="payway" @change="radioSelect">
					<view class="onlineorder-pay-way" v-for="(item,index) in payway" :key="item.value">
						<view class="onlineorder-pay-way-context">
							<image :src="item.pic"></image>
							{{item.way}}
						</view>
						<label class="onlineorder-pay-way-radio">
							<radio :value="item.value" color="#FFCB45" :checked="index == this.selected" />
						</label>
					</view>
				</radio-group>
			</scroll-view>

		</view>
		<view class="onlineorder-pay-submit">
			<view class="onlineorder-pay-submit-text">总计:{{orderInfo.price}}</view>
			<view class="onlineorder-pay-submit-button" @click="payForOrder(orderInfo.orderId,orderInfo.price)">支付
			</view>
		</view>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				orderInfo: {
					orderId: "4935975230644435337",
					name: "赵熙蒙",
					phone: "18683927916",
					patientName: "周嘉兴",
					pic: "../../static/img/patient1.png",
					price: "41.00"
				},
				remainingTime: 15 * 60, // 初始剩余时间为15分钟，单位为秒,
				payway: [{
					pic: "../../static/img/wechat.png",
					way: "微信支付",
					value: "wechat"
				}, {
					pic: "../../static/img/alipay.png",
					way: "支付宝支付",
					value: "alipay"
				}],
				selected: "0",
				selectedValue: "wechat",
				way : "",
				orderId : ""
			};
		},
		onLoad(e) {
			this.way = e.way;
			this.orderId = e.id;
			if(this.way == "online"){
				uni.setNavigationBarTitle({
					title: "线上预约订单"
				})
			}else{
				uni.setNavigationBarTitle({
					title: "挂号预约订单"
				})
			}
			
			// 拿orderId来查订单数据
			// 使用计时器每秒减少剩余时间
			const timer = setInterval(() => {
				this.remainingTime--;
				// 如果剩余时间为0，则取消计时器
				if (this.remainingTime === 0) {
					clearInterval(timer);
				}
			}, 1000);
		},
		methods: {
			radioSelect(event) {
				for (let i = 0; i < this.payway.length; i++) {
					if (this.payway[i].value === event.detail.value) {
						this.selected = i;
						break;
					}
				}
				this.selectedValue = event.detail.value;
			},
			payForOrder(orderId, price) {
				//对订单进行支付完成之后跳转
				uni.redirectTo({
					url : `/pages/main/onlineordersuccess?id=${this.orderId}&way=${this.way}`
				})
			}
		},

	}
</script>

<style lang="scss" scoped>
	.onlineorder {
		width: 100vw;
		height: 100vh;
		background-image: url("../../static/img/background1.png");
		background-repeat: repeat;
		background-size: cover;
		display: flex;
		flex-flow: column nowrap;
		align-items: center;

		&::after {
			content: '';
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			background-color: #F8F8F8;
			z-index: -1;
		}

		.onlineorder-info {
			box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.3);
			margin-top: 60rpx;
			width: 700rpx;
			height: 400rpx;
			display: flex;
			flex-flow: row nowrap;
			background-color: #ffffff;
			border-radius: 20rpx;

			.onlineorder-info-left {
				width: 65%;
			}

			.onlineorder-info-right {
				flex: 1;

				image {

					width: 80%;
					height: 65%;
				}
			}
		}

		.onlineorder-pay {
			margin-top: 50rpx;
			width: 700rpx;
			height: 700rpx;
			background-color: #ffffff;
			box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.3);
			display: flex;
			flex-flow: column nowrap;
			border-radius: 20rpx;

			.onlineorder-pay-way {
				margin: 20rpx;
				width: 660rpx;
				height: 150rpx;
				background-color: #ffffff;
				box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.3);
				border-radius: 20rpx;
				display: flex;
				flex-flow: row nowrap;
				align-items: center;
				color: #9E9E9E;

				.onlineorder-pay-way-context {
					width: 90%;

					image {
						margin: 25rpx;
						width: 100rpx;
						height: 100rpx;
					}

					display: flex;
					flex-flow: row nowrap;
					align-items: center;
				}

				.onlineorder-pay-way-radio {
					margin-right: 20rpx;

				}
			}
		}

		.onlineorder-pay-submit {
			border-radius: 70rpx;
			margin-top: 100rpx;
			width: 700rpx;
			height: 100rpx;
			background-color: #383838;
			display: flex;
			flex-flow: row nowrap;
			justify-content: space-between;
			align-items: center;

			.onlineorder-pay-submit-text {
				color: #ffffff;
				margin-left: 30rpx;
			}

			.onlineorder-pay-submit-button {
				text-align: center;
				border-radius: 70rpx;
				width: 250rpx;
				height: 100rpx;
				background-color: #016340;
				;
				line-height: 100rpx;
				color: #ffffff;
			}
		}

	}
</style>