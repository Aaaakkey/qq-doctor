<template>
	<view>
		<view class="DoctorBaseInfo-doctor">
			<view class="DoctorBaseInfo-doctor-left">
				<image :src="item.pic"></image>
			</view>
			<view class="DoctorBaseInfo-doctor-right">
				<view class="DoctorBaseInfo-doctor-right-text1">
					{{item.name}}医生
				</view>
				<view class="DoctorBaseInfo-doctor-right-text2">
					{{item.hospital}}{{item.depart}}
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: "DoctorBaseInfo",
		data() {
			return {

			};
		},
		props: {
			item: {
				type: Object,
				default () {
					return {
						pic: "../../static/img/doctor2.png",
						name: "赵熙蒙",
						hospital: "赣州市第一人民医院",
						depart: "眼科"
					}
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
	.DoctorBaseInfo-doctor {
		position: fixed;
		width: 750rpx;
		height: 150rpx;
		background-color: #ffffff;
		border-bottom: 1px #E3E3E3 solid;
		display: flex;
		flex-flow: row nowrap;
		align-items: center;
		z-index: 999;
		.DoctorBaseInfo-doctor-left {
			margin-top: 10rpx;
			padding-left: 50rpx;
			width: 27%;

			image {
				width: 120rpx;
				height: 120rpx;
				border-radius: 100%;
			}
		}

		.DoctorBaseInfo-doctor-right {
			margin-top: 10rpx;
			margin-bottom: 35rpx;
			flex: 1;
			display: flex;
			flex-flow: column nowrap;
			.DoctorBaseInfo-doctor-right-text1{
				font-weight: 900;
				font-size: 36rpx;
				line-height: 60rpx;
			}
			.DoctorBaseInfo-doctor-right-text2{
				font-size: 24rpx;
				color: #6B779A;
			}
		}

	}
</style>