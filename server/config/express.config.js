const cors = require('cors')
const corsAllowed = require('./cors.config');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

module.exports = (app) => {
  app.use(cors(corsAllowed.options))
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(cookieParser());
}
