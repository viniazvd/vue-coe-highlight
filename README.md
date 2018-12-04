## Project setup
```
yarn install vue-coe-highlight
```

### Example
```vue
<template>
  <div id="app">
    <vue-coe-hightlight :code="code"></vue-coe-hightlight>
    <vue-coe-hightlight>{{ code }}</vue-coe-hightlight>
  </div>
</template>

<script>
import VueCoeHightlight from './VueCoeHightlight.js'

export default {
  name: 'vue-coe-highlight',

  components: { VueCoeHightlight },

  data () {
    return {
      code: `<template>
        <div id="app">
          <vue-coe-hightlight :code="code"></vue-coe-hightlight>
          <vue-coe-hightlight>{{ code }}</vue-coe-hightlight>
        </div>
      </template>`
    }
  }
}
</script>
```
