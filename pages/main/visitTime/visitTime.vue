<template>
	<view>


		<!-- 日历 -->
		<view class="calendarStyleWrapp">
			<!-- 插入模式 -->
			<uni-calendar class="calendarStyle" :showMonth="true" @change="change" @monthSwitch="monthSwitch" />
		</view>

		<!-- 上午  下午 -->
		<view class="time1Wrapp">
			<view class="timeAM">AM</view>
			<view class="timePM">PM</view>
		</view>
		<!-- 具体时间 -->
		<view class="selectWrapp">

			<!-- AM区域 -->
			<view class="selectAMWrapp">
				<view class="time1Wrapp" >
					<timeCheckbox mode="tag" v-model="radio" :localdata="time1" selectedColor="#8AEEEE"></timeCheckbox>
				<!-- 	<uni-data-checkbox mode="tag" v-model="radio" :localdata="time1"></uni-data-checkbox> -->
				
				</view>
				<view class="time2Wrapp">
					<timeCheckbox mode="tag" v-model="radio" :localdata="time2" selectedColor="#8AEEEE"></timeCheckbox>
				</view>

			</view>

			<!-- PM区域 -->
			<view class="selectPMWrapp">
				<view class="time3Wrapp">
					 <timeCheckbox mode="tag" v-model="radio" :localdata="time3" selectedColor="#8AEEEE"></timeCheckbox>
				</view>
				<view class="time4Wrapp">
				    <timeCheckbox mode="tag" v-model="radio" :localdata="time4" selectedColor="#8AEEEE"></timeCheckbox>
				</view>
			</view>

		</view>

    <!--空白填充  -->
	 <view class="" style="height: 3vh;"></view>
	<!-- 医生Id -->
		<view class="docIdWrapp">
			<text>医生ID:GZDYRM17</text>
		</view>
	
	</view>
</template>

<script>
	/**
	 * 获取任意时间
	 */
	function getDate(date, AddDayCount = 0) {
		if (!date) {
			date = new Date()
		}
		if (typeof date !== 'object') {
			date = date.replace(/-/g, '/')
		}
		const dd = new Date(date)

		dd.setDate(dd.getDate() + AddDayCount) // 获取AddDayCount天后的日期

		const y = dd.getFullYear()
		const m = dd.getMonth() + 1 < 10 ? '0' + (dd.getMonth() + 1) : dd.getMonth() + 1 // 获取当前月份的日期，不足10补0
		const d = dd.getDate() < 10 ? '0' + dd.getDate() : dd.getDate() // 获取当前几号，不足10补0
		return {
			fullDate: y + '-' + m + '-' + d,
			year: y,
			month: m,
			date: d,
			day: dd.getDay()
		}
	}
	export default {
		data() {
			return {
				// 日历的属性

				info: {
					lunar: true,
					range: true,
					insert: false,
					selected: [],

				},
				radio: -1,
				time1: [{
					text: '10:00-11:00',
					value: 0
				}],
				time2:[{
					text: '11:00-12:00',
					value: 1
				}], 
				time3:[
					{
						text: '16:00-17:00',
						value: 2
					}
				],
				time4:[{
					text: '19:00-20:00',
					value: 3
				}]

			}

		},

		methods: {
			// 日历的方法
			monthSwitch(e) {
				console.log('monthSwitchs 返回:', e)
			},
			change(e) {
				console.log('change 返回:', e)
			},

		}
	}
</script>

<style scoped lang="scss">
	.docIdWrapp {
		height: 90rpx;
		width: 100%;
		text-align: center;
		line-height: 90rpx;
		font-size: 32rpx;
		color: #9E9E9E;
		font-weight: 550;

	}

	.calendarStyleWrapp {}

	.time1Wrapp {
		display: flex;
		flex-direction: row;
		height: 130rpx;
		line-height: 130rpx;

		.timeAM {
			width: 50%;
			text-align: center;
		}

		.timePM {
			width: 50%;
			text-align: center;
		}
	}

	.selectWrapp {
		display: flex;
		flex-direction: row;

		height: 20vh;
		width: 100%;
		// background-color: rebeccapurple;

		.selectAMWrapp {
			width: 50%;
			height: 100%;
			display: flex;
			flex-direction: column;
			// background-color: black;
			font-size: 12px;
			color: #666;
			margin-top: 5px;
			color: #9E9E9E;

			.time1Wrapp {
				height: 82rpx;
				width: 234rpx;
				// background-color: #D8D8D8;
				
				color: #9E9E9E;
				border-radius: 10rpx;
				margin-left: 34rpx;
				text-align: center;
				line-height: 82rpx;
				font-size: 33rpx;
				display: flex;
				flex-direction: row;
				justify-content: center;
				align-items: center;
			}

			.time2Wrapp {
				margin-top: 72rpx;
				height: 82rpx;
				width: 234rpx;
				// background-color: #D8D8D8;
				
				color: #9E9E9E;
				border-radius: 10rpx;
				margin-left: 34rpx;
				text-align: center;
				line-height: 82rpx;
				font-size: 33rpx;
			display: flex;
			flex-direction: row;
			justify-content: center;
			align-items: center;
			}
		}

		.selectPMWrapp {
			width: 50%;
			height: 100%;
			border-left-style: solid;


			border-width: 3rpx;
			display: flex;
			flex-direction: column;

			.time3Wrapp {
				margin-top: 10rpx;
				height: 82rpx;
				width: 234rpx;
				// background-color: #D8D8D8;
				
				color: #9E9E9E;
				border-radius: 10rpx;
				margin-left: 110rpx;
				text-align: center;
				line-height: 82rpx;
				font-size: 33rpx;
			display: flex;
			flex-direction: row;
			justify-content: center;
			align-items: center;
			}

			.time4Wrapp {
				margin-top: 72rpx;
				height: 82rpx;
				width: 234rpx;
				// background-color: #D8D8D8;
				
				color: #9E9E9E;
				border-radius: 10rpx;
				margin-left: 110rpx;
				text-align: center;
				line-height: 82rpx;
				font-size: 33rpx;
			    display: flex;
			    flex-direction: row;
			    justify-content: center;
			    align-items: center;
				
			}

		}

	}
</style>