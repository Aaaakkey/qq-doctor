<template>
	<view class="SFBcontainerWrapp">
     <!--   <view class="sfbTob">
			<view class="">{{title}}</view>
			
		</view> -->
		<view class="SFBcontainer">
			<image src="../../static/img/nearHosp/shizi1.png" mode="aspectFill" class="left-image"></image>
			
			
			<input type="text"  class="select-block"  :placeholder="prompt"
			confirm-type="search" @confirm="search" :value="keyword" @input="keyword = $event.target.value" />

			<image src="../../static/img/nearHosp/loudou1.png" mode="aspectFill" class="right-image"></image>
		</view>

	</view>
</template>

<script>
	export default {
		name: "selectfront",
		props: {
			selectfrontword: String,
	        title : String,
			prompt :  String,
		
		},
		data() {
			return {
				     keyword: '',
			};
		},
		methods: {
			search() {
			   // 处理搜索逻辑
			   // 可以在这里使用 this.keyword 获取搜索关键字
			   console.log('Searching:', this.keyword);
			   uni.navigateTo({
			   	url: "/pages/map/nearHosp/nearHosp"
			   })
			 }
		}
	}
</script>

<style lang="scss" scoped>
	.SFBcontainerWrapp {
	      display: flex;
		  flex-direction: column;
		  width: 750rpx;
		  height: 118rpx;
		  position: fixed;
		  z-index: 99999999;
		  background-color: #ffffff;

  //       .sfbTob{
		// 	height: 122rpx;
		// 	width: 100%;
		// 	background-color: #8AEEEE;
		// 	display: flex;
  //           justify-content: center;
  //           align-items: center;
		// 	font-size: 34rpx;
		// 	font-weight: normal;
		
		// }
		
		.SFBcontainer{
			margin-top: 20rpx;
			background-color: #ffffff;
			// position: fixed;
			
			display: flex;
			flex-flow: row nowrap;
			align-items: flex-end;
			justify-content: space-between;
			// 
			// padding-bottom: 15rpx;
			
			.left-image {
				margin-bottom: 5rpx;
				margin-left: 18rpx;
				width: 72rpx;
				height: 72rpx;transform: translateY(-3rpx);
			}
			
			.select-block {
				// margin-right: 20rpx;
				margin-left: 10rpx;
				
				border-radius: 30rpx;
				width: 560rpx;
				height: 90rpx;
				background-color: #f6f6f5;
				display: flex;
				align-items: center;
			
				.context {
					font-size: 24rpx;
					color: #cccccc;
				}
			}
			
			.right-image {
				margin-bottom: 20rpx;
				margin-right: 17rpx;
				width: 60rpx;
				height: 60rpx;
				transform: translateY(5rpx);
			}
			
			
		}
		
	}
</style>