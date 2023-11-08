<template>
	<view class="treatmentdetail">
		<DiseaseFunc :list="list" :name="name"></DiseaseFunc>
		<DiseaseContext></DiseaseContext>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				name: "",
				list:[
					{
							pic: "../../static/img/desc.png",
							name: "介绍"
						},
						{
							pic: "../../static/img/corre.png",
							name: "相关疾病"
						},
						{
							pic: "../../static/img/zlzb.png",
							name: "治疗准备"
						},
						{
							pic: "../../static/img/jj.png",
							name: "禁忌"
						}
				]
			};
		},
		onLoad(e) {
			uni.setNavigationBarTitle({
				title: e.name
			});
			this.name = e.name;
		}
	}
</script>

<style lang="scss">
.treatmentdetail {
		display: flex;
		flex-flow: column nowrap;
		align-items: center;
	}
</style>
