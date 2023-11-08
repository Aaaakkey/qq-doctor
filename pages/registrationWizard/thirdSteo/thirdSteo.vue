<template>
	<div class="thirdStep">

		<view class="containerUp">
			<image src="../../../static/img/guide/guide3.png" style="width: 100%; height: 100%;"></image>
		</view>
		<!-- 空白填充 -->
		<view style="height: 6%; width: 100%; "></view>
		
		<view class="content1">
			<text class="text1">剖析您的X光图片</text>
			<text class="text2">\n优化您的就诊体验,医生得以有更加全面的</text>
			<text class="text2">\n认识病情的方式</text>
		
		</view>
		<!-- 空白填充 -->
		<view style="height: 8.7%; width: 100%; "></view>
		
		
	<view class="buttonNextWrapp">
		<navigator url="/pages/registrationWizard/fourthStep/fourthStep" style="height: 100%; width: 100%;">
			<button class="buttonNext" >
				<view class="" style="font-size: 32rpx; line-height: 22px; font-weight: 600;">下一步</view>
			</button>
		</navigator>
		
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

<style scoped lang="scss" scoped>
	.thirdStep{
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
        height: 56%;
	}

	.content1 {
		color: #000000;
		// text-align: center; 126
		transform: translateX(88rpx);

		.text1 {
			font-size: 44rpx;
			font-family: Montserrat;
			font-weight: 800;
			line-height: 102rpx;
			// line-height: 44rpx;
			padding-left: 114rpx;
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