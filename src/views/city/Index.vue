<template>
  <div class="city">
    <div class="search_wrap">
      <div class="search">
        <i class="fa fa-search"></i>
        <input v-model="city_val" type="text" :placeholder="placeholder_city">
      </div>
      <button @click="$router.push({name: 'address', params:{city: city}})">取消</button>
    </div>
    <div style="height: 100%" v-if="search_list.length === 0">
      <div class="location">
        <ele-location :address="city" @click="handleSelectCity({name: city})"></ele-location>
      </div>
      <ele-alphabet ref="allCity" :city_info="city_info" :city_keys="city_keys"
                    @selectCity="handleSelectCity"></ele-alphabet>
    </div>
    <div class="search_list" v-if="search_list.length !== 0">
      <ul>
        <li v-for="(item, index) in search_list" :key="index" @click="handleSelectCity(item)">
          {{ item.name }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script src="./city.js"></script>

<style scoped>
.city {
  width: 100%;
  height: 100%;
  overflow: auto;
  box-sizing: border-box;
  padding-top: 45px;
}

.search_wrap {
  position: fixed;
  top: 0;
  height: 45px;
  width: 100%;
  background: #fff;
  box-sizing: border-box;
  padding: 3px 16px;
  display: flex;
  justify-content: space-between;
}

.search {
  background-color: #eee;
  border-radius: 10px;
  line-height: 40px;
  width: 85%;
  box-sizing: border-box;
  padding: 0 16px;
}

.search input {
  background: #eee;
  outline: none;
  border: none;
  margin-left: 5px;
}

.search_wrap button {
  outline: none;
  color: #009eef;
}

.location {
  background: #fff;
  padding: 8px 16px;
  height: 65px;
  box-sizing: border-box;
}

.search_list {
  background: #fff;
  padding: 5px 16px;
}

.search_list li {
  padding: 10px;
  border-bottom: 1px solid #eee;
}
</style>
