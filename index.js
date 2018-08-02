var express = require('express');
var app = express();

app.all('*', function (req, res) {
    res.status( req.query.status || 200 );
    if( req.query.delay ){
        setTimeout( function(){
            res.send( req.query.res || ( req.method + ' success.' ) );
        }, req.query.delay );
    }else{
        res.send( req.query.res || ( req.method + ' success.' ) ); 
    }
});

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});
