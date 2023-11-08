<template>
	<view class="online-order-success">
		<view class="online-order-success-title">
			您的线上预约订单已支付,稍后您可以去您的订单中心查看
		</view>
		<view style="margin-top: 120rpx; font-weight: 900; font-size: 42rpx;">订单号:</view>
		<view style="margin-top: 20rpx;">4935975230644435337</view>
		<view  style="font-weight: 900; margin-top: 20rpx; margin-right: 140rpx;">
			姓名: 赵熙蒙
		</view>
		<view style="font-weight: 900; margin-top: 20rpx; margin-right: 33rpx;">
			手机号: 18683927916
		</view>
		<view style="font-weight: 900; margin-top: 20rpx; margin-left: 90rpx; margin-bottom: 300rpx;">
			时间段: 2023年10月23日18:00
		</view>
		<button form-type="submit" class="online-success-submit">补充ct图监测病变</button>
		<button form-type="submit" class="online-success-submit" style="background-color: #B1B1B1;" @click="backMainFront">返回主页</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				way: "",
				orderId:""
			};
		},
		methods:{
			backMainFront(){
				uni.switchTab({
					url:"/pages/main/mainfront"
				})
			}
		},
		onLoad(e) {
			this.way = e.way;
			this.orderId = e.id;
			if(this.way == "online"){
				uni.setNavigationBarTitle({
					title: "线上预约成功"
				})
			}else{
				uni.setNavigationBarTitle({
					title: "挂号预约成功"
				})
			}
		}
	}
</script>

<style lang="scss">
	.online-order-success {
		width: 100vw;
		height: 100vh;
		background-image: url("../../static/img/background1.png");
		background-repeat: repeat;
		background-size: cover;
		display: flex;
		flex-flow: column nowrap;
		align-items: center;

		.online-order-success-title {
			margin-top: 150rpx;
			text-align: center;
			width: 580rpx;
			height: 100rpx;

			line-height: 50rpx;
			font-weight: 900;
		}
		.online-success-submit{
			width: 550rpx;
			border-radius: 50rpx;
			background-color: #3B77CE;
			color: #ffffff;
			height: 120rpx;
			line-height: 120rpx;
			margin-bottom: 20rpx;
		}

	
	}
</style>