<template>
  <div class="index">
    <router-view></router-view>
    <tab-bar :data="tabbarData"></tab-bar>
  </div>
</template>

<script src="./main.js"></script>

<style scoped>
.index {
  width: 100%;
  height: calc(100% - 45px);
}
</style>
