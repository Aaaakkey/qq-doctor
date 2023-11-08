<template>
	<view>

		<!-- 搜索框   后面修改prompt 根据搜索事件 -->
		<SelectFrontBlue prompt="  赣州市第一人民医院" class="setFront"></SelectFrontBlue>
		<!-- 空白填充 -->
		<view style="height: 125rpx; width: 100%;"></view>

		<!-- 搜索结果数量 -->
		<view class="searchNumWrapp">
			<view class="searchNum">
				<text class="searchNumText1">为您找到相关结果约
					<text class="searchNumText2">{{hospitalSrecahList.length}}</text>
					个</text>
			</view>
		</view>

		<!-- 空白填充 -->
		<view class="" style="height: 30rpx; width: 100%;"></view>
		<view class="hospSearchWrapp" v-for="item in  hospitalSrecahList" :key="item.hid">
	
			<hospitalSrecah :item="item" @click.native="navDetail(item.hid)">

			</hospitalSrecah>
		</view>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				// hid: "3",
				// pic: "../../static/img/nearHosp/hosp2.png",
				// hospital: "赣州市第三人民医院",
				// distance: "4",
				// evaluate: "3",
				// status: "1",
				// address: "江西省赣州市章贡区786号"
				hospitalSrecahList: [{
						hid: "1",
						label: ["公立", "三甲", "综合医院", "收藏数|江西第八名"],
						des: "	赣州市人民医院位于赣州市章贡区梅关大道16号，是集医疗、教学、科研、保健、康复于一体的三级甲等综合医院。医院占地面积378亩，建筑面积35万平方米。拥有..."

					},
					{
						hid: "2",
						label: ["公立", "收藏数|江西第七名"],
						des: "	赣州市人民医院位于赣州市章贡区梅关大道16号，是集医疗、教学、科研、保健、康复于一体的三级甲等综合医院。医院占地面积378亩，建筑面积35万平方米。拥有..."

					},
					{
						hid: "3",
						label: ["公立", "收藏数|江西第九名"],
						des: "	赣州市人民医院位于赣州市章贡区梅关大道16号，是集医疗、教学、科研、保健、康复于一体的三级甲等综合医院。医院占地面积378亩，建筑面积35万平方米。拥有..."

					},

				]
			}
		},
		methods: {
		navDetail(hid) {
			uni.navigateTo({
				url: "/pages/map/hospDetails/hospDetails?hid=" + hid
			})
		}
		}
	}
</script>

<style lang="scss" scoped>
	.searchNumWrapp {
		height: 80rpx;
		width: 100%;

		color: black;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;

		.searchNum {
			width: 95%;
			height: 100%;
			background-color: #FBF6F6;
			display: flex;
			flex-direction: row;
			align-items: center;
			border-radius: 30rpx;
			font-size: 30rpx;

			.searchNumText1 {
				color: #9E9E9E;
				font-weight: bold;
				margin-left: 30rpx;
			}

			.searchNumText2 {
				color: red;
				font-weight: bold;
			}
		}
	}

	.hospSearchWrapp {
		height: 100%;
		width: 100%;
		background-color: white;
		display: flex;
		flex-direction: column;
		align-items: center;

	}
</style>