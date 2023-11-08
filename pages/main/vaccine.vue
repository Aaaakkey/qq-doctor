<template>
	<view class="vaccine">
		<FuncSelectFront :word="word"></FuncSelectFront>
		<FuncSelectContext :selected="value"></FuncSelectContext>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				word: "搜索疫苗",
				value: "疫苗"
			}
		},
		methods: {

		}
	}
</script>

<style lang="scss" scoped>
	.vaccine {


	}
</style>