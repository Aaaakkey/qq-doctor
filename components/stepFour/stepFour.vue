<template>
	<div class="fourthStep">

		<view class="containerUp">
			<image src="/static/img/guide/guide4.png" style="width: 100%; height: 100%;"></image>
		</view>
<!-- 		空白填充 -->
		<view style="height: 1.5%; width: 100%; "></view>
		
		<view class="content1">
			<text class="text1">线下挂号与治疗</text>
			<text class="text2">\n线上在线交流诊断全免费,初步确认病情并</text>
			<text class="text2">\n预约线下挂号与治疗</text>
		
		</view>
		<!-- 空白填充 -->
		<view style="height: 9.5%; width: 100%; "></view>
		
		
		<view class="buttonNextWrapp">
			<button class="buttonNext" >
				<view class="" style="font-size: 32rpx; line-height: 22px; font-weight: 600;">开始您的体验</view>
			</button>
		</view>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				current: 0, // 当前轮播图索引
			};
		},
		methods: {
			goToNext() {
				// 下一步按钮点击事件
				this.current += 1;
			},
		},
	}
</script>

<style scoped lang="scss">
	.fourthStep{
		width: 100%;
		height: 100vh;
	
		display: flex;
		flex-direction: column;
		background-color: white;

	}

   .goBackIcon{
		// height: 0%;
		// // display: flex;
		// // flex-direction: column;
		// // justify-self: start;
		// .i1 {
		// 	height: 100rpx;
		// 	width: 100rpx;
		// 	margin-left: 3rpx;
		// 	transform: translateY(280rpx);
		// }
	}
	.containerUp {

		background-color: white;
        height: 58.6%;
	}

	.content1 {
		color: #000000;
		// text-align: center; 126 88
		transform: translateX(108rpx);

		.text1 {
			font-size: 44rpx;
			font-family: Montserrat;
			font-weight: 800;
			line-height: 102rpx;
			// line-height: 44rpx;
			padding-left: 108rpx;
		}

		.text2 {
		
			// line-height: 62rpx;
			line-height: 44rpx;
			font-weight: 550;
			font-family: Montserrat;
			font-size: 30rpx;
		}
	}

	.buttonNextWrapp {

		.buttonNext {
		width: 608rpx;
		height: 120rpx;
		background-color: aquamarine;
		border-radius: 110rpx;
		display: flex;
		justify-content: center;
		align-items: center;
		}
	}
</style>
