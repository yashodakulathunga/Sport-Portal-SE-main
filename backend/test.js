const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/uov-sports').then(() => {
  const User = require('./models/User');
  User.find({}).then(users => {
    console.log(users.map(u => u.email));
    process.exit();
  });
});
