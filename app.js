const app = require('express')();
const expressConfig = require('./config/express.config');
const errorHandler = require('./config/errorhandler.js');

expressConfig(app);

const indexRoutes = require('./routes/index.routes');
app.use('/', indexRoutes);

errorHandler(app);

module.exports = app;
