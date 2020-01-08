const http= require('http')
const server = http.createServer((request,response) => {
    response.setHeader('Access-Control-Allow-Origin','*')
    response.write('hello')
    response.end()
})
server.listen(4000)
console.log("The server is listening...")