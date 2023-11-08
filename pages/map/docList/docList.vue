<template>
	<view>

		<!-- 搜索框       之后修改搜索框的搜索事件!!!!!!!!!! -->
		<SelectFrontBlue prompt="  请输入医生的姓名"></SelectFrontBlue>

		<!-- 空白填充 -->
		<view class="" style="height: 146rpx; width: 100%; "></view>

		<!-- 展示搜索的总结果 -->
		<view class="resWrapp">
			<view class="res">
				<text class="resText1">搜索到<text class="resText2 ">赣州市第一人民医院</text>医生<text text
						class="resText2">35</text>名
				</text>
			</view>
		</view>


		<!-- 展示医生列表 -->
		<view class="docListWrapp" v-for="(item,index) in list" :key="index">
			<!-- 科室名称 -->
			<view class="depNameWrapp">
				<text class="depNameText">内科</text>
			</view>

			<!-- 医生列表 -->
			<scroll-view class="docList" show-scrollbar="false" scroll-x="true" @scroll="scroll" >
				<view class="docOneWrapp" v-for="(item,index) in list2" :key="index" >
					<view class="docOne"  @click="navToDocDesc()">
						<!-- 医生头像 -->
						<view class="headSculptureWrapp">
							<image src="../../../static/img/docDetais/touxiang.png" mode="" class="headSculpture">
							</image>
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
				

			</scroll-view>
			


			

		</view>


	</view>
</template>

<script>
	export default {
		data() {
			return {
              list : ["1",
			  "2",
			  "3"],
			  list2 : ["1","2","3"],
			  	scrollTop: 0,
			  				old: {
			  					scrollTop: 0
			  				}
			};
		},
		methods: {

		
			scroll: function(e) {
			
				this.old.scrollTop = e.detail.scrollTop
			},
			
			navToDocDesc() {
				// uni.navigateTo({
				// 	// url: "/pages/map/depDetails/depDetails"
				// })
			  console.log("111")
			}
		}
	}
</script>

<style lang="scss" scoped>
	.resWrapp {
		width: 100%;
		height: 80rpx;
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		margin-bottom: 18rpx;

		.res {
			width: 96%;
			height: 100%;
			line-height: 80rpx;
			background: #FBF6F6;
			border-radius: 10rpx;
			padding-left: 20rpx;

			.resText1 {
				color: #9E9E9E;
				font-size: 32rpx;
			}

			.resText2 {
				color: #E7343F;
				font-size: 32rpx;
			}


		}

	}

	.docListWrapp {
		.depNameWrapp {
			width: 272rpx;
			height: 80rpx;

			margin-left: 28rpx;
			border-radius: 20rpx;
			text-align: center;
			background: #FFFFFF;
			border-style: solid;
			border-width: 2rpx;
			border-color: #FED2A4;
			box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.3);

			.depNameText {
				font-size: 40rpx;
				line-height: 70rpx;
				font-size: 600;
			}
		}

		.docList {

			// 去除滚动条
			::-webkit-scrollbar {
				display: none;
				width: 0 !important;
				height: 0 !important;
				-webkit-appearance: none;
				background: transparent;
				color: transparent;
			}

			margin-top: 32rpx;
			white-space: nowrap;
			width: 100%;
			height: 100%;
			scrollbar: none;

			.docOneWrapp {
				display: inline-block;
				// border-style: solid;;
				margin-right: 20rpx;
				margin-left: 20rpx;
				height: 100%;
				width: 46%;
				// background-color: #4485FD;

				margin-bottom: 40rpx;


				.docOne {
					height: 300rpx;
					width: 300rpx;
					background: #FFFFFF;
					margin-left: 6%;

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

	}
</style>