<template>
	<view class="doctor-info">
		<image :src="item.pic" mode="aspectFit"></image>
		<view class="doctor-info-detail">
			<view class="doctor-info-detail-title">{{item.name}}医生</view>
			<view class="doctor-info-detail-content">{{item.depart}} {{item.hospital}}</view>
			<view class="doctor-info-detail-footer">
				<image v-for="index in 5" :key="index" :src="getStarImage(index)" mode="aspectFill"></image>
				<text>({{item.evaluatenum}})</text>
				<view class="doctor-online" v-if="statusValue() == 1">
					在线
				</view>
				<view class="doctor-line" v-if="statusValue() == 0">
					离线
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			item:{
				type : Object,
				default(){
					return{
						id :"1",
						pic: "../../static/img/doctor2.png",
						name: "赵熙蒙",
						depart: "眼科",
						hospital: "赣州市第一人民医院",
						evaluate: "5",
						evaluatenum: "762",
						status: "0"
					}
				}
			}
		},
		data() {
			return {
			};
		},
		onLoad() {
			
		},
		methods: {
			evaluateValue() {
				return parseInt(this.item.evaluate);
			},
			getStarImage(index) {
				if (index <= this.evaluateValue()) {
					return "../../static/img/stars.png"; // 实心星星的图片路径
				} else {
					return "../../static/img/star.png"; // 空心星星的图片路径
				}
			},
			statusValue(){
				return parseInt(this.item.status);
			}
		}
	}
</script>

<style lang="scss" scoped>
	.doctor-info {
		padding-left: 25rpx;
		width: 750rpx;
		height: 200rpx;
		display: flex;
		flex-flow: row nowrap;
		align-items: center;

		image {
			width: 30%;
			height: 80%;
		}

		.doctor-info-detail {
			margin-left: 30rpx;
			width: 100%;
			height: 80%;
			display: flex;
			flex-flow: column nowrap;

			.doctor-info-detail-title {
				margin-top: 6rpx;
				width: 100%;
				height: 30%;
				font-size: 36rpx;
				font-weight: 900;
			}

			.doctor-info-detail-content {
				width: 100%;
				height: 30%;
				font-size: 32rpx;
				color: #aaaaaa;
				display: flex;
				flex-flow: row nowrap;
			}

			.doctor-info-detail-footer {
				width: 90%;
				height: 40%;
				display: flex;
				flex-flow: row nowrap;
				align-items: center;

				image {
					height: 80%;
					width: 10%;
				}
				text {
					margin-top:10rpx ;
					height: 80%;
					width: 20%;
					color: #aaaaaa;
				}

				.doctor-online {
					margin-left: 10rpx;
					width: 25%;
					height: 100%;
					background-color: #CCF5E1;
					border-radius: 10rpx;
					display: flex;
					align-items: center;
					justify-content: center;
					font-size: 32rpx;
					font-weight: 900;
					color: #00CC6A;
				}

				.doctor-line {
					margin-left: 10rpx;
					width: 25%;
					height: 100%;
					color: #CC4900;
					background-color: #F7E4D9;
					border-radius: 10rpx;
					display: flex;
					align-items: center;
					justify-content: center;
					font-size: 32rpx;
					font-weight: 900;

				}

			}
		}
	}
</style>