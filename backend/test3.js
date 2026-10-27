const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

mongoose.connect('mongodb://localhost:27017/uov-sports').then(async () => {
  const User = require('./models/User');
  const user = await User.findOne({ email: 'admin@uov.ac.lk' });
  if (user) {
    const isMatch2 = await bcrypt.compare('password123', user.password);
    console.log('admin password match for password123:', isMatch2);
  }
  process.exit();
});
