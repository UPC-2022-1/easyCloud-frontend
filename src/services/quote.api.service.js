import http from '../core/services/http-common'

export class QuoteApiService {
  getAll () {
    return http.get('/quotes/test')
  }

  create (data, userId) {
    return http.post(`/quotes/add/${userId}`, data)
  }

  update (id, data) {
    return http.put(`/users/${id}`, data)
  }

  delete (id) {
    return http.delete(`/users/${id}`)
  }
}
