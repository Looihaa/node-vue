<template>
  <div class="page-article" v-if="model">
    <div @click="prev()" class="d-flex py-3 px-2 border-bottom">
      <div class="iconfont icon-back text-blue"></div>
      <strong  class="flex-1 text-blue pl-2">{{model.title}}</strong>
      <div class="text-gray fs-xs">2019-06-19</div>
    </div>
    <div v-html="model.body" class="px-3 body fs-lg pb-3 border-bottom"></div>
    <div>
      <div class="pt-3">
        <i class="iconfont icon-menu"></i>
        <strong class="text-blue fs-lg ml-1">相关资讯</strong>
      </div>
      <div class="pt-2 fs-lg">
        <router-link class="py-1" :to="`/articles/${item._id}`" tag="div" v-for="item in model.related" :key="item._id">{{item.title}}</router-link>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    id: { required: true }
  },
  data() {
    return {
      model: null
    }
  },
  watch: {
    id: 'fatch'
    // id () {
    //   this.fatch()
    // }
  },
  methods: {
    prev () {
      this.$router.go(-1)
    },
    async fatch () {
      const res = await this.$http.get(`articles/${this.id}`)
      this.model = res.data
    }
  },
  created() {
    this.fatch()
  },
}
</script>
<style lang="scss">
.page-article {
  .body {
    img {
      max-width: 100%;
      height: auto;
    }
    iframe {
      width: 100%;
      height: auto;
    }
  }
}
</style>
