<template>
  <div>
    <swiper :options="swiperOption">
      <swiper-slide>
        <img class="w-100" src="../assets/images/a81465de0bce25f22add0f4d700ec04f.jpeg" alt />
      </swiper-slide>
      <swiper-slide>
        <img class="w-100" src="../assets/images/c9bd94f54ce0707355797ce20828162b.jpeg" alt />
      </swiper-slide>
      <swiper-slide>
        <img class="w-100" src="../assets/images/fc35556d5119597df9f198b208c430c8.jpeg" alt />
      </swiper-slide>
      <div class="swiper-pagination pagination-home text-right px-3 pb-2" slot="pagination"></div>
    </swiper>
    <!-- end of swiper -->
    <div class="nav-icons bg-white mt-3 text-center pt-3 text-dark-1">
      <div class="d-flex flex-wrap ai-center" :class="{open:open}">
        <div class="nav-item mb-3">
          <i class="sprite sprite-news"></i>
          <div class="py-1">爆料站</div>
        </div>
        <div class="nav-item mb-3">
          <i class="sprite sprite-gsz"></i>
          <div class="py-1">故事站</div>
        </div>
        <div class="nav-item mb-3">
          <i class="sprite sprite-zbsc"></i>
          <div class="py-1">周边商城</div>
        </div>
        <div class="nav-item mb-3">
          <i class="sprite sprite-tyf"></i>
          <div class="py-1">体验服</div>
        </div>
        <div class="nav-item mb-3">
          <i class="sprite sprite-xrzq"></i>
          <div class="py-1">新人专区</div>
        </div>
        <div class="nav-item mb-3">
          <i class="sprite sprite-rycc"></i>
          <div class="py-1">荣耀·传承</div>
        </div>
        <div class="nav-item mb-3">
          <i class="sprite sprite-trsq"></i>
          <div class="py-1">同人社区</div>
        </div>
        <div class="nav-item mb-3">
          <i class="sprite sprite-wzyd"></i>
          <div class="py-1">王者营地</div>
        </div>
        <div class="nav-item mb-3">
          <i class="sprite sprite-gzh"></i>
          <div class="py-1">公众号</div>
        </div>
        <div class="nav-item mb-3">
          <i class="sprite bbjs"></i>
          <div class="py-1">版本介绍</div>
        </div>
      </div>
      <div class="bg-light py-2 fs-sm" @click="isOpen">
        <i class="sprite sprite-arrow mr-1" :class="{up:up}"></i>
        <span>{{this.open === true ? '展开' : '收起'}}</span>
      </div>
    </div>

    <!-- end of nav icons -->

    <m-list-card link="newsList" icon="menu" title="新闻资讯" :categories="newsCats">
      <template #items="{category}">
        <router-link
          tag="div"
          :to="`/articles/${news._id}`"
          class="py-2 fs-lg d-flex"
          v-for="(news, i) in category.newsList"
          :key="i"
        >
          <span class="text-info">[{{news.categoryName}}]</span>
          <span class="px-2">|</span>
          <span class="flex-1 text-dark text-ellipsis pr-3">{{news.title}}</span>
          <span class="text-gray fs-sm">{{news.createdAt | date}}</span>
        </router-link>
      </template>
    </m-list-card>

    <m-list-card link="heroesList" icon="card-hero" title="英雄列表" :categories="heroCats">
      <template #items="{category}">
        <div class="d-flex flex-wrap" style="margin: 0 -0.5rem">
          <router-link
            tag="div"
            :to="`/heroes/${hero._id}`"
            class="p-2 text-center"
            style="width: 20%"
            v-for="(hero, i) in category.heroList"
            :key="i"
          >
            <img :src="hero.avatar" class="w-100" />
            <div>{{hero.name}}</div>
          </router-link>
        </div>
      </template>
    </m-list-card>
  </div>
</template>

<script>
import dayjs from "dayjs";
export default {
  filters: {
    date(val) {
      return dayjs(val).format("MM/DD");
    }
  },
  data() {
    return {
      swiperOption: {
        pagination: {
          el: ".pagination-home"
        }
      },
      newsCats: [],
      heroCats: [],
      open: false,
      up: false
    };
  },
  methods: {
    isOpen() {
      this.open = !this.open;
      this.up = !this.up;
    },
    async fetchNewsCats() {
      const res = await this.$http.get("news/list");
      this.newsCats = res.data;
    },
    async fetchHeroCats() {
      const res = await this.$http.get("heroes/list");
      this.heroCats = res.data;
    }
  },
  created() {
    this.fetchNewsCats();
    this.fetchHeroCats();
  }
};
</script>

<style lang="scss">
@import "../assets/scss/variables.scss";
.pagination-home {
  .swiper-pagination-bullet {
    opacity: 1;
    border-radius: 0.1538rem;
    background: map-get($colors, "white");
    &.swiper-pagination-bullet-active {
      background: map-get($colors, "info");
    }
  }
}

.nav-icons {
  border-top: 1px solid $border-color;
  border-bottom: 1px solid $border-color;
  .nav-item {
    width: 25%;
    border-right: 1px solid $border-color;
    &:nth-child(4n) {
      border-right: none;
    }
  }
}
.open {
  height: 60px;
  overflow: hidden;
}
.up {
  transform: rotate(180deg);
}
</style>