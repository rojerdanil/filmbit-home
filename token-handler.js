// token-handler.js

let isRefreshing = false;
let failedRequests = [];

$.ajaxSetup({
  beforeSend: function (xhr) {
    const token = localStorage.getItem('accessToken');
    if (token) {
      xhr.setRequestHeader('accessToken',  token);
    }
  },
  statusCode: {
    401: function () {
      if (!isRefreshing) {
        isRefreshing = true;
        const refreshToken = localStorage.getItem('refreshToken');

        $.ajax({
          url: '/api/auth/refresh',
          type: 'POST',
          contentType: 'application/json',
          data: JSON.stringify({ refreshToken }),
          success: function (res) {
            const newToken = res.accessToken;
            localStorage.setItem('accessToken', newToken);

            // Retry all failed requests
            failedRequests.forEach(req => $.ajax(req));
            failedRequests = [];
            isRefreshing = false;
          },
          error: function () {
            alert('Session expired. Please login again.');
            window.location.href = '/login';
          }
        });
      }

      // Queue this request
      return {
        then: function (resolve, reject) {
          failedRequests.push({
            url: this.url,
            type: this.type,
            data: this.data,
            contentType: this.contentType,
            success: this.success,
            error: this.error
          });
        }
      };
    }
  }
});
