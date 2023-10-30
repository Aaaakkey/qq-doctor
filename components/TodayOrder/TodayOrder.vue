<template>
	<view class="today-order">
		<view class="today-block">
			<view class="today-block-left">
				<image :src="item.pic" mode="" class="today-image"></image>
			</view>
			<view class="today-block-right">
				<view class="today-right-up">
					<text class="today-name">{{item.name}}</text>
					<text class="today-depart">{{item.depart}}</text>
				</view>
				<view class="today-right-down">
					<view class="today-right-content">
						<image src="../../static/img/time.png" mode="aspectFill"></image>
						<text>今日{{item.ordertime}}</text>
					</view>
					<view class="today-right-content">
						<image src="../../static/img/form.png" mode="aspectFill"></image>
						<text>{{item.form}}</text>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import {parseTime} from '../../utils/tool.js'
	export default {
		name: "todayorder",
		props: {
			item: {
				type: Object,
				default () {
					return {
						pic: "../../static/img/doctor1.png",
						name: "周嘉兴",
						depart: "皮肤科医生",
						ordertime: "18:00-19:00",
						form: "线上问诊"
					}
				}
			}
		},
		data() {
			return {

			};
		},
		onLoad() {
		}
	}
</script>

<style lang="scss" scoped>
.today-order {
	display: flex;
	justify-content: center;
	margin-bottom: 3%;
	.today-block {
		box-shadow: 3px 3px 12px 0px rgba(0, 0, 0, 0.15),inset 12px 12px 22px 0px #FFFFFF;
		width: 720rpx;
		height: 376rpx;
		background-color: #F5FDFF;
		border-radius: 120rpx;
		display: flex;
		flex-flow: nowrap row; 
		.today-block-left{
			width: 40%;
			display: flex;
			justify-content: center;
			align-items: center;
			.today-image{
				height: 80%;
				width: 60%;
			}
		}
		.today-block-right{
			flex: 1;
			display: flex;
			flex-flow: column nowrap;
			.today-right-up{
				height: 40%;
				display: flex;
				justify-content: center;
				flex-flow: column nowrap;
				.today-name{
			
					width: 60%;
					font-size: 40rpx;
					font-weight: 900;
				}
				.today-depart{
					width: 40%;
					font-size: 26rpx;
				}
			}
			.today-right-down{
				flex: 1;
				display: flex;
				flex-flow: column nowrap;
				.today-right-content{
					flex: 1;
					display: flex;
					flex-flow: row nowrap;
					align-items: center;
					image{
						width: 15%;
						height: 60%;
					}
					text{
						padding-left: 10%;
						font-size: 26rpx;
						color: #13227a;
						
					}
				}
			}
		}
		
	}
}
</style>