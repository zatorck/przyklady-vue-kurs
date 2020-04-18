let baseUrl

export default {
  install(Vue, options) {
    console.log('Fetch plugin installed', options)
    baseUrl = options.baseUrl

    Vue.prototype.$fetch = async function (url, options) {
      const finalOptions = Object.assign({}, {
        headers: {
          'Content-Type': 'application/json'
        },
        credentials: 'include',
      }, options)

      const response = await fetch(baseUrl + url, finalOptions)

      let data;

      if (response.ok) {
        data = response.json()
      } else {
        const message = await response.text()
        const error = new Error(message)
        error.response = response
        throw error
      }

      return data;
    }
  }
}
