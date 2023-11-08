<template>
	<view>
		<!-- 医院名称 -->
		<view class="hospNameWrapp">
			<text class="hospNameText">赣州市第一人民医院</text>
		</view>

		<!-- 科室名称 -->
		<view class="depNameWrapp">
			<text>心血管内科</text>
		</view>

		<!-- 科室介绍 -->
		<view class="depDescWrapp">
			<view class="depDescTextWrapp">

				<text class="depDescText1">科室介绍 </text>
				<!-- 后面用Jscript 加入对文字长度判断 多的用省略号代替 -->
				<text
					class="depDescText2">现收录科室医生35名,其中6位正高级专家、10位副高级专家,现已有20位医生开通了在线问诊服务,累计帮助了12890名患者,获得了3740次患者好评,科室人才梯队结构合理
					现有医学后博士1名,博士2名,硕士10名,高级职称医师15名
					省卫生系统学科带头人培养5名......</text>
			</view>
			<view class="" style="margin-left: 81%; font-size: 30rpx;  color: #5AA9FF;" @click="navToDepAll()">查看全部</view>
		</view>


		<!-- 医院地址和拨打电话 -->
		<view class="addressAndPhone">
			<!-- 后面用Jscript 加入对文字长度判断 多的用省略号代替 -->
			<view class="addressWrapp">
				<text class="address">北院:江西省赣州市章贡区红旗大道...</text>
			</view>

			<!-- 电话图标 -->
			<view class="phoneWrapp">
				<image src="../../../static/img/nearHosp/phone.png" mode="" class="phone"></image>
			</view>
		</view>



		<!-- 预约挂号等功能 -->
		<view class="funWrapp">
			<!-- 挂号预约 -->
			<view class="registerWrapp">
				<image src="../../../static/img/nearHosp/guahao.png" mode="" class="registerIcon"></image>
				<text>挂号预约</text>
			</view>
			<!-- 出诊查询 -->
			<view class="visitWrapp">
				<image src="../../../static/img/nearHosp/chuzhem.png" mode="" class="visitIcon"></image>
				<text>出诊查询</text>
			</view>
			<!--在线问诊-->
			<view class="consultationWrapp">
				<image src="../../../static/img/nearHosp/wenzhen.png" mode="" class="consultationIcon"></image>
				<text>在线问诊</text>
			</view>
			<!-- 介绍信息 -->
			<view class="informationWrapp">
				<image src="../../../static/img/nearHosp/xinxi.png" mode="" class="informationIcon"></image>
				<text>介绍信息</text>
			</view>
		</view>

		<!-- 医院公告 -->
		<view class="noticeWrapp">
			<view class="notice">
				<text class="notice1">科室公告</text>
			</view>
			<view class="noticeContent">
				<text class="noticeContent1">官方暂无公告。</text>
			</view>
			<view class="prompt">
				<text class="promptText">本页面信息又企桥医健在线负责更新,对真实性负责。</text>
			</view>
		</view>

		<!-- 科室医生 -->
		<view class="hospitalDocTextWrapp">
			<view class="overallInformationWrapp">
				<text class="hospitalDocText1">
					科室医生
				</text>
				<text class="hospitalDocText2">
					35名医生
				</text>

			</view>

			<!-- 后面添加点击事件  点击之后显示所有的医生 -->
	<!-- 		<view class="allTextWrapp">
				<text class="allText">查看全部</text>
			</view> -->
			
			
		</view>



		<!-- 展示所有的医生信息 -->
		<view class="allDocWrapp">

			<!-- 单个医生 -->
			<view class="docOneWrapp" v-for="(item,index) in list" :key="index" >
				<view class="docOne">
					<!-- 医生头像 -->
					<view class="headSculptureWrapp">
						<image src="../../../static/img/docDetais/touxiang.png" mode="" class="headSculpture"></image>
					</view>
					<!-- 医生姓名 -->
					<view class="docNameTextWrapp">
						<text class="docNameText">赵熙蒙</text>
					</view>
					<!-- 医生职务 -->
					<view class="docDutiesTextWrapp">
						<text class="docDutiesText1">
							主任医师
						</text>
						<text class="docDutiesText2">
							教授
						</text>
					</view>
					<!--  对应科室-->
					<view class="correspondingDepartmentTextWrapp">
						<text class="correspondingDepartmentText1">
							院长
						</text>
						<text class="correspondingDepartmentText2">
							心血内科专家
						</text>
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
				docList: [{
					headIconUrl: "../../../static/img/docDetais/touxiang.png",
					name: "赵熙蒙",


				}],
				list : ["1","2","3","4","5","6"]
			};
		},
		methods : {
			navToDepAll() {
				uni.navigateTo({
					url:"/pages/map/depAll/depAll"
				})
			},
			navToDocList(){
				uni.navigateTo({
					url:"/pages/map/docList/docList"
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	// 医院名称
	.hospNameWrapp {
		padding-top: 46rpx;
		padding-left: 14rpx;
		color: #4485FD;
		font-weight: normal;
		font-size: 28rpx;
		font-family: HelloFont ID DianKai;

		.hospNameText {}
	}

	// 科室名称
	.depNameWrapp {
		padding-left: 14rpx;
		font-size: 48rpx;
		font-weight: 600;
		font-feature-settings: "kern" on;
		color: #000000;
		font-family: Roboto Slab;
	}

	// 科室介绍
	.depDescWrapp {
		.depDescTextWrapp {
			.depDescText1 {
				color: dodgerblue;
				font-size: 32rpx;
				font-weight: 600;
				padding-left: 14rpx;
			}

			.depDescText2 {
				color: #AAAAAA;
				font-weight: normal;
				font-size: 30rpx;
			}
		}
	}

	.addressAndPhone {
		display: flex;
		flex-direction: row;
		justify-content: center;
		width: 100%;
		height: 100%;
		background: #F7F7F7;

		.addressWrapp {
			background-color: #61CEFF;
			height: 48rpx;
			width: 610rpx;
			border-radius: 15rpx;

			.address {
				margin-left: 20rpx;
				font-size: 30rpx;
				font-weight: normal;
			}
		}

		.phoneWrapp {
			width: 102rpx;
			height: 50rpx;
			background-color: #61CEFF;
			border-radius: 15rpx;
			margin-left: 8rpx;
			display: flex;
			justify-content: center;

			.phone {
				height: 48rpx;
				width: 48rpx;
			}
		}
	}



	.funWrapp {
		height: 196rpx;
		width: 100%;
		background-color: #61CEFF;
		display: flex;
		flex-direction: row;
		justify-content: space-evenly;
		padding-top: 35rpx;
		background: #D8D8D8;

		.registerWrapp {
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			width: 146rpx;
			height: 128rpx;
			border-radius: 30rpx;
			background: #FFFFFF;
			box-shadow: 2px 5px 4px rgba(1, 1, 1, 0.5);
			font-size: 30rpx;
			font-weight: 400;

			.registerIcon {

				height: 70rpx;
				width: 70rpx;
			}

		}

		.visitWrapp {
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			width: 146rpx;
			height: 128rpx;
			border-radius: 30rpx;
			background: #FFFFFF;
			box-shadow: 2px 5px 4px rgba(1, 1, 1, 0.5);
			font-size: 30rpx;
			font-weight: 400;

			.visitIcon {

				height: 70rpx;
				width: 70rpx;
			}
		}

		.consultationWrapp {
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			width: 146rpx;
			height: 128rpx;
			border-radius: 30rpx;
			background: #FFFFFF;
			box-shadow: 2px 5px 4px rgba(1, 1, 1, 0.5);
			font-size: 30rpx;
			font-weight: 400;

			.consultationIcon {

				height: 70rpx;
				width: 70rpx;
			}
		}

		.informationWrapp {
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			width: 146rpx;
			height: 128rpx;
			border-radius: 30rpx;
			background: #FFFFFF;
			box-shadow: 2px 5px 4px rgba(1, 1, 1, 0.5);
			font-size: 30rpx;
			font-weight: 400;

			.informationIcon {

				height: 70rpx;
				width: 70rpx;
			}
		}
	}

	// 医院公告
	.noticeWrapp {
		background: #D8D8D8;
		// background-color: rebeccapurple;
		width: 100%;
		height: 100%;
		padding-left: 25rpx;
		padding-bottom: 15rpx;

		// 
		.notice {
			.notice1 {
				color: #FB6D3A;
				font-size: 36rpx;
				font-weight: 550;
				font-family: Fotor HelloFont GongYiTi;
			}
		}

		.noticeContent {
			.noticeContent1 {
				font-size: 28rpx;
				font-weight: normal;
				color: #000000;
				font-family: HelloFont ID DianKai;
			}
		}

		.prompt {
			.promptText {
				color: #9E9E9E;
				font-size: 28rpx;
				font-weight: normal;
				font-family: HelloFont ID DianKai;
			}
		}
	}


	// 医院科室
	.hospitalDocTextWrapp {
		background: rgba(255, 189, 134, 0.5);

		padding-bottom: 20rpx;
		padding-top: 5rpx;
		display: flex;
		flex-direction: row;
		justify-content: space-between;


		.overallInformationWrapp {
			padding-left: 25rpx;


			.departmentsText1 {
				color: #000000;
				font-size: 36rpx;
				font-weight: 550;
			}

			.hospitalDocText2 {
				color: #9E9E9E;
				font-size: 28rpx;
				font-family: HelloFont ID DianKai;
				font-weight: normal;
			}
		}

		.allTextWrapp {
			padding-right: 20rpx;

			.allText {
				color: #5AA9FF;

			}
		}
	}


	//  展示所有医生
	.allDocWrapp {
		height: 100%;
		width: 100%;
		background: rgba(255, 189, 134, 0.5);
		display: flex;
		flex-direction: row;
		justify-content: center;
		flex-wrap: wrap;


		// 单个医生外容器
		.docOneWrapp {

			height: 300rpx;
			// width: 33.33333%;
			width: 46%;
			// background-color: #4485FD;
			display: flex;
			flex-direction: row;
			justify-content: center;
			align-items: center;
			margin-bottom: 40rpx;

			// 单个医生容器
			.docOne {
				height: 100%;
				width: 300rpx;
				background: #FFFFFF;


				border-right-style: solid;
				border-bottom-style: solid;
				border: 1px solid #D8D8D8;
				box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.302);

				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;
				border-radius: 15rpx;


				.headSculptureWrapp {
					height: 117rpx;
					width: 114.4rpx;
					display: flex;
					align-items: center;


					.headSculpture {
						height: 100%;
						width: 100%;

					}
				}

				.docNameTextWrapp {
					color: #000000;
					font-size: 24rpx;
					font-feature-settings: "kern" on;
					font-family: 思源黑体;
					font-size: 34rpx;
					font-weight: 550;

					.docNameText {}
				}

				// 医生职称
				.docDutiesTextWrapp {
					margin-bottom: 20rpx;
					color: #9E9E9E;
					font-size: 20rpx;
					font-weight: normal;
					font-family: 思源黑体;

					.docDutiesText {}
				}

				// 对应科室
				.correspondingDepartmentTextWrapp {
					color: #FF4A4A;
					// background: rgba(255, 189, 134, 0.5);
					background-color: #FFBD86;
					font-size: 25rpx;
					width: 86%;
					text-align: center;
					border-radius: 20rpx;
					height: 40rpx;
					line-height: 40rpx;
				}
			}

		}




	}
</style>