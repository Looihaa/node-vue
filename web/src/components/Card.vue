<template>
  <div class="card bg-white p-3 mt-3">
    <div class="card-header d-flex pb-3">
      <i class="iconfont" :class="`icon-${icon}`"></i>
      <div class="fs-xl flex-1 px-2">{{title}}</div>
      <router-link :to="`/${link}`" tag="i" class="iconfont icon-more"></router-link>
    </div>
    <div class="card-body pt-3">
      <slot></slot> 
    </div>
  </div>
</template>

<script>
export default {
    props: {
        title: { type: String, required: true },
        icon: { type: String, required: true },
        link: { type: String, required: true }
    }
};
</script>

<style lang="scss" scoped>
@import '../assets/scss/variables';
.card {
    .card-header {
        border-bottom: 1px solid $border-color;
    }
    border-bottom: 1px solid $border-color;
}
</style>