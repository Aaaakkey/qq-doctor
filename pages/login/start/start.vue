<template>
	<view class="container">


		<view class="bgicon">

			<image class="icon" src="../../../static/img/login/bg1.jpg" mode="scaleToFill"></image>

		</view>

		<view class="f1">
			<view class="f11">
				<view class="t1"><text class="t11">企桥医健APP</text>
					<view class="t2"><text class="t21">欢迎您使用</text>
					</view>

				</view>

			</view>
			<view class="f2">
				<text class="f21">呵护您的健康生活</text>
			</view>
			<view class="f3">

				<view class="f31">
					<navigator url="/pages/login/passwordLogin/passwordLogin" animation-type="slide-in-bottom"
						animation-duration="300">
						<button class="b1">
							<view class="t3">登录</view>
						</button>
					</navigator>
				</view>
				<view class="f32">
					<navigator url="/pages/login/register/register" animation-type="slide-in-bottom"
						animation-duration="300">
						<button type="default" class="b2">
							<view class="t4">创建账户</view>
						</button>
					</navigator>
				</view>
			</view>

		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		methods: {

		}
	}
</script>

<style lang="scss" scoped>
	.container {
		display: flex;
		flex-direction: column;
		width: 750rpx;
		height: 100vh;
		// border-radius: 23px;
		opacity: 1;
		overflow: hidden;
		overflow-y: auto;
		background: #020A19;

	}

	.bgicon {
		// width: 750rpx;
		// height: 1200rpx;

		height: 69%;


		.icon {

			height: 100%;
			width: 160%;
			left: -420rpx;
			z-index: 0;

		}

	}

	.f1 {
		display: flex;
		height: 27%;
		background: #020A19;
		flex-direction: column;

		// 包裹两个文字块
		.f11 {
			width: 100%;
			height: 22%;
			display: flex;

			flex-direction: column;

			// 第一个文字块
			.t1 {

				transform: translateY(-80rpx);
				color: #FFFFFF;
				height: 50%;
				font-size: 60rpx;
				text-indent: 140rpx;
				font-weight: 600;

				.t11 {
					font-family: Montserrat;
				}

			}

			// 第二个文字块
			.t2 {
				transform: translateY(-170rpx);
				color: #FFFFFF;
				height: 50%;

				font-size: 60rpx;
				;
				font-family: Montserrat;
				font-weight: 600;
				text-indent: 140rpx;

				.t21 {}
			}

		}


		.f2 {
			height: 35%;
			// background-color: rebeccapurple;
			text-indent: 140rpx;
			color: #FFFFFF;
			font-size: 25rpx;
			font-weight: 540;
		}

		.f3 {
			height: 30%;
			// background-color: aqua;
			width: 100%;
			display: flex;
			flex-direction: row;
			justify-content: center;

			.f31 {
				height: 100%;

				.b1 {
					height: 102rpx;
					text-align: center;
					width: 244rpx;
					background: #8AEEEE;
					font-size: 30rpx;
					border-radius: 45rpx;
					color: #000000;
					margin-right: 15rpx;
					margin-left: 20rpx;
					display: flex;
					justify-content: center;
					align-items: center;

					.t3 {

						font-weight: 550;
						font-family: Montserrat;
					}

					// 边框
					// // border-style: solid;
					// border-color: #FFFFFF;
					// border-width: 1rpx;
				}
			}

			.f32 {
				height: 100%;

				.b2 {
					display: flex;
					justify-content: center;
					align-items: center;
					height: 102rpx;
					text-align: center;
					width: 244rpx;
					font-size: 30rpx;

					color: #FFFFFF;
					background: #020A19;
					margin-left: 15rpx;

					// 边框
					border-radius: 45rpx;
					border-style: solid;
					border-color: #FFFFFF;
					border-width: 2rpx;

					.t4 {

						font-weight: 500;
						font-family: Montserrat;
					}
				}
			}
		}
	}
</style>