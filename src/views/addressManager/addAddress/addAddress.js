import Header from '@/components/Header/Index'
import FormBlock from '@/components/FormBlock/Index'
import TabTag from '@/components/TabTag/Index'
import AddressSearch from '@/views/addressManager/addressSearch/Index'
import { Toast } from 'mint-ui'
import { insert } from '@/api/addressManager/request'

export default {
  name: 'AddAddress',
  data () {
    return {
      page: {
        title: '添加地址',
        isLeft: true
      },
      tags: ['家', '学校', '公司'],
      sexes: ['先生', '女士'],
      addressInfo: {
        name: '',
        sex: '',
        phone: '',
        address: '',
        bottom: '',
        tag: '',
      },
      searchFlag: false
    }
  },
  components: {
    'ele-header': Header,
    'form-block': FormBlock,
    'tab-tag': TabTag,
    'address-search': AddressSearch
  },
  methods: {
    handleCheckTag (item) {
      this.addressInfo.tag = item
    },
    handleCheckSex (item) {
      this.addressInfo.sex = item
    },
    handleClose () {
      this.searchFlag = false
    },
    handleSearchAddress () {
      this.searchFlag = true
    },
    handleSave () {
      if (!this.addressInfo.name) {
        this.showMsg('请输入联系人')
        return
      }
      if (!this.addressInfo.phone) {
        this.showMsg('请输入手机号码')
        return
      }
      if (!this.addressInfo.address) {
        this.showMsg('请输入收货地址')
        return
      }
      this.addAddress()
    },
    showMsg (msg) {
      Toast({
        message: msg,
        position: 'bottom',
        duration: 2000
      })
    },
    addAddress () {
      insert(localStorage.ele_login, this.addressInfo)
        .then(res => {
          console.log(res)
        })
        .catch(err => {
          console.log(err)
        })
    }
  }

}
