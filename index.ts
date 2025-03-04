import http from 'node:http'
import {parse} from 'node:url'

const server = http.createServer((req, res) => {
  const parsedUrl = parse(req.url || '', true)
  const pathname = parsedUrl.pathname

  if(pathname === '/'){
    res.writeHead(200, {'Content-Type': 'text/plain'})
    res.end('Welcome to the homepage')
  }else{
    res.writeHead(404, {'Content-Type': 'text/plain'})
    res.end('Not Found')
  }
})

server.listen(3000, () => {
  console.log('Server is running on http://localhost:3000')
})