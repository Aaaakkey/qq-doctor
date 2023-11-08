<template>
	<view class="checkdetail">
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
							pic: "../../static/img/jczb.png",
							name: "检查准备"
						},
						{
							pic: "../../static/img/jcfs.png",
							name: "检查方式"
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
	.checkdetail {
		display: flex;
		flex-flow: column nowrap;
		align-items: center;
	}
</style>