<template>
	<view class="hospInfoWrapp">
		
		<!-- 医院图片 -->
	    <image :src="item.pic" mode="" class="hospIcon"></image>
		
		
		<!-- 总体右侧的医院信息 -->
		<view class="hospTextContain">
			
			<!-- 医院文字信息 -->
			<view class="hospText">
				
				<text class="hospText1">{{ item.hospital}}</text> 
				<text class="hospText2">\n{{ item.address }}</text> 
				</view>
			<view class="hopsFucWrapp">
				 <view class="hospRateAndLocation">
					 
					 <!-- 评分 -->
					 <view class="rate">
						 <uni-rate :readonly="true" :value="item.evaluate"  uni-rate size="15" class="rateSy"/>
					 </view>
					 
					 <!-- 定位 -->
					<image src="../../static/img/nearHosp/location.png" mode="" class="locationIcon"></image> 
					<!-- 距离 -->
					
					<text class="locationText"> {{item.distance}}km</text>
				 </view>
				 
				 <!-- 是否营业的展示 -->
				 <view class="hospLineWarpp">
					 <view class="hosp-online" v-if="statusValue() == 1">
					 	营业
					 </view>
					 <view class="hosp-line" v-if="statusValue() == 0">
					 	未开放
					 </view>
				 </view>
			
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			item:{
			hid: "2",
			pic: "../../static/img/nearHosp/hosp2.png",
			hospital: "赣州市第二人民医院",
			distance: 2.5,
			evaluate: "5",
			status: "0",
			address: "江西省赣州市章贡区789号",
			}
		},

		data() {
			return {
				
			};
		},
		methods: {
			statusValue(){
				return parseInt(this.item.status);	
			}
		}
	}
</script>

<style  lang="scss" scoped>
        .hospInfoWrapp{
			height: 252rpx;
			width: 712rpx;
			background: #FFFFFF;
			display: flex;
			flex-direction: row;
			align-items: center;
			border-radius: 30rpx;
			justify-content: space-between;
			box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
			margin-bottom: 30rpx;
			
		}
		.hospIcon{
			width: 142rpx;
			height: 150rpx;
			border-radius: 30rpx;
			margin-left: 24rpx;
		}
		.hospTextContain{
			height: 100%;
			width: 506rpx;
			display: flex;
			flex-direction: column;
			// background-color: aqua;
			.hospText{
				margin-top: 30rpx;
				height: 50%;
				width: 100%;
				.hospText1{
					font-family: Poppins;
					font-size: 32rpx;
					font-weight: 500;
					color: #0A0A0A;
				
					
				}
				.hospText2{
					font-weight: normal;
					color: #ABAFB3;
					font-size: 24rpx;
				
				}
			}
			.hopsFucWrapp{
				height: 50%;
				width: 100%;
				// background-color: aqua;
				display: flex;
				flex-direction: row;
				justify-content: space-between;
				
				.hospRateAndLocation{
					height: 100%;
					width: 50%;
					// background-color: aquamarine;
					.rate{
					    margin-top: 20rpx;
						.rateSy{
						
							
						}
					}
					.locationIcon{
						margin-top: 6rpx;
						margin-left: 7rpx;
						width: 22.8rpx;
						height: 30.164rpx;
						 transform: translateY(2rpx);
					}
					.locationText{
						margin-left: 15rpx;
						font-size: 28rpx;
						color: #ABAFB3;
					    // transform: translateY(-0rpx);
					}
				}
				
				.hospLineWarpp{
					display: flex;
                    flex-direction: column;
					justify-content: center;
					
					
					.hosp-online {
						margin-left: 10rpx;
						width: 128rpx;
						height: 64rpx;
						background-color: #CCF5E1;
						border-radius: 20rpx;
						display: flex;
						align-items: center;
						justify-content: center;
						font-size: 28rpx;
						font-weight: 900;
						color: #00CC6A;
						 margin-right: 50rpx;
					}
					
					.hosp-line {
						margin-left: 10rpx;
						width: 128rpx;
						height: 64rpx;
						color: #CC4900;
						background-color: #F7E4D9;
						border-radius: 20rpx;
						display: flex;
						align-items: center;
						justify-content: center;
						font-size: 25rpx;
						font-weight: 900;
					    margin-right: 50rpx;
					}
				}
				
			
			}
		}
</style>