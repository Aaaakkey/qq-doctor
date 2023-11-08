<template>
	<view class="check">
		<FuncSelectFront :word="word"></FuncSelectFront>
		<view style="width: 750rpx; height: 200rpx;"></view>
		<FuncSelectAllContext :items="selectList" :selected="value"></FuncSelectAllContext>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				word: "搜索检查",
				selectList: [
				  {
				    letter: "B",
				    data: [
				      "备孕",
				      "病例诊断"
				    ]
				  },
				  {
				    letter: "C",
				    data: [
				      "肠镜",
				      "产前检查",
				      "超声诊断"
				    ]
				  },
				  {
				    letter: "D",
				    data: [
				      "大肠便血",
				      "穿刺活检术"
				    ]
				  },
				  {
				    letter: "F",
				    data: [
				      "反射诊断",
				      "肺功能检查",
				      "妇科检查"
				    ]
				  },
				  {
				    letter: "G",
				    data: [
				      "肝功能",
				      "肝脏超声检查"
				    ]
				  }
				],
				value: "检查"
			};
		}
	}
</script>

<style lang="scss" scoped>
	.check {
	
	}
</style>