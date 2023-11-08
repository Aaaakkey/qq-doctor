<template>
	<view>
		<view class="collectItemWrapp">
					<collectItem v-for="(item,index) in list"  :key="index"></collectItem>
						<collectItem v-for="(item,index) in list"  :key="index"></collectItem>
		</view>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				list : ["1","2","3","4"]
			}
		},
		methods: {
			
		}
	}
</script>

<style lang="scss" scoped>
	
	*{
		background: #F7F7F7;
	}
   .collectItemWrapp{
	   margin-top: 44rpx;
	  display: flex;
	  flex-direction: column;
	  align-items: center;
	  
	  height: 100%;
	  width: 100%;
   }
</style>
<style>
page {
	background-color:#F7F7F7;
}
</style>