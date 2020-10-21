

exports.getIndex = (req, res, next) => {
    res.render('index', {
        user: req.user
    })
}


exports.getNew = (req, res, next) => {
    res.render('new', {
        user: req.user,
        script: "<script>alert(\"hola\")</script>"
    })
}
// exports.getIndex = (req, res, next) => {
//     res.render('index', {
//       pageTitle: 'Welcome',
//       path: 'home',
//       user: req.user,
//       moment: moment
//     });
//   };