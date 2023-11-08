<template>
	<view>
		<view class="hospSearch" >

			<!--第一行 医院名称 -->
			<view class="searchTextWrapp">
				<text class="searchText">赣州市第一人民医院</text>
			</view>

			<!-- 第二行 标签 -->
			<view class="hospTagWrapp">
				<view class="" style="margin-left: 8rpx;"></view>
				
				<view class="tag-view" v-for="(tag,index) in item.label"  :key="index"> 
					<uni-tag :text="tag" :mark="true" size="mini"
						custom-style="background-color: #808080; border-color: #808080; color: #fff;">
					</uni-tag>
				</view>

			</view>

			<!-- 详细信息 -->
			<view class="detailedInformationWrapp">
				<text class="detailedText">
					赣州市人民医院位于赣州市章贡区梅关大道16号，是集医疗、教学、科研、保健、康复于一体的三级甲等综合医院。医院占地面积378亩，建筑面积35万平方米。拥有
					...

				</text>
			</view>

		</view>

	</view>
</template>

<script>
	export default {
		props: {
	
			item: {
				hid: "1",
				label: ["公立", "三甲", "综合医院", "收藏数|江西第八名"],
				des: "	赣州市人民医院位于赣州市章贡区梅关大道16号，是集医疗、教学、科研、保健、康复于一体的三级甲等综合医院。医院占地面积378亩，建筑面积35万平方米。拥有..."

			}
		},
		name: "hospitalSrecah",
		data() {
			return {

			};
		}
	}
</script>

<style lang="scss" scoped>
	.hospSearch {
		width: 712rpx;
		height: 100%;
        margin-bottom: 30rpx;
		// background: #FBF6F6;
		background-color: #F0FFFF;
		display: flex;
		flex-direction: column;
		box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
		border-radius: 30rpx;

		.searchTextWrapp {
			height: 59rpx;
			width: 100%;
			padding-top: 25rpx;
			margin-left: 25rpx;

			.searchText {
				font-weight: 600;
				line-height: 18px;
				font-size: 30rpx;
			}
		}
	}

	.hospTagWrapp {
		height: 54rpx;
		width: 100%;
		margin-top: 13rpx;
		display: flex;
		flex-direction: row;

		.tag-view {
			margin-left: 15rpx;
		}
	}

	.detailedInformationWrapp {
		width: 95%;
		margin-left: 2.5%;

		.detailedText {
			font-size: 8rpx;
			line-height: 10px;
			font-feature-settings: "kern" on;
			font-family: Roboto Slab;

		}
	}
</style>