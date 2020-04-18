export default function (resources) {
  return {
    data() {
      let initData = {
      }

      for (const key in resources) {
        initData[key] = null
        initData[key + 'Error'] = null
        initData[key + 'Loading'] = true
      }

      return initData
    },
    methods: {
      async fetchResource(key, url) {
        try {
          this.$data[key] = await this.$fetch(url)
        } catch (e) {
          console.error(e)
          this.$data[key + 'Error'] = true
        }

        this.$data[key + 'Loading'] = false
      }
    },
    created() {
      for (const key in resources) {
        let url = resources[key]
        this.fetchResource(key, url)
      }
    }
  }
}
