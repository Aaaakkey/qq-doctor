<template>
	<view>
		<!-- 选择医院或者医生 -->
		<view class="time3Wrapp">
			<view class="tag1">
				<timeCheckbox mode="tag" v-model="radio" :localdata="hosp" selectedColor="#FFBB24"></timeCheckbox>
			</view>

			<view class="tag2">
				<timeCheckbox mode="tag" v-model="radio" :localdata="doc" selectedColor="#FFBB24"></timeCheckbox>
			</view>
		</view>

	

		<!--展示足迹   医生信息-->
		<view class="footprintWrapp" v-for="(item1,index1) in list1" :key="index1" v-if="radio == 1" >
			<!-- 展示时间 -->
			<view class="timeWrapp">
				<text>10月19日</text>
			</view>
			<!-- 展示浏览过的医生 -->
			<view class="docListWrapp">
				<view class="docOneWrapp" v-for="(item2,index2) in list2" :key="index2">
					<view class="docOne" >
						<image src="../../../static/img/user/doc.png" mode="" class="docOneIcon"></image>
						<text class="docOneText">赵熙蒙医生</text>
					</view>
				</view>
			</view>
		</view>
		
		<!-- 展示足迹 医院信息 -->
         <view class="dospListWrapp"  v-for="(item2,index2) in list1"  :key="index2"  v-if="radio == 0">
			 <view class="dospTime">
			 	<view class="dospTimeText">10月18日</view>
			 </view>
         			<collectItem v-for="(item2,index2) in list1"  :key="index2"></collectItem>
         		
         </view>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				radio: 0,

				doc: [

					{
						text: '医生',
						value: 1
					}
				],
				hosp: [{
						text: '医院',
						value: 0
					},

				],
				list1 : ["1","2","3","4","5"],
				list2 : ["1","2","3","4","5"]
			}
		},
		methods: {

		}
	}
</script>

<style lang="scss" scoped>
	// * {
	// 	background: #F7F7F7;
	// }

	.time3Wrapp {
		margin-top: 30rpx;
		height: 82rpx;
		width: 100%;
		background: #F7F7F7;
		display: flex;
		flex-direction: row;
		justify-content: space-evenly;

		.tag1 {
			width: 30%;
			height: 100%;

		}

		.tag2 {
			// margin-left: 20rpx;
			// box-shadow: 0px 0px 3px black;

			width: 30%;
			height: 100%;

		}

	}

	.footprintWrapp {
		margin-top: 32rpx;
		display: flex;
		flex-direction: column;
		width: 100%;
		height: 100%;
		// background-color: rebeccapurple;


		.timeWrapp {
			font-size: 48rpx;
			color: #000000;
			padding-left: 46rpx;
		}

		.docListWrapp {
			display: flex;
			flex-direction: row;
		
			flex-wrap: wrap;
		
			.docOneWrapp {
				margin-top: 42rpx;
				// background: #D8D8D8;
				width: 25%;
				height: 196rpx;
                display: flex;
				justify-content: space-evenly;

				.docOne {
					background: #D8D8D8;
					display: flex;
					flex-direction: column;
					box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.302);
					height: 196rpx;
					width: 150rpx;
					text-align: center;
					border-radius: 30rpx;

					.docOneIcon {
						background: #D8D8D8;
						height: 150rpx;
						width: 150rpx;
						border-radius: 30rpx;
					}

					.docOneText {
						margin-top: 5rpx;
						font-size: 20rpx;
						text-align: center;
						background: #D8D8D8;
						padding-bottom: 5rpx;
					}
				}

			}
		}
	}
	
	.dospListWrapp{
		margin-top: 30rpx;
		display: flex;
		flex-direction: column;
		align-items: center;
		
		height: 100%;
		width: 100%;
		
		.dospTime{
			display: flex;
			width: 100%;
		    padding-bottom: 20rpx;
			padding-left: 46rpx;
			font-size: 48rpx;
			font-weight: normal;
		}
	}
</style>
<style>
page {
	background-color:#F7F7F7;
}
</style>