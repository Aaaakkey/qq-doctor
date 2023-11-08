<template>
	<view>
		<!-- logo -->
		<view class="logoAndVersionWrapp">
			<!-- logo -->
			<view class="logoWrapp">
				<image src="../../../static/logo.png" mode="" class="logoIcon"></image>
			</view>
			<view class="logoTextWrapp">
				<text class="logoText">您身边的健康呵护人</text>
			</view>
			<view class="versionTextWrapp">
				<text class="verisionText">企桥医健V1.0.1 Release</text>
			</view>
		</view>
		
		<!-- 企桥医健资质 -->
         <view class="qualificationsWrapp">
         	    <text class="qualificationsText">企桥医健资质</text>
				<image src="../../../static/img/user/goRight2.png" mode="" class="goRight2Icon"  @click="navToBusinessLicense()"></image>
         </view>
		 
		 <!-- 举报信息 -->
		 <view class="qualificationsWrapp">
		 	    <text class="qualificationsText">举报信息</text>
		 				<image src="../../../static/img/user/goRight2.png" mode="" class="goRight2Icon" @click="navToReportingInformation()"></image>
		 </view>
		 <!-- 版权信息 -->
		 <view class="qualificationsWrapp">
		 	    <text class="qualificationsText">版权信息</text>
		 				<image src="../../../static/img/user/goRight2.png" mode="" class="goRight2Icon"  @click="navToCopyrightInformation()"></image>
		 </view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		},
		methods: {
			navToBusinessLicense() {
				uni.navigateTo({
					url:"/pages/user/businessLicense/businessLicense"
				})
			},
			navToReportingInformation(){
				uni.navigateTo({
					url:"/pages/user/reportingInformation/reportingInformation"
				})
			},
			navToCopyrightInformation(){
				uni.navigateTo({
					url: "/pages/user/copyrightInformation/copyrightInformation"
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
      .logoAndVersionWrapp{
		  margin-bottom: 60rpx;
		  margin-top: 88rpx;
		  height: 330rpx;
		  width: 100%;
		  // background-color: rebeccapurple;
		  display: flex;
		  flex-direction: column;
		  align-items: center;
		 
		 
		  .logoWrapp{
			  height: 208rpx;
			  width: 208rpx;
			  // border-radius: 10rpx;
			  
			  .logoIcon{
				  height: 208rpx;
				  width: 208rpx;
				   border-radius: 20rpx;
			  }
		  }
		  
		  .logoTextWrapp{
			  margin-top: 28rpx;
			  font-size: 36rpx;
			  font-family: HelloFont ID DianKai;
			  // color: #9E9E9E;
		  }
		  
		  .versionTextWrapp{
			  
			  .verisionText{
				  color: #9E9E9E;
				  font-size: 24rpx;
			  }
		  }
		  
	  }
	  
	  .qualificationsWrapp{
		  margin-top: 25rpx;
		  height: 96rpx;
		  width: 100%;
		  background-color: white;
		  display: flex;
		  flex-direction: row;
		  align-items: center;
		  justify-content: space-between;
		  border-style: solid;
		  border-color: #9E9E9E;
		  border-width: 4rpx;
		  
		  font-size: 36rpx;
		  
		  .qualificationsText{
			  margin-left: 26rpx;
		  }
		  .goRight2Icon{
			  height: 30rpx;
			  width: 30rpx;
			  margin-right: 30rpx;
	
		  }
	  }
	  
	  
</style>
<style>
page {
	background-color:#F7F7F7;
}
</style> 