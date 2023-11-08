<template>
	<view>
		<!-- 病人信息列表 -->
		<view class="patientInfoListWrapp" v-for="(item,index) in list" :key="index">
			<view class="patientInfoList" >
				<!-- 头像 姓名 年龄块 -->
				<view class="patientInfoUp">
					<view class="headIconWrapp">
						<image src="../../../static/img/user/headSculpture.png" mode="" class="headIcon" ></image>
					</view>
					<view class="nameTextWrapp">
						<text class="nameText">姓名：周嘉兴</text>
						<text class="ageText">\n年龄: 23</text>
					</view>
					<!-- 	   <view class="ageTxetWrapp">
						   <text class="ageText">年龄: 23</text>
					   </view> -->
				</view>
				<view class="patientInfoDown">
					<!-- 身份证号码 和箭头 -->
					<view class="idWrapp">
						<text class="idText">身份证号：510802********1714</text>
						<image src="../../../static/img/user/goRight2.png" mode="" class="goRight2Icon" @click="navToModify()"></image>
					</view>
					<!-- 医保 -->
					<view class="medicalInsuranceWrapp">
						<text class="medicalInsuranceText">医保卡号：603365********1349</text>
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
               list : ["1","2","3"]
			}
		},
		methods: {
           navToModify(){
			   uni.navigateTo({
			   	url: "/pages/user/modifyPatientInfo/modifyPatientInfo"
			   })
		   }
		}
	}
</script>

<style scoped lang="scss">
	.patientInfoListWrapp {

		display: flex;
		flex-direction: row;
		justify-content: center;

		.patientInfoList {
			margin-top: 28rpx;
			width: 90%;
			height: 320rpx;
			background: #FFFFFF;
			display: flex;
			flex-direction: column;
			box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.302);
			border-radius: 20rpx;

			.patientInfoUp {
				display: flex;
				flex-direction: row;

				.headIconWrapp {
					.headIcon {
						height: 106rpx;
						width: 110rpx;
						border-radius: 100%;
						margin-left: 24rpx;
						margin-top: 24rpx;
					}
				}

				.nameTextWrapp {
					margin-left: 68rpx;
					color: #9E9E9E;
					font-size: 34rpx;
					margin-top: 35rpx;
				}
			}

			.patientInfoDown {
				margin-top: 4rpx;
				display: flex;
				flex-direction: column;

				.idWrapp {
					display: flex;
					flex-direction: row;
					justify-content: space-between;

					.idText {
						color: #9E9E9E;
						font-size: 34rpx;
						margin-left: 24rpx;
					}

					.goRight2Icon {
						height: 30rpx;
						width: 30rpx;
						margin-right: 30rpx;
						transform: translateY(4rpx);
					}
				}

				.medicalInsuranceWrapp {
                    display: flex;
					flex-direction: row;
					justify-content: space-between;
					.medicalInsuranceText {
						color: #9E9E9E;
						font-size: 34rpx;
						margin-left: 24rpx;
						margin-top: 14rpx;
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