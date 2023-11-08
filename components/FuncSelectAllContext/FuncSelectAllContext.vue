<template>
	<view class="func-select-all-context">
		<uni-indexed-list :options="items" class="func-select-all-context" @click="getDetail"></uni-indexed-list>
	</view>
</template>

<script>
	export default {
		name: "FuncSelectAllContext",
		data() {
			return {
			};
		},
		props: {
			items: {
				type: Array,
				default () {
					return [{
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
			},
			selected:{
				type:String,
				default(){
					return ""
				}
			}

		},
		methods: {
			getDetail(e) {
	
				if (this.selected == "检查") {
					uni.navigateTo({
						url: `/pages/main/checkdetail?name=${e.item.name}`
					})
				} else if (this.selected == "治疗") {
					uni.navigateTo({
						url: `/pages/main/treatmentdetail?name=${e.item.name}`
					})
				}
			}
		}
	}
</script>

<style scoped>
	.uni-indexed-list {
		margin-top: 160rpx;
	}

	.uni-indexed-list /deep/ .uni-indexed-list__title-wrapper {
		background-color: #d8d8d8;
	}

	.uni-indexed-list /deep/ .uni-indexed-list__list {
		background-color: #ffffff;
	}

	.func-select-all-context {
		width: 750rpx;

	}
</style>