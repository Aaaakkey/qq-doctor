<template>
	<view class="select-front">
		<image src="../../static/img/select-image1.png" mode="aspectFill" class="left-image"></image>
		<view class="select-block">
			<text class="context">
				{{selectfrontword}}
			</text>
		</view>
		<image src="../../static/img/select-image2.png" mode="aspectFill" class="right-image"></image>
	</view>
</template>

<script>
	export default {
		name:"selectfront",
		props:{
			selectfrontword:{
				type: String
			}
		},
		data() {
			return {
			};
		}
	}
</script>

<style lang="scss" scoped>
.select-front{
	background-color: #ffffff;
	position: fixed;
	width: 750rpx;
	height: 180rpx;
	display: flex;
	flex-flow: row nowrap;
	align-items: flex-end;
	justify-content: space-between;
	z-index: 9999;
	padding-bottom: 15rpx;
	.left-image{
		margin-bottom: 5rpx;
		width: 80rpx;
		height: 80rpx;
	}
	.select-block{
		margin-right: 20rpx;
		border-radius: 30rpx;
		width: 560rpx;
		height: 90rpx;
		background-color: #f6f6f5;
		display: flex;
		align-items: center;
		.context{
			font-size: 24rpx;
			color: #cccccc ;
		}
	}
	.right-image{
		margin-bottom: 15rpx;
		margin-right: 20rpx;
		width: 60rpx;
		height: 60rpx;
	}
	
}

</style>