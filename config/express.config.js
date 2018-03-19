const cors = require('cors')
const corsAllowed = require('./cors.config');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

module.exports = (app) => {
  app.use(cors({origin: [
    'https://phonestore.netlify.com/',
    'http://localhost:3000',
    'http://localhost:4200',
  ]}))
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(cookieParser());
}
