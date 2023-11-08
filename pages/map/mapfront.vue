<template>
	<view>
		<SelectFrontBlue  prompt="  请输入医院名" class="setFront"></SelectFrontBlue>
		<!-- 	<SelectFront selectfrontword="请输入您的病症或者病情"></Selectfront> -->

		<!-- 空白填充 -->
		<view style="height: 125rpx; width: 100%;"></view>

		<!-- 地图 -->
		<view class="mapWrapp">
			<map class="mapGD" :latitude="latitude" :longitude="longitude" :markers="covers">
			</map>
		</view>
		<view class="nearTextWrapp">
			<text class="nearText-word1">附近医院</text>
			<text class="nearText-word2">附近</text>
		</view>

		<!-- @click.native="getDetail(item.hid)" -->

		<view class="hospWarpp" v-for="item in hospitalInfoList" :key="item.hid">

			<hospitalInfo :item="item" @click.native="navDetail(item.hid)"></hospitalInfo>
		</view>

	</view>
</template>

<script>
	export default {
		data() {
			return {

				// // 医院信息列表、
				hospitalInfoList: [{
						hid: "1",
						pic: "../../static/img/nearHosp/hosp2.png",
						hospital: "赣州市第一人民医院",
						distance: "2.5",
						evaluate: "4",
						status: "0",
						address: "江西省赣州市章贡区789号"
					}, {
						hid: "2",
						pic: "../../static/img/nearHosp/hosp2.png",
						hospital: "赣州市第二人民医院",
						distance: "5",
						evaluate: "5",
						status: "1",
						address: "江西省赣州市章贡区787号"
					},
					{
						hid: "3",
						pic: "../../static/img/nearHosp/hosp2.png",
						hospital: "赣州市第三人民医院",
						distance: "4",
						evaluate: "3",
						status: "1",
						address: "江西省赣州市章贡区786号"
					},
					{
						hid: "4",
						pic: "../../static/img/nearHosp/hosp2.png",
						hospital: "赣州市第四人民医院",
						distance: "25",
						evaluate: "3",
						status: "1",
						address: "江西省赣州市章贡区766号"
					}
				],
				// 地图
				id: 0, // 使用 marker点击事件 需要填写id
				title: 'map',
				latitude: 39.909,
				longitude: 116.39742,
				covers: [{
					latitude: 39.909,
					longitude: 116.39742,
					iconPath: '../../../static/location.png'
				}, {
					latitude: 39.90,
					longitude: 116.39,
					iconPath: '../../../static/location.png'
				}],


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
	.setFront {}

	.mapWrapp {
		height: 100%;
		width: 100%;
		border-radius: 50%;
        z-index: 2;
		// background-color: aqua;
		.mapGD {
			// padding-top: 20rpx;
			z-index: 2;
			width: 100%;
			height: 400rpx;
			border-radius: 50%;
		}

	}

	.nearTextWrapp {
		height: 82rpx;
		width: 100%;
		// background-color: aqua;
		background-color: #f7f7f7;
		padding-left: 25rpx;
		padding-right: 25rpx;
		width: 750rpx;
		// height: 50rpx;
		display: flex;
		flex-flow: row nowrap;
		align-items: center;
		justify-content: space-between;

		.nearText-word1 {
			font-size: 36rpx;
			font-weight: 900;
		}

		.nearText-word2 {
			font-size: 26rpx;
			color: #4485FD;
		}
	}

	.hospWarpp {
		height: 100%;
		width: 100%;
		// background-color: #4485FD;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		background-color: #F7F7F7;

	}
</style>