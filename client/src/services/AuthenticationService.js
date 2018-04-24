import Api from '@/services/Api'

export default {
  register (credentials) {
    return Api().post('register', credentials)
                .then(console.log, console.error)
  }
}
