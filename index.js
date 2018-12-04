import Prism from 'prismjs'
import 'prismjs/themes/prism.css'

const VueCoeHighLight = {
  functional: true,

  props: { code: String },

  render (h, { props, children }) {
    const code = children && !!children.length && children[0].text

    if (!props.code && !code) {
      console.warn('code is required!')
      return false
    }

    return h('pre',
      [
        h('code', {
          class: `language-markup`,
          domProps: {
            innerHTML: Prism.highlight(props.code || code, Prism.languages['markup'])
          }
        })
      ]
    )
  }
}

export default VueCoeHighLight

export const VueCoeImage = {
  install (Vue) {
    Vue.component('VueCoeHighLight', VueCoeHighLight)
  }
}
