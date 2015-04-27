var connect = require('connect')
  , serveStatic = require('serve-static')
  , http = require('http')

var app = connect()

app.use(serveStatic('public', {'index': ['index.html', 'index.htm'] }))

http.createServer(app).listen(3017)

console.log('http server started at http://localhost:3017')
