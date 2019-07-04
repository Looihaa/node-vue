<template>
  <div class="page-newsList">
    <div class="cat nav ">
      <div class="cat-item nav-item" :class="{current:current === i}"
      v-for="(category, i) in newsCats" :key="i"
      @click="$refs.list.swiper.slideTo(i)">
        <div class="nav-link">{{category.name}}</div>
      </div>
      
    </div>
    <div class="px-2">
      <swiper ref="list" @slide-change="() => current = $refs.list.swiper.realIndex">
        <swiper-slide v-for="(category, i) in newsCats" :key="i">
          <router-link :to="`/articles/${news._id}`" tag="div" class="py-2 fs-lg d-flex" v-for="(news, i) in category.newsList" :key="i">
            <span class="flex-1 text-dark text-ellipsis pr-3">{{news.title}}</span>
            <span class="text-gray fs-sm">{{news.createdAt | date}}</span>
          </router-link>
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<script>
import dayjs from 'dayjs';
export default {
  filters: {
    date(val) {
      return dayjs(val).format("MM/DD");
    }
  },
  data () {
    return {
      current: 0,
      newsCats: []
    }
  },
  methods: {
    async fetchNewsList () {
      const res = await this.$http.get('news/allnews')
      this.newsCats = res.data
    }
  },
  created() {
    this.fetchNewsList()
  },
}
</script>

<style lang="scss">
.cat-item {
  width: 20%;
  height: 2.5rem;
  line-height: 2.5rem;
  text-align: center;
  &.current {
    background: url(../assets/images/video_navBg.png) no-repeat;
    background-size: 100%;
  }
  &.current div {
    color: #fffefe;
  }
}
</style>
