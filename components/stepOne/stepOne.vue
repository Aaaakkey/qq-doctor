<template>
	<div class="firstStep">

		<view class="containerUp">
			<image src="/static/img/guide/guide1.png" style="width: 100%; height: 976rpx;"></image>
		</view>
		<view class="content1">
			<text class="text1">欢迎您来到企桥医健</text>
			<text class="text2">\n您的线上问诊专家</text>
			<text class="text2">\n全国27W+医生入驻在线问诊</text>
			<text class="text2">\n早发现 早治疗 您身边的健康呵护使者 </text>
		</view>
		<view style="height: 5.5%; width: 100%; "></view>
		<view class="buttonNextWrapp">

			<button class="buttonNext" @click="handleClick">
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
            // index: this.$props.current
			}
		},
		methods: {
			handleClick() {
				// 处理点击事件的逻辑 使轮播图跳转下一页
		        // index = index + 1
				let index =  this.$props.current + 1
				 this.$emit('processedIndex', index);
			
			}
		}
	}
</script>

<style scoped lang="scss">
	.firstStep {
		width: 100vw;
		height: 100vh;
		background-color: #f5f5f5;
		display: flex;
		flex-direction: column;
		background-color: white;

	}

	.containerUp {

		background-color: white;
		height: 60%;

	}


	.content1 {
		color: #000000;
		// text-align: center;
		transform: translateX(126rpx);
		height: 16%;
		width: 100%;

		.text1 {
			font-size: 44rpx;
			font-family: Montserrat;
			font-weight: 800;
			line-height: 102rpx;
			// line-height: 44rpx;
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
		height: 7%;
		width: 100%;
		// background-color:red;

		.buttonNext {
			width: 608rpx;
			height: 100%;
			background-color: aquamarine;
			border-radius: 110rpx;
			display: flex;
			justify-content: center;
			align-items: center;
		}
	}

	.swiperPage {
		height: 100%;
		width: 100%;
		background-color: rebeccapurple;


	}
</style>