// storage.js
let storageObj = {
  set (key, value) {
    return localStorage.setItem(key, JSON.stringify(value))
  },
  get (key) {
    let val = localStorage.getItem(key) || []
    return JSON.parse(val)
  }
}

export default storageObj
