const phonesMock = require('../mocks/phones.mock')
module.exports = {
  getPhones: (req, res, next) => {
    res.send(phonesMock);
  }
}