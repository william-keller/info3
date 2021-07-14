import axios from 'axios'

const client = axios.create({
    baseURL: 'https://localhost:5001',
    json: true
})

export default {
    async execute(method, resource, data) {
        return client({
            method,
            url: resource,
            data
        }).then(req => {
            return req.data
        })
    },
    getAll() {
        return this.execute('get', '/WeatherForecast') // GET: http://localhost:5000/
    }
    /*
          getById(id) {
              return this.execute('get', `/${id}`) // GET: http://localhost:5000/234
          },
          create(data) {
              return this.execute('post', '/', data) // POST: http://localhost:5000/
          },
          update(id, data) {
              return this.execute('put', `/${id}`, data) // PUT: http://localhost:5000/234
          } */
}