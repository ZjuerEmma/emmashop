<template>
  <!-- <div :v-for="(item, index) in titles" :key="index" class="tab-control"> -->
    <!-- <span class="tab-control-item">{{item}}</span> -->
  <!-- </div> -->
  <div>
      
  </div>

</template>

<script>

export default{
   name: "TabControl",
   props: {
      titles: {
        type: Array,
        default() {
          return []
        }
      }
    }
};
</script>

<style scoped>
.tab-control{
    display: flex;
    text-align: center;
}
.tab-control-item{
    flex: 1;
    line-height: 40px;
    font-size: 15px;
}
</style>

</style>
