<template>
	<view>
   
		
		<textarea class="evaluateOrderText" :value="orderText" placeholder="   请填写您的评价~" @blur="bindTextAreaBlur" />
       <view class="wrapp" style="">
       		<uni-file-picker limit="9" >
       	<!--     <view class="photoWrapp">
       	  aaa
       	     </view> -->
       		 <image src="../../../static/img/order/photo.png" mode="" class="photoIcon">
       		
       		 </image>
       			  <text>添加图片</text>
       		</uni-file-picker>
       </view>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				orderText: "",

			};
		},
		methods: {
			bindTextAreaBlur: function(e) {

				console.log(e.detail.value)
			},
			// 获取上传状态
			select(e) {
				console.log('选择文件：', e)
			},
			// 获取上传进度
			progress(e) {
				console.log('上传进度：', e)
			},

			// 上传成功
			success(e) {
				console.log('上传成功')
			},

			// 上传失败
			fail(e) {
				console.log('上传失败：', e)
			}
		}
	}
</script>

<style lang="scss" scoped>
	// .imgPickerWrapp{
	// 	margin-top: 20rpx;
	// 	display: flex;
	// 	flex-direction: row;
	// 	align-items: center;
	// 	height: 100rpx;
	// }
	
	.wrapp{
		display: flex;
		flex-direction: row;
		justify-content: center;
	}
	
	.evaluateOrderText {
			box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.3);
        margin-top: 30rpx;
		background-color: white;
		height: 600rpx;
		width: 100%;
		font-size: 30rpx;
		line-height: 50rpx;
		border-radius: 30rpx;



	}
	.photoIcon{
		height: 96rpx;
		width: 96rpx;
	}
	
	::v-deep .uni-file-picker{
		margin-top: 20rpx;
		border-radius: 40rpx;
			width: 750rpx;
			box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.3);
		// border-style: solid;
			// display: none;
			 background-color: rgb(238, 238, 238);
	}
	  ::v-deep  .uni-file-picker__container{
		// width: 100%;
		   // border-radius: 100rpx;
		   // margin-left: 20rpx;
	  }
     ::v-deep .file-picker__box{
		// width: 100%;
		 // border-radius: 100rpx;
		
	 }
	 ::v-deep .file-picker__box-content{
		width: 100%;
		  border-radius: 40rpx;
		 background-color: rgb(238, 238, 238);
		  border-style: none;
		  border-width: 0rpx;
		  display: flex;
		  flex-direction: column;
		  align-items: center;
	 }

</style>
<style>
	.uni-textarea-wrapper /deep/ .uni-textarea-textarea {


		margin-top: 20rpx;
	}
	

	

	page {
		background-color: #F7F7F7;

	}
</style>