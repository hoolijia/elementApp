export default {
  name: "InputGroup",
  props: {
    type: {
      type: String,
      default: "text"
    },
    value: String,
    placeholder: String,
    name: String,
    btnTitle: String,
    disable: Boolean,
    error: String
  }
}
