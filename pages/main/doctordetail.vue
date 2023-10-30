<template>
	<view>
		<image :src="item.picurl"></image>
		<view class="doctor-detail-title">
			<view class="doctor-detail-name">
				{{item.name}}医生
			</view>

			<view class="doctor-detail-star">
				<view class="doctor-detail-star-image">
					<image src="../../static/img/collection.png" mode="aspectFit"></image>
				</view>
				<view class="doctor-detail-star-content">
					{{item.star}}
				</view>
			</view>
		</view>
		<view class="doctor-detail-depart">
			{{item.depart}}
			<view class="space"></view>
			{{item.hospital}}
		</view>
		<view class="doctor-detail-desc">
			{{item.desc}}
		</view>
		<view class="doctor-detail-conment">
			<view class="doctor-detail-conment-1">
				<text class="doctor-conment-title">医龄</text>
				<text class="doctor-conment-res">{{item.worktime}}
					<text class="doctor-conment-suffix">年</text>
				</text>
			</view>
			<view class="doctor-detail-conment-2">
				<text class="doctor-conment-title">问诊数</text>
				<text class="doctor-conment-res">{{item.visits}}
					<text class="doctor-conment-suffix">人</text>
				</text>

			</view>
			<view class="doctor-detail-conment-3">
				<text class="doctor-conment-title">评价均分</text>
				<text class="doctor-conment-res">{{item.evaluate}}
					<text class="doctor-conment-suffix">分</text>
				</text>
			</view>
		</view>
		<view class="doctor-detail-clicks">
			<view class="doctor-detail-clicks-1" @click="getConnect(did)">
				<image src="../../static/img/connect1.png"></image>
			</view>
			<view class="doctor-detail-clicks-2">
				<view class="doctor-detail-click">线上预约</view>
			</view>
			<view class="doctor-detail-clicks-2">
				<view class="doctor-detail-click">挂号预约</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				item: {
					picurl: "../../static/img/doctor2.png",
					name: "赵熙蒙",
					depart: "眼科",
					hospital: "赣州市第一人民医院",
					star: "256",
					desc: "赵熙蒙医生，毕业于江西理工大学，是赣州市知名的眼科医生，对于病人热情耐心，深入耕耘眼科13年，是非常值得信赖的一名医生，如果您有眼科类疾病，那么找他绝对没错！",
					worktime: "13",
					visits: "1221",
					evaluate: "5"
				},
				did: "0315121"
			};
		},
		onLoad(e) {
			this.did = e.did
		},
		methods:{
			getConnect(did){
				uni.navigateTo({
					url:`/pages/main/messagetable?did=${did}`
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	image {
		width: 750rpx;
		height: 600rpx;
	}

	.doctor-detail-title {
		width: 750rpx;
		height: 100rpx;
		display: flex;
		flex-flow: row nowrap;

		.doctor-detail-name {
			padding: 15rpx;
			width: 70%;
			height: 100%;
			margin-left: 30rpx;
			font-size: 48rpx;
			font-weight: 900;
		}

		.doctor-detail-star {
			flex: 1;
			margin-right: 30rpx;
			display: flex;
			flex-flow: column nowrap;
			justify-content: center;
			align-items: center;

			.doctor-detail-star-image {
				width: 60%;
				height: 60%;

				image {
					width: 100%;
					height: 100%;
				}

				;

			}

			.doctor-detail-star-content {
				color: #9E9E9E;
				font-size: 36rpx;

			}
		}
	}

	.doctor-detail-depart {
		font-size: 32rpx;
		color: #AAAAAA;
		margin-left: 45rpx;
		margin-bottom: 15rpx;
		height: 50rpx;

		.space {
			width: 30rpx;
			display: inline-block;
		}
	}

	.doctor-detail-desc {
		font-size: 32rpx;
		color: #AAAAAA;
		height: 300rpx;
		width: 650rpx;
		margin-left: 45rpx;
		text-align: justify;
	}

	.doctor-detail-conment {
		margin-left: 45rpx;
		width: 650rpx;
		height: 170rpx;
		display: flex;
		flex-flow: row nowrap;
		font-size: 36rpx;

		.doctor-detail-conment-1 {
			flex: 1;
			display: flex;
			flex-flow: column nowrap;
			align-items: center;
			border-right: 2px rgba(202, 204, 207, 0.5) solid;
			height: 80%;
		}

		.doctor-detail-conment-2 {
			flex: 1;
			display: flex;
			flex-flow: column nowrap;
			align-items: center;
			border-right: 2px rgba(202, 204, 207, 0.5) solid;
			height: 80%;
		}

		.doctor-detail-conment-3 {
			flex: 1;
			display: flex;
			flex-flow: column nowrap;
			align-items: center;
		}

		.doctor-conment-title {
			font-weight: 900;
			margin-bottom: 30rpx;
		}

		.doctor-conment-res {
			color: #2B92E4;
			font-weight: 900;
			font-size: 50rpx;

			.doctor-conment-suffix {
				font-size: 32rpx;
				color: #AAAAAA;
			}
		}
	}

	.doctor-detail-clicks {
		width: 750rpx;
		height: 150rpx;
		display: flex;
		flex-flow: row nowrap;
		.doctor-detail-clicks-1{
			margin-right: 20rpx;
			margin-left: 30rpx;
			width: 20%;
			padding: 10px;
			image{
				width: 100%;
				height: 100%;
			}
		}
		.doctor-detail-clicks-2{
			flex: 1;
			display: flex;
			flex-flow: row nowrap;
			align-items: center;
			.doctor-detail-click{
				width: 85%;
				border-radius: 20rpx;
				height: 75%;
				background-color: #00CC6A;
				display: flex;
				flex-flow: row nowrap;
				justify-content: center;
				align-items: center;
				font-weight: 600;
				color: #F9F9FA;
			}
		}
	}
</style>