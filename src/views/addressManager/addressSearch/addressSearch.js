export default {
  name: 'AddressSearch',
  props: {
    isShow: Boolean,
    addressInfo: Object
  },
  data () {
    return {
      search_address: '',
      areaList: []
    }
  },
  computed: {
    city () {
      return (this.$store.getters.location.addressComponent.city ||
        this.$store.getters.location.addressComponent.province)
    }
  },
  watch: {
    search_address (val) {
      this.search(val)
    }
  },
  methods: {
    search (val) {
      //  调用高德地图搜索
      AMap.plugin('AMap.Autocomplete', () => {
        // 实例化Autocomplete
        let autoOptions = {
          //city 限定城市，默认全国
          city: this.city
        }
        let autoComplete = new AMap.Autocomplete(autoOptions)
        autoComplete.search(val, (status, result) => {
          // 搜索成功时，result即是对应的匹配数据
          this.areaList = result.tips
        })
      })
    },
    selectAddress (item) {
      this.addressInfo.address = item.name + item.district + item.address
      this.$emit('close')
    }
  }
}
