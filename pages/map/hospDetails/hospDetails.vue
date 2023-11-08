<template>
	<view class="hospDetails">

		<!-- 医院名称 -->
		<view class="hsopWrapp">
			<text class="hsopName"> 赣州市第一人民医院 </text>
		</view>

		<!-- 标签 -->
		<view class="tag-viewWrapp">

			<!-- 标签左侧空白填充 -->
			<view class="" style="width: 8rpx;"></view>
			<view class="tag-view" v-for="(tag,index) in label" :key="index">
				<uni-tag :text="tag" :mark="true" size="mini"
					custom-style="background-color: #808080; border-color: #808080; color: #fff;">
				</uni-tag>
			</view>
		</view>

		<!-- 医院介绍 -->
		<view class="hospIntroduction">
			<view class="">
				<text class="introduction1">医院介绍 </text>
				<!-- 后面用Jscript 加入对文字长度判断 多的用省略号代替 -->
				<text
					class="introduction2">赣州市人民医院位于赣州市章贡区梅关大道16号，是集医疗、教学、科研、保健、康复于一体的三级甲等综合医院。医院占地面积378亩，建筑面积35万平方米。拥有在职职工3500余人，编制床位3600张。医院是南昌大学附属医院，国家支持的区域性医疗中心医疗中...</text>

			</view>
			<view class="" style="margin-left: 81%; font-size: 30rpx; transform: translateY(-40rpx); height: 10rpx; color: #5AA9FF;" @click="navToHospAll()">查看全部</view>
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
				<text class="notice1">医院公告</text>
			</view>
			<view class="noticeContent">
				<text class="noticeContent1">官方暂无公告。</text>
			</view>
			<view class="prompt">
				<text class="promptText">本页面信息又企桥医健在线负责更新,对真实性负责。</text>
			</view>
		</view>

		<!-- 医院科室 -->
		<view class="hospitalDepartmentsTextWrapp">
			<view class="overallInformationWrapp">
				<text class="departmentsText1">
					医院科室
				</text>
				<text class="departmentsText2">
					56个科室
				</text>
				<text class="departmentsText3">
					640名医生
				</text>
			</view>
		</view>
		
		<!-- 医院科室列表 -->
		<view class="hospitalDepartmentsWrapp" v-for="(item,indexDep) in depList" :key="indexDep">
		
			<hospitalDepartments :item="item"></hospitalDepartments>

		</view>



	</view>
</template>

<script>
	export default {
		data() {
			return {
				label: ["公立", "三甲", "综合医院", "收藏数|江西第八名"],
				depList: [
					{
						absName: "内科",
						depNameList: ["心血管内科", "消化内科", "呼吸与危重症医学科", "肾内科", "血液内科","神经内科"],
					},
					{
						absName: "外科",
						depNameList: ["心血管内科", "消化内科", "呼吸与危重症医学科", "肾内科", "血液内科","神经内科"],
					},
					{
						absName: "五官科",
						depNameList: ["心血管内科", "消化内科", "呼吸与危重症医学科", "肾内科", "血液内科","神经内科"],
					},
				]
				
			}
		},
		methods: {
            navToHospAll(){
				uni.navigateTo({
					url:"/pages/map/hospAll/hospAll"
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.hsopWrapp {
		margin-top: 12rpx;

		.hsopName {
			margin-left: 20rpx;
			font-weight: 600;
			font-size: 48rpx;
		}
	}

	.tag-viewWrapp {
		margin-top: 23rpx;
		display: flex;
		flex-direction: row;

		.tag-view {
			margin-left: 10rpx;
			;
		}
	}

	.hospIntroduction {
		// display: flex;
		// flex-direction: row;
		margin-top: 17rpx;
		margin-left: 17rpx;

		.introduction1 {
			color: dodgerblue;
			font-size: 32rpx;
			font-weight: 600;
		}

		.introduction2 {
			color: #AAAAAA;
			font-weight: normal;
			font-size: 30rpx;
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

	// 中间挂号 出诊 问诊 信息 四个功能
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
	.hospitalDepartmentsTextWrapp {
		background: rgba(255, 189, 134, 0.5);
		
		padding-bottom: 20rpx;
		padding-top: 5rpx;
		.overallInformationWrapp {
			padding-left: 25rpx;
			
			
			.departmentsText1{
				color: #000000;
				font-size: 36rpx;
				font-weight: 550;
			}
			.departmentsText2{
				color: #9E9E9E;
				font-size: 28rpx;
				font-family: HelloFont ID DianKai;
				font-weight: normal;
			}
			.departmentsText3{
				color: #9E9E9E;
				font-size: 28rpx;
				font-family: HelloFont ID DianKai;
				font-weight: normal;
			}
		}
	}
	
	// 医院科室列表
	.hospitalDepartmentsWrapp{
	
	background: rgba(255, 189, 134, 0.5);
		height: 100%;
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		
	}
</style>