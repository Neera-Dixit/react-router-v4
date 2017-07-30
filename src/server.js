var express = require('express');
var path = require('path');
var app = express();
var port = 8086;

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname+'/views/index.html'));
});


if (process.env.NODE_ENV.trim() === 'development') {
    var webpackDevMiddleware = require('webpack-dev-middleware');
    var webpackHotMiddleware = require('webpack-hot-middleware');
    var webpack = require('webpack');

    var config = require('../webpack.config.js');
    console.log("devpt");
    app.use(webpackDevMiddleware(webpack(config), {
        hot: true,
        filename: "./js/bundle.js",
        publicPath: "/public/",
        stats: {
            colors: true
        },
        historyApiFallback: true
    }));

    app.use(webpackHotMiddleware(webpack(config),{
        log: console.log,
        path: '/__webpack_hmr',
        heartbeat: 10 * 1000,
    }));

} else {
    console.log("prod!");
    app.use('/', express.static(path.join(__dirname, '../../')));
}
app.listen(port, function () {
    console.log("Express server listening at " + port);
})