<template>
	<view class="func-selelct-front">
		<view class="func-select-block">
		<view class="func-select-block-image">
			<image src="../../static/img/query.png" mode=""></image>
		</view>
		<input type="text" :placeholder="word" name="selectvalue" confirm-type="search"></view>
		
	</view>
</template>

<script>
	export default {
		name:"FuncSelectFront",
		data() {
			return {
				
			};
		},
		props:{
			word:{
				type:String,
				default : "搜索"
			}
		}
	}
</script>

<style lang="scss">
.func-selelct-front{
	
	width: 750rpx;
	height: 140rpx;
	padding: 30rpx 30rpx;
	.func-select-block{
		width: 690rpx;
		height: 80rpx;
		background-color: #f6f6f5;
		border-radius: 20rpx;
		box-shadow: 0px 4px 10px 0px rgba(0,0,0,0.3);
		display: flex;
		align-items: center;
		.func-select-block-image{
			image{
				margin-top: 10rpx;
				margin-left: 20rpx;
				margin-right: 10rpx;
				width: 50rpx;
				height: 50rpx;
			}
			
		}
	}


}
</style>