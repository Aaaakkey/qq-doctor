## 属性说明
| 属性值  | 类型  | 默认值  | 说明  |
| :------------: | ------------ | :------------: | :------------: |
| list  | Array  |  [] | 数据  |
| retrieveProperties  | String  |  name | 指定拼音检索属性  |
| showEmptyDataElement  |  Boolean | true  | 是否展示数据为空的索引元素  |
| height  | String  | ""  | 组件高度，不传递占满可视高度  |
| indexActiveColor  | String  | #5993f7  |  字母索引选中的颜色 |
| h5NoTopBar  |   Boolean| false  | h5端当前页面是否隐藏了顶栏  |
| moveBoxStyle  |   Object| {background: '#5993f7'}  | 字母索引手指触摸时的方块样式  |

## 案例
```javascript
<template>
	<view class="content">

		<trigger-indexList :list="indexLists" >
			
			<!-- 			
			<template #topContent>
				<view>
					自定义索引区域顶部内容
				</view>
			</template> 
			-->
			
			<template #default="{indexList}">
				<index-item v-for="(item,index) in indexList" :item="item" :key="index" >
					<!-- 自定义索引头部 -->
					<!--
					<template #lineHead>
						<view class="lineHead">
							{{item.name}}
						</view>
					</template>
					-->
					<template #lineBody>
						<view class="lineBody" v-for="(child,childIndx) in item.data" :key="childIndx">
							<image class="headImg" :src="child.img" mode="aspectFill"></image>
							<view class="name">
								{{child.name}}
							</view>
						</view>
					</template>
				</index-item>
			</template>
			
			
			<!--
			<template #bottomContent>
				<view>
					自定义索引区域底部	内容
				</view>
			</template> 
			-->
			
		</trigger-indexList>
		
	</view>
</template>

<script>
	// indexItem 组件需要手动引入
	import indexItem from '@/uni_modules/trigger-indexList/components/trigger-indexList_item/trigger-indexList_item.vue'
	export default {
		components: {
			indexItem
		},
		data() {
			return {
				title: 'Hello',
				indexLists: [{
					name: '特利迦-空中形',
					img: 'https://img1.baidu.com/it/u=686601210,2945715740&fm=253&fmt=auto&app=120&f=JPEG'
				},{
					name: '迪迦-复合型',
					img: 'https://img0.baidu.com/it/u=3303702511,4066067118&fm=253&fmt=auto&app=138&f=JPEG'
				},{
					name: '盖亚-v1',
					img: 'https://img2.baidu.com/it/u=1705403120,3718823446&fm=253&fmt=auto&app=120&f=JPEG'
				},{
					name: '盖亚-v2',
					img: 'https://img0.baidu.com/it/u=650516579,367040620&fm=253&fmt=auto&app=138&f=JPEG'
				},{
					name: '盖亚-sv',
					img: 'https://img2.baidu.com/it/u=1104373316,536412306&fm=253&fmt=auto&app=138&f=JPEG'
				},{
					name: '阿古茹-v1',
					img: 'https://img1.baidu.com/it/u=844275405,4098999300&fm=253&fmt=auto&app=138&f=JPEG'
				},{
					name: '阿古茹-v2',
					img: 'https://img0.baidu.com/it/u=2555415674,312962677&fm=253&fmt=auto&app=138&f=JPEG'
				},{
					name: '布鲁-旋风形',
					img: 'https://img0.baidu.com/it/u=1104077699,1588894380&fm=253&fmt=auto&app=138&f=JPEG'
				},{
					name: '德开-闪亮形',
					img: 'https://img1.baidu.com/it/u=330047086,3670644100&fm=253&fmt=auto&app=138&f=GIF'
				},{
					name: '查克',
					img: 'https://img0.baidu.com/it/u=2845742118,2817841109&fm=253&fmt=auto&app=138&f=PNG'
				},{
					name: '泽塔-德尔塔天爪',
					img: 'https://img2.baidu.com/it/u=2530235738,1580745022&fm=253&fmt=auto&app=138&f=JPEG'
				},{
					name: 'faiz',
					img: 'https://img2.baidu.com/it/u=1129887339,783043968&fm=253&fmt=auto&app=138&f=JPEG'
				},{
					name: 'eternal',
					img: 'https://img2.baidu.com/it/u=687048114,3737094746&fm=253&fmt=auto&app=138&f=JPEG'
				},
				{
					name: 'W',
					img: 'https://img0.baidu.com/it/u=3900931597,2152298535&fm=253&fmt=auto&app=120&f=JPEG'
				},
				{
					name: '甲斗',
					img: 'https://img2.baidu.com/it/u=821693551,3006244307&fm=253&fmt=auto&app=120&f=JPEG'
				},{
					name: '梦比优斯',
					img: 'https://img2.baidu.com/it/u=687048114,3737094746&fm=253&fmt=auto&app=138&f=JPEG'
				},
				{
					name: '奈克瑟斯',
					img: 'https://img2.baidu.com/it/u=1266981054,3742431373&fm=253&fmt=auto&app=138&f=JPEG'
				},
				{
					name: '银河',
					img: 'https://img2.baidu.com/it/u=1203795201,2479012294&fm=253&fmt=auto&app=138&f=JPEG'
				},
				{
					name: '欧布',
					img: 'https://img2.baidu.com/it/u=2856753095,3877825677&fm=253&fmt=auto&app=138&f=JPEG'
				},]
			}
		},
	}
</script>

<style scoped lang="scss">
	.lineBody {
		display: flex;
		align-items: center;
		padding: 20rpx 30rpx;
		box-sizing: border-box;
		border-bottom: 1px solid rgba(164,164,164,.2);

		.headImg {
			width: 80rpx;
			height: 80rpx;
			border-radius: 15rpx;
			margin-right: 30rpx;
		}
	}
</style>

```