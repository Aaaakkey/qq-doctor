<template>
	<div class="secondStep">
<!-- 		<view class="goBackIcon">
			<navigator url="/pages/registrationWizard/firstStep/firstStep">
				<image mode="scaleToFill" class="i1" src="../../../static/img/guide/goback.png"></image>
			</navigator>
		</view> -->
		<view class="containerUp">
			<image src="/static/img/guide/guide2.png" style="width: 100%; height: 100%;"></image>
		</view>
		<!-- 空白填充 -->
		<view style="height: 3.5%; width: 100%; "></view>
		
		<view class="content1">
			<text class="text1">功能齐全</text>
			<text class="text2">\n以病人的需求全方面的为你提供就诊</text>
			<text class="text2">\n以及挂号服务</text>
		
		</view>
		<!-- 空白填充 -->
		<view style="height: 10.2%; width: 100%; "></view>
		
		
	<view class="buttonNextWrapp">

			<button class="buttonNext" @click="handleClick" >
				<view class="" style="font-size: 32rpx; line-height: 22px; font-weight: 600;">下一步</view>
			</button>
	
		
	</view>
	</div>
</template>

<script>
	export default {
		props: {
			current: Number //
		},
		data() {
			return {
			
			};
		},
		methods: {
			handleClick() {
				// 处理点击事件的逻辑 使轮播图跳转下一页
			    // index = index + 1
				let index =  this.$props.current + 1
				 this.$emit('processedIndex', index);
	
			}
		},
	}
</script>

<style scoped lang="scss">
	.secondStep{
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
		// text-align: center;
		transform: translateX(126rpx);

		.text1 {
			font-size: 44rpx;
			font-family: Montserrat;
			font-weight: 800;
			line-height: 102rpx;
			// line-height: 44rpx;
			padding-left: 160rpx;
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