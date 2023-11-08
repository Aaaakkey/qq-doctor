<template>
	<view>
		<!-- 系统权限管理 -->
		<view class="spmText1">
			<text>为了向您提供更好的用户体验</text>
			<text>\n企桥医健会在特定场景下向您申请以下权限</text>
		</view>
		
		<!-- 相机和存储权限-->
		<view class="cameraAndStorageWrapp">
			<!-- 第一部分 相机权限-->
			<view class="cameraInformation">
				<view class="cameraInfo">
					<view class="cameraInfoTextWrapp">
						<text class="cameraInfoText1" >相机权限</text>
						<text class="cameraInfoText2" >\n实现您的扫描、拍照、录像等功能</text>
					</view>
					
					<view class="goRightWrapp">
						<!-- 箭头 -->
						<text class="stateText1" v-if="state1">已开启</text>
						<text class="stateText1" v-if="!state1"  style="color: #4485FD;">去设置</text>
						<image src="../../../static/img/user/goRight2.png" mode="" class="goRight2Icon" @click="navToPP()"></image>
					</view>
				</view>
		
				<!-- 第二部分  存储权限-->
				<view class="storageInformation">
					<view class="storageInfo">
						<view class="storageInfoTextWrapp">
							<text class="storageInfoText1" >存储权限</text>
							<text class="storageInfoText2" >\n用于图片或视频的上传和下载</text>
						</view>
						<view class="goRightWrapp">
							<text class="stateText2" v-if="state2">已开启</text>
						    <text class="stateText1" v-if="!state2"  style="color: #4485FD;">去设置</text>
							<image src="../../../static/img/user/goRight2.png" mode="" class="goRight2Icon"></image>
						</view>
					</view>
				</view>
			</view>
		</view>
		
		
		<!-- 位置和麦克风权限-->
		<view class="cameraAndStorageWrapp">
			<!-- 第一部分 位置权限-->
			<view class="cameraInformation">
				<view class="cameraInfo">
					<view class="cameraInfoTextWrapp">
						<text class="cameraInfoText1" >位置信息权限</text>
						<text class="cameraInfoText2" >\n根据您的位置信息为您展示附近医院信息</text>
					</view>
					
					<view class="goRightWrapp">
						<!-- 箭头 -->
						<text class="stateText1" v-if="state3">已开启</text>
						<text class="stateText1" v-if="!state4" style="color: #4485FD;">去设置</text>
						<image src="../../../static/img/user/goRight2.png" mode="" class="goRight2Icon" @click="navToPP()"></image>
					</view>
				</view>
		
				<!-- 第二部分  麦克风权限-->
				<view class="storageInformation">
					<view class="storageInfo">
						<view class="storageInfoTextWrapp">
							<text class="storageInfoText1" >麦克风权限</text>
							<text class="storageInfoText2" >\n用于录制有声视频或使用视频服务</text>
						</view>
						<view class="goRightWrapp">
							<text class="stateText2" v-if="state4">已开启</text>
							<text class="stateText2" v-if="!state4"  style="color: #4485FD;">去设置</text>
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
				state1 : true,
				state2 : true,
				state3 : false,
				state4 : false,
			};
		}
	}
</script>

<style lang="scss" scoped>
   .spmText1{
	   color: #404345;
	   font-size: 28rpx;
	   margin-top: 28rpx;
       margin-left: 40rpx;
   }
   
   .cameraAndStorageWrapp {
   	margin-top: 28rpx;
   	height: 263rpx;
   	width: 100%;
   
   	display: flex;
   	flex-direction: row;
   	justify-content: center;
   	margin-bottom: 20rpx;
   
   	.cameraInformation {
   		width: 688rpx;
   		height: 100%;
   		background-color: white;
   		border-radius: 24rpx;
   		box-shadow: 0px 0px 4px black;
   		display: flex;
   		flex-direction: column;
   
   
   		.cameraInfo {
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
               align-items: center;
			   
			   .cameraInfoTextWrapp{
				   .cameraInfoText1 {
				   	color: #000000;
				   	font-feature-settings: "kern" on;
				   	font-size: 36rpx;
				   	font-weight: 500;
				      	  
				      
				   }
				   .cameraInfoText2{
					   font-size: 24rpx;
					   color: #979797;
				   }
			   }
   
   		
   
   			.goRightWrapp {
   				display: flex;
   				flex-direction: row;
   				align-items: center;
				
				.stateText1{
					color: #9E9E9E;
					font-size: 32rpx;
					margin-right: 10rpx;
				}
   
   				.goRight2Icon {
   					height: 30rpx;
   					width: 30rpx;
   					margin-right: 30rpx;
   					transform: translateY(4rpx);
   				}
   
   			}
   
   		}
   
   		.storageInformation {
   			height: 50%;
   			width: 100%;
   		
   
   			padding-left: 30rpx;
   
   			.storageInfo{
   				display: flex;
   				flex-direction: row;
   				justify-content: space-between;
   				align-items: center;
   
   				.storageInfoTextWrapp {
   
   					color: #000000;
   					font-feature-settings: "kern" on;
   					font-size: 36rpx;
   					font-weight: 500;
					.storageInfoText1{
						color: #000000;
						font-feature-settings: "kern" on;
						font-size: 36rpx;
						font-weight: 500;
					}
					
					.storageInfoText2{
						font-size: 24rpx;
						color: #979797;
					}
   	
   
   				}
   
   				.goRightWrapp {		
   					color: #000000;
   					font-feature-settings: "kern" on;
   					font-size: 26rpx;
   					font-weight: 500;
   					line-height: 150rpx;
					
					.stateText2{
						color: #9E9E9E;
						font-size: 32rpx;
						margin-right: 10rpx;
					}
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
