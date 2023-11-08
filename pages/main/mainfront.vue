<template>
	<view class="mainfront">
		<SelectFront selectfrontword="请输入您的病症或者病情"></Selectfront>
		<view class="nullblock"></view>
		<view class="title">
			<text v-if="time == 0" class="time-title">早上</text>
			<text v-if="time == 1" class="time-title">下午</text>
			<text v-if="time == 2" class="time-title">晚上</text>
			<text class="notime-title">好 {{username}}</text>
			<p></p>
			<text class="title-word">今天感觉怎么样?</text>
		</view>
		<TodayOrder v-for="(item,index) in 2"></TodayOrder>
		<view class="func-block">
			<FuncSelect @click.native="goOnl"></FuncSelect>
			<FuncSelect pic="../../static/img/func2.png" word="疾病知识" @click.native="goDis"></FuncSelect>
			<FuncSelect pic="../../static/img/func3.png" word="诊断结果"></FuncSelect>
			<FuncSelect pic="../../static/img/func4.png" word="附近医院" @click.native="goHos"></FuncSelect>
			<FuncSelect pic="../../static/img/func5.png" word="检查" @click.native="goChe"></FuncSelect>
			<FuncSelect pic="../../static/img/func6.png" word="治疗" @click.native="goTreat"></FuncSelect>
			<FuncSelect pic="../../static/img/func7.png" word="科普号" @click.native="goIsbn"></FuncSelect>
			<FuncSelect pic="../../static/img/func8.png" word="疫苗" @click.native = "goVac"></FuncSelect>
		</view>
		<view class="mid-word">
			<text class="mid-word1">本地医生</text>
			<text class="mid-word2">附近</text>
		</view>
		<view v-for="item in doctorinfolist" :key="item.id">
			<DoctorInfo :item="item" @click.native="getDetail(item.did)"></DoctorInfo>
		</view>
	</view>
</template>

<script>
	import {
		getGreeting
	} from "../../utils/tool.js"
	export default {
		data() {
			return {
				time: 0,
				username: "熙蒙",
				doctorinfolist: [{
						//6位医院号码以及其注册顺序（例如这个就是31511所医院的第一名医生）
						did: '0315111',
						pic: '../../static/img/doctor3.png',
						name: '安俊禹',
						depart: '神经内科',
						hospital: '赣州市第二人民医院',
						evaluate: '4',
						evaluatenum: '223',
						status: '1'
					},
					{
						did: '0315121',
						pic: '../../static/img/doctor2.png',
						name: '赵熙蒙',
						depart: '眼科',
						hospital: '赣州市第一人民医院',
						evaluate: '5',
						evaluatenum: '762',
						status: '0'
					}
				]
			};
		},
		onLoad() {
			this.time = getGreeting();
		},
		methods: {

			getDetail(id) {
				uni.navigateTo({
					url: `../../pages/main/doctordetail?did=${id}`
				})
			},
			goVac(){
				uni.navigateTo({
					url:"/pages/main/vaccine"
				})
			},
			goDis(){
				uni.navigateTo({
					url:"/pages/main/diseaseknowledge"
				})
			},
			goHos(){
				uni.switchTab({
					url:"/pages/map/mapfront"
				})
			},
			goChe(){
				uni.navigateTo({
					url:"/pages/main/check"
				})
			},
			goTreat(){
				uni.navigateTo({
					url:"/pages/main/treatment"
				})
			},
			goOnl(){
				uni.navigateTo({
					url:"/pages/main/doctoronline"
				})
			},
			goIsbn(){
				uni.navigateTo({
					url:"/pages/main/isbn"
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.nullblock {
		width: 750rpx;
		height: 170rpx;
	}

	.title {
		margin-top: 10rpx;
		padding-left: 25rpx;
		width: 750rpx;
		height: 130rpx;

		.time-title {
			font-size: 40rpx;
			line-height: 60rpx;
			font-weight: 900;
		}

		.notime-title {
			font-size: 40rpx;
			line-height: 70rpx;
			font-weight: 400;
		}

		.title-word {
			font-size: 28rpx;
		}
	}

	.func-block {
		width: 750rpx;
		height: 400rpx;
	
		display: flex;
		flex-flow: row wrap;
		justify-content: center;
	}

	.mid-word {
		padding-left: 25rpx;
		padding-right: 25rpx;
		width: 750rpx;
		height: 50rpx;
		display: flex;
		flex-flow: row nowrap;
		align-items: center;
		justify-content: space-between;

		.mid-word1 {
			font-size: 36rpx;
			font-weight: 900;
		}

		.mid-word2 {
			font-size: 26rpx;
			color: #4485FD;
		}

	}
</style>