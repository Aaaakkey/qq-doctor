<template>
	<view class="treatment">
		<FuncSelectFront :word="word"></FuncSelectFront>
		<view style="width: 750rpx; height: 200rpx;"></view>
		<FuncSelectAllContext :items="selectList" :selected="value"></FuncSelectAllContext>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				value:"治疗",
				word : "搜索治疗",
				selectList: [
				  {
				    letter: "B",
				    data: [
				      "白内障超声乳化吸除术",
				      "瓣膜修复术",
					  "瓣膜置换术",
					  "半椎体切除术",
					  "包皮环切术",
					  "拔牙",
					  "鼻内镜下鼻窦手术",
					  "扁平足成形术",
					  "变性手术",
					  "鼻部整形",
					  "鼻侧切开术",
					  "鼻内镜手术",
					  "避孕",
					  "鼻再造",
					  "鼻整形修复"
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
				]
			}
		},
		methods: {
			
		}
	}
</script>

<style lang="scss" scoped>

</style>
