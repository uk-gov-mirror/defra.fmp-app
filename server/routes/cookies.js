module.exports = {
  method: 'GET',
  path: '/cookies',
  options: {
    description: 'Cookies Page',
    auth: {
      strategy: 'restricted'
    },
    handler: async (request, h) => {
      return h.view('cookies')
    }
  }
}
