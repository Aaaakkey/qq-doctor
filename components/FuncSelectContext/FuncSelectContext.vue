<template>
	<view class="func-select-context">
		<scroll-view class="func-select-context-left" scroll-y>
			<view class="func-select-context-left-block" v-for="(item,index) in items" :key="index"
				:class="{ 'selected': index === selectedItem }" @click="changeSelected(index)">
				<view class="func-select-context-left-block-text">{{item.title}}</view>
			</view>
		</scroll-view>

		<view class="func-select-context-right">
			<uni-indexed-list :options="selectList()" class="func-select-context-right-context" @click="getDetail"></uni-indexed-list>

		</view>
	</view>
</template>

<script>
	export default {
		name: "FuncSelectContext",
		data() {
			return {
				selectedItem: 0
			};
		},
		props: {
			items: {
				type: Array,
				default () {
					return [{
							title: "一类疫苗（免费）",
							vaccines: [{
									letter: "B",
									data: [
										"百白破疫苗"
									]
								},
								{
									letter: "J",
									data: [
										"甲肝疫苗",
										"脊髓灰质炎疫苗"
									]
								},
								{
									letter: "K",
									data: [
										"卡介苗"
									]
								},
								{
									letter: "L",
									data: [
										"流脑疫苗"
									]
								},
								{
									letter: "M",
									data: [
										"麻腮风疫苗"
									]
								},
								{
									letter: "Y",
									data: [
										"乙肝疫苗",
										"乙脑疫苗"
									]
								}
							]
						},
						{
							title: "二类疫苗（免费）",
							vaccines: [{
									letter: "B",
									data: [
										"百白破疫苗"
									]
								},
								{
									letter: "J",
									data: [
										"甲肝疫苗",
										"脊髓灰质炎疫苗"
									]
								},
								{
									letter: "K",
									data: [
										"卡介苗"
									]
								},
								{
									letter: "L",
									data: [
										"流脑疫苗"
									]
								},
								{
									letter: "M",
									data: [
										"麻腮风疫苗"
									]
								},
								{
									letter: "Y",
									data: [
										"乙肝疫苗",
										"乙脑疫苗"
									]
								}
							]
						}
					]
				}
			},
			selected:{
				type:String,
				default(){
					return ""
				}
			}
		},
		methods: {
			changeSelected(index) {
				this.selectedItem = index;
			},
			selectList() {
				return this.items[this.selectedItem].vaccines;
				console.log(this.items[this.selectedItem].vaccines)
			},
			getDetail(e){
				//获取到详情跳转到当前这个病例页面
				if (this.selected == "疫苗") {
					uni.navigateTo({
						url:`/pages/main/vaccinedetail?name=${e.item.name}`
					})
				}else if(this.selected == "疾病知识"){
					uni.navigateTo({
						url:`/pages/main/diseaseknowledgedetail?name=${e.item.name}`
					})
				}
				
			}
		}
	}
</script>

<style scoped>
	.uni-indexed-list /deep/ .uni-indexed-list__title-wrapper{
		background-color: #d8d8d8;
	}
	.uni-indexed-list /deep/ .uni-indexed-list__list{
		background-color: #ffffff;
	}
	.func-select-context {
		width: 750rpx;
		height: 91vh;

		display: flex;
		flex-flow: row nowrap;
	}

	.func-select-context-left {
		width: 30%;
		height: 100%;
		background-color: #d8d8d8;
	}

	.func-select-context-left-block {
		width: 100%;
		height: 9%;
		text-align: center;
		display: flex;
		justify-content: center;
		align-items: center;
		cursor: pointer;
	}

	.func-select-context-left-block.selected {
		background-color: rgb(248, 248, 248);
		color: #4485fd;
	}

	.func-select-context-left-block-text {
		width: 80%;
		overflow-wrap: break-word;
		user-select: none;
	}

	.func-select-context-right {
		height: 100%;
		width: 70%;
	}

	.func-select-context-right-context {
		position: relative;
		right: 0;
		width: 100%;
		height: 100%;
	}
</style>