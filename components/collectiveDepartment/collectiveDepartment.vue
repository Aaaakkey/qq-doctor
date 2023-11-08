<template>
	<view class="collectiveDepartmentOne" @click="navToDocDeta()">
		<view class="departmentNameWrapp">
			<text class="departmentName"> {{ name }}</text>
		</view>
	</view>
</template>

<script>
	export default {
		props : {
			name: String
		},
		name:"collectiveDepartment",
		data() {
			return {
				
			};
		},
		methods : {
			navToDocDeta() {
				uni.navigateTo({
					url: "/pages/map/depDetails/depDetails"
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
    .collectiveDepartmentOne{
		height: 100rpx;
        width: 100%;
		background: #FBF6F6;
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		border-right-style:solid;
		border-bottom-style:solid;
		border: 1px solid #D8D8D8;
		
		// 科室名称
		.departmentNameWrapp{
			.departmentName{
				font-size: 20rpx;
			}
		}
	}

</style>