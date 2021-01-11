import InputGroup from '@/components/InputGroup/Index'
import {isEmpty, regex} from '@/utils/util'
import {getCode, login} from '@/api/login/request'

const config = require('../../../config.json')
const msg = require('../../../msg.json')

export default {
  name: "Login",
  data() {
    return {
      phone: '',
      verifyCode: '',
      errors: {},
      btnTitle: '获取验证码',
      disable: false,
    }
  },
  computed: {
    isClick() {
      if (!this.phone || !this.verifyCode)
        return true
      else
        return false
    }
  },
  methods: {
    handleLogin() {
      this.errors = {}
      const req = {
        phone: this.phone,
        code: this.verifyCode
      }
      login(req)
        .then(res => {
          // 登录成功，设置登录状态并且跳转到首页
          localStorage.setItem('ele_login', true)
          this.$router.push("/")
        })
        .catch(err => {
          this.errors = {
            code: err.response.data.msg
          }
        })
    },
    getVerifyCode() {
      if (this.validatePhone()) {
        this.validateBtn()
        const req = {
          sid: "",
          token: "",
          appid: "",
          templateid: "",
          phone: this.phone
        }
        getCode(req).then(res => {
          console.log(res)
        })
      }
    },
    validatePhone() {
      if (isEmpty(this.phone)) {
        this.errors = {
          phone: msg._error._login._validate_phone_null
        }
        return false
      }
      if (!regex(this.phone, config._regex_type._phone)) {
        this.errors = {
          phone: msg._error._login._validate_phone_regex
        }
        return false
      }
      this.errors = {}
      return true
    },
    // 倒计时
    validateBtn() {
      let time = 60
      let timer = setInterval(() => {
        if (time === 0) {
          clearInterval(timer)
          this.btnTitle = "获取验证码"
          this.disable = false
        } else {
          this.btnTitle = time + "秒后重试"
          this.disable = true
          time--
        }
      }, 1000)
    }
  },
  components: {
    'input-group': InputGroup
  }
}
