<template>
  <div class="address">
    <ele-header :page="page"></ele-header>
    <div class="city_search">
      <div class="search">
        <span class="city" @click="$router.push('/city')">
          {{ city }}
          <i class="fa fa-angle-down"></i>
        </span>
        <i class="fa fa-search"></i>
        <input type="text" v-model="search_val" :placeholder="placeholder">
      </div>
      <ele-location :address="address" @click="selectAddress"></ele-location>
    </div>
    <div class="area">
      <ul class="area_list" v-for="(item,index) in area_list" :key="index">
        <li @click="selectAddress(item)">
          <h4>{{ item.name }}</h4>
          <p>{{ item.district }}{{ item.address }}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script src="./address.js"></script>

<style scoped>
.address {
  width: 100%;
  height: 100%;
  overflow: auto;
  box-sizing: border-box;
  padding-top: 45px;
}

.city_search {
  background-color: #fff;
  padding: 10px 20px;
  color: #333;
}

.search {
  background-color: #eee;
  height: 40px;
  border-radius: 10px;
  box-sizing: border-box;
  line-height: 40px;
}

.search .city {
  padding: 0 10px;
}

.city i {
  margin-right: 10px;
}

.search input {
  margin-left: 5px;
  background-color: #eee;
  outline: none;
  border: none;
}

.area {
  margin-top: 16px;
  background: #fff;
}

.area li {
  border-bottom: 1px solid #eee;
  padding: 8px 16px;
  color: #aaa;
}

.area li h4 {
  font-weight: bold;
  color: #333;
  margin-bottom: 5px;
}
</style>
