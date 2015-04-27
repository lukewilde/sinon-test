var sinon = require('sinon')
  , server = sinon.fakeServer.create()
  , mockSuccessData =
    [ 200
    , { 'Content-Type': 'image/png' }
    , 'data:image/pngbase64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAABAQMAAADD8p2OAAAAA1BMVEX/AP804Oa6AAAACklEQVQI12NgAAAAAgAB4iG8MwAAAABJRU5ErkJggg=='
    ]

server.respondWith('GET', '/test-image', mockSuccessData)

var image = document.createElement('img')
image.src = '/test-image'

server.respond(function(err, res) {

  if (err) {
    console.error('err', err)
  } else {
    console.info('res', res)
  }
})
