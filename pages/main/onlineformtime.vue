<template>
	<view class="online-form-time">
		<view class="online-doctor-block">
			<view class="online-doctor-image">
				<image :src="doctor.pic" mode="aspectFill"></image>
			</view>
			<view class="online-doctor-text">
				<view class="online-doctor-name">{{doctor.name}}医生</view>
				<view class="online-doctor-dep">{{doctor.depart}} {{doctor.hospital}}医生</view>
			</view>
		</view>
		<scroll-view class="online-time-select" scroll-x="true" enable-flex="true">
			<view class="online-time-select-block" v-for="(item,index) in timeList"
				:class='{"online-time-seleted":index == this.seleted}' @click="changeSeleted(index)">
				<view style="font-size: 36rpx; margin-top: 20rpx; ">{{item.name}},{{item.date}}</view>
				<view style="font-size: 26rpx; color: #677294; margin-top: 3rpx;" v-if='item.leave.value !=="0"'>
					剩余{{item.leave.value}}个时间段
				</view>
				<view style="font-size: 26rpx; color: #677294; margin-top: 3rpx;" v-else>无预约时间段</view>
			</view>
		</scroll-view>
		
		<view v-if="this.seleted == 0">
			<view class="online-time-change" v-for="item in this.timeList[this.seleted].leave.list">
				<view style="font-size: 36rpx;">{{item.time}}</view>
				 <view class="online-time-select-area">
					 <view class="online-time-block" v-for="clock in item.clock" @click = "changeSeletedClock(clock)" :class='{"online-time-block-seleted": clock == this.seletedClock}'>
						 {{clock}}
					 </view>
				 </view>
			</view>

		</view>
		<view v-if="this.seleted == 1">
			<view class="online-time-change" v-for="item in this.timeList[this.seleted].leave.list">
				<view style="font-size: 36rpx;">{{item.time}}</view>
				 <view class="online-time-select-area">
				 	<view class="online-time-block" v-for="clock in item.clock" @click = "changeSeletedClock(clock)" :class='{"online-time-block-seleted": clock == this.seletedClock}'>
						{{clock}}
					</view>
				 </view>
			</view>
		</view>
		<view v-if="this.seleted == 2">
			<view class="online-time-change" v-for="item in this.timeList[this.seleted].leave.list">
				<view style="font-size: 36rpx;">{{item.time}}</view>
				 <view class="online-time-select-area">
				 		<view class="online-time-block" v-for="clock in item.clock" @click = "changeSeletedClock(clock)" :class='{"online-time-block-seleted": clock == this.seletedClock}'>
							{{clock}}
						</view>
				 </view>
			</view>
		</view>
		<view class="online-time-clock-select" @click="nviback">
			确认
		</view>
	</view>

</template>

<script>
	import {
		getThreeDate
	} from '../../utils/tool';
	export default {
		data() {
			return {
				way: "",
				did: "",
				doctor: {
					did: "0315111",
					pic: "../../static/img/doctor2.png",
					name: "赵熙蒙",
					hospital: "赣州市第一人民医院",
					depart: "眼科"
				},
				dataList: null,
				timeList: [{
						date: "11月8日",
						name: "今天",
						leave: {
							value: "7",
							list: [{
									time: "早上",
									clock: ["8.00","9.00", "10.00", "11.00","12:00"]
								},
								{
									time: "下午",
									clock: ["14.00", "15.00", "18.00"]
								},
								{
									time: "晚上",
									clock: ["20:00"]
								}
							]
						}
					},
					{
						date: "11月9日",
						name: "明天",
						leave: {
							value: "6",
							list: [{
									time: "早上",
									clock: ["8.00","9.00", "10.00", "11.00"]
								},
								{
									time: "下午",
									clock: ["14.00", "15.00", "18.00"]
								}
							]
						}
					},
					{
						date: "11月8日",
						name: "后天",
						leave: {
							value: "5",
							list: [{
									time: "早上",
									clock: ["9.00", "10.00", "11.00"]
								},
								{
									time: "下午",
									clock: ["14.00", "15.00"]
								}
							]
						}
					}
				],
				seleted: "0",
				seletedClock: ""
			};
		},
		onLoad(e) {
			this.dataList = getThreeDate();
			this.way = e.way;
			if (this.way == "online") {
				uni.setNavigationBarTitle({
					title: "线上预约时间"
				})
			} else {
				uni.setNavigationBarTitle({
					title: "挂号预约时间"
				})
			};
		},
		methods: {
			changeSeleted(index) {
				this.seleted = index;
			},
			changeSeletedClock(clock){
				this.seletedClock = clock;
			},
			nviback(){
				uni.navigateBack({
					delta:1,
					success() {
					    uni.$emit('dataBack', { time: this.seleted + this.seletedClock });
					}
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.online-time-seleted {
		background-color: #0EBE7F;
		color: #ffffff;
	}

	.online-form-time {
		display: flex;
		flex-flow: column nowrap;

		.online-doctor-block {
			margin-left: 25rpx;
			margin-top: 50rpx;
			background-color: #ffffff;
			width: 700rpx;
			height: 200rpx;
			box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
			display: flex;
			flex-flow: row nowrap;
			align-items: center;
			border-radius: 20rpx;

			.online-doctor-image {
				height: 100%;
				width: 30%;

				image {
					margin-left: 35rpx;
					margin-top: 30rpx;
					height: 140rpx;
					width: 140rpx;
				}
			}

			.online-doctor-text {
				height: 50%;
				width: 60%;

				.online-doctor-name {
					font-size: 36rpx;
				}

				.online-doctor-dep {
					font-size: 26rpx;
					color: #AAAAAA;
				}
			}

		}

		.online-time-select {
			margin-top: 50rpx;
			width: 700rpx;
			height: 120rpx;
			white-space: nowrap;
			margin-left: 25rpx;
			margin-bottom: 50rpx;
			.online-time-select-block {
				font-weight: 300;
				border-radius: 10rpx;
				width: 300rpx;
				height: 120rpx;
				border: 1px rgba(103, 114, 148, 0.1) solid;
				margin-right: 20rpx;
				display: inline-block;
				text-align: center;
			}
		}

	}

	.online-time-change {
		width: 700rpx;
		height: 270rpx;
		margin-left: 50rpx;
		display: flex;
		flex-flow: column;
		.online-time-select-area{
			flex: 1;
			display: flex;
			flex-flow: row wrap;
			
		}
	}

	.online-time-block {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 150rpx;
		height: 80rpx;
		border-radius: 20rpx;
		background-color: rgba(14, 190, 127, 8%);
		margin-right: 20rpx;
		margin-top: 20rpx;
		color: #0EBE7F;

	}

	.online-time-block-seleted {
		background-color: #0EBE7F;
		color: #ffffff;
	}
	.online-time-clock-select{
		margin-left: 271rpx;
		width: 210rpx;
		height: 112rpx;
		background-color: #00CC6A;
		border-radius: 20rpx;
		display: flex;
		justify-content: center;
		align-items: center;
		color: #ffffff;
	}
</style>