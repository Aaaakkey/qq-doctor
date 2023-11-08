<template>
	<view class="isbn">
		<view class="isbn-top">
			<swiper class="isbn-swiper" circular :autoplay="autoplay" :interval="interval" vertical=true>
				<swiper-item v-for="item in onlineList">
					<view class="isbn-swiper-item">
						<view style="width: 120rpx;">
							<image src="../../static/img/online.png"></image>
						</view>
						<view style="width: 550rpx;font-size: 32rpx; margin-bottom: 5rpx;">{{item.name}}医生将于<text
								style="color: #ffbb24;">{{item.date}}</text>进行义诊</view>
					</view>
				</swiper-item>
			</swiper>
			<view class="isbn-swiper-right">
				<image src="../../static/img/zbgd.png" mode="" @click="goDetail"></image>
			</view>
		</view>
		<view class="isbn-select">
			<view class="isbn-select-block" style="border-right:1rpx solid #d8d8d8;" @click="changeSelect(0)"
			:class='{ "isbn-select-block-click": "0" == selected }'
			>精选</view>
			<view class="isbn-select-block" @click="changeSelect(1)" :class='{ "isbn-select-block-click": "1" == selected }'>关注</view>
		</view>
		<view class="isbn-jx" v-if="this.selected == 0">
			<IsbnArticle v-for="item in jxlist" :item="item"></IsbnArticle>
		</view>
		<view class="isbn-gz" v-if="this.selected == 1">
			<IsbnArticle v-for="item in gzlist" :item="item"></IsbnArticle>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				onlineList: [{
						name: "赵熙蒙",
						date: "10月22日"
					},
					{
						name: "赵熙蒙",
						date: "10月23日"
					}
				],
				jxlist: [
					{
						title:"针对多形性未分化肉瘤赠药临床试验——    脂质体多柔比星（多美素）+卡瑞利珠...",
						pic: "../../static/img/doctor2.png",
						context:"入组实验注意事项入组标准 1.xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx...",
						name: "赵熙蒙",
						manager: "主任医师",
						hospital: "江西理工大学医学院",
						depart: "中医内科",
						talknum: "25",
						starnum: "125",
						video:"",
						contextpic: "../../static/img/doctor2.png"
					},
					{
						title:"看看我的视频",
						pic: "../../static/img/doctor2.png",
						context:"",
						name: "赵熙蒙",
						manager: "主任医师",
						hospital: "江西理工大学医学院",
						depart: "中医内科",
						talknum: "25",
						starnum: "125",
						video:"视频页....",
						contextpic: ""
					},
				],
				gzlist: [
					{
						title:"针对多形性未分化肉瘤赠药临床试验——    脂质体多柔比星（多美素）+卡瑞利珠...",
						pic: "../../static/img/doctor2.png",
						context:"入组实验注意事项入组标准 1.xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx...",
						name: "gz赵熙蒙",
						manager: "主任医师",
						hospital: "江西理工大学医学院",
						depart: "中医内科",
						talknum: "25",
						starnum: "125",
						video:"",
						contextpic: "../../static/img/doctor2.png"
					},
					{
						title:"看看我的视频",
						pic: "../../static/img/doctor2.png",
						context:"",
						name: "gz赵熙蒙",
						manager: "主任医师",
						hospital: "江西理工大学医学院",
						depart: "中医内科",
						talknum: "25",
						starnum: "125",
						video:"视频页....",
						contextpic: ""
					},
				],
				autoplay: true,
				interval: 5000,
				selected: "0"
			};
		},
		methods:{
			goDetail(){
				uni.navigateTo({
					url:"/pages/main/doctoronline"
				})
			},
			changeSelect(id){
				this.selected = id;
			}
		}
	}
</script>

<style lang="scss" scoped>
	.isbn {

		.isbn-top {
			display: flex;
			flex-flow: row nowrap;

			.isbn-swiper {
				height: 100rpx;
				width: 650rpx;
				background-color: #fed2a5;

				.isbn-swiper-item {
					margin-top: 15rpx;
					display: flex;
					flex-flow: row nowrap;
					align-items: center;

					image {
						margin-left: 30rpx;
						width: 60rpx;
						height: 60rpx;
					}
				}
			}

			.isbn-swiper-right {
				display: flex;
				justify-content: center;
				align-items: center;
				width: 100rpx;
				height: 100rpx;
				background-color: #fed2a5;
				image {
					width: 60rpx;
					height: 60rpx;
				}
			}
		}
		.isbn-select{
			width: 750rpx;
			height: 100rpx;
			display: flex;
			flex-flow: row nowrap;
			border-bottom: 1rpx solid #d8d8d8;
			.isbn-select-block{
				flex: 1;
				color: #9e9e9e;
				margin: 15rpx 0rpx;
				display: flex;
				justify-content: center;
				align-items: center;
				font-size: 36rpx;
			}
			.isbn-select-block-click{
				color: #4485fd;
			}
		}
	}
</style>