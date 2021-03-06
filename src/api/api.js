import http from './http'

export default {
  getAssets(params, status) {
    return http.get(
      `/apis/guotou/index1?addr=${params}&status_quo=${status}`,
      '',
    )
  },
  getWarning(params, status) {
    return http.get(
      `/apis/guotou/index2?addr=${params}&status_quo=${status}`,
      '',
    )
  },
  getPaging(page, limit, status) {
    return http.get(
      `/apis/guotou/paging?page=${page}&page_size=${limit}&status_quo=${status}`,
      '',
    )
  },
  getPagingCollecting(page, limit, status) {
    return http.get(
      `/apis/guotou/paging2?page=${page}&page_size=${limit}&status_quo=${status}`,
      '',
    )
  },
  getPagingOverdueRemind(page, limit, status) {
    return http.get(
      `/apis/guotou/overdueRemind?page=${page}&page_size=${limit}&status_quo=${status}`,
      '',
    )
  },
}
