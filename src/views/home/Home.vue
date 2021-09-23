<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">购物车</div>
    </nav-bar>
    <home-swiper :banners="banners"> </home-swiper>
    <recommend-view :recommends="recommends"></recommend-view>
    <feature-view></feature-view>
    <tab-control :titles="['流行', '新款', '精选']"></tab-control>
    <ul>
      <li>list1</li>
      <li>list1</li>
      <li>list1</li>
      <li>list1</li>
      <li>list1</li>
      <li>list1</li>
      <li>list1</li>
      <li>list1</li>
      <li>list1</li>
      <li>list1</li>
      <li>list1</li>
      <li>list1</li>
      <li>list1</li>
      <li>list1</li>
      <li>list1</li>
      <li>list1</li>
      <li>list1</li>
    </ul>
  </div>
</template>

<script>
import NavBar from "../../components/common/navbar/NavBar.vue";
import TabControl from "../../components/content/tabControl/TabControl.vue";

import HomeSwiper from "./childcomps/HomeSwiper.vue";
import RecommendView from "./childcomps/RecommendView.vue";
import FeatureView from "./childcomps/FeatureView.vue";

import { getHomeMultidata } from "../../network/home";

export default {
  name: "home",
  components: {
    NavBar,
    TabControl,
    HomeSwiper,
    RecommendView,
    FeatureView
  },
  data() {
    return {
      banners: [],
      recommends: []
    };
  },
  //   data的内容属于组件，所以一直存在引用，而且不会被回收。
  created() {
    getHomeMultidata().then(res => {
      this.banners = res.data.banner.list;
      this.recommends = res.data.recommend.list;
    });
  }
};
// 箭头函数this result中this绑定的是最近一层非箭头函数的this。此处res这个引用被回收，但其实对象没有被回收。
</script>
<style scoped>
#home {
  padding-top: 44px;
}
.home-nav {
  background-color: var(--color-tint);
  color: #fff;

  position: fixed;
  left: 0;
  right: 0;
  top: 0;
}
</style>
