<template>
	<view class="disease-context">
		<view class="disease-context-title">
			<view class="disease-context-title-block" :class="{ active: selectedBlock === 0 }"
				@click="selectedBlock = 0">
				<view class="disease-context-title-block-text">
					科普文章
					<view class="disease-context-title-block-indicator" v-show="selectedBlock === 0"></view>
				</view>
			</view>
			<view class="disease-context-title-block" :class="{ active: selectedBlock === 1 }"
				@click="selectedBlock = 1">
				<view class="disease-context-title-block-text">
					科普小视频
					<view class="disease-context-title-block-indicator" v-show="selectedBlock === 1"></view>
				</view>
			</view>
		</view>
		<view class="disease-context-block" v-if="selectedBlock == 0">
			<view class="disease-context-article" v-for="item in articleList" @click="goArticle(item.articleId,item.pubId)">
				<view class="disease-context-article-left">
					<view style="font-weight: 700;">{{item.title}}</view>
					<view style="font-size: 26rpx; color: #9e9e9e;">{{item.pubName}} {{item.manager}}</view>
					<view style="font-size: 26rpx; color: #9e9e9e;">{{item.hospital}} {{item.depart}}</view>
				</view>
				<view class="disease-context-article-right">
					<view>
						<image src="../../static/img/artheart.png" mode="" v-if="item.isStar == 0" @click="getStar()">
						</image>
						<image src="../../static/img/arthearts.png" mode="" v-if="item.isStar == 1"
							@click="deleteStar()">
						</image>
					</view>
					<view>{{item.star}}</view>

				</view>
			</view>
		</view>
		<view class="disease-context-block" v-if="selectedBlock == 1">
			<view class="disease-context-video" v-for="item in videoList">
				<view class="disease-context-video-left">
					<image :src="item.pic" mode=""></image>
				</view>
				<view class="disease-context-video-right">
					<view style="font-size: 32rpx; font-weight: 900; margin-bottom:20rpx;">{{item.title}}</view>
					<view style="font-size: 26rpx; color: #9e9e9e;">{{item.pubName}} {{item.manager}}</view>
					<view style="font-size: 26rpx; color: #9e9e9e;">{{item.hospital}} {{item.depart}}</view>
					<view style=" display: flex; align-items: center; font-size: 22rpx;">
						<image src="../../static/img/cemara.png" mode="" style="margin-right: 10rpx; "></image> 
						<text style="color: #9e9e9e;">{{item.watch}}已观看</text>
					</view>
				</view>
			</view>
		</view>
		<view style="width: 700rpx; height: 20rpx;"></view>
	</view>
</template>

<script>
	export default {
		name: "DiseaseContext",
		data() {
			return {
				selectedBlock: 0,
				articleList: [{
						articleId: "00000001",
						title: "百白破疫苗是预防什么的？",
						pubName: "赵熙蒙",
						pubId: "111111111",
						manager: "主任医师",
						hospital: "江西理工大学医学院",
						depart: "中医内科",
						star: "7890",
						isStar: "1"
					},
					{
						articleId: "00000002",
						title: "百白破疫苗是预防什么的？",
						pubName: "赵熙蒙",
						pubId: "111111111",
						manager: "主任医师",
						hospital: "江西理工大学医学院",
						depart: "中医内科",
						star: "789",
						isStar: "0"
					},
					{
						articleId: "00000003",
						title: "百白破疫苗是预防什么的？",
						pubName: "赵熙蒙",
						pubId: "111111111",
						manager: "主任医师",
						hospital: "江西理工大学医学院",
						depart: "中医内科",
						star: "788",
						isStar: "1"
					},
					{
						articleId: "00000004",
						title: "百白破疫苗是预防什么的？",
						pubName: "赵熙蒙",
						pubId: "111111111",
						manager: "主任医师",
						hospital: "江西理工大学医学院",
						depart: "中医内科",
						star: "78",
						isStar: "0"
					},
					{
						articleId: "00000004",
						title: "百白破疫苗是预防什么的？",
						pubName: "赵熙蒙",
						pubId: "111111111",
						manager: "主任医师",
						hospital: "江西理工大学医学院",
						depart: "中医内科",
						star: "78",
						isStar: "0"
					},
					{
						articleId: "00000004",
						title: "百白破疫苗是预防什么的？",
						pubName: "赵熙蒙",
						pubId: "111111111",
						manager: "主任医师",
						hospital: "江西理工大学医学院",
						depart: "中医内科",
						star: "78",
						isStar: "0"
					},
					{
						articleId: "00000004",
						title: "百白破疫苗是预防什么的？",
						pubName: "赵熙蒙",
						pubId: "111111111",
						manager: "主任医师",
						hospital: "江西理工大学医学院",
						depart: "中医内科",
						star: "78",
						isStar: "0"
					},
					{
						articleId: "00000004",
						title: "百白破疫苗是预防什么的？",
						pubName: "赵熙蒙",
						pubId: "111111111",
						manager: "主任医师",
						hospital: "江西理工大学医学院",
						depart: "中医内科",
						star: "78",
						isStar: "0"
					},
					{
						articleId: "00000004",
						title: "百白破疫苗是预防什么的？",
						pubName: "赵熙蒙",
						pubId: "111111111",
						manager: "主任医师",
						hospital: "江西理工大学医学院",
						depart: "中医内科",
						star: "78",
						isStar: "0"
					},
					{
						articleId: "00000004",
						title: "百白破疫苗是预防什么的？",
						pubName: "赵熙蒙",
						pubId: "111111111",
						manager: "主任医师",
						hospital: "江西理工大学医学院",
						depart: "中医内科",
						star: "78",
						isStar: "0"
					}
				],
				videoList: [{
						videoId: "00000001",
						title: "孩子阳了之后什么时候可以打疫苗?",
						pubName: "赵熙蒙",
						pubId: "111111111",
						manager: "主任医师",
						hospital: "江西理工大学医学院",
						depart: "中医内科",
						pic: "../../static/img/doctor2.png",
						watch: "365",
						video: "视频地址"
					},
					{
						videoId: "00000001",
						title: "孩子阳了之后什么时候可以打疫苗?",
						pubName: "赵熙蒙",
						pubId: "111111111",
						manager: "主任医师",
						hospital: "江西理工大学医学院",
						depart: "中医内科",
						pic: "../../static/img/doctor2.png",
						watch: "365",
						video: "视频地址"
					},
					{
						videoId: "00000001",
						title: "孩子阳了之后什么时候可以打疫苗?",
						pubName: "赵熙蒙",
						pubId: "111111111",
						manager: "主任医师",
						hospital: "江西理工大学医学院",
						depart: "中医内科",
						pic: "../../static/img/doctor2.png",
						watch: "365",
						video: "视频地址"
					},
				]
			};
		},
		methods: {
			getStar() {

			},
			deleteStar() {

			},
			goArticle(ai,pi){
				uni.navigateTo({
					url:`/pages/main/article?ai=${ai}&pi=${pi}`
				})
			}
		}
	}
</script>

<style lang="scss">
	.disease-context-title {
		width: 750rpx;
		height: 120rpx;
		display: flex;
		flex-flow: row nowrap;
		border-bottom: 1px solid #DCDCDC;

		.disease-context-title-block {
			flex: 1;
			display: flex;
			justify-content: center;
			align-items: center;
		}

		.disease-context-title-block-text {
			position: relative;
		}

		.disease-context-title-block-indicator {
			position: absolute;
			width: 100%;
			height: 3px;
			background-color: #8aeeee;
			bottom: 0;
		}

		.active {
			color: #8aeeee;
		}
	}

	.disease-context-block {

		.disease-context-article {
			margin-left: 25rpx;
			margin-top: 30rpx;
			width: 700rpx;
			height: 120rpx;
			display: flex;
			flex-flow: row nowrap;
			border-radius: 20rpx;
			background-color: #ffffff;
			box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.3);

			.disease-context-article-left {
				width: 88%;
				height: 100%;
				display: flex;
				flex-flow: column nowrap;
				padding-left: 20rpx;

			}

			.disease-context-article-right {
				flex: 1;
				display: flex;
				flex-flow: column nowrap;
				justify-content: center;
				align-items: center;
				color: #9e9e9e;
				font-size: 26rpx;

				image {
					width: 40rpx;
					height: 40rpx;
				}
			}
		}

		.disease-context-video {
			margin: 20rpx;
			display: flex;
			flex-flow: row nowrap;
			width: 720rpx;
			height: 200rpx;



			.disease-context-video-left {
				padding: 20rpx;
				width: 30%;
				height: 100%;

				image {
					height: 100%;
					width: 100%;
				}
			}

			.disease-context-video-right {
				padding-top: 20rpx;
				flex: 1;
				border-bottom: 1px solid #DCDCDC;

				image {
					width: 26rpx;
					height: 26rpx;
				}
			}

		}
	}
</style>