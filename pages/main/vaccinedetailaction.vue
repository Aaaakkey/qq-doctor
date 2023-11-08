<template>
	<view class="vaccinedetailaction">
		<view class="vaccinedetailaction-context">
			<view class="vaccinedetailaction-context-title">{{title}}</view>
			<view class="vaccinedetailaction-context-text">
				xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
				xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
				xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
				xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
			</view>
		</view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title : ""
			};
		},
		onLoad(e) {
			uni.setNavigationBarTitle({
				title: e.name
			
			});
			this.title = e.name
		}
	}
</script>

<style lang="scss" scoped>
.vaccinedetailaction{
	width: 100vw;
	height: 100vh;
	background-image: url("../../static/img/background1.png");
	background-repeat: repeat;
	background-size: cover;

	
	&::after {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: #F8F8F8;
		z-index: -1;
	}
	.vaccinedetailaction-context{
		margin-top: 20rpx;
		margin-left: 50rpx;
		width: 650rpx;
		padding: 20rpx;
		border-radius: 20rpx;
		background-color: #ffffff;
		box-shadow: 0px 4px 10px 0px rgba(0,0,0,0.3);
		.vaccinedetailaction-context-title{
			width: 100%;
			height: 50rpx;
			font-size: 40rpx;
			font-weight: 900;
		}
		.vaccinedetailaction-context-text{
			font-size: 32rpx;
			overflow-wrap: break-word;
		}
	}
}
</style>