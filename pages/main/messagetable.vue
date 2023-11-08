<template>
	<view class="message-table">
		<DoctorBaseInfo :item="doctormessageinfo"></DoctorBaseInfo>
		<view class="message-table-begin-nullblock"></view>

		<template v-for="item in messageList">
			<view v-if="item.sender === 0">
				<MessageLine :item="item"></MessageLine>
			</view>
			<view v-if="item.sender === 1">
				<ReceiveLine :item="item"></ReceiveLine>
			</view>
		</template>
		<view class="message-table-end-nullblock"></view>
		<MessageTab></MessageTab>
	</view>
</template>

<script>
	import {
		parseTime
	} from '../../utils/tool.js';

	export default {
		data() {
			return {
				doctormessageinfo: {
					pic: "../../static/img/doctor3.png",
					name: "安俊禹",
					hospital: "赣州市第一人民医院",
					depart: "眼科"
				},
				messageList: [{
						message: "安子哥你怎么了？安子哥你怎么了？安子哥你怎么了？安子哥你怎么了？安子哥你怎么了？安子哥你怎么了？安子哥你怎么了？",
						sender: 0,
						time: "1698672207",
						picurl:"../../static/img/sendpic.png"
					},
					{
						message: "我想当香蕉猫了",
						sender: 1,
						time: "1698672209",
						picurl:""
					},
					{
						message: "香蕉猫是什么？",
						sender: 0,
						time: "1698672307",
						picurl:""
					},
					{
						message: "",
						sender: 1,
						time: "1698672317",
						picurl:"../../static/img/sendpic.png"
					},
					{
						message: "这个我也不知道",
						sender: 1,
						time: "1698672317",
						picurl:""
					},
					{
						message: "这个我也不知道",
						sender: 1,
						time: "1698672317",
						picurl:""
					},
					{
						message: "这个我也不知道",
						sender: 1,
						time: "1698672317",
						picurl:""
					},


				]
			};
		},
		computed: {
			filteredMyMessages() {
				return this.messageList.filter((message) => message.sender === 0);
			},
			filteredOtherMessages() {
				return this.messageList.filter((message) => message.sender === 1);
			},
		}
	};
</script>

<style lang="scss" scoped>
	.message-table {
		width: 750rpx;

		// 添加伪元素来实现底层背景颜色
		

		.message-table-begin-nullblock {
			width: 750rpx;
			height: 150rpx;
			background-color: #ffffff;
		}
		
		.message-table-end-nullblock {
			width: 750rpx;
			height: 190rpx;
			background-color: #ffffff;
		}
	}
</style>