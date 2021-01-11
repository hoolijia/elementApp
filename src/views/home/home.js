export default {
  name: "Home",
  data() {
    return {}
  },
  computed: {
    address() {
      return this.$store.getters.address
    },
    city() {
      return (
        this.$store.getters.location.addressComponent.city ||
        this.$store.getters.location.addressComponent.province
      )
    }
  }
}
