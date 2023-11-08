<template>
	<view class="article">
		<view class="article-logo">
			<view class="article-logo-context">
				原创
			</view>
		</view>
		<view class="article-title">{{articleInfo.title}}</view>
		<view class="article-doctor-info">
			<view class="article-doctor-image">
				<image :src="pubInfo.pic"></image>
			</view>
			<view class="article-doctor-context">
				<view style="color: #4485fd; margin-bottom: 5rpx; font-size: 26rpx;">{{pubInfo.pubName}}
					{{pubInfo.manager}}
				</view>
				<view style="margin-bottom: 5rpx; font-weight: 600; font-size: 26rpx;">{{pubInfo.hospital}}
					{{pubInfo.depart}}
				</view>
				<view style="color: #9e9e9e; font-size: 26rpx;">{{articleInfo.time}} {{articleInfo.watch}}人已读</view>
			</view>

			<view class="article-doctor-star">
				<view>
					<image src="../../static/img/articlestar.png"></image>
				</view>
				<view style="color: #9e9e9e; margin-left: 4rpx;">{{articleInfo.star}}</view>
			</view>
		</view>
		<view class="article-context">
			{{articleInfo.context}}
		</view>

		<view class="article-doctor-baseinfo">
			<view class="article-doctor-baseinfo-top">
				<view class="article-doctor-baseinfo-top-left">
					<image :src="pubInfo.pic" mode=""></image>
				</view>
				<view class="article-doctor-baseinfo-top-right">
					<view style="color:#4485fd">{{pubInfo.pubName}} {{pubInfo.manager}}</view>
					<view style="font-weight: 600;">{{pubInfo.hospital}} {{pubInfo.depart}}</view>
				</view>
			</view>
			<view class="article-doctor-baseinfo-down">
				<view class="article-doctor-baseinfo-down-context" @click="goDoctorMain(pubInfo.pubId)">去主页</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				articleInfo: {
					articleId: "00000001",
					title: "免疫力低下有哪些表现？我们应该怎么办呢?",
					star: "256",
					watch: "205",
					time: "2023-10-23",
					context: `1.频繁感染：免疫系统主要负责抵御病原体的入侵，当免疫力低下时，易受到细菌、病毒和真菌感染的侵袭，可能经常出现感冒、咳嗽、发烧、皮肤感染等。2. 慢性疲劳： 免疫力低下时， 身体需要更多的能量来对抗病原体， 这可能导致疲劳感增加， 精力不足， 难以及时恢复。3. 恶心和食欲不振： 免疫力低下可能导致消化系统的问题， 出现恶心、 呕吐和食欲不振等症状。4. 加重的过敏反应： 免疫系统在免疫力低下时可能无法有效地识别和应对过敏原， 导致过敏反应加重， 如过敏性鼻炎、 皮疹、 荨麻疹等。5. 慢性炎症： 免疫力低下可能导致身体处于慢性炎症状态， 出现持续性疼痛、 关节肿痛、 红肿等症状。 `
				},
				pubInfo: {
					pubId: "00000002",
					pubName: "赵熙蒙",
					pic: "../../static/img/doctor2.png",
					manager: "主任医师",
					hospital: "江西理工大学医学院",
					depart: "中医内科"
				}
			};
		},
		methods:{
			goDoctorMain(id){
				uni.navigateTo({
					url:`/pages/main/doctordetail?id=${id}`
				})
			}
		}
	};
</script>

<style lang="scss" scoped>
	.article {
		.article-logo {
			width: 200rpx;
			height: 60rpx;
			float: left;
			padding-left: 60rpx;

			.article-logo-context {
				margin-top: 10rpx;
				width: 100rpx;
				height: 80%;
				border: 1px red solid;
				display: flex;
				justify-content: center;
				align-items: center;
				color: red;
			}
		}

		.article-title {
			margin-top: 25rpx;
			margin-left: 25rpx;
			margin-right: 25rpx;
			font-size: 45rpx;
			font-weight: 900;

			text-align: justify;
		}

		.article-doctor-info {
			margin-top: 20rpx;
			margin-left: 25rpx;
			width: 700rpx;
			height: 150rpx;

			display: flex;

			.article-doctor-image {
				width: 150rpx;
				height: 150rpx;

				image {
					height: 100%;
					width: 100%;
					border-radius: 20rpx;
				}
			}

			.article-doctor-context {
				padding-top: 20rpx;
				padding-left: 20rpx;
				width: 450rpx;
				display: flex;
				flex-flow: column nowrap;


			}

			.article-doctor-star {
				padding-top: 40rpx;
				display: flex;
				flex-flow: column nowrap;
				justify-content: center;

				image {
					width: 60rpx;
					height: 60rpx;
				}
			}
		}

		.article-context {
			margin-top: 30rpx;
			margin-left: 25rpx;
			width: 700rpx;
			text-indent: 2em;
			/* 首行缩进2个字符 */
			text-align: justify;
		}

		.article-doctor-baseinfo {
			margin-top: 40rpx;
			margin-left: 25rpx;
			width: 700rpx;
			height: 250rpx;
			background-color: #ffffff;
			display: flex;
			flex-flow: column nowrap;
			border-radius: 20rpx;
			padding: 20rpx;
			box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.3);

			.article-doctor-baseinfo-top {
				height: 75%;
				display: flex;
				flex-flow: row nowrap;

				.article-doctor-baseinfo-top-left {
					width: 25%;
					height: 100%;

					image {
						width: 100%;
						height: 100%;
						border-radius: 20rpx;
					}
				}

				.article-doctor-baseinfo-top-right {
					padding-left: 30rpx;
					display: flex;
					flex-flow: column nowrap;
					justify-content: space-evenly;
				}
			}

			.article-doctor-baseinfo-down {
				display: flex;
				justify-content: center;
				.article-doctor-baseinfo-down-context{
					width: 250rpx;
					height: 60rpx;
					background-color: beige;
					display: flex;
					justify-content: center;
					align-items: center;
					background-color: #62d8fb;
					border: 2px solid #4485fd;
				}
			}
		}
	}
</style>