import Header from '@/components/Header/Index'
import Location from '@/components/location/Index'

export default {
  name: "Address",
  data() {
    return {
      page: {
        title: '选择收获地址',
        isLeft: true
      },
      placeholder: '小区/写字楼/学校等',
      city: '',
      search_val: '',
      area_list: []
    }
  },
  computed: {
    address() {
      return this.$store.getters.address
    }
  },
  watch: {
    search_val() {
      this.handleSearch()
    }
  },
  components: {
    'ele-header': Header,
    'ele-location': Location
  },
  // 接收home转递过来的city
  beforeRouteEnter(to, from, next) {
    next(vm => {
      vm.city = to.params.city
    })
  },
  methods: {
    handleSearch() {
      const self = this
      AMap.plugin('AMap.Autocomplete', function () {
        // 实例化Autocomplete
        var autoOptions = {
          //city 限定城市，默认全国
          city: self.city
        }
        var autoComplete = new AMap.Autocomplete(autoOptions);
        autoComplete.search(self.search_val, function (status, result) {
          // 搜索成功时，result即是对应的匹配数据
          self.area_list = result.tips
        })
      })
    },
    selectAddress(item) {
      if (item) {
        this.$store.dispatch("setAddress", item.district + item.address + item.name)
      } else {
        this.$store.dispatch('setAddress', this.address)
      }
      this.$router.push("/home")
    }
  }
}
