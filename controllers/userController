var moment = require('moment');
const User = require('../models/User');

exports.getIndex = (req, res, next) => {
  User.findAll({ include: 'role' }).then(users => {
    res.render('admin/index', {
      pageTitle: 'Home HR',
      path: 'users',
      user: req.user,
      users: users,
      moment: moment
    });
  })
  .catch(err => {
    console.log(err);
  });
  };

  exports.getNew = (req, res, next) => {
    res.render('admin/new', {
      pageTitle: 'Add vacancy',
      path: 'user',
      user: req.user
    });
  };

exports.postCreate = (req, res, next) => {
  data = req.body;
  console.log(data);
  if (req.user.RoleId == 1) {
    User.create({
      name: data.name,
      email: data.email,
      phone: data.phone,
      RoleId: data.RoleId
    })
    .then(r => {
      res.redirect('/admin')
    })
    .catch(err => {
      console.log(err)
    })
  }else{
    res.redirect('/admin/add-user')
  }
};

