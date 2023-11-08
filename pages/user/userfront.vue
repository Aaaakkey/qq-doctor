<template>
	<view class="userFront">
		<!-- 头像 用户名  客服-->
		<view class="headWrapp">
			<!-- 头像 -->
			<view class="headSculptureAndUserWrapp">
				<image src="../../static/img/user/headSculpture.png" mode="" class="headSculptureImg"></image>
				<!-- 用户名 -->
				<view class="userNameWrapp">
					<text class="userNameText">Simon0414</text>
				</view>
			</view>
			<!-- 客服 -->
			<view class="customerServiceWrapp">
				<image src="../../static/img/user/customerService.png" mode="" class="customerServiceImg" @click="navToCS()"></image>
			</view>
		</view>

		<!-- 收藏 足迹 CT检验 我的病例 -->
		<view class="funWrapp">
			<view class="fun">
				<!-- 收藏 -->
				<view class="collectWrapp" @click="navToCollect()">
					<image src="../../static/img/user/collect.png" mode="" class="collectImg"></image>
					<text>收藏</text>
				</view>
				<!-- 足迹 -->
				<view class="collectWrapp" @click="navToFootprint()">
					<image src="../../static/img/user/zuji.png" mode="" class="collectImg" ></image>
					<text>足迹</text>
				</view>
				<!-- CT化验单 -->
				<view class="collectWrapp"  @click="navToCT()">
					<image src="../../static/img/user/laboratoryTestReport.png" mode="" class="collectImg"></image>
					<text>CT检验单</text>
				</view>
				<!-- 我的病例 -->
				<view class="collectWrapp" >
					<image src="../../static/img/user/case.png" mode="" class="collectImg"></image>
					<text>我的病例</text>
				</view>
			</view>
		</view>

		<!-- 订单 -->
		<view class="orderAllWrapp">
			<!-- 订单 -->
			<view class="ordeWrapp">
				<!-- 我的预约订单 -->
				<view class="reservationOrderWrapp">
					<text class="orderText">我的预约订单</text>
					<image src="../../static/img/user/go.png" mode="" class="goImg"></image>
				</view>

				<!-- 全部订单 待付款 待就诊 待评价  退款-->
				<view class="fun2Wrapp">
					<!-- 全部订单 -->
					<view class="order1">
						<image src="../../static/img/user/allOrder.png" mode="" class="order1Img">
						</image>
						<text class="order1Text">全部订单</text>
					</view>
					<!-- 待付款 -->
					<view class="order1">
						<image src="../../static/img/user/order2.png" mode="" class="order1Img">
						</image>
						<text class="order1Text">待付款</text>
					</view>
					<!-- 待就诊 -->
					<view class="order1">
						<image src="../../static/img/user/order3.png" mode="" class="order1Img">
						</image>
						<text class="order1Text">待就诊</text>
					</view>
					<!-- 待评价 -->
					<view class="order1">
						<image src="../../static/img/user/order4.png" mode="" class="order1Img">
						</image>
						<text class="order1Text">待评价</text>
					</view>
					<!-- 退款 -->
					<view class="order1">
						<image src="../../static/img/user/order5.png" mode="" class="order1Img">
						</image>
						<text class="order1Text">退款</text>
					</view>

				</view>
			</view>
		</view>

		<!-- 个人信息 病人信息 -->
		<view class="informationWrapp">
			<!--  -->
			<view class="information">
				<view class="informationUp">
					<text class="informationUpText1" @click="navToPerInfo()">个人信息</text>
					<text class="informationUpText2">\n头像,昵称查询,修改,管理</text>
				</view>
				<view class="informationDown">
					<text class="informationDownText1"   @click="navToPatInfon()" >病人信息</text>
					
					<text class="informationDownText2" >\n病人信息查询,修改,管理</text>
				</view>
			</view>
		</view>

		<!-- 通用设置   明日修改class信息-->
		<view class="settingWrapp">
			<!--  -->
			<view class="information">
				<view class="informationUp">
					<text class="informationUpText1" @click="navCommon()">通用</text>
					<text class="informationUpText2">\n清空缓存</text>
				</view>
				<view class="informationUp">
					<text class="informationUpText1" @click="navPrivce()">隐私管理</text>
					<text class="informationUpText2">\n应用权限说明、个性化推荐等</text>
				</view>
				<view class="informationUp">
					<text class="informationUpText1" @click="navToPIC()">个人信息收集清单</text>
					<text class="informationUpText2">\n企桥医健信息收集等</text>
				</view>
				<view class="informationDown">
					<text class="informationDownText1" @click="navToAbout()">关于企桥医健</text>
					<text class="informationDownText2">\n版本说明、资质等</text>
				</view>
			</view>
		</view>
		<!-- 按钮 -->
		<view class="buttonWrapp">
			<button class="button1">切换账号</button>
			<button class="button2" @click="navToLogin()">退出登录</button>
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
			navToCollect() {
				uni.navigateTo({
					url: "/pages/user/collect/collect"
				})

			},
			navToFootprint(){
				uni.navigateTo({
					url:"/pages/user/footprint/footprint"
				})
			},
			navToCT(){
				uni.navigateTo({
					url:"/pages/user/CTInspectionSheet/CTInspectionSheet"
				})
			},
			navToCS(){
				uni.navigateTo({
					url: "customerService/customerService"
				})
			},
			navToPerInfo(){
				uni.navigateTo({
					url:"/pages/user/personalInformation/personalInformation"
				})
			},
			navToPatInfon(){
				uni.navigateTo({
					url: "/pages/user/patientInformation/patientInformation"
				})
			},
			navCommon(){
				uni.navigateTo({
					url:"/pages/user/commonPage/commonPage"
				})
			},
			navPrivce(){
				uni.navigateTo({
					url:"/pages/user/privacyManagement/privacyManagement"
				})
			},
			navToLogin(){
				uni.reLaunch({
					url:"/pages/login/start/start"
				})
			},
			navToPIC(){
				uni.navigateTo({
					url: "/pages/user/personalInformationCollection/personalInformationCollection"
				})
			},
			navToAbout(){
				uni.navigateTo({
					url: "/pages/user/about/about"
				})
			}
		}
	}
</script>

<style scoped lang="scss">
	.userFront {
		background-color: #F7F7F7;
		// height: 100vh;
		// display: flex;
		//    flex-direction: column;
	}

	// 头像 用户名 客服
	.headWrapp {
		display: flex;
		flex-direction: row;
		height: 100%;
		width: 100%;
		background-color: #F7F7F7;


		margin-bottom: 22rpx;
		justify-content: space-between;

		// 头像
		.headSculptureAndUserWrapp {
			margin-top: 4rpx;
			height: 100%;
			// width: 100%;
			margin-left: 42rpx;
			display: flex;
			flex-direction: row;

			.headSculptureImg {
				height: 110rpx;
				width: 110rpx;
				border-radius: 100%;
				box-shadow: 0px 0px 4px black;

			}

			// 用户名
			.userNameWrapp {
				line-height: 90rpx;
				margin-left: 10rpx;

				.userNameText {}
			}
		}


		// 客服
		.customerServiceWrapp {
			display: flex;
			flex-direction: row;
			justify-content: center;
			// align-items: center;
			margin-right: 56rpx;

			.customerServiceImg {
				height: 52rpx;
				width: 52rpx;
			}
		}
	}

	// 收藏 足迹
	.funWrapp {
		width: 100%;
		height: 166rpx;
		background-color: #F7F7F7;
		display: flex;
		flex-direction: row;
		justify-content: center;
		margin-bottom: 18rpx;

		.fun {
			box-shadow: 0px 0px 4px black;
			width: 688rpx;
			height: 100%;
			background-color: white;
			border-radius: 24rpx;
			display: flex;
			flex-direction: row;
			justify-content: space-between;

			.collectWrapp {
				height: 100%;
				width: 25%;
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;
				font-size: 20rpx;
				font-weight: 550;

				.collectImg {
					height: 52rpx;
					width: 52rpx;
					margin-bottom: 8rpx;
				}
			}
		}
	}

	// 订单
	.orderAllWrapp {
		background-color: #F7F7F7;
		display: flex;
		flex-direction: row;
		justify-content: center;
		width: 100%;

		height: 100%;
		margin-bottom: 20rpx;

		.ordeWrapp {
			width: 688rpx;
			height: 100%;
			background-color: white;
			display: flex;
			flex-direction: column;
			border-radius: 24rpx;
			box-shadow: 0px 0px 4px black;

			.reservationOrderWrapp {
				height: 80rpx;
				width: 100%;
				// background-color: aqua;
				display: flex;
				flex-direction: row;
				justify-content: space-between;
				align-items: center;

				// 我的预约订单
				.orderText {
					font-feature-settings: "kern" on;
					font-size: 20rpx;
					font-weight: 550;
					line-height: 80rpx;
					padding-left: 30rpx;
				}

				.goImg {
					height: 60rpx;
					width: 60rpx;

				}
			}

			// 全部订单 待付款 待就诊，，，，
			.fun2Wrapp {
				height: 168rpx;
				width: 100%;
				display: flex;
				flex-direction: row;
				justify-content: space-between;
				align-items: center;
				// margin-top: 26rpx;
				// background-color: black;

				.order1 {
					height: 168rpx;
					width: 25%;
					display: flex;
					flex-direction: column;
					justify-content: center;
					align-items: center;

					.order1Img {
						height: 90rpx;
						width: 90rpx;
						border-radius: 100%;

					}

					.order1Text {
						padding-top: 4rpx;
						font-size: 24rpx;
						color: #6B6B6B;
					}
				}
			}
		}
	}

	.informationWrapp {

		height: 236rpx;
		width: 100%;
		// background-color: rebeccapurple;
		display: flex;
		flex-direction: row;
		justify-content: center;
		margin-bottom: 20rpx;

		.information {
			width: 688rpx;
			height: 100%;
			background-color: white;
			border-radius: 24rpx;
			box-shadow: 0px 0px 4px black;
			display: flex;
			flex-direction: column;

			.informationUp {
				height: 50%;
				width: 100%;
				padding-top: 20rpx;
				border-bottom-style: solid;
				padding-left: 30rpx;
				border-color: #D8D8D8;
				border-width: 2rpx;

				.informationUpText1 {
					color: #000000;
					font-feature-settings: "kern" on;
					font-size: 36rpx;
					font-weight: 550;
					// padding-top: 10rpx;

				}

				.informationUpText2 {

					color: #9E9E9E;
					font-feature-settings: "kern" on;
					font-size: 20rpx;


				}
			}

			.informationDown {
				height: 50%;
				width: 100%;

				padding-top: 20rpx;
				padding-left: 30rpx;

				.informationDownText1 {

					color: #000000;
					font-feature-settings: "kern" on;
					font-size: 36rpx;
					font-weight: 550;



				}

				.informationDownText2 {

					color: #9E9E9E;
					font-feature-settings: "kern" on;
					font-size: 20rpx;


				}
			}
		}
	}

	//通用设置
	.settingWrapp {

		height: 100%;
		width: 100%;
		// background-color: rebeccapurple;
		display: flex;
		flex-direction: row;
		justify-content: center;
		margin-bottom: 20rpx;

		.information {
			width: 688rpx;
			height: 100%;
			background-color: white;
			border-radius: 24rpx;
			box-shadow: 0px 0px 4px black;
			display: flex;
			flex-direction: column;

			.informationUp {
				height: 50%;
				width: 100%;
				padding-top: 20rpx;
				border-bottom-style: solid;
				padding-left: 30rpx;
				border-color: #D8D8D8;
				border-width: 2rpx;

				.informationUpText1 {
					color: #000000;
					font-feature-settings: "kern" on;
					font-size: 36rpx;
					font-weight: 550;
					// padding-top: 10rpx;

				}

				.informationUpText2 {

					color: #9E9E9E;
					font-feature-settings: "kern" on;
					font-size: 20rpx;


				}
			}

			.informationDown {
				height: 50%;
				width: 100%;

				padding-top: 20rpx;
				padding-left: 30rpx;

				.informationDownText1 {

					color: #000000;
					font-feature-settings: "kern" on;
					font-size: 36rpx;
					font-weight: 550;



				}

				.informationDownText2 {

					color: #9E9E9E;
					font-feature-settings: "kern" on;
					font-size: 20rpx;


				}
			}
		}
	}

	.buttonWrapp {
		display: flex;
		flex-direction: row;

		.button1 {
			height: 98rpx;
			width: 292rpx;
			border-radius: 20rpx;
			background: #FFCB45;
			font-size: 36rpx;
			font-weight: 550;
		}

		.button2 {
			height: 98rpx;
			width: 292rpx;
			border-radius: 20rpx;
			background: #D8D8D8;
			font-size: 36rpx;
			font-weight: 550;
		}
	}
</style>
<style>
page {
	background-color:#F7F7F7;
}
</style>