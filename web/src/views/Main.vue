<template>
  <div>
    <div class="topbar bg-black py-2 px-3 d-flex ai-center">
      <img src="../assets/images/logo.png" alt="" height="30">
      <div class="px-2 flex-1">
        <div class="text-white">王者荣耀</div>
        <div class="text-gray-1 fs-xxs">团队成就更多</div>
      </div>
      <button type="button" class="btn bg-primary">立即下载</button>
    </div>
    <div class="bg-primary pt-3 pb-2">
      <div class="nav nav-inverse jc-around pb-1">
        <!-- <router-link class="nav-link" tag="div" to="/">首页</router-link>
        <router-link class="nav-link" tag="div" to="/strategycenter">攻略中心</router-link>
        <router-link class="nav-link" tag="div" to="/matchindex">赛事中心</router-link> -->
        <div class="nav-item">
          <router-link class="nav-link" tag="div" to="/">首页</router-link>
        </div>
        <div class="nav-item">
          <router-link class="nav-link" tag="div" to="/strategycenter">攻略中心</router-link>
        </div>
        <div class="nav-item">
          <router-link class="nav-link" tag="div" to="/matchindex">赛事中心</router-link>
        </div>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  
}
</script>
<style lang="scss">
@import "../assets/scss/variables.scss";
  .topbar {
    position: sticky;
    top: 0;
    z-index: 999;
  }
  // .nav-link {
  //   color: map-get($colors, 'white');
  //   // border-bottom: 3px solid transparent;
  //   padding-bottom: 0.1rem;
   
  //   &.router-link-exact-active {
  //     border-bottom: 3px solid map-get($colors, 'white');
  //     color: map-get($colors, 'white');
  //   }
  // }
  .active {
    &.router-link-exact-active {
      border-bottom: 3px solid map-get($colors, 'white');
    }
  }
</style>