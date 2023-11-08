<template>
	<view class="doctoronline">
		<OnlineDayBlock :dataInfoList="datainfoList"></OnlineDayBlock>
		<OnlineOn></OnlineOn>
		<OnlineBefore></OnlineBefore>
		<OnlineAfter></OnlineAfter>
	</view>
</template>

<script>
	import {
		getDateList
	} from "../../utils/tool.js";
	export default {
		data() {
			return {
				datainfoList: [{
						date: "5",
						num: "27"
					},
					{
						date: "6",
						num: "13"
					},
					{
						date: "7",
						num: "35"
					},
					{
						date: "8",
						num: "11"
					},
					{
						date: "9",
						num: "23"
					},
					{
						date: "10",
						num: "10"
					},
					{
						date: "11",
						num: "5"
					}
				],
			
			};
		},
		onLoad() {
			var list = getDateList();
		},
		methods: {
			
		}
	};
</script>

<style lang="scss">
	.doctoronline{
		display: flex;
		flex-flow: row wrap;
	}
</style>