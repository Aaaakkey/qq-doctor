<template>


	<view class="container">
		<view class="nav1">
			<navigator url="/pages/login/start/start">
				<image mode="scaleToFill" class="i1" src="../../../static/img/login/goback2.png"></image>
			</navigator>
		</view>
		<view class="content">
			<view class="a1"></view>
			<view class="t1">
				手机号登录
			</view>
			<view class="i1">
				<input class="i11" ref="input1" @input="hideKeyboard" placeholder="    手机号" />
			</view>
		<!-- 	<view class="" style="height: 10%; width: 100%;"></view> -->
			<view class="i2">
				<input class="i21" ref="input1" @input="hideKeyboard" placeholder="    6位验证码" />
				<button class="btn1">
					<view>获取验证码</view>
				</button>
			</view>
			<view class="i3"></view>
			<view class="i4">

			</view>
		</view>

		<view class="f1">

		</view>

		<view class="f2">
			<navigator url="/pages/login/start/start">
				<button type="default" class="btn2">
					<view class="f22">登录</view>
				</button>
			</navigator>
		</view>

		<view class="f3">
			<navigator url="/pages/login/passwordLogin/passwordLogin">
				<view class="" style="margin-left: 100rpx;color: #FFFFFF; font-size: 30rpx;">
					<text>密码登录</text>
				</view>

			</navigator>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				agreementChecked: false
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
		background: #020A19;
		overflow: hidden;
		overflow-y: auto;
	}

	.nav1 {
		height: 0%;
		display: flex;
		flex-direction: column;
		justify-self: start;

		.i1 {
			height: 50rpx;
			width: 70rpx;
			margin-left: 3rpx;
			transform: translateY(20rpx);
		}
	}

	.content {

		height: 69%;
		background: url(../../../static/img/login/bg1.jpg);
		background-size: 160% 100%;
		background-position: -420rpx;
		display: flex;
		flex-direction: column;
		align-items: center;

		.a1 {
			height: 20%;
		}

		.t1 {
			height: 10%;
			color: white;
			text-align: center;
			font-family: Montserrat;
			font-weight: bold;
		}

		.i1 {
			height: 14%;
			width: 80%;

			.i11 {
				background-color: white;
				height: 102rpx;
				border-radius: 40rpx;
				border-style: solid;
				border-color: whitesmoke;
				border-width: 4rpx;
				text-align: left;
				font-size: 30rpx;
			}
		}

		.i2 {
			// height: 20%;
			width: 100%;
			display: flex;
			flex: row;
			height: 109rpx;
			justify-content: start;
			align-items: center;

			.i21 {
				height: 102rpx;
				width: 80%;
				border-radius: 20%;
				display: flex;
				z-index: 1;
				background-color: white;
				border-radius: 40rpx;
				border-style: solid;
				border-color: whitesmoke;
				border-width: 4rpx;
				font-size: 30rpx;
				transform: translateX(80rpx);
				z-index: 0;

			}


			.btn1 {
				height: 113rpx;
	
				background-color: aqua;
				font-size: 30rpx;
				width: 250rpx;
				color: #979797;
				border-radius: 100rpx;
				z-index: 2;
				transform: translateX(-60rpx);


				display: flex;
				flex-direction: row;
				justify-content: center;
				align-items: center;

			}

		

		}

		.i3 {
			// background: white;
			height: 28%;
			width: 100%;
		}

		.i4 {
			// background-color: aqua;
			height: 10%;
			width: 100%;
			display: flex;
			flex-direction: row;
			justify-content: center;
			color: white;
		}

	}

	.f1 {
		display: flex;
		height: 5%;
		background: #020A19;
		flex-direction: column;

		.f11 {
			height: 30%;
			// background-color: rebeccapurple;
			text-align: center;

		}

	}

	.f2 {
		height: 10%;
		// background: rebeccapurple;
		width: 100%;
		// display: flex;

		.btn2 {
			width: 80%;
			background: #8AEEEE;
			border-radius: 60rpx;
			color: #000000;
			font-weight: 600;
			font-family: Montserrat;
			height: 120rpx;

			display: flex;
			flex-direction: row;
			justify-content: center;
			align-items: center;

		}


	}

	.f3 {
		height: 5%;
		width: 100%;
		// background-color: red;
	}
</style>