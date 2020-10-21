// Models
var moment = require('moment');

exports.getIndex = (req, res, next) => {
  res.render('index', {
    pageTitle: 'Welcome',
    path: 'home',
    user: req.user,
    moment: moment
  });
};