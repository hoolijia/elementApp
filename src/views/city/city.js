import Location from '@/components/location/Index'
import Alphabet from '@/components/alphabet/Index'
import {getCityInfo} from '@/api/city/request'

export default {
  name: "City",
  data() {
    return {
      placeholder_city: '输入城市名',
      city_val: '',
      city_info: null,
      city_keys: [],
      all_cities: [],
      search_list: []
    }
  },
  computed: {
    city() {
      return (
        this.$store.getters.location.addressComponent.city ||
        this.$store.getters.location.addressComponent.province
      )
    }
  },
  components: {
    'ele-location': Location,
    'ele-alphabet': Alphabet
  },
  created() {
    this.getCityInfo()
  },
  watch: {
    city_val() {
      this.searchCity()
    }
  },
  methods: {
    getCityInfo() {
      getCityInfo()
        .then(res => {
          this.city_info = res.data
          this.city_keys = Object.keys(res.data)
          // 去除数组最后一个
          this.city_keys.pop();
          this.city_keys.sort();
          this.$nextTick(() => {
            this.$refs.allCity.initScroll()
          })

          //  存储所有城市用来搜索过滤
          this.city_keys.forEach(key => {
            this.city_info[key].forEach(city => {
              this.all_cities.push(city)
            })
          })
        })
        .catch(err => {
          console.log(err)
        })
    },
    handleSelectCity(item) {
      this.$router.push({name: 'address', params: {city: item.name}})
    },
    searchCity() {
      if (!this.city_val) {
        // 如果搜索框为空，数组为空
        this.search_list = []
        return
      }
      // 根据输入框的关键字检索城市，存入到search_list数组中
      this.search_list = this.all_cities.filter(e => {
        return e.name.indexOf(this.city_val) !== -1
      })
    }
  }
}
