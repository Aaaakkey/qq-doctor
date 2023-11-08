<template>
	<view class="hospDep">

		<!-- 科室名称 -->
		<view class="departmentName">
			<text class="departmentNameText">{{item.absName}}</text>
		</view>


		<!-- 具体科室信息列表 -->
		<view class="collectiveDepartmentWrapp" >

  
			<!-- 展示所有的具体科室信息 -->
			<view class="collectiveDepartmentOneWrapp" v-for="(name, indexName) in depNameListNow " :key="indexName">
				
				<collectiveDepartment :name="name"></collectiveDepartment>
			</view>

		</view>
	</view>
</template>

<script>
	export default {
		props: {
			item: {
				absName: "内科",
				depNameList: ["心血管内科", "消化内科", "呼吸与危重症医学科", "肾内科", "血液内科", "神经内科"]
			}

		},
		name: "hospitalDepartments",
		data() {
			return {
				depNameListNow: this.item.depNameList,
			};
		}
	}
</script>

<style scoped lang="scss">
	.hospDep {

		height: 100%;
		width: 96%;
		background: #FBF6F6;
		border-radius: 10rpx;
		box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.302);
		display: flex;
		flex-direction: column;
		margin-bottom: 30rpx;

		// 科室名字
		.departmentName {
			padding-top: 28rpx;
			padding-left: 20rpx;
		}

		.collectiveDepartmentWrapp {
			border-top-style: solid;
			border-width: 2rpx;
			border-color: #FFBD86;
			height: 100%;
			width: 100%;
			background-color: aqua;
			display: flex;
			flex-direction: row;
			flex-wrap: wrap;

			.collectiveDepartmentOneWrapp {

				height: 100rpx;
				width: 33.33333%;
			}
		}
	}
</style>