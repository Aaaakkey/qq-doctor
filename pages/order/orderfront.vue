<template>
	<view>
		<view class="uni-padding-wrap">
			<view class="seachWrapp">
				<view class="SFBcontainer">
					<image src="../../static/img/nearHosp/shizi1.png" mode="aspectFill" class="left-image"></image>
					<input type="text" class="select-block" placeholder=" 搜索我的订单" confirm-type="search" :value="keyword"
						@input="keyword = $event.target.value" />

					<image src="../../static/img/order/vector.png" mode="" class="right-image">
					</image>
				</view>
			</view>
			<uni-segmented-control :current="current" :values="items" @clickItem="onClickItem" styleType="text"
				style="z-index: 1;" />
		</view>
		
		<uni-section title="" type="" class="sectionWrapp">
	       
			<view class="content">
          
				<view v-if="current === 0">
					<!-- 	<view class="" style="margin-top: 200rpx;background-color: white;"></view> -->
				
					<view class="" style="margin-top: 250rpx;">	</view>
					
					<!-- 已完成 -->
					<view class="orderOneWrapp" v-for="(item,index) in list">
						<view class="orderOne">
							<!-- 第一行文字 订单医院和状态 -->
							<view class="orderHospWrapp">
								<view class="orderHospText">
									赣州市第一人民医院
					
									<image src="../../static/img/order/goRight.png" mode="" class="descIcon" @click="navToOrderDetails()"></image>
								</view>
					
								<view class="orderState" v-if="state1">
									已完成
								</view>
								<view class="orderState " v-if="state2">
									未使用
								</view>
								<view class="orderState" v-if="state3">
									退款
								</view>
								<view class="orderState" v-if="state4">
									待付款
								</view>
								<view class="orderState" v-if="state5">
									待评价
								</view>
							</view>
							<!-- 第二部分 -->
							<view class="orderDescWrapp">
								<!-- 医生照片 -->
								<view class="docIconWrapp">
									<image src="../../static/img/order/docIcon.png" mode="" class="docIcon"></image>
								</view>
								<!-- 订单详情 已经诊断结果按钮 -->
								<view class="orderDescAndButtonWrapp">
									<view class="creatTimeWrapp">
										创建时间: 2023-10-23 21:36
									</view>
									<view class="orderWayWrapp">
										<text>眼科线下挂号</text>
									</view>
									<view class="moneyWrapp">
										<text>实付: ￥27.00</text>
										<view class="resButton" @click="navToDigRes()" v-if="state1">
											<text class="resButtonText">诊断结果</text>
										</view>
									</view>
					
									<view class="buttonWrapp">
					
										<!-- 第一个按钮 -->
										<view class="delButton" v-if="state1">
											<text class="">删除订单</text>
										</view>
					
										<!--  -->
										<view class="serButton" v-if="state1">
											<text class="">售后服务</text>
										</view>
										<view class="serButton" v-if="isPay">
											<text class="">找朋友付</text>
										</view>
										<view class="serButton" v-if="refund">
											<text class="">退款</text>
										</view>
										<view class="serButton" v-if="refund">
											<text class="">退款进程</text>
										</view>
										<!-- 第三个按钮 -->
										<view class="rateButton" v-if="state1" @click="navToRate()">
											<text class="" >评价</text>
										</view>
										<view class="rateButton" v-if="state2">
											<text class="">订单信息</text>
										</view>
										<view class="rateButton" v-if="state3">
											<text class="">撤销退款</text>
										</view>
										<view class="rateButton" v-if="isPay">
											<text class="">继续付款</text>
										</view>
										<view class="rateButton" v-if="detail">
											<text class="">查看详情</text>
										</view>
									</view>
								</view>
							</view>
						</view>
					</view>
						<!-- 待评价 -->
					<view class="orderOneWrapp" v-for="(item,index) in list">
						<view class="orderOne">
							<!-- 第一行文字 订单医院和状态 -->
							<view class="orderHospWrapp">
								<view class="orderHospText">
									赣州市第一人民医院

									<image src="../../static/img/order/goRight.png" mode="" class="descIcon" @click="navToOrderDetails()"></image>
								</view>

								<view class="orderState" v-if="!state1">
									已完成
								</view>
								<view class="orderState " v-if="state2">
									未使用
								</view>
								<view class="orderState" v-if="state3">
									退款
								</view>
								<view class="orderState" v-if="state4">
									待付款
								</view>
								<view class="orderState" v-if="!state5">
									待评价
								</view>
							</view>
							<!-- 第二部分 -->
							<view class="orderDescWrapp">
								<!-- 医生照片 -->
								<view class="docIconWrapp">
									<image src="../../static/img/order/docIcon.png" mode="" class="docIcon"></image>
								</view>
								<!-- 订单详情 已经诊断结果按钮 -->
								<view class="orderDescAndButtonWrapp">
									<view class="creatTimeWrapp">
										创建时间: 2023-10-23 21:36
									</view>
									<view class="orderWayWrapp">
										<text>眼科线下挂号</text>
									</view>
									<view class="moneyWrapp">
										<text>实付: ￥27.00</text>
										<view class="resButton" @click="navToDigRes()" v-if="state1">
											<text class="resButtonText">诊断结果</text>
										</view>
									</view>

									<view class="buttonWrapp">

										<!-- 第一个按钮 -->
										<view class="delButton" v-if="state1">
											<text class="">删除订单</text>
										</view>

										<!--  -->
										<view class="serButton" v-if="state1">
											<text class="">售后服务</text>
										</view>
										<view class="serButton" v-if="isPay">
											<text class="">找朋友付</text>
										</view>
										<view class="serButton" v-if="refund">
											<text class="">退款</text>
										</view>
										<view class="serButton" v-if="refund">
											<text class="">退款进程</text>
										</view>
										<!-- 第三个按钮 -->
										<view class="rateButton" v-if="state1" @click="navToRate()">
											<text class="">评价</text>
										</view>
										<view class="rateButton" v-if="state2">
											<text class="">订单信息</text>
										</view>
										<view class="rateButton" v-if="state3">
											<text class="">撤销退款</text>
										</view>
										<view class="rateButton" v-if="isPay">
											<text class="">继续付款</text>
										</view>
										<view class="rateButton" v-if="detail">
											<text class="">查看详情</text>
										</view>
									</view>
								</view>
							</view>
						</view>
					</view>


					<!-- 未完成订单 -->
					<view class="orderOneWrapp">
						<view class="orderOne">
							<!-- 第一行文字 订单医院和状态 -->
							<view class="orderHospWrapp">
								<view class="orderHospText">
									赣州市第一人民医院

									<image src="../../static/img/order/goRight.png" mode="" class="descIcon"></image>
								</view>

								<view class="orderState" v-if="!state1">
									已完成
								</view>
								<view class="orderState " v-if="!state2">
									未使用
								</view>
								<view class="orderState" v-if="state3">
									退款中
								</view>
								<view class="orderState" v-if="state4">
									待付款
								</view>
								<view class="orderState" v-if="state5">
									待评价
								</view>
							</view>
							<!-- 第二部分 -->
							<view class="orderDescWrapp">
								<!-- 医生照片 -->
								<view class="docIconWrapp">
									<image src="../../static/img/order/docIcon.png" mode="" class="docIcon"></image>
								</view>
								<!-- 订单详情 已经诊断结果按钮 -->
								<view class="orderDescAndButtonWrapp">
									<view class="creatTimeWrapp">
										创建时间: 2023-10-23 21:36
									</view>
									<view class="orderWayWrapp">
										<text>眼科线下挂号</text>
									</view>
									<view class="moneyWrapp">
										<text>实付: ￥27.00</text>
										<view class="resButton" @click="navToCTRes()" v-if="!state1">
											<text class="resButtonText">诊断结果</text>
										</view>
									</view>

									<view class="buttonWrapp">

										<!-- 第一个按钮 -->
										<view class="delButton" v-if="state1">
											<text class="">删除订单</text>
										</view>

										<!--  -->
										<view class="serButton" v-if="!state1">
											<text class="">售后服务</text>
										</view>
										<view class="serButton" v-if="isPay">
											<text class="">找朋友付</text>
										</view>
										<view class="serButton" v-if="!refund">
											<text class="">退款</text>
										</view>
										<view class="serButton" v-if="refund">
											<text class="">退款进程</text>
										</view>
										<!-- 第三个按钮 -->
										<view class="rateButton" v-if="!state1">
											<text class="">评价</text>
										</view>
										<view class="rateButton" v-if="!state2">
											<text class="">订单信息</text>
										</view>
										<view class="rateButton" v-if="state3">
											<text class="">撤销退款</text>
										</view>
										<view class="rateButton" v-if="isPay">
											<text class="">继续付款</text>
										</view>
										<view class="rateButton" v-if="detail">
											<text class="">查看详情</text>
										</view>
									</view>
								</view>
							</view>
						</view>
					</view>
					<!-- 退款中 -->
					<view class="orderOneWrapp">
						<view class="orderOne">
							<!-- 第一行文字 订单医院和状态 -->
							<view class="orderHospWrapp">
								<view class="orderHospText">
									赣州市第一人民医院

									<image src="../../static/img/order/goRight.png" mode="" class="descIcon"></image>
								</view>

								<view class="orderState" v-if="!state1">
									已完成
								</view>
								<view class="orderState " v-if="state2">
									未使用
								</view>
								<view class="orderState" v-if="!state3">
									退款中
								</view>
								<view class="orderState" v-if="state4">
									待付款
								</view>
								<view class="orderState" v-if="state5">
									待评价
								</view>
							</view>
							<!-- 第二部分 -->
							<view class="orderDescWrapp">
								<!-- 医生照片 -->
								<view class="docIconWrapp">
									<image src="../../static/img/order/docIcon.png" mode="" class="docIcon"></image>
								</view>
								<!-- 订单详情 已经诊断结果按钮 -->
								<view class="orderDescAndButtonWrapp">
									<view class="creatTimeWrapp">
										创建时间: 2023-10-23 21:36
									</view>
									<view class="orderWayWrapp">
										<text>眼科线下挂号</text>
									</view>
									<view class="moneyWrapp">
										<text>实付: ￥27.00</text>
										<view class="resButton" @click="navToCTRes()" v-if="!state1">
											<text class="resButtonText">诊断结果</text>
										</view>
									</view>

									<view class="buttonWrapp">

										<!-- 第一个按钮 -->
										<view class="delButton" v-if="state1">
											<text class="">删除订单</text>
										</view>

										<!--  -->
										<view class="serButton" v-if="!state1">
											<text class="">售后服务</text>
										</view>
										<view class="serButton" v-if="isPay">
											<text class="">找朋友付</text>
										</view>
										<view class="serButton" v-if="refund">
											<text class="">退款</text>
										</view>
										<view class="serButton" v-if="!refund">
											<text class="">退款进程</text>
										</view>
										<!-- 第三个按钮 -->
										<view class="rateButton" v-if="!state1">
											<text class="">评价</text>
										</view>
										<view class="rateButton" v-if="state2">
											<text class="">订单信息</text>
										</view>
										<view class="rateButton" v-if="!state3">
											<text class="">撤销退款</text>
										</view>
										<view class="rateButton" v-if="isPay">
											<text class="">继续付款</text>
										</view>
										<view class="rateButton" v-if="detail">
											<text class="">查看详情</text>
										</view>
									</view>
								</view>
							</view>
						</view>
					</view>


				</view>
				<view v-if="current === 1">
			
						<view class="" style="margin-top: 250rpx;">	</view>
					<view class="orderOneWrapp" v-for="(item,index) in list">
						<view class="orderOne">
							<!-- 第一行文字 订单医院和状态 -->
							<view class="orderHospWrapp">
								<view class="orderHospText">
									赣州市第一人民医院

									<image src="../../static/img/order/goRight.png" mode="" class="descIcon"></image>
								</view>

								<view class="orderState" v-if="!state1">
									已完成
								</view>
								<view class="orderState " v-if="state2">
									未使用
								</view>
								<view class="orderState" v-if="state3">
									退款中
								</view>
								<view class="orderState" v-if="!state4">
									待付款
								</view>
								<view class="orderState" v-if="state5">
									待评价
								</view>
							</view>
							<!-- 第二部分 -->
							<view class="orderDescWrapp">
								<!-- 医生照片 -->
								<view class="docIconWrapp">
									<image src="../../static/img/order/docIcon.png" mode="" class="docIcon"></image>
								</view>
								<!-- 订单详情 已经诊断结果按钮 -->
								<view class="orderDescAndButtonWrapp">
									<view class="creatTimeWrapp">
										创建时间: 2023-10-23 21:36
									</view>
									<view class="orderWayWrapp">
										<text>眼科线下挂号</text>
									</view>
									<view class="moneyWrapp">
										<text>实付: ￥27.00</text>
										<view class="resButton" @click="navToCTRes()" v-if="!state1">
											<text class="resButtonText">诊断结果</text>
										</view>
									</view>

									<view class="buttonWrapp">

										<!-- 第一个按钮 -->
										<view class="delButton" v-if="state1">
											<text class="">删除订单</text>
										</view>

										<!--  -->
										<view class="serButton" v-if="!state1">
											<text class="">售后服务</text>
										</view>
										<view class="serButton" v-if="!isPay">
											<text class="">找朋友付</text>
										</view>
										<view class="serButton" v-if="refund">
											<text class="">退款</text>
										</view>
										<view class="serButton" v-if="refund">
											<text class="">退款进程</text>
										</view>
										<!-- 第三个按钮 -->
										<view class="rateButton" v-if="!state1" >
											<text class="">评价</text>
										</view>
										<view class="rateButton" v-if="state2">
											<text class="">订单信息</text>
										</view>
										<view class="rateButton" v-if="state3">
											<text class="">撤销退款</text>
										</view>
										<view class="rateButton" v-if="!isPay">
											<text class="">继续付款</text>
										</view>
										<view class="rateButton" v-if="detail">
											<text class="">查看详情</text>
										</view>
									</view>
								</view>
							</view>
						</view>
					</view>
				</view>
				<view v-if="current === 2">
						<view class="" style="margin-top: 250rpx;">	</view>
					<view class="orderOneWrapp" v-for="(item,index) in list">
						<view class="orderOne">
							<!-- 第一行文字 订单医院和状态 -->
							<view class="orderHospWrapp">
								<view class="orderHospText">
									赣州市第一人民医院

									<image src="../../static/img/order/goRight.png" mode="" class="descIcon"></image>
								</view>

								<view class="orderState" v-if="!state1">
									已完成
								</view>
								<view class="orderState " v-if="!state2">
									未使用
								</view>
								<view class="orderState" v-if="state3">
									退款中
								</view>
								<view class="orderState" v-if="state4">
									待付款
								</view>
								<view class="orderState" v-if="state5">
									待评价
								</view>
							</view>
							<!-- 第二部分 -->
							<view class="orderDescWrapp">
								<!-- 医生照片 -->
								<view class="docIconWrapp">
									<image src="../../static/img/order/docIcon.png" mode="" class="docIcon"></image>
								</view>
								<!-- 订单详情 已经诊断结果按钮 -->
								<view class="orderDescAndButtonWrapp">
									<view class="creatTimeWrapp">
										创建时间: 2023-10-23 21:36
									</view>
									<view class="orderWayWrapp">
										<text>眼科线下挂号</text>
									</view>
									<view class="moneyWrapp">
										<text>实付: ￥27.00</text>
										<view class="resButton" @click="navToCTRes()" v-if="!state1">
											<text class="resButtonText">诊断结果</text>
										</view>
									</view>

									<view class="buttonWrapp">

										<!-- 第一个按钮 -->
										<view class="delButton" v-if="state1">
											<text class="">删除订单</text>
										</view>

										<!--  第二个-->
										<view class="serButton" v-if="!state1">
											<text class="">售后服务</text>
										</view>
										<view class="serButton" v-if="isPay">
											<text class="">找朋友付</text>
										</view>
										<view class="serButton" v-if="!refund">
											<text class="">退款</text>
										</view>
										<view class="serButton" v-if="refund">
											<text class="">退款进程</text>
										</view>
										<!-- 第三个按钮 -->
										<view class="rateButton" v-if="!state1">
											<text class="">评价</text>
										</view>
										<view class="rateButton" v-if="!state2">
											<text class="">订单信息</text>
										</view>
										<view class="rateButton" v-if="state3">
											<text class="">撤销退款</text>
										</view>
										<view class="rateButton" v-if="isPay">
											<text class="">继续付款</text>
										</view>
										<view class="rateButton" v-if="detail">
											<text class="">查看详情</text>
										</view>
									</view>
								</view>
							</view>
						</view>
					</view>
				</view>
				<view v-if="current === 3">
					<view class="" style="margin-top: 250rpx;">	</view>
					<view class="orderOneWrapp" v-for="(item,index) in list">
						<view class="orderOne">
							<!-- 第一行文字 订单医院和状态 -->
							<view class="orderHospWrapp">
								<view class="orderHospText">
									赣州市第一人民医院

									<image src="../../static/img/order/goRight.png" mode="" class="descIcon"></image>
								</view>

								<view class="orderState" v-if="!state1">
									已完成
								</view>
								<view class="orderState " v-if="state2">
									未使用
								</view>
								<view class="orderState" v-if="state3">
									退款
								</view>
								<view class="orderState" v-if="state4">
									待付款
								</view>
								<view class="orderState" v-if="!state5">
									待评价
								</view>
							</view>
							<!-- 第二部分 -->
							<view class="orderDescWrapp">
								<!-- 医生照片 -->
								<view class="docIconWrapp">
									<image src="../../static/img/order/docIcon.png" mode="" class="docIcon"></image>
								</view>
								<!-- 订单详情 已经诊断结果按钮 -->
								<view class="orderDescAndButtonWrapp">
									<view class="creatTimeWrapp">
										创建时间: 2023-10-23 21:36
									</view>
									<view class="orderWayWrapp">
										<text>眼科线下挂号</text>
									</view>
									<view class="moneyWrapp">
										<text>实付: ￥27.00</text>
										<view class="resButton" @click="navToCTRes()" v-if="state1">
											<text class="resButtonText">诊断结果</text>
										</view>
									</view>

									<view class="buttonWrapp">

										<!-- 第一个按钮 -->
										<view class="delButton" v-if="state1">
											<text class="">删除订单</text>
										</view>

										<!--  -->
										<view class="serButton" v-if="state1">
											<text class="">售后服务</text>
										</view>
										<view class="serButton" v-if="isPay">
											<text class="">找朋友付</text>
										</view>
										<view class="serButton" v-if="refund">
											<text class="">退款</text>
										</view>
										<view class="serButton" v-if="refund">
											<text class="">退款进程</text>
										</view>
										<!-- 第三个按钮 -->
										<view class="rateButton" v-if="state1">
											<text class="">评价</text>
										</view>
										<view class="rateButton" v-if="state2">
											<text class="">订单信息</text>
										</view>
										<view class="rateButton" v-if="state3">
											<text class="">撤销退款</text>
										</view>
										<view class="rateButton" v-if="isPay">
											<text class="">继续付款</text>
										</view>
										<view class="rateButton" v-if="detail">
											<text class="">查看详情</text>
										</view>
									</view>
								</view>
							</view>
						</view>
					</view>
				</view>
				<view v-if="current === 4">
						<view class="" style="margin-top: 250rpx;">	</view>
					<!-- 退款中 -->
					<view class="orderOneWrapp" v-for="(item,index) in list">
						<view class="orderOne">
							<!-- 第一行文字 订单医院和状态 -->
							<view class="orderHospWrapp">
								<view class="orderHospText">
									赣州市第一人民医院

									<image src="../../static/img/order/goRight.png" mode="" class="descIcon"></image>
								</view>

								<view class="orderState" v-if="!state1">
									已完成
								</view>
								<view class="orderState " v-if="state2">
									未使用
								</view>
								<view class="orderState" v-if="!state3">
									退款中
								</view>
								<view class="orderState" v-if="state4">
									待付款
								</view>
								<view class="orderState" v-if="state5">
									待评价
								</view>
							</view>
							<!-- 第二部分 -->
							<view class="orderDescWrapp">
								<!-- 医生照片 -->
								<view class="docIconWrapp">
									<image src="../../static/img/order/docIcon.png" mode="" class="docIcon"></image>
								</view>
								<!-- 订单详情 已经诊断结果按钮 -->
								<view class="orderDescAndButtonWrapp">
									<view class="creatTimeWrapp">
										创建时间: 2023-10-23 21:36
									</view>
									<view class="orderWayWrapp">
										<text>眼科线下挂号</text>
									</view>
									<view class="moneyWrapp">
										<text>实付: ￥27.00</text>
										<view class="resButton" @click="navToCTRes()" v-if="!state1">
											<text class="resButtonText">诊断结果</text>
										</view>
									</view>

									<view class="buttonWrapp">

										<!-- 第一个按钮 -->
										<view class="delButton" v-if="state1">
											<text class="">删除订单</text>
										</view>

										<!--  -->
										<view class="serButton" v-if="!state1">
											<text class="">售后服务</text>
										</view>
										<view class="serButton" v-if="isPay">
											<text class="">找朋友付</text>
										</view>
										<view class="serButton" v-if="refund">
											<text class="">退款</text>
										</view>
										<view class="serButton" v-if="!refund">
											<text class="">退款进程</text>
										</view>
										<!-- 第三个按钮 -->
										<view class="rateButton" v-if="!state1">
											<text class="">评价</text>
										</view>
										<view class="rateButton" v-if="state2">
											<text class="">订单信息</text>
										</view>
										<view class="rateButton" v-if="!state3">
											<text class="">撤销退款</text>
										</view>
										<view class="rateButton" v-if="isPay">
											<text class="">继续付款</text>
										</view>
										<view class="rateButton" v-if="detail">
											<text class="">查看详情</text>
										</view>
									</view>
								</view>
							</view>
						</view>
					</view>
				</view>
			</view>
		</uni-section>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				items: ['全部', '待付款', '待就诊', '待评价', '退款'],
				current: 0,
				// 订单是否完成
				state1: true,
				// 订单是否使用
				state2: false,
				//  退款中
				state3: false,
				// 待付款
				state4: false,
				// 待评价
				state5: false,
				keyword: "",
				// 订单是否支付
				isPay: false,
				// 是否退款
				refund: false,
				// 查看详情
				detail: false,
				list: ["1", "2", "3", "4", "5"],

			};
		},
		methods: {
			onClickItem(e) {
				if (this.current !== e.currentIndex) {
					this.current = e.currentIndex
				}
			},
			navToOrderDetails(){
				uni.navigateTo({
					url:"orderDetail/orderDetail"
				})
			},
			navToDigRes(){
				uni.navigateTo({
					url: "/pages/order/diagnosticResults/diagnosticResults"
				})
			},
			navToRate(){
				uni.navigateTo({
					url: "evaluateOrders/evaluateOrders"
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.content {
		z-index: 1;

		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		justify-content: center;
		align-items: center;
		width: 100%;


		.orderOneWrapp {
			margin-bottom: 25rpx;
			height: 270rpx;
			width: 100%;
			display: flex;
			flex-direction: row;
			justify-content: center;
			align-items: center;

			.orderOne {
				height: 270rpx;
				width: 680rpx;
				background-color: white;
				flex-direction: column;
				border-radius: 20rpx;
				box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);

				.orderHospWrapp {
					display: flex;
					flex-direction: row;
					justify-content: space-between;

					.orderHospText {
						font-size: 34rpx;
						font-weight: 550;
						margin-left: 20rpx;
						margin-top: 12rpx;
					}

					.descIcon {
						height: 28rpx;
						width: 38rpx;

					}

					.orderState {
						color: #9E9E9E;
						font-size: 24rpx;
						margin-right: 24rpx;
						margin-top: 14rpx;
						font-family: 思源黑体;
					}
				}

				.orderDescWrapp {
					display: flex;
					flex-direction: row;
					width: 100%;
					// background-color: #FFBB24;

					.docIconWrapp {

						// background-color: aqua;
						.docIcon {
							margin-top: 20rpx;
							margin-left: 32rpx;
							height: 140rpx;
							width: 132rpx;
						}
					}

					.orderDescAndButtonWrapp {
						display: flex;
						flex-direction: column;
						align-items: flex-start;
						width: 100%;
						// height: 60%;


						.creatTimeWrapp {
							margin-left: 26rpx;
							color: #AAAAAA;
							margin-top: 8rpx;
						}

						.orderWayWrapp {
							margin-left: 26rpx;
							display: flex;
							margin-top: 8rpx;
							color: #AAAAAA;
						}

						.moneyWrapp {
							margin-top: 8rpx;
							margin-left: 26rpx;
							display: flex;
							flex-direction: row;
							justify-content: space-between;
							width: 100%;
							color: #AAAAAA;


							.resButton {
								height: 41rpx;
								width: 124rpx;
								font-size: 24rpx;

								color: #FFBB24;
								border-style: solid;
								border-color: #FFBB24;
								border-radius: 30rpx;
								border-width: 3rpx;
								text-align: center;
								margin-right: 40rpx;


							}
						}

						.buttonWrapp {
							margin-top: 15rpx;
							display: flex;
							flex-direction: row;
							width: 80%;
							justify-content: space-between;
							margin-left: 90rpx;

							.delButton {
								height: 41rpx;
								width: 124rpx;
								font-size: 24rpx;
								color: #AAAAAA;
								border-style: solid;
								border-color: #AAAAAA;
								border-radius: 30rpx;
								border-width: 3rpx;
								text-align: center;

							}

							.serButton {
								height: 41rpx;
								width: 124rpx;
								font-size: 24rpx;

								color: #AAAAAA;
								border-style: solid;
								border-color: #AAAAAA;
								border-radius: 30rpx;
								border-width: 3rpx;
								text-align: center;

							}

							.rateButton {
								height: 41rpx;
								width: 124rpx;
								font-size: 24rpx;

								color: #FFBB24;
								border-style: solid;
								border-color: #FFBB24;
								border-radius: 30rpx;
								border-width: 3rpx;
								text-align: center;

							}

						}
					}

				}
			}
		}
	}



	.uni-padding-wrap {
		// background-color:  #F7F7F7;
		// position: fixed;
		// display: flex;
	
		flex-direction: row;
		justify-content: space-between;
		z-index: 99999;
		position: fixed;
		height: 250rpx;
		width: 100%;
		background-color: white;
	
      
	.seachWrapp {
		        margin-top: 70rpx;
				display: flex;
				flex-direction: row;

				.SFBcontainer {
					margin-top: 20rpx;

					display: flex;
					flex-flow: row nowrap;
					align-items: flex-end;
					justify-content: space-between;


					.left-image {
						margin-bottom: 5rpx;
						margin-left: 18rpx;
						width: 72rpx;
						height: 72rpx;
						transform: translateY(-3rpx);
					}

					.select-block {
						// margin-right: 20rpx;
						margin-left: 30rpx;

						border-radius: 30rpx;
						width: 530rpx;
						height: 80rpx;

						display: flex;
						align-items: center;
						border-style: solid;
						border-width: 1rpx;
						// border-color:#F9F9F9;

						.context {
							font-size: 24rpx;
							color: #cccccc;
						}
					}

					.right-image {
						margin-bottom: 15rpx;
						margin-left: 20rpx;
						width: 60rpx;
						height: 60rpx;
						transform: translateY(5rpx);
					}


				}
			}
	

	}
	
	.sectionWrapp {
		background-color: #F7F7F7;
	
	
	}
</style>
<style>
	page {
		background-color: #F7F7F7;
	}

	.sectionWrapp /deep/ .uni-section-header {
		display: none;
		margin: 0rpx;
		padding: 0rpx;

	}

	.uni-input-wrapper /deep/ .uni-input-input {
		background: #F6F6F5;
	}
</style>