<template>
	<view>

		<!-- 通用 -->
		<view class="commonWrapp">

			<view class="commonInformationWrapp ">
				<view class="commonInformation">
					<text class="commonInformationText1">清空缓存</text>
					<view class="commonTextWrapp">
						<view class="commonText">
							<!-- 46.77MB -->
							{{storageSize}}
						</view>
						<!-- 箭头 -->
						<image src="../../../static/img/user/goRight2.png" mode="" class="goRight2Icon"
						@click="clearStorage"
						></image>
					</view>
				</view>

			</view>
		</view>
	</view>
</template>

<script>
	export default {
		onLoad() {
			this.getStorageSize() //获取缓存

		},
		data() {
			return {

				storageSize: '0M',
			}
		},
		methods: {
			//获取app的缓存
			getStorageSize() {
				let that = this;
				uni.getStorageInfo({
					success(res) {
						//console.log(res.keys);
						//console.log(res.limitSize);
						let size = res.currentSize;
						if (size < 1024) {
							that.storageSize = size + ' B';
						} else if (size / 1024 >= 1 && size / 1024 / 1024 < 1) {
							that.storageSize = Math.floor(size / 1024 * 100) / 100 + ' KB';
						} else if (size / 1024 / 1024 >= 1) {
							that.storageSize = Math.floor(size / 1024 / 1024 * 100) / 100 + ' M';
						}

					}
				})
			},
			
			//删除 缓存
						clearStorage:function (){
								let that = this;
								uni.showModal({
									title:'提示',
									content:'确定清除缓存吗?',
									confirmText:'立即清除',
									success(res) {
										if(res.confirm){
											uni.clearStorageSync();
											//重新获取并显示清除后的缓存大小
											that.getStorageSize();
											uni.showToast({
												title:'清除成功',
												icon:'none'
											})
											//清除完后跳到登录页面
											setTimeout(()=>{
												uni.redirectTo({
													url:'/pages/login/login',
													animationType: 'pop-in',
													animationDuration: 200
												})
											},1300)
										}
									}
								})
						 },
			
	

		}


	}
</script>

<style lang="scss" scoped>
	.commonWrapp {
		margin-top: 28rpx;
		// padding-top: 28rpx;
		height: 102rpx;
		width: 100%;

		display: flex;
		flex-direction: row;
		justify-content: center;


		.commonInformationWrapp {
			width: 688rpx;
			height: 100%;
			background-color: white;
			border-radius: 24rpx;
			box-shadow: 0px 0px 4px black;
			display: flex;
			flex-direction: column;


			.commonInformation {
				height: 100%;
				width: 100%;
				// padding-top: 20rpx;
				border-bottom-style: solid;
				padding-left: 30rpx;
				border-color: #D8D8D8;
				border-width: 2rpx;
				display: flex;
				flex-direction: row;
				justify-content: space-between;


				.commonInformationText1 {
					color: #000000;
					font-feature-settings: "kern" on;
					font-size: 36rpx;
					font-weight: 500;
					line-height: 102rpx;

				}

				.commonTextWrapp {
					display: flex;
					flex-direction: row;
					align-items: center;

					.commonText {
						padding-right: 24rpx;
					}

					.goRight2Icon {
						height: 30rpx;
						width: 30rpx;
						margin-right: 30rpx;

					}

				}

			}


		}
	}
</style>
<style>
	page {
		background-color: #F7F7F7;
	}
</style>