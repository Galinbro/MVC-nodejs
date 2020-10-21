// Core libraries
const path = require('path');
 
// thirds party libraries
const express = require('express');
const bodyParser = require('body-parser');

// Sequelize
const sequelize = require('./utils/database');

// Models
const User = require('./models/User');
// const Role = require('./models/Role');

// Errors
const errorController = require('./controllers/error');

// Express app
const app = express();

// add template engine
app.set('view engine', 'ejs');  // set engine
// set custom route if needed
app.set('views', 'views');

// routes
// const recruiterRoutes = require('./routes/recruiterRoute')
const welcomeRoutes = require('./routes/welcomeRoute');

// Alway before any other middleware to parse body requests
app.use(bodyParser.urlencoded({ extended: false }));

// Give read access to static directory
app.use(express.static(path.join(__dirname, 'public')));

// Middle ware of user
app.use((req, res, next) => {
    User.findByPk(1)
    .then(user => {
        req.user = user;
        next();
    })
    .catch(err => {
        console.log(err);
    });
});

// routes
// app.use('/admin' ,recruiterRoutes);
app.use(welcomeRoutes);

// 404 Error middeware
// app.use(errorController.get404);

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// Association
// Role.hasMany(User);
// User.belongsTo(Role, { foreignKey: 'RoleId', as: 'role' });

sequelize
    // .sync({force:true})
    .sync()
    .then(res => {
        return User.findByPk(1);
    })
    .then(user => {
        if (!user) {
            return User.create({name: "test", email: "test@gmail.com", phone: 80808080});
        }
    })
    .then(user => {
        app.listen(PORT, HOST);
    })
    .catch(err => {
        console.log(err);
    });


    // sync migration with database
// sequelize
//     // .sync({force:true})  // just for dev force: true
//     .sync()
    // .then(res => {
    //     return Role.findByPk(1);
    // })
    // .then(role => {
    //     if (!role) {
    //         return Role.create({name: "admin"})
    //     }
    // })
    // .then(res => {
    //     return Role.findByPk(2);
    // })
    // .then(role => {
    //     if (!role) {
    //         return Role.create({name: "subscriber"})
    //     }
    // })
    // .then(res => {
    //     return User.findByPk(1);
    // })
    // .then(user => {
    //     if (!user) {
    //         return User.create({name: "test", email: "test@gmail.com", phone: 80808080});
    //     }
    // })
    // .then(user => {
    //     if (user){
    //         if (!user.RoleId) {
    //             user.RoleId = 1
    //             return user.save();
    //         }
    //     }
    // })
    // .then(user => {
    //     app.listen(PORT, HOST);
    // })
    // .catch(err => {
    //     console.log(err);
    // });
