<template>
	<div class="online-day-block">
		<div class="online-day-block-select" v-for="item in dataInfoList" :key="item.date"
			@click="selectDate(item.date)">
			<div class="online-day-block-select-block" :class="{ 'selected-day': item.date === selectedDate }">
				<div class="date">{{ item.date }}号</div>
				<div class="num">{{ item.num }}场</div>
			</div>
		</div>
	</div>
</template>

<script>
	import {getTodayDate} from "../../utils/tool.js";
	export default {
		name: "OnlineDayBlock",
		data() {
		  return {
		    selectedDate: "6"
		  };
		},
		props: {
			dataInfoList: {
				type: Array
			}
		},
		methods: {
			selectDate(date) {
				this.selectedDate = date;
			}
		}
	};
</script>

<style lang="scss" scoped>
	.online-day-block {
		width: 750rpx;
		height: 150rpx;
		display: flex;
		flex-flow: row nowrap;
		margin-bottom: 30rpx;
	}

	.online-day-block-select {
		flex: 1;
		display: flex;
		flex-flow: column nowrap;
		justify-content: flex-end;
		align-items: center;
	}

	.online-day-block-select-block {
		border-radius: 10rpx;
		width: 80rpx;
		height: 130rpx;
		background-color: #ffffff;
		display: flex;
		flex-flow: column nowrap;
		justify-content: center;
		align-items: center;
		text-align: center;
		font-size: 32rpx;
		font-weight: 900;
	}

	.selected-day {
		background-color: #8aeeee;
		color: white;
	}
</style>