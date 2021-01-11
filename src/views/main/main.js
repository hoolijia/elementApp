import TabBar from '@/components/TabBar/Index'

export default {
  name: "v-main",
  data() {
    return {
      tabbarData: [
        { title: "首页", icon: "home", path: "/home" },
        { title: "订单", icon: "file-text-o", path: "/order" },
        { title: "我的", icon: "user", path: "/me" }
      ]
    }
  },
  components: {
    'tab-bar': TabBar
  }
}
