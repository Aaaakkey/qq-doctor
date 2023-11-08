<template>
	<view>
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
							pic: "../../static/img/fbyy.png",
							name: "发病原因"
						},
						{
							pic: "../../static/img/zzbx.png",
							name: "症状表现"
						},
						{
							pic: "../../static/img/rhyf.png",
							name: "如何预防"
						}
				]
			};
		},
		onLoad(e) {
			uni.setNavigationBarTitle({
				title: e.name,
		
			});
			this.name = e.name;
		}
	}
</script>

<style lang="scss" scoped>

</style>
