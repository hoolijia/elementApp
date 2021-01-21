import Header from '@/components/Header/Index'

export default {
  name: 'MyAddress',
  data () {
    return {
      page: {
        title: '我的地址',
        isLeft: true
      },
    }
  },
  components: {
    'ele-header': Header
  }
}
