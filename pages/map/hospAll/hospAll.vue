<template>
	<view>
		<!--医院名称 -->
		<view class="hospNameTextWrapp">

			<text class="hospNameText">赣州市第一人民医院</text>
		</view>

		<!-- 医院详情 -->
		<view class="hospDecWrapp">
			<text style="padding-left: 40rpx;"> </text>
			<text>
				现收录科室医生35名,其中6位正高级专家、10位副高级专家,现已有20位医生开通了在线问诊服务,累计帮助了12890名患者,获得了3740次患者好评,科室人才梯队结构合理
				现有医学后博士1名,博士2名,硕士10名,高级职称医师15名
				省卫生系统学科带头人培养5名...
				现收录科室医生35名,其中6位正高级专家、10位副高级专家,现已有20位医生开通了在线问诊服务,累计帮助了12890名患者,获得了3740次患者好评,科室人才梯队结构合理
				现有医学后博士1名,博士2名,硕士10名,高级职称医师15名
				省卫生系统学科带头人培养5名...
				现收录科室医生35名,其中6位正高级专家、10位副高级专家,现已有20位医生开通了在线问诊服务,累计帮助了12890名患者,获得了3740次患者好评,科室人才梯队结构合理
				现有医学后博士1名,博士2名,硕士10名,高级职称医师15名
				省卫生系统学科带头人培养5名...
				现收录科室医生35名,其中6位正高级专家、10位副高级专家,现已有20位医生开通了在线问诊服务,累计帮助了12890名患者,获得了3740次患者好评,科室人才梯队结构合理
				现有医学后博士1名,博士2名,硕士10名,高级职称医师15名
				省卫生系统学科带头人培养5名...
			</text>
		</view>

	</view>
</template>

<script>
	export default {
		data() {
			return {

			};
		}
	}
</script>

<style scoped lang="scss">
	.hospNameTextWrapp {
		height: 96rpx;
		width: 100%;
		background: rgba(138, 238, 238, 0.1804);
		line-height: 96rpx;
		text-align: center;

		.hospNameText {
			font-size: 36rpx;
			font-weight: 550;
		}

	}

	.hospDecWrapp {
		height: 100%;
		width: 100%;
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;

		// background-color: rebeccapurple;
	}
</style>