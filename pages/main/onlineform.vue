<template>
	<view class="onlineform">
		<view class="online-doctor-block">
			<view class="online-doctor-image">
				<image :src="doctor.pic" mode="aspectFill"></image>
			</view>
			<view class="online-doctor-text">
				<view class="online-doctor-name">{{doctor.name}}医生</view>
				<view class="online-doctor-dep">{{doctor.depart}} {{doctor.hospital}}医生</view>
			</view>
		</view>
		<view class="online-submit">
			<form @submit="formSubmit">
				<view class="online-submit-title1">预约信息</view>
				<input type="text" placeholder="姓名" name="name" class="online-submit-input">
				<input type="tel" placeholder="电话" name="phone" class="online-submit-input">
				<input type="text" placeholder="时间" name="time" class="online-submit-input" @click.native="goTime()" :v-model="this.seletedTime">
				<view class="online-submit-title2">病人信息</view>
				<view class="online-patient">
					<view class="online-patient-add" @click="addPatient()">
						<view class="online-patiend-add-image">
							<image src="../../static/img/add.png" mode=""></image>
						</view>
						<view class="online-patiend-add-text">添加</view>
					</view>
					<scroll-view class="online-patient-view" scroll-x>
						<view class="online-patient-view-block" v-for="(item,index) in patients">
							<view class="online-patient-view-block-image" @click="changePatient(item)">
								<image :src="item.pic" mode=""></image>
							</view>
							<view class="online-patient-view-block-word">
								{{item.name}}
							</view>
						</view>
					</scroll-view>
				</view>
				<button form-type="submit" class="online-patient-submit">预约</button>
			</form>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				did: "",
				doctor: {
					pic: "../../static/img/doctor2.png",
					name: "赵熙蒙",
					hospital: "赣州市第一人民医院",
					depart: "眼科"
				},
				patients: [{
					patientId: "001",
					pic: "../../static/img/patient1.png",
					name: "周嘉兴",
				}, {
					patientId: "002",
					pic: "../../static/img/patient2.png",
					name: "赵熙蒙"
				}, {
					patientId: "003",
					pic: "../../static/img/patient3.jpg",
					name: "安俊禹"
				}],
				selectPatient: "001",
				way : "",
				name: "线上表单",
				seletedTime: ""
			};
		},
		onLoad(e) {
			this.did = e.did;
			this.way = e.way;
			// this.seletedTime = options.seletedClock;
			if(e.way == "online"){
				this.name = "线上表单";
			}else{
				this.name = "挂号表单"
			}
		
			uni.setNavigationBarTitle({
				title:this.name
			})
		},
		onShow() {
		  uni.$on('dataBack', (data) => {
		    console.log(data);
		    // 对传递过来的数据进行操作
		  });
		},
		methods: {
			formSubmit: function(e) {
				console.log('form发生了submit事件，携带数据为：' + JSON.stringify(e.detail.value));
				//发送创建表单请求
				//得到订单号
				//例如为4935975230644435337
				uni.navigateTo({
					url: `/pages/main/onlineorder?id=4935975230644435337&way=${this.way}`
				})
			},
			addPatient() {
				uni.navigateTo({
					url: "/pages/user/addpatient"
				})
			},
			changePatient(item) {
				this.selectPatient = item.patientId;
			},
			goTime(){
				uni.navigateTo({
					url:`/pages/main/onlineformtime?way=${this.way}?did=${this.did}`
				})
			}
		},
	}
</script>

<style lang="scss" scoped>
	.onlineform {
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

		display: flex;
		flex-flow: column nowrap;
		align-items: center;

		.online-patient-submit {
			border-radius: 50rpx;
			background-color: #3B77CE;
			color: #ffffff;
			height: 120rpx;
			line-height: 120rpx;
		}

		.online-doctor-block {

			margin-top: 50rpx;
			background-color: #ffffff;
			width: 700rpx;
			height: 200rpx;
			box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
			display: flex;
			flex-flow: row nowrap;
			align-items: center;
			border-radius: 20rpx;

			.online-doctor-image {
				height: 100%;
				width: 30%;

				image {
					margin-left: 35rpx;
					margin-top: 30rpx;
					height: 140rpx;
					width: 140rpx;
				}
			}

			.online-doctor-text {
				height: 50%;
				width: 60%;

				.online-doctor-name {
					font-size: 36rpx;
				}

				.online-doctor-dep {
					font-size: 26rpx;
					color: #AAAAAA;
				}
			}
		}

		.online-submit {

			width: 700rpx;
			height: 600rpx;
			display: flex;
			flex-flow: column nowrap;
			align-items: flex-start;

			.online-submit-title1 {
				padding-top: 80rpx;
				width: 700rpx;
				height: 150rpx;
				font-size: 36rpx;
				color: #333333;
			}

			.online-submit-title2 {
				width: 700rpx;
				height: 60rpx;
				font-size: 36rpx;
				color: #333333;
			}

			.online-submit-input {
				margin: 30rpx 0rpx;
				padding-left: 40rpx;
				border: rgb(230, 232, 236) 1px solid;
				border-radius: 20rpx;
				width: 655rpx;
				height: 120rpx;
			}

			.online-patient {
				width: 700rpx;
				height: 340rpx;
				display: flex;
				flex-flow: row nowrap;
				.online-patient-add {
					width: 30%;
					background-color: rgba(14, 190, 127, 0.2);
					height: 270rpx;
					display: flex;
					flex-flow: column nowrap;
					align-items: center;
					justify-content: center;
					margin-right: 10rpx;

					.online-patiend-add-image {
						image {
							width: 50rpx;
							height: 50rpx;
						}
					}

					.online-patiend-add-text {
						margin-top: 10rpx;
						font-size: 36rpx;
						color: #0EBE7F;
					}
				}

				.online-patient-view {

					width: 70%;
					height: 100%;
					background-color: #F8F8F8;

					white-space: nowrap;

					.online-patient-view-block {
						margin-left: 10rpx;
						margin-right: 10rpx;
						height: 320rpx;
						width: 45%;

						display: inline-block;

						.online-patient-view-block-image {
							width: 100%;
							height: 270rpx;

							image {
								width: 100%;
								height: 270rpx;
								border-radius: 10rpx;
							}
						}

						.online-patient-view-block-word {
							text-align: center;
							width: 100%;
							height: 50rpx;
							font-size: 32rpx;
							color: #677294;
						}
					}
				}

			}
		}
	}
</style>