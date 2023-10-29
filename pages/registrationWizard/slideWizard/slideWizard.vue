<template>
	<view class="container">
		<uni-swiper-dot :info="info" :current="current" field="content" :mode="mode" style="height: 100%;">
			<swiper class="swiper-box" @change="change" :current="current">
				<swiper-item class="swi-item1" key="0">
					<stepOne style="stepOne" :current="current" @processedIndex="handleProcessedIndex"></stepOne>
				</swiper-item>
				<swiper-item class="swi-item1" key="0" >
					<stepTwo :current="current"  @processedIndex="handleProcessedIndex"></stepTwo>
				</swiper-item>
				<swiper-item class="swi-item1" key="0" >
					<stepThree :current="current"  @processedIndex="handleProcessedIndex"></stepThree>
				</swiper-item>
				<swiper-item class="swi-item1" key="0" >
					<stepFour :current="current"  @processedIndex="handleProcessedIndex"></stepFour>
				</swiper-item>
			</swiper>
		</uni-swiper-dot>

	</view>
</template>



<script>
	import stepOne from '@/components/stepOne/stepOne.vue'

	export default {
		data() {
			return {
				info: [{
					content: '内容 A'
				}, {
					content: '内容 B'
				}, {
					content: '内容 C'
				},
				{
					content: '内容 D'
				}],
				current: 0,
				mode: 'round',
			}
		},
		methods: {
			change(e) {
				this.current = e.detail.current;
			},
			handleProcessedIndex(Index) {
			      // 接收子组件传递的处理后的数据，并更新父组件中的processedData属性
			      this.current = Index;
			    }
		}
	}
</script>

<style>
	.container {
		overflow: hidden;
		overflow-y: auto;
		height: 100vh;
		width: 100%;

		.swiper-box {
			height: 100vh;
			width: 100%;
		}
	}

	.swi-item1 {
		height: 100%;
		width: 100%;

		.stepOne {
			height: 100%;
			width: 100%;
		}
	}

	.uni-swiper__warp {
		/* height: ; */
	}
</style>