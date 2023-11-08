<template>
	<view class="vaccinedetail">
		<DiseaseFunc :name="name"></DiseaseFunc>
		<DiseaseContext></DiseaseContext>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				name: ""
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

<style lang="scss">
	.vaccinedetail {
		display: flex;
		flex-flow: column nowrap;
		align-items: center;
	
	}
</style>