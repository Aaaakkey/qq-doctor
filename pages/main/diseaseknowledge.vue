<template>
	<view class="diseaseknowledge">
		<FuncSelectFront :word="word"></FuncSelectFront>
		<FuncSelectContext :items="selectList" :selected="selected"></FuncSelectContext>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				selected: "疾病知识",
				word: "搜索疾病",
				selectList:[{
							title: "常见疾病",
							vaccines: [{
									letter: "#",
									data: [
										"2型糖尿病"
									]
								},
								{
									letter: "A",
									data: [
										"矮小症",
										"艾滋病",
										"阿拉基综合征"
									]
								},
								{
									letter: "B",
									data: [
										"疤痕",
										"白带异常",
										"白癜风",
										"白内障",
										"白塞氏病",
										"白细胞减少症",
										"白血病",
										"瘢痕疙瘩",
										"包茎",
										"包皮龟头炎",
										"包皮过长",
										"苯丙酮尿症"
,									]
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
							title: "内科",
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
							title: "外科",
							vaccines: []
						},
						{
							title: "妇产科学",
							vaccines: []
						},
						{
							title: "儿科学",
							vaccines: []
						},
						{
							title: "骨科学",
							vaccines: []
						},
						{
							title: "眼科学",
							vaccines: []
						},
						{
							title: "口腔科学",
							vaccines: []
						},
						{
							title: "耳鼻口咽喉头颈科",
							vaccines: []
						},
						{
							title: "肿瘤科",
							vaccines: []
						},
						{
							title: "皮肤性病科",
							vaccines: []
						},
						{
							title: "男科",
							vaccines: []
						},
						{
							title: "皮肤美容",
							vaccines: []
						},
						
					]
			};
		}
	}
</script>

<style lang="scss">
	.diseaseknowledge {

	}
</style>