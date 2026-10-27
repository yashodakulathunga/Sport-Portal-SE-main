const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

mongoose.connect('mongodb://localhost:27017/uov-sports').then(async () => {
  const User = require('./models/User');
  const user = await User.findOne({ email: 'yashoda@gmail.com' });
  if (user) {
    const isMatch = await bcrypt.compare('Yasho@1234', user.password);
    console.log('yashoda@gmail.com password match for Yasho@1234:', isMatch);
    const isMatch2 = await bcrypt.compare('password123', user.password);
    console.log('yashoda@gmail.com password match for password123:', isMatch2);
  }
  process.exit();
});
