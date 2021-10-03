<template>
  <div>
    <div
      v-for="(item, index) in titles"
      class="tab-control"
      :key="'i_' + index"
      :class="{ active: index === currentIndex }"
      @click="itemClick"
    >
      <span class="tab-control-item">{{ item }}</span>
    </div>
  </div>

  <!-- <div class="tab-control">
    <span
      :class="{ active: isActive }"
      @click="itemClick"
      class="tab-control-item"
      >流行</span
    >
    <span class="tab-control-item">新款</span>
    <span class="tab-control-item">精选</span>
  </div> -->
</template>

<script>
export default {
  name: "TabControl",
  props: {
    titles: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  data() {
    return {
      isActive: false
    };
  },
  methods: {
    itemClick() {
      return !this.isActive;
    }
  }
};
</script>

<style scoped>
.tab-control {
  display: flex;
  text-align: center;
}
.tab-control-item {
  flex: 1;
  line-height: 40px;
  font-size: 15px;
  background-color: #fff;
}
.tab-control-item span {
  padding: 5px;
}
.active {
  color: var(--color-high-tint);
}
.active span {
  border-bottom: 3px solid var(--color-high-tint);
}
</style>
