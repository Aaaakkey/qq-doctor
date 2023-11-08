<template>
	<view>
		<!-- 修改病人信息 -->
		<view class="modifyPatientinformationWrapp">
			<!-- 第一部分 -->
			<view class="modifyInformation">
				<view class="information1">
					<text class="informationUpText1">姓名</text>
					<view class="nameTextWrapp">
						<!-- 姓名 -->
						<view class="nameText">
							<text>周嘉兴</text>
						</view>
						<!-- 箭头 -->
						<image src="../../../static/img/user/goRight2.png" mode="" class="goRight2Icon"></image>
					</view>
				</view>

				<!-- 第二部分 -->
				<view class="information2">
					<view class="informationDown">
						<view class="informationDownText1">
							年龄
						</view>
						<view class="informationDownText2">
							<text class="nameText">23</text>
							<image src="../../../static/img/user/goRight2.png" mode="" class="goRight2Icon"></image>
						</view>

					</view>
				</view>
				<!-- 第三部分 -->
				<view class="information3">
					<text class="information3Text1">照片</text>
					<view class="headIconWrapp">
						<!-- 头像 -->
						<image src="../../../static/img/user/headSculpture.png" mode="" class="headIcon"></image>
						<!-- 箭头 -->
						<image src="../../../static/img/user/goRight2.png" mode="" class="goRight2Icon"></image>
					</view>
				</view>

			</view>
		</view>
		
		<!-- 医保卡号 -->
<!-- 		 <view class="idAndMedicalInsuranceWrapp">
		 	   <view class="idAndMIWrapp">
				   <view class="MIWrapp">
					   <view class="MI">
					   	 <text>医保卡号 </text> <text>603365********1349</text>
					   </view>
				   	    <view class="goRight2Wrapp">
				   	    	<image src="../../../static/img/user/goRight2.png" mode="" class="goRight2Icon"></image>
				   	    </view>
				   </view>
			   </view>
		 </view> -->
		 
		 <!-- 修改病人信息 -->
		 <view class="idAndMIWrapp">
		 	<!-- 第一部分 -->
		 	<view class="modifyInformation2">
		 		<view class="information4">
		 			<text class="information4UpText1">医保卡号</text>
		 			<view class="MITextWrapp">
		 				<!-- 姓名 -->
		 				<view class="MIText">
		 					<text> 603365********1349</text>
		 				</view>
		 				<!-- 箭头 -->
		 				<image src="../../../static/img/user/goRight2.png" mode="" class="goRight2Icon"></image>
		 			</view>
		 		</view>
		 
		 		<!-- 第二部分 -->
		 		<view class="information5">
		 			<view class="information5Down">
		 				<view class="information5DownText1">
		 					身份证号
		 				</view>
		 				<view class="information5DownText2">
		 					<text class="idText"> 510802********1714</text>
		 					<image src="../../../static/img/user/goRight2.png" mode="" class="goRight2Icon"></image>
		 				</view>
		 
		 			</view>
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

<style scoped lang="scss">
	.modifyPatientinformationWrapp {
		margin-top: 28rpx;
		height: 520rpx;
		width: 100%;
		// background-color: rebeccapurple;
		display: flex;
		flex-direction: row;
		justify-content: center;
		margin-bottom: 20rpx;

		.modifyInformation {
			width: 688rpx;
			height: 100%;
			background-color: white;
			border-radius: 24rpx;
			box-shadow: 0px 0px 4px black;
			display: flex;
			flex-direction: column;


			.information1 {
				height: 33.333%;
				width: 100%;
				// padding-top: 20rpx;
				border-bottom-style: solid;
				padding-left: 30rpx;
				border-color: #D8D8D8;
				border-width: 2rpx;
				display: flex;
				flex-direction: row;
				justify-content: space-between;


				.informationUpText1 {
					color: #000000;
					font-feature-settings: "kern" on;
					font-size: 36rpx;
					font-weight: 500;
					line-height: 170rpx;

				}

				.nameTextWrapp {
					display: flex;
					flex-direction: row;
					align-items: center;

					.nameText {
						margin-right: 80rpx;
                        font-size: 35rpx;
					}

					.headIcon {
						height: 106rpx;
						width: 110rpx;
						border-radius: 100%;
						margin-right: 25rpx;
					}

					.goRight2Icon {
						height: 30rpx;
						width: 30rpx;
						margin-right: 30rpx;
						transform: translateY(4rpx);
					}

				}

			}

			.information2 {
				height: 33.333%;
				width: 100%;
				line-height: 118rpx;
				border-bottom-style: solid;
				border-color: #D8D8D8;
				border-width: 2rpx;
				padding-left: 30rpx;

				.informationDown {
					display: flex;
					flex-direction: row;
					justify-content: space-between;

					.informationDownText1 {

						color: #000000;
						font-feature-settings: "kern" on;
						font-size: 36rpx;
						font-weight: 500;
						line-height: 170rpx;

					}

					.informationDownText2 {
						
						.nameText{
							margin-right: 80rpx;
							 font-size: 35rpx;
						}

						color: #000000;
						font-feature-settings: "kern" on;
						font-size: 26rpx;
						font-weight: 500;
						line-height: 170rpx;
					

					}

					.goRight2Icon {
						height: 30rpx;
						width: 30rpx;
						margin-right: 30rpx;
						transform: translateY(4rpx);
					}
				}

			}

			.information3 {
				height: 33.333%;
				width: 100%;
				// padding-top: 20rpx;
				border-bottom-style: solid;
				padding-left: 30rpx;
				border-color: #D8D8D8;
				border-width: 2rpx;
				display: flex;
				flex-direction: row;
				justify-content: space-between;

				.information3Text1 {
					color: #000000;
					font-feature-settings: "kern" on;
					font-size: 36rpx;
					font-weight: 500;
					line-height: 118rpx;
						line-height: 170rpx;

				}

				.headIconWrapp {
					display: flex;
					flex-direction: row;
					align-items: center;

					.headIcon {
						height: 106rpx;
						width: 110rpx;
						border-radius: 100%;
						margin-right: 50rpx;
					}

					.goRight2Icon {
						height: 30rpx;
						width: 30rpx;
						margin-right: 30rpx;
						transform: translateY(4rpx);
					}

				}

			}
		}
	}
	
	.idAndMIWrapp {
		margin-top: 28rpx;
		height: 320rpx;
		width: 100%;

		display: flex;
		flex-direction: row;
		justify-content: center;
		margin-bottom: 20rpx;
	
		.modifyInformation2 {
			width: 688rpx;
			height: 100%;
			background-color: white;
			border-radius: 24rpx;
			box-shadow: 0px 0px 4px black;
			display: flex;
			flex-direction: column;
	
	
			.information4 {
				height: 50%;
				width: 100%;
				// padding-top: 20rpx;
				border-bottom-style: solid;
				padding-left: 30rpx;
				border-color: #D8D8D8;
				border-width: 2rpx;
				display: flex;
				flex-direction: row;
				justify-content: space-between;
	
	
				.information4UpText1 {
					color: #000000;
					font-feature-settings: "kern" on;
					font-size: 36rpx;
					font-weight: 500;
					line-height: 170rpx;
	
				}
	
				.MITextWrapp {
					display: flex;
					flex-direction: row;
					align-items: center;
				
	
					.MIText {
						margin-right: 20rpx;
	                    font-size: 35rpx;
					// line-height: 230rpx;
					transform: translateY(4rpx);
					}
	
					.headIcon {
						height: 106rpx;
						width: 110rpx;
						border-radius: 100%;
						margin-right: 25rpx;
					}
	
					.goRight2Icon {
						height: 30rpx;
						width: 30rpx;
						margin-right: 30rpx;
						transform: translateY(4rpx);
					}
	
				}
	
			}
	
			.information5 {
				height: 50%;
				width: 100%;
				line-height: 118rpx;
		
				padding-left: 30rpx;
	
				.information5Down {
					display: flex;
					flex-direction: row;
					justify-content: space-between;
	
					.information5DownText1 {
	
						color: #000000;
						font-feature-settings: "kern" on;
						font-size: 36rpx;
						font-weight: 500;
						line-height: 170rpx;
	
					}
	
					.information5DownText2 {
						
						.idText{
							margin-right: 20rpx;
							 font-size: 35rpx;
						}
	
						color: #000000;
						font-feature-settings: "kern" on;
						font-size: 26rpx;
						font-weight: 500;
						line-height: 170rpx;
					
	
					}
	
					.goRight2Icon {
						height: 30rpx;
						width: 30rpx;
						margin-right: 30rpx;
						transform: translateY(4rpx);
					}
				}
	
			}
	
		}
	}
	

</style>
<style>
page {
	background-color:#F7F7F7;
}
</style>