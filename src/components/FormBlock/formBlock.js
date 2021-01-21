import TabTag from '@/components/TabTag/Index'

export default {
  name: 'FormBlock',
  props: {
    type: {
      type: String,
      default: 'text'
    },
    label: String,
    value: String,
    placeholder: String,
    icon: String,
    textarea: String,
    sex: String,
    tags: Array
  },
  components: {
    'tab-tag': TabTag
  },
  methods: {
    handleCheckTag (item) {
      this.$emit('checkSex', item)
    }
  }
}
