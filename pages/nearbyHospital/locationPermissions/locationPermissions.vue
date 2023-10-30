<template>
	<view>
    <button @click="requestLocationPermission">获取位置权限</button>
  </view>
</template>

<script>
export default {
  methods: {
    requestLocationPermission() {
      // 判断是否已经获得位置权限
      uni.getSetting({
        success: (res) => {
          if (res.authSetting['scope.userLocation'] === false) {
            // 未获得位置权限，弹出提示框请求权限
            uni.showModal({
              title: '提示',
              content: '需要获取您的位置信息，请授权',
              success: (res) => {
                if (res.confirm) {
                  // 用户点击确定，打开设置页面进行授权
                  uni.openSetting({
                    success: () => {
                      // 获取位置权限成功后，执行相应操作
                      this.doSomething();
                    }
                  });
                }
              }
            });
          } else if (res.authSetting['scope.userLocation'] === true) {
            // 已获得位置权限，执行相应操作
            this.doSomething();
          } else {
            // 位置权限未授权过，直接请求位置权限
            uni.authorize({
              scope: 'scope.userLocation',
              success: () => {
                // 用户授权成功，执行相应操作
                this.doSomething();
              },
              fail: () => {
                // 用户授权失败
              }
            });
          }
        }
      });
    },

    doSomething() {
      // 执行需要位置信息的操作
      console.log('执行操作');
    }
  }
};
</script>

<style>

</style>
