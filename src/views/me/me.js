import { getUserInfo } from '@/api/me/request'
import { isEmpty } from '@/utils/util'

export default {
  name: 'Me',
  data () {
    return {
      userInfo: {},
      isShow: false
    }
  },
  beforeRouteEnter (to, from, next) {
    next(vm => vm.getData())
  },
  methods: {
    handleLogin () {
      this.$router.push('/login')
    },
    getData () {
      const uid = localStorage.ele_login
      this.userInfo._id = uid
      this.userInfo.myAddress = []
      this.isShow = true
      // getUserInfo(uid)
      //   .then(res => {
      //     console.log(res)
      //   })
      //   .catch(err => {
      //     console.log(err)
      //   })
    },
    encryptPhone (phone) {
      return phone.replace(/(\d{3})\d{4}(\d{4})/, '$1****$2')
    },
    handleLogout () {
      localStorage.removeItem('ele_login')
      this.$router.push('/login')
    },
    myAddress () {
      if (this.userInfo.myAddress.length > 0) {
        this.$router.push('/myAddress')
      } else {
        this.$router.push({
          name: 'addAddress',
          params: {
            title: '添加地址',
            addressInfo: {
              name: '',
              sex: '',
              phone: '',
              address: '',
              bottom: '',
              tag: ''
            }
          }
        })
      }
    }
  }
}
