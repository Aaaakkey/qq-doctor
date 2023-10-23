<template>
	<view class="container">
		   <view class="bgicon">
			   <image class="icon" src="../../../static/img/login/bg1.jpg" mode="aspectFill" ></image>
			   <view class="t1">
				   <text >欢迎您使用</text>
				   <text>企桥医健APP</text>
				   <text>呵护您的健康生活</text>
			   </view>
			  
		   </view>
			<view class="">
				
				111
			</view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style lang="scss">
 .container{
	 position: relative;
	 width: 375px;
	 height: 812px;
	 border-radius: 23px;
	 opacity: 1;
	 
	 background: #020A19;
	 
 }
 .bgicon{
	 .icon{
		 position: absolute;
		 left: -219px;
		 top: 0px;
		 width: 594px;
		 height: 70.2%;
		 opacity: 1
	 }
	 .t1{
		/* 欢迎您使用 企桥医健APP 呵护您的健康生活 */
		
		position: absolute;
		left: 70px;
		top: 466px;
		width: 62.4%;
		height: 21.06%;
		opacity: 1;
			
		font-family: Montserrat;
		font-size: 35px;
		font-weight: 800;
		line-height: 49px;
		display: flex;
		align-items: center;
		letter-spacing: -0.21px;
			
		color: #FFFFFF;
			
		/* 欢迎您使用企桥医健APP */ 
		font-family: Montserrat; 
		font-weight: 800; 
		font-size: 35;
		
		/* 呵护您的健康生活 */ 
		font-family: Montserrat; 
		font-weight: 700; 
		font-size: 14;

	 }
 }
</style>
