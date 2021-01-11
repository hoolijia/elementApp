import BScroll from 'better-scroll'

export default {
  name: "alphabet",
  props: {
    city_info: Object,
    city_keys: Array
  },
  data() {
    return {
      scroll: null
    }
  },
  methods: {
    initScroll() {
      this.scroll = new BScroll(this.$refs.area_scroll, {
        click: true
      })
    },
    handleSelectKey(index) {
      const city_list = this.$refs.area_scroll.getElementsByClassName("citylist")
      let el = city_list[index]
      this.scroll.scrollToElement(el, 250)
    }
  }
}
