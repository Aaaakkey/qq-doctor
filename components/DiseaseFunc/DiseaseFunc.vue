<template>
	<view class="disease-func">
		<view class="disease-func-title">{{name}}</view>
		<view class="disease-func-block">
			<view class="disease-func-block-context" v-for="item in list" @click="goDetail(item.name)">
				<view class="disease-func-block-context-image">	
					<image :src="item.pic" mode=""></image>
				</view>
			<view class="disease-func-block-context-text">	
			{{item.name}}
			</view>
		
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: "DiseaseFunc",
		data() {
			return {

			};
		},
		props: {
			name: {
				type: String,
				default () {
					return "百白破疫苗"
				}
			},
			list: {
				type: Array,
				default () {
					return [{
							pic: "../../static/img/desc.png",
							name: "介绍"
						},
						{
							pic: "../../static/img/getwork.png",
							name: "作用功效"
						},
						{
							pic: "../../static/img/vaccne.png",
							name: "接种指导"
						},
						{
							pic: "../../static/img/baderror.png",
							name: "不良反应"
						}
					]
				}
			}
		},
		methods:{
			goDetail(name){
				var urlname = this.name+name
				uni.navigateTo({
					url: `/pages/main/vaccinedetailaction?name=${urlname}`
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.disease-func {
		margin: 30rpx;
		width: 700rpx;
		height: 250rpx;
		background-color: #ffffff;
		box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.3);
		border-radius: 20rpx;
		display: flex;
		flex-flow: column nowrap;
	
		.disease-func-title {
			margin-left: 20rpx;
			margin-top: 20rpx;
			font-size: 40rpx;
			font-weight: 900;
		}

		.disease-func-block {
	
			margin-top: 20rpx;
			margin-left: 25rpx;
			display: flex;
			flex-flow: row nowrap;
			width: 600rpx;
			height: 100rpx;
			justify-content: space-between;

			.disease-func-block-context {
		
				flex: 1;
				display: flex;
				flex-flow: column nowrap;
				align-items: center;
				justify-content: center;
				.disease-func-block-context-image{
					image {
						width: 50rpx;
						height: 50rpx;
					}
				}
				.disease-func-block-context-text{
					
					font-size: 26rpx;
				}
			}
		}
	}
</style>