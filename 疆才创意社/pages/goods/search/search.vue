<template>
	<view>
		<!-- 顶部导航栏 -->
		<view class="header" :style="{ position: headerPosition,top:headerTop,opacity: afterHeaderOpacity }">
			<view class="icon-btn">
				<image src="../../../static/img/arrow-left-1.png" @tap="BackPage" class="icon-back"></image>
			</view>
			<view class="input-box">
				<input
					placeholder="默认关键字"
					placeholder-style="color:#c0c0c0;"
					background-color="color:#fff;"
				/>
				<view class="icon search"></view>
			</view>
		</view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				search_close: false, searchKey: '', deleteView: false,
			}
		},
		onLoad() {
			
		},
		onReady() {
			_tool.setBarColor(true);
			uni.pageScrollTo({
			    scrollTop: 0,
			    duration: 0
			});
		},
		methods: {
			BackPage() {
				uni.navigateBack();
			},
			searchInput(event) {
				let value = event.detail.value;
				this.searchKey = value;
				if(value) {
					this.search_close = true;
				} else {
					this.search_close = false;
				}
			},
			closeInput() {
				this.searchKey = '';
				this.search_close = false;
			},
			deleteTap() {
				this.deleteView = true;
			},
			logTap() {
				this.deleteView = false;
			},
		}
	}
</script>

<style lang="scss">
.header {
	width: 92%;
	padding: 0 4%;
	height: 100upx;
	display: flex;
	align-items: center;
	position: fixed;
	top: 0;
	z-index: 10;
	background-color: #fff;

	/*  #ifdef  APP-PLUS  */
	top: var(--status-bar-height);
	/*  #endif  */
	.icon-back{
		width: 60rpx;
		height: 50rpx;
		display: flex;
		position: relative;
		left: -15rpx;
	}
	.input-box {
		width: 100%;
		height: 65upx;
		background-color: #ffffff;
		border-radius: 30upx;
		border-style: solid ;
		border-width: 1upx;
		border-color: #dddddd;
		position: relative;
		display: flex;
		box-shadow:0 0 7px #c8c8c8;
		align-items: center;
		.icon {
			display: flex;
			align-items: center;
			position: absolute;
			top: 0;
			right: 0;
			width: 60upx;
			height: 60upx;
			font-size: 34upx;
			color: #c0c0c0;
		}
		input {
			padding-left: 28upx;
			height: 28upx;
			font-size: 28upx;
		}
	}
}
</style>