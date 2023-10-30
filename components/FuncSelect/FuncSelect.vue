<template>
	<view class="func-select">
		<image :src="pic"></image>
		<text>{{word}}</text>
	</view>
</template>

<script>
	export default {
		name:"funcselect",
		data() {
			return {
				
			};
		},
		props:{
			pic:{
				type:String,
				default:"../../static/img/func1.png"
			} ,
			word:{
				type:String,
				default:"线上咨询"
			} 
		},
	}
</script>

<style lang="scss" scoped>
.func-select{
	width:180rpx;
	height: 200rpx;
	display: flex;
	flex-flow: column nowrap;
	align-items: center;
	justify-content: center;
	image{
		width: 110rpx;
		height: 110rpx;
	}
	text{
		font-size: 26rpx;
	}
}
</style>